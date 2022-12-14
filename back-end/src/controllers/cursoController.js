const curso = require('../Model/Curso')

exports.index = (req,res) => {
    curso.getAllValues()
    .then(result => {
        console.log(result)
        res.send(result)
    }).catch(err => {console.log(err)})
}