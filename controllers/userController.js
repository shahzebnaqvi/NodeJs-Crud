const UserRepo = require('../repository/userRepository')

class UserController {
    async getAll(request, response) {
        const userRepo = new UserRepo();
        let res = await userRepo.getAllTasks();
        response.json({
            user: res.rows
        });
    }

    async createTask(request, response) {
        const userRepo = new UserRepo();
        let res = await userRepo.createTaskRepo(request.body.id,
            request.body.email, request.body.password);

        response.json({
            "status": "User created"
        })
    }



}

module.exports = UserController;