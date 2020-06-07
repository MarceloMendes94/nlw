const express = require("express")
const server = express()

//pegar o banco de dados
const db= require("./database/db.js")

//configurando o template engine
const nunjucks=require("nunjucks")//template engine
nunjucks.configure("src/views/",{
    express: server,
    nocache: true
})

//configurar pastas publicas 
server.use(express.static("public"))

//habilitar o uso de req.body
server.use(express.urlencoded({extended:true}))

server.get("/",(req,res)=>{
    res.render("index.html",{
        title:"Seu marketplace de coletas de resíduos."
    })
})

server.get("/create-point",(req,res)=>{    
    res.render("create-point.html")
})

server.post("/save-point",(req,res)=>{
    const query  = `INSERT INTO places(image,name,address,address2,state,city,items)VALUES( ?,?,?,?,?,?,?);`
    const values = [req.body.image, req.body.name, req.body.address ,req.body.address2, req.body.state, req.body.city, req.body.items]
    function afterInsertData(err){ 
        if(err){ 
            return console.log(err)
        }
        //console.log("Cadastro com sucesso")
    }
    db.run(query,values, afterInsertData() ) 
    res.redirect("/")
})

server.get("/search",(req,res)=>{

    const search = req.query.search
    if(search==""){
        return res.render("search-results.html",{places:[]})
    }

    db.all(`SELECT * FROM places WHERE city LIKE'%${search}%';`,function(err,rows){
        if(err){
            return console.log(err)
        }
        //mostra a pagina html com dados do banco de dados
        return res.render("search-results.html",{places:rows})
    })   
})

//ligar o servidor 
server.listen(process.env.PORT || 5000)
