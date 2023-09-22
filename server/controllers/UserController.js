'use strict'
const { User } = require('../models/index')
const {signToken} = require('../helpers/jwt')

class UserController {

    static async login(req, res) {
        try {
            let data = {
                where: {
                    username: req.body.username
                }
            }
            let user = await User.findOne(data);
            if (!user) {
                throw {msg: 'username/pssword salah', status: 404}
            }
            if (req.body.password === user.dataValues.password) {
                let access_token = signToken({
                    id: user.dataValues.id,
                    username: user.dataValues.username
                })
                res.status(200).json({
                    access_token
                })
            }
        } catch (error) {
            throw {msg: 'error di login', status: 500}
        }
    }

}

module.exports = UserController