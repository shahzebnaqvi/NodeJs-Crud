const UserRepo = require('../repository/userRepository')

class UserController {
    async getAll(request, response) {
        const userRepo = new UserRepo();
        let res = await userRepo.getAllTasks();
        response.json({
            user: res.rows
        });
    }
    async checklogin(request, response) {
        const todoRepo = new TodoRepo();
        let res = await todoRepo.checkrtasksingle(
            request.body.email, request.body.password);
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

    async createregister(request, response) {
        const userRepo = new UserRepo();
        let res = await userRepo.createTaskRepo(
            request.body.email, request.body.password);

        response.json({
            "status": "User created"
        })
    }



}

module.exports = UserController;