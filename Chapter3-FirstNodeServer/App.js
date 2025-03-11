const http = require("http");
const Server =http.createServer((req,res)=>{
    console.log(req);
});

const PORT = 3001;
Server.listen(PORT,()=>{
    console.log(`Server running on address http://localhost:${PORT}`);
});