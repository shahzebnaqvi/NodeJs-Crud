const pool = require('../dbconn')

class TodoRepo {
    async getAllTasks(){
        return await pool.query(`select * from public.todolist`);
    }

    async createTaskRepo(id, task, done){
        return await pool.query(`INSERT INTO public.todolist
        (id, task, done )
        VALUES($1,$2,$3)`,
        [id , task, done]);
    }
    async updateTaskRepo(id, task, done){
        return await pool.query(`UPDATE public.todolist
        SET task = $2, done = $3 WHERE id = $1`,
        [id , task, done]);
    }
    async deleteTaskRepo(id){
        return await pool.query(`DELETE From public.todolist
        WHERE id = $1`,
        [id]);
    }
}
module.exports = TodoRepo;