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

        if (user.rowCount === 0) {
            return res.status(500).json({
                success: false,
                message: "Server failure. User Could Not Be Registered."
            });
        }

        //get user
        const registeredUser = await db.query('SELECT * FROM users WHERE username=$1', [ username ]);

        res.status(201).json({
            success: true,
            message: "User Registered Successfully.",
            user: registeredUser.rows[0]
        });
    } catch (err) {
        console.log("Error adding new user: ", err);
        res.status(400).json({
            success: false,
            message: "Error Registering New User"
        })
    }
}

const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        //check if username is valid
        const userExists = await db.query('SELECT * FROM users WHERE username=$1', [ username ]);
        if (userExists.rowCount !== 1) {
            console.log('Invalid Username');
            return res.status(400).json({
                success: false,
                message: 'Invalid Password or Username'
            });
        }

        const user = userExists.rows[0];
        console.log('User: ', user);
        //check if password is correct
        console.log('We are here...');
        const passwordCorrect = await bcrypt.compare(password, user.password);
        console.log('Password is correct or not?', passwordCorrect);
        if (!passwordCorrect) {
            console.log('Invalid Password');
            return res.status(400).json({
                success: false,
                message: 'Invalid Password or Username'
            })
        }

        //send user info 
        res.status(200).json({
            success: true,
            message: 'Successfully logged in user',
            user
        });
    } catch (err) {
        console.log('Server failure!', err);
        res.status(500).json({
            success: false,
            message: 'Server failure. Could not login user'
        });
    }    
}

module.exports = {
    addNewUser,
    loginUser
}