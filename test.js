const { ExecuteProcedure, WritetoErrorFile } = require("./backend/Utils/Utils");
// const cron = require("node-cron");

// Creating a cron job which runs on every 10 second
// cron.schedule("*/10 * * * * *", function() {
//     console.log("running a task every 10 second");
// });

class GetStoreProcedureParam {
    constructor(name ,value ){
        this.name = name;
        this.value = value;
    }
}
// WritetoErrorFile({message:'This isnt fair'},__filename,10);
ExecuteProcedure('[dbo].[getcustomerprofil]',[new GetStoreProcedureParam('isActive',1)]).then(x=>console.log(x))
