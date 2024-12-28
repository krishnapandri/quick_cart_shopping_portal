const fs = require('fs');
const {ExecuteQueryParmaeterized, WritetoErrorFile} = require('../Utils/Utils');
const path = require('path');


async function generateClassFromTable(tableName) {
  const query = `
    SELECT COLUMN_NAME, DATA_TYPE
    FROM INFORMATION_SCHEMA.COLUMNS
    WHERE TABLE_NAME = @tableName
  `;

  try {
    const result = await ExecuteQueryParmaeterized(query,{tableName});
    if(result.recordset.length<=0)
        throw new Error("Not Such Table Please Create One Table");
    // Dynamically create the class
    let classStr = `
const {ExecuteQuery,ExecuteQueryParmaeterized,GenerateErrorLog} = require('../Utils/Utils');
    
class ${tableName} {\n`;

    result.recordset.forEach(row => {
      const { COLUMN_NAME, DATA_TYPE } = row;
      const jsType = mapSqlTypeToJsType(DATA_TYPE);
      classStr += `  ${COLUMN_NAME} = ${jsType};\n`;
    }); 

    classStr += `  columnArray = [${result.recordset.map(({COLUMN_NAME})=>JSON.stringify(COLUMN_NAME)).filter(x=>x!=='ID').join(',')}]`;
    classStr += `\n  constructor() { }\n
static async getByID(CustomerID=0,ID=0) {
    const ${tableName.toLowerCase()} = new ${tableName}();
    if (ID > 0) {
        const sqlString = "SELECT ${MakeColumnstring(result.recordset.map(({COLUMN_NAME})=>COLUMN_NAME))} FROM ${tableName} WHERE ID = "+ID;
        try {
            const { recordset } = await ExecuteQuery(sqlString);
            if (recordset.length > 0) {
                Object.keys(recordset[0]).forEach((column) => ${tableName.toLowerCase()}[column] = recordset[0][column]);
            }
        } catch (err) {
            GenerateErrorLog(err,this.CustomerID,__filename,1,'${tableName} Class Creation');
        }
    }
    return ${tableName.toLowerCase()};
}

async SaveRecord(){
    let sqlString = "";
    if(this.ID === 0){
        sqlString = "INSERT INTO [dbo].[${tableName}]  (${MakeColumnstring(result.recordset.map(({COLUMN_NAME})=>COLUMN_NAME),false)})  OUTPUT INSERTED.[CreatedOn],INSERTED.[ModifiedOn],INSERTED.[ID]  VALUES (${MakeValuestring(result.recordset.map(({COLUMN_NAME})=>COLUMN_NAME))}) ";
    }
    else {
        // Update query
        const updateSetString = columnArray
        .filter(key => key !=='ID')
        .map(field => "["+field+"] = @"+field)
        .join(", ");

        sqlString =  " UPDATE [dbo].[Product] SET "+updateSetString+" OUTPUT INSERTED.[ModifiedOn] WHERE ID = @ID;";
    }
    try {
        const {recordset} =  await ExecuteQueryParmaeterized(sqlString,this);    
        let array  = this.ID ===0 ? ['ID','CreatedOn','ModifiedOn'] : ['ModifiedOn']; 
        array.forEach(x=>this[x] = recordset[0]?.[x]);
    } catch (error) {
        GenerateErrorLog(error,this.CustomerID,__filename,1,'Product Saving Record');
    }
}

static async ClearTable(){
        await ExecuteQuery("Truncate table ${tableName}");
    }
    
}
    module.exports = ${tableName};
`;
    
    console.log(classStr);  // Optionally log the generated class string to the console

    // Write the generated class to a JavaScript file
    const dirPath = path.join(__dirname, `../Migrations/${tableName}`);

    // Ensure the table-specific directory exists
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath,{ recursive: true });
    }
    const filePath = `${dirPath}/${tableName}.js`;
    fs.writeFileSync(filePath, classStr);  // Write synchronously, you can also use writeFile for async

    console.log(`Class written to file: ${filePath}`);
    // You can now require and use this class
   //return require(filePath);  // Dynamically require the class module
  } catch (err) {
    console.error('Error generating class:', );
    WritetoErrorFile(err,__filename);
  } 
}


function MakeColumnstring(arr,shouldIncludeID = true){
    returnStr ="";
    if(!shouldIncludeID)
        returnStr = arr.reduce((prev,curr,index)=>prev += curr === 'ID' ? '' : '['+curr+`]${index<arr.length-1 ? ',' : ''}`,'');
    else
        returnStr = arr.reduce((prev,curr,index)=>prev += '['+curr+`] ${index<arr.length-1 ? ',' : ''}`,'');
    return returnStr;
}
function MakeValuestring(arr){
    return arr.filter(key=>key!=='ID').map(key=> ['CreatedOn','ModifiedOn'].includes(key)  ? 'GETDATE()' :  `@${key}`).join(',');
}
// Helper function to map SQL types to JavaScript types
function mapSqlTypeToJsType(sqlType) {
  const sqlToJsMap = {
    'int': "0",       // JavaScript number, default 0
    'nvarchar': "''",  // JavaScript string, default empty string
    'varchar': "''",   // JavaScript string, default empty string
    'datetime2': "new Date()",  // JavaScript Date object
    'bit': 'false' ,    // JavaScript boolean, default false
    'bigint':"0",
    'smallint':"0",
    'decimal':"0",
  };
  return sqlToJsMap[sqlType.toLowerCase()] || null;
}



module.exports =  function GenerateTableFromSql(TableName){
    try {
        generateClassFromTable(TableName);
    } catch (error) {
        WritetoErrorFile(`Table Can't be created :- ${TableName}`,__filename,0,"GenerateTableFromSql");
        throw error;
    }
    
}


