const bodyParse = require('body-parser')
const express = require('express')
const app = express()
const port = 5000

const pool = require('./dbconn')

const TodoController = require('./controllers/todoController')
const UserController = require('./controllers/userController')

const TODO_BASE_ROUTE = '/todo';
const USER_BASE_ROUTE = '/login';
const todoController = new TodoController()
const userController = new UserController()

app.use(bodyParse.json())
app.use(
    bodyParse.urlencoded({
        extended: true,
    })
)
//console.log("helo world");
app.get('/', (request, response) => {
    response.json({ info: 'Node.js,Express, and Postgres API' })
    //res.send("helo world");
})

app.get(TODO_BASE_ROUTE, todoController.getAll)

app.post(TODO_BASE_ROUTE, todoController.createTask)

app.put(TODO_BASE_ROUTE, todoController.updateTask)

app.delete(TODO_BASE_ROUTE, todoController.deleteTask)

app.get('/login', userController.getAll)
app.post(USER_BASE_ROUTE, userController.createTask)

// app.get('/testdb',async (request, response)=>{
//     let res = await pool.query('select * from public.todolist')
//     // response.json({
//     //     todo: res.row
//     // })
//    console.log(res);
//    response.json({info: 'Node.js,Express, and Postgres API' })
// })

// app.post('/todo/create', async(req,res)=>{
//     let result = await pool.query(`INSERT INTO public.todolist
//     (id, task, done)
//     VALUES($1,$2,$3)`,
//     [req.body.id, req.body.task, req.body.done])
//     //console.log(result);
//     res.json({
//         "status": "Task created"
//     })
// })
// app.put(TODO_BASE_ROUTE, async(req,res)=>{
//     await pool.query(`UPDATE INTO public.todolist
//     SET task=$1, done=$2
//     WHERE id=$3`,
//     [req.body.task, req.body.done, req.body.id])
//     //console.log(result);
//     res.json({
//         "status": "Task updated"
//     })
// })
// app.delete(TODO_BASE_ROUTE + '/:id', async (req, res) => {
//     await pool.query(`delete from public.todolist WHERE id=$1`,
//       [req.params.id])
//       res.json({
//         "status": "Task deleted"
//       })
//   })


app.listen(port, () => {
    console.log(`app is listening ${port}`)
})