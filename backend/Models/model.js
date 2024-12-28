const {ExecuteQuery,ExecuteQueryParmaeterized,GenerateErrorLog} = require('../Utils/Utils');

class Product {
    static TableName = "[dbo].[Product]";
    ID	
    Category_ID	
    SubCategory_ID	
    Brand_ID	
    Name	
    Code	
    Desc	
    AvgPrice	
    IsActive	
    CreatedOn	
    ModifiedOn
    columnArray = ['ID','Category_ID','SubCategory_ID','Brand_ID','Name','Code','Desc','AvgPrice','IsActive','CreatedOn','ModifiedOn'];
    constructor() {}

    static async getByID(CustomerID=0,ID=0) {
        const product = new Product();
        if (ID > 0) {
            const sqlString = `
                SELECT [ID], [Name], [Code], [Category_ID], [SubCategory_ID], [Desc], [IsActive], [CreatedOn], [ModifiedOn]
                FROM ${this.TableName} 
                WHERE ID = ${ID};
            `;
            try {
                const { recordset } = await ExecuteQuery(sqlString);
                if (recordset.length > 0) {
                    Object.keys(recordset[0]).forEach((column) => product[column] = recordset[0][column]);
                }
            } catch (err) {
                GenerateErrorLog(err,this.CustomerID,__filename,1,'Product Class Creation');
            }
        }
        return product;
    }
    
    async SaveRecord(){
        let sqlString = "";
        if(this.ID === 0){
            sqlString =`INSERT INTO [dbo].[Product] 
                        ([Category_ID],[SubCategory_ID],[Brand_ID],[Name],[Code],[Desc],[AvgPrice],[IsActive],[CreatedOn],[ModifiedOn])
                        OUTPUT INSERTED.[CreatedOn],INSERTED.[ModifiedOn],INSERTED.[ID]
                        VALUES (@Category_ID,@SubCategory_ID,Brand_ID,@Name,@Code,@Desc,@AvgPrice,@IsActive,GETDATE(),GETDATE()) `;
        }
        else {
            // Update query
            const updateSetString = columnArray
            .filter(key => key !=='ID')
            .map(field => `[${field}] = @${field}`)
            .join(", ");

            sqlString = `
                UPDATE [dbo].[Product]
                SET ${updateSetString}
                OUTPUT INSERTED.[ModifiedOn]
                WHERE ID = @ID;
            `;
        }
        try {
         const {recordset} =  await ExecuteQueryParmaeterized(sqlString,this);
         let array  = this.ID ===0 ? ['ID','CreatedOn','ModifiedOn'] : ['ModifiedOn'];
         array.forEach(x=>this[x] = recordset[0]?.[x]);
        } catch (error) {
            GenerateErrorLog(error,this.CustomerID,__filename,1,'Product Saving Record');
        }
    }

    async ClearTable(){
        await ExecuteQuery("Truncate table Product");
    }

}


// const product = new Product();
// product.Name = 'Samsung';
// product.Code  = 'Samsung';
// product.Category_ID  = 0;
// product.SubCategory_ID  = 0;
// product.Desc  = 'this is the new product';
// product.IsActive   =  1;
// product.SaveRecord()
// .then(x=>console.log(product));

// const getByID =  Product.getByID;
// module.exports = {getByID};

const Categories =  require('../Categories/Categories');

(async ()=>{
    await Categories.ClearTable();
    const categories = new Categories();
    categories.Name = 'Category 1'
    categories.Desc = ' new category 2'
    categories.IsActive =1 
    categories.SaveRecord()
    .then(_=>console.log("successs!!"))
    .catch(err=>console.log(err.message));
})();