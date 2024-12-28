
const {ExecuteQuery,ExecuteQueryParmaeterized,GenerateErrorLog} = require('../Utils/Utils');
    
class Categories {
  ID = 0;
  Name = '';
  Desc = '';
  IsActive = 0;
  CreatedOn = new Date();
  ModifiedOn = new Date();
  columnArray = ["ID","Name","Desc","IsActive","CreatedOn","ModifiedOn"]
  constructor() { }

static async getByID(CustomerID=0,ID=0) {
    const categories = new Categories();
    if (ID > 0) {
        const sqlString = "SELECT [ID] ,[Name] ,[Desc] ,[IsActive] ,[CreatedOn] ,[ModifiedOn]  FROM Categories WHERE ID = "+ID;
        try {
            const { recordset } = await ExecuteQuery(sqlString);
            if (recordset.length > 0) {
                Object.keys(recordset[0]).forEach((column) => categories[column] = recordset[0][column]);
            }
        } catch (err) {
            GenerateErrorLog(err,this.CustomerID,__filename,1,'Categories Class Creation');
        }
    }
    return categories;
}

async SaveRecord(){
    let sqlString = "";
    if(this.ID === 0){
        sqlString = "INSERT INTO [dbo].[Categories]  ([Name],[Desc],[IsActive],[CreatedOn],[ModifiedOn])  OUTPUT INSERTED.[CreatedOn],INSERTED.[ModifiedOn],INSERTED.[ID]  VALUES (@Name,@Desc,@IsActive,GETDATE(),GETDATE()) ";
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
        await ExecuteQuery("Truncate table Categories");
    }
    
}
    module.exports = Categories;
