const http = require('http');
const fs = require('fs');
const Server = http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    if(req.url === '/'){
        res.setHeader('content-type','text/html');
        res.write('<html>');
        res.write('<head><title>complete Coding</title></head>');
        res.write('<body><h1>Enter your Details</h1>');
        res.write('<form action = "/submit-details" method = "POST">');
        res.write('<input type = "text" name = "username" placeholder = "Enter your name"><br>');
        res.write('<label for ="male">Male</label>');
        res.write('<input type = "radio" id = "male" name = "gender" value ="male"/>');
        res.write('<label for ="female">Female</label>');
        res.write('<input type = "radio"  id = "female" name = "gender" value = "female"/>');
        res.write('<br> <input type = "submit" value = "submit">');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    else if(req.url.toLowerCase() === "/submit-details" && req.method == "POST"){
        fs.writeFileSync('user.txt','Robiul sk');
        res.statusCode = 302;
        res.setHeader('Location','/');
    }
    res.setHeader('content-type','text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding</title></head>');
    res.write('<body><h1>Welcome Back To The Home Page</h1>');
    res.write('</body>');
    res.write('</html>');
    return res.end();

})
const PORT = 30001;
Server.listen(PORT,()=>{
    console.log(`Server running on address: http://localhost:${PORT}`);
});