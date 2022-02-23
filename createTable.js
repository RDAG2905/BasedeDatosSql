
let connection = require('knex')
const mysqlOptions = require('./optionsMySql')
const sqlLiteOptions = require('./optionsSqlLite3')


function crearTablas(mysqlOptions,sqlLiteOptions){
    let knex = connection(mysqlOptions)
    knex.schema.dropTableIfExists('productos')
      .then(()=>{
      return knex.schema.createTable('productos', table => {
            table.increments();
            table.string('nombre');
            table.float('precio');
            table.string('fotoUrl');
          })

      })
      .catch((err)=>
      {
        console.log(err.sqlMessage)
        console.log(err.sql)
      })
      .finally(()=> knex.destroy())

/* 
      knex = connection(sqlLiteOptions)
      knex.schema.dropTableIfExists('mensajes')
        .then(()=>{
        return knex.schema.createTable('mensajes', table => {
            table.increments();
            table.string('email');
            table.datetime('fechayHora');
            table.string('mensaje');
            })

        })
        .catch((err)=>
        {
            console.log(err.sqlMessage)
            console.log(err.sql)
        })
        .finally(()=> knex.destroy())
*/
        console.log("Tablas creadas")
      }    
      
      
      module.exports = crearTablas