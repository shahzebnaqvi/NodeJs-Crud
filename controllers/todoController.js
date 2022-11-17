const TodoRepo = require('../repository/todoRepository')

class TodoController {
    async getAll(request, response) {
        const todoRepo = new TodoRepo();
        let res = await todoRepo.getAllTasks();
        response.json({
            todo: res.rows
        });
    }
    async check(request, response) {
        const todoRepo = new TodoRepo();
        let res = await todoRepo.checkrtasksingle(request.body.id,
            request.body.task, request.body.done);
        if (res.rows.length > 0) {
            var result = "You Are Logined";
        }
        else {
            var result = "Failed to Login";

        }
        response.json({
            "status": result
        })
    }


    async createTask(request, response) {
        const todoRepo = new TodoRepo();
        let res = await todoRepo.createTaskRepo(request.body.id,
            request.body.task, request.body.done);

        response.json({
            "status": "Task created"
        })
    }

    async updateTask(request, response) {
        const todoRepo = new TodoRepo();
        let res = await todoRepo.updateTaskRepo(request.body.id,
            request.body.task, request.body.done);

        response.json({
            "status": "Task updated"
        })
    }
    async deleteTask(request, response) {
        const todoRepo = new TodoRepo();
        let res = await todoRepo.deleteTaskRepo(request.body.id);

        response.json({
            "status": "Task deleted"
        });
    }

}

module.exports = TodoController;