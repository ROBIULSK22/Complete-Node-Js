console.log("KG coding is the best");


const fs = require('fs');
fs.writeFile("Output.txt","Writing file",(err)=>{
    if(err)console.log("error occurred");
    else console.log('File written successfully');
});