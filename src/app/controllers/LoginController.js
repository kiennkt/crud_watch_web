const Account = require('../models/Account');
const Smartwatch = require('../models/Smartwatch');

class LoginController {
    // [GET] /admin/
    show(req, res, next) {
        if (req.cookies['auth'] == undefined) {
            res.render('Login/login', { layout: false });
        } else {
            res.redirect('/admin');
        }
        // res.render('Login/login', {layout: false});
        // next();
    }
    // [POST] /admin/login
    login(req, res, next) {
        var username = req.body.username;
        var password = req.body.password;
        Account.findOne({
            username: username,
            password: password,
            role: 'admin',
        })
            .lean()
            .then((data) => {
                if (data) {
                    res.cookie('auth', 'correct');
                    res.redirect('/admin');
                } else {
                    res.redirect('/login');
                }
            })
            .catch((err) => {
                res.status(500).json('Không kết nối được với Server!!!');
            });
    }
}

module.exports = new LoginController();
