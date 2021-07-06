var express = require('express');
var router = express.Router();
const { Op } = require("sequelize");
const { User } = require("../models");
const jwt = require("jsonwebtoken");

router.post('/register', async(req,res)=>{
    const { register_nickname, register_password } = req.body;

    const existsUsers = await User.findAll({
        where: {
            nickname:register_nickname
        }
    });
    
    if (existsUsers.length) {
        res.status(400).send({
            message: "동일한 닉네임이 존재합니다"
        });
    }else{
        newUser = await User.create({ nickname:register_nickname, password:register_password });
        console.log(newUser);
        res.status(200).send({
            message: "가입완료"
        });
    }
})

router.post('/login', async(req,res)=>{
    const { login_nickname, login_password } = req.body;

    const user = await User.findOne({
        where: {
            nickname: login_nickname,
        }
    });

    if (!user || login_password !== user.password) {
        res.status(400).send({
          message: "닉네임 또는 패스워드가 틀렸습니다.",
        });
        return;
    }

    res.send({
        token: jwt.sign({ userNickname: user.nickname }, "customized-secret-key"),
    });
})


module.exports = router;