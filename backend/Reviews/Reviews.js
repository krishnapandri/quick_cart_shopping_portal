
const {ExecuteQuery,ExecuteQueryParmaeterized,GenerateErrorLog} = require('../Utils/Utils');
    
class Reviews {
  ID = 0;
  Customer_ID = 0;
  Product_ID = 0;
  Option_ID = 0;
  IsActive = 0;
  Desc = '';
  Rating = 0;
  CreatedOn = null;
  UpdatedOn = null;
  columnArray = ["ID","Customer_ID","Product_ID","Option_ID","IsActive","Desc","Rating","CreatedOn","UpdatedOn"]
  constructor() { }

static async getByID(CustomerID=0,ID=0) {
    const reviews = new Reviews();
    if (ID > 0) {
        const sqlString = "SELECT [ID] ,[Customer_ID] ,[Product_ID] ,[Option_ID] ,[IsActive] ,[Desc] ,[Rating] ,[CreatedOn] ,[UpdatedOn]  FROM Reviews WHERE ID = "+ID;
        try {
            const { recordset } = await ExecuteQuery(sqlString);
            if (recordset.length > 0) {
                Object.keys(recordset[0]).forEach((column) => reviews[column] = recordset[0][column]);
            }
        } catch (err) {
            GenerateErrorLog(err,this.CustomerID,__filename,1,'Reviews Class Creation');
        }
    }
    return reviews;
}

async SaveRecord(){
    let sqlString = "";
    if(this.ID === 0){
        sqlString = "INSERT INTO [dbo].[Reviews]  ([Customer_ID],[Product_ID],[Option_ID],[IsActive],[Desc],[Rating],[CreatedOn],[UpdatedOn])  OUTPUT INSERTED.[CreatedOn],INSERTED.[ModifiedOn],INSERTED.[ID]  VALUES (@Customer_ID,@Product_ID,@Option_ID,@IsActive,@Desc,@Rating,GETDATE(),@UpdatedOn) ";
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
        await ExecuteQuery("Truncate table Reviews");
    }
    
}
    module.exports = Reviews;
