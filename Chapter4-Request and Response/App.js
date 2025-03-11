const http = require('http');
const Server = http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);

    if(req.url === '/'){
        res.setHeader('content-type','text/html');
        res.write('<html>');
        res.write('<head><title>Complete Coding</title></head>');
        res.write('<body><h1>Welcome to Home</h1></body>');
        res.write('</html>');
        return res.end();
    }
    else if(req.url === '/products'){
        res.setHeader('content-type','text/html');
        res.write('<html>');
        res.write('<head><title>Complete Coding</title></head>');
        res.write('<body><h1>Welcome to products</h1></body>');
        res.write('</html>');
        return res.end();
    }
    else{
        res.setHeader('content-type','text/html');
        res.write('<html>');
        res.write('<head><title>Welcome to Home</title></head>');
        res.write('<body><h1>Welcome to Home</h1></body>');
        res.write('</html>');
        return res.end();
    }
   
    });
    const PORT = 3000;
    Server.listen(PORT,()=>{
        console.log(`Server running on Address http://localhost:${PORT}`);
});