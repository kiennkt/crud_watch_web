const Smartwatch = require('../models/Smartwatch');
const Account = require('../models/Account');

class HomeController {
    showHomeAdmin(req, res, next) {
        Smartwatch.find({})
            .lean()
            .then((smartwatches) => res.render('home', { smartwatches }));
    }
    showHomeUser(req, res, next) {
        res.render('HomeUser/home', { layout: false });
    }
    showSignUpUser(req, res, nex) {
        res.render('HomeUser/signUp', { layout: false });
    }
    showLoginUser(req, res, next) {
        res.render('HomeUser/signIn', { layout: false });
    }
    createAccountUser(req, res, next) {
        var username = req.body.username;
        Account.findOne({
            username: username,
        })
            .then((data) => {
                if (data) {
                    res.status(409).json('Tài khoản đã tồn tại!');
                } else {
                    // req.body.role = 'user';
                    const account = new Account(req.body);
                    account
                        .save()
                        .then(() => res.redirect('/SignIn'))
                        .catch(next);
                }
            })
            .catch(next);
    }
    signInAccountUser(req, res, next) {
        Account.findOne(req.body)
            .lean()
            .then((data) => {
                if (data) {
                    res.json('Đăng nhập thành công!!!');
                } else {
                    res.redirect('/SignIn');
                }
            })
            .catch(next);
    }
}

module.exports = new HomeController();
