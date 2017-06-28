<template>
    <div class="about">
        <input type="text" v-model="username">
        <input type="password" v-model="password">
        <input type="password" v-model="password_re">
        <button @click="register" >注册</button>
        <hr>
        <input type="text" v-model="usernameL">
        <input type="password" v-model="passwordL">
        <button @click="login" >登录</button>
    </div>
</template>

<script>
    import axios from 'axios';
    import crypto from 'crypto';
    export default {
        data: function(){
            return {
                username: '',
                password: '',
                password_re: '',
                usernameL: '',
                passwordL: ''
            }
        },
        methods: {
            register(){
                if(this.password !== this.password_re){
                    console.error('两次输入的密码不一致');
                }else{
                    var md5 = crypto.createHash('md5');
		            var password = md5.update(this.password).digest('hex');

                    axios.post('http://localhost:3000/api/user/register', {
                        username: this.username,
                        password: password
                    })
                    .then(function (response) {
                        console.log(response.data);
                    })
                    .catch(function (response) {
                        console.log(response.data);
                    });
                }
            },
            login(){
                var md5 = crypto.createHash('md5');
                var passwordL = md5.update(this.passwordL).digest('hex');

                axios.post('http://localhost:3000/api/user/login', {
                    username: this.$data.usernameL,
                    password: passwordL
                })
                .then(function (response) {
                    console.log(response.data);
                })
                .catch(function (response) {
                    console.log(response.data);
                });
            }
        }
    }
</script>

<style>
</style>
