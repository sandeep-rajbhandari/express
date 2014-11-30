var express = require('express');
var router = express.Router();
var data={
    todoList:[
        {
            'id':1,'task':'wake-up','completed':true
        },
        {
            'id':2,'task':'brush','completed':false
        }
    ]
}
/* GET users listing. */
router.get('/', function(req, res) {
    //data.todoList.push({'id':3,'task':'cream','completed':false});
    res.send(data.todoList);
});
router.get('/:id', function(req, res) {
    //data.todoList.push({'id':3,'task':'cream','completed':false});
    console.log("success"+req.params.id)
    var id=req.params.id;
    for(var i=0;i<data.todoList.length;i++){
        if(data.todoList[i].id==id){
            data.todoList[i].completed=true;
            console.log("output"+JSON.stringify(data.todoList[i]));
        }
    }
    res.send("")



});

module.exports = router;
