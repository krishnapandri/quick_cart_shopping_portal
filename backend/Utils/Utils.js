const fs = require('fs');
const sql = require('mssql/msnodesqlv8'); // Use the msnodesqlv8 driver
const config = require('../db/dbconfig');
const path = require('path');

const errorLogfilePath = path.join(__dirname,'../files/errorLog.log');

/* async function ExecuteQuery(query){ 
  try{
    const pool = await sql.connect(config);
    const result = await pool.request().query(query);
    pool.close();
    return result;
  }
  catch(err){
    WritetoErrorFile(err,__filename,10,"ExecuteQuery");
  }
} */ 

async function ExecuteQuery(query) {
    let pool;
    try {
        pool = await sql.connect(config); // Reuse or connect to the pool
        const result = await pool.request().query(query); // Execute query
        return result;
    } catch (err) {
        WritetoErrorFile(err, __filename, 10, "ExecuteQuery");
        throw err; // Re-throw the error for further handling
    } finally {
      pool?.close().catch((err) => WritetoErrorFile(err, __filename, 10, "Pool Cleanup"));
    }
}


async function ExecuteQueryParmaeterized(query,Values={}){ 
  let pool;
  try{
    if (Object.keys(Values).length === 0) return;  // Check if Values is empty
    pool = await sql.connect(config);
    const preparedStatement = new sql.PreparedStatement(pool);
    for (const key in Values) {
      if (typeof Values[key] === 'string') 
            preparedStatement.input(key, sql.NVarChar);
      else if (typeof Values[key] === 'number') 
          preparedStatement.input(key, sql.Int);
        // if( ["CreatedOn","ModifiedOn"].includes(key))
        //     preparedStatement.input(key, sql.DateTime2,new Date());
    }
    // Prepare the statement
    await preparedStatement.prepare(query);
    // Execute the statement with parameter values
    const result = await preparedStatement.execute(Values);
    return result;
  }
  catch(err){
      WritetoErrorFile(err,__filename,0,"ExecuteQueryParmaeterized",query);
      throw err;
  }
  finally{
    pool?.close();
  }
} 

async function ExecuteProcedure(procedureName,inputs=[]) {
    try {
        const pool = await sql.connect(config);
        const request = pool.request();

        if (inputs.length > 0) 
            inputs.forEach(x => request.input(x.name, x.value));

        const result = await request.execute(procedureName);
        pool.close();
        return result;
    } catch (error) {
        GenerateErrorLog(error,0,__filename,21,"ExecuteProcedure");
        throw error;
    }
        
}

const GenerateErrorLog = function(err,CustomerID=0,FileName="Not Defined",LineNo='not required',methodName=""){
    const {message="not found",stack="not found"}  = err;

    const query =  `INSERT INTO ErrorLog (CustomerID, IsActive, [LineNo], ErrorDesc, TraceMessage, FileName,MethodName)
                    VALUES (@CustomerID,1,@LineNo, @ErrorDesc,@TraceMessage,@FileName,@MethodName)`;
    /*
    const fileLineNumberRegex = /\((.*\.js:\d+:\d+)\)/;
    const match = stack.match(fileLineNumberRegex); 
    */
    try {
        ExecuteQueryParmaeterized(query,{CustomerID,LineNo,ErrorDesc:message,TraceMessage:stack,FileName,MethodName:methodName});
    } catch (error) {
        WritetoErrorFile(error,__filename,11,"GenerateErrorLog");
        throw error;
    }
}

const WritetoErrorFile = function(error,fileName,LineNo=0,methodName="",sqlQuery=""){
let message = `
Date :- ${new Date().toLocaleString()}
Error :- ${JSON.stringify( typeof error === 'string' ? error : error?.message)}
Code :- ${JSON.stringify( typeof error === 'string' ? "" : error?.code)}
FileName :- ${fileName}
LineNo :- ${LineNo}
MethodName :- ${methodName}
ErrorDesc :- ${JSON.stringify(error)}
`;
if(sqlQuery)
  message +=`sqlQuery :- ${JSON.stringify(sqlQuery)};`
fs.appendFileSync(errorLogfilePath,message);
}

function WriteCustomFile(filePath,text,dir){
    // if(fs.existsSync(filePath))
    // fs.truncateSync(filePath,0);
    fs.appendFileSync(filePath,"\n"+text);
    // console.log(fs.readFileSync(filePath).toString('base64'));
}

module.exports = {GenerateErrorLog,WritetoErrorFile,ExecuteQuery,ExecuteQueryParmaeterized,ExecuteProcedure,WriteCustomFile};