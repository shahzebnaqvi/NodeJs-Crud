const pool = require('../dbconn')

class UserRepo {
    async getAllTasks() {
        return await pool.query(`select * from public.newtable`);
    }

    async checkrtasksingle(email, password) {
        return await pool.query(`select * from public.newtable  WHERE email = $1 and password = $2`, [email, password]
        );
    }


    async createTaskRepo(email, password) {
        return await pool.query(`INSERT INTO public.newtable
        ( email, password )
        VALUES($1,$2)`,
            [email, password]);
    }
    async updateTaskRepo(id, email, password) {
        return await pool.query(`UPDATE public.newtable
        SET task = $2, done = $3 WHERE id = $1`,
            [id, email, password]);
    }
    async deleteTaskRepo(id) {
        return await pool.query(`DELETE From public.newtable
        WHERE id = $1`,
            [id]);
    }
}
module.exports = UserRepo;