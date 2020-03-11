
const mysql = require('mysql')
const conexion = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'examenNotes'

})

conexion.connect(function(err){
    if (err) {
        console.log('Error')
    } else {
        console.log('Si hay conexion')
    }
    
})

const nota = document.getElementById('text')
const btnGuardar = document.getElementById('nota')
const btnMostrar = document.getElementById('nota1')
const txtTitulo = document.getElementById('titulo')




btnGuardar.addEventListener('click',function(e){
    e.preventDefault()
    let consulta = "insert into notas(titulo,notas) values(?,?)"
    conexion.query(consulta,[`${txtTitulo.value}`,`${nota.value}`], function(err,filas,campos){
        if (err) {
            console.log('Error')
        } else {
            console.log('Exitos')
        }
        
    })
})



