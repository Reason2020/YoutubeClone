const db = require('../db/index');
const { v4: uuid } = require('uuid');
const bcrypt = require('bcrypt');

const addNewUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        
        //check if username already exists
        const usernameExists = await db.query('SELECT * FROM users WHERE username=$1', [ username ]);
        console.log(usernameExists);
        if (usernameExists.rowCount > 0) {
            return res.status(400).json({
                success: false,
                message: "Username Already In Use"
            });
        }

        //check if email already exists
        const emailExists = await db.query('SELECT * FROM users WHERE email=$1', [ email ]);
        if (emailExists.rowCount > 0) {
            return res.status(400).json({
                success: false,
                message: "Email Address Already In Use"
            });
        }

        //generate new uuid
        const userId = uuid();

        //hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        //store user
        const user = await db.query("INSERT INTO users VALUES ($1, $2, $3, $4)", [ userId, username, email, hashedPassword ]);

        if (!user) {
            return res.status(500).json({
                success: false,
                message: "Server failure. User Could Not Be Registered."
            });
        }

        res.status(201).json({
            success: true,
            message: "User Registered Successfully.",
        });
    } catch (err) {
        console.log("Error adding new user: ", err);
        res.status(400).json({
            success: false,
            message: "Error Registering New User"
        })
    }
}

module.exports = {
    addNewUser
}