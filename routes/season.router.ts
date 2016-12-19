import {Router} from "express";
const router = Router();
import {md5} from '../util/';
import {User, userModel} from '../model/usrs.model';


router.get('/:id' , function () {

});

router.get('/' , function (req , res) {
    res.send('');
});


/* GET users listing. */
router.post('/', function (req, res, next) {
    const username = req.param('username');
    const password = req.param('password');
    userModel.queryAll({username:username,password:md5(password)}, function (users) {
        if(users.length >0){
            res.render('index',{username:username});
        }else{
            res.render('login',{message:'用户名或密码错误!'});
        }
    })
});

export default router;