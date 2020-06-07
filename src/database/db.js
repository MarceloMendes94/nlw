//importar a dependencia do sqlite
const sqlite3 = require("sqlite3").verbose()

//iniciar o obejto de banco de dados que ira fazer operações no banco de dados
const db= new sqlite3.Database("./src/database/database.db")

//usar nosso objeto para realizar operações no banco de dados
db.serialize(()=>{
    //com comandos sql eu vou:
    //1-criar tabela 
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places(
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         image TEXT,
    //         name TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `)

    // //2-inserir dados na tabela
    // const query  = `INSERT INTO places(image,name,address,address2,state,city,items)VALUES( ?,?,?,?,?,?,?);`
    // const values = ["https://images.unsplash.com/photo-1516992654410-9309d4587e94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    //                 "Papersider",
    //                 "Rua Guilherme jambala, Jardim América","número 260","Santa Catarina","Rio do sul","Papéis e papelão"]
    // function afterInsertData(err){
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log("Cadastro com sucesso")
    //     console.log(this)
    // }
    // //db.run(query,values, afterInsertData() )        
    
    //consultar os dados da tabela
    // db.all(`SELECT * FROM places`,function(err,rows){
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log("aqui estão seus registros")
    //     console.log(rows)
    // })


    //deletar dados de tabela
    // db.run(`DELETE FROM places WHERE id=?`,[6], function(err){
    //     if(err){
    //         return console.log(err)
    //     }
    //     console.log("registro deletado com sucesso")
    // })
})

module.exports=db