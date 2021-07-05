var express = require('express');
var router = express.Router();
const { Op } = require("sequelize");
const { User } = require("../models");

router.post('/register', async(req,res)=>{
    const { register_nickname, register_password } = req.body;

    const existsUsers = await User.findAll({
        where: {nickname:register_nickname}
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


// 로그인을 처리하는 부분 - 로그인이 성공적으로 이루어지면 토큰을 발급해준다



module.exports = router;