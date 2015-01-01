var express = require('express');
var stormpath = require('express-stormpath');
var router = express.Router();
var data={
    todoList:[
        {
            'id':1,'task':'wake-up','completed':true
        },
        {
            'id':2,'task':'brush','completed':false
        },
        {
            'id':3,'task':'wash','completed':false
        }
    ]
}
/* GET users listing. */
router.get('/',stormpath.loginRequired,function(req, res) {
    //data.todoList.push({'id':3,'task':'cream','completed':false});
    res.send(data.todoList);
});
router.post('/post', function(req, res) {
    data.todoList.push({
        'id':data.todoList.length+1,
        'task':req.body.task,
        'completed':false
    });
    res.send("")
});
router.get('/:id', function(req, res) {
    //data.todoList.push({'id':3,'task':'cream','completed':false});
    console.log("success"+req.params.id)
    var id=req.params.id;
    for(var i=0;i<data.todoList.length;i++){
        if(data.todoList[i].id==id){
            data.todoList[i].completed=true;
        }
    }
    res.send("")



});
router.put('/delete', function(req, res) {
    var id=req.body.post;
    //data.todoList.push({'id':3,'task':'cream','completed':false});
    console.log("sucess"+id)
    for(var i=0;i<data.todoList.length;i++){
        if(data.todoList[i].id==id){
            console.log(data.todoList[i])
            data.todoList.splice(i)
        }
    }
    console.log(data.todoList)
    res.send("")



});

router.post('/post/:id', function(req, res) {
    console.log(">>>>>>>>>"+req.params.id+"::"+req.body.task);
    data.todoList.push({
        'id':req.params.id,
        'task':req.body.task,
        'completed':false
    });
    res.send("")
});
module.exports = router;
