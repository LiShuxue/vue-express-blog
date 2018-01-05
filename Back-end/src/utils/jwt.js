(function(){
    const CryptoJS = require("crypto-js");
    const fs = require('fs');
    
    const header = {
        typ: "JWT",                           //声明类型
        alg: "HS256"                          //声明加密的算法
    };
    const payload = {
        iss: "Li Shuxue",                     //(Issuer)    jwt签发者
        sub: "test@example.com",              //(Subject)   该jwt所面向的用户
        aud: "www.example.com"                //(Audience)  接收jwt的一方
    };
    const privateKey = 'mykey';
    
    const encodeToBase64 = (str) => {
        if(typeof str !== "string" && typeof str === "object"){
            str = JSON.stringify(str);
        }
        return new Buffer(str).toString('base64');
    }
    const decodeBase64 = (str) => new Buffer(str, 'base64').toString();
    
    const encodeToken = (payloadObj) => {
        if(!payloadObj){
            throw new Error('payload format is invalid');
        }
        let t_header = header;
        let t_payload = Object.assign(payload, payloadObj);   //Object.assign(target, ...sources)
        let now = new Date().getTime(); 
        t_payload.iat = now;                                  //(Issued At) jwt的签发时间
        t_payload.exp = now + 60*1000;                        //(Expiration Time) jwt的过期时间，这个过期时间必须要大于签发时间 
        let data = encodeToBase64(t_header) + '.' + encodeToBase64(t_payload);
        let signature = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(data, privateKey));
        let token = data + '.' + signature;
        return token;
    }
    const verifyToken = (token) => {
        if(!token){
            throw new Error('token format is invalid');
        }
        let tokenArr = token.split('.');
        let data = tokenArr[0] + '.' + tokenArr[1];
        let signature = CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(data, privateKey));
        let t_payload = JSON.parse(decodeBase64(tokenArr[1]));
        let isValid, isExpire;
        tokenArr[2] === signature ? isValid=true : isValid=false;
        t_payload.exp < new Date().getTime() ? isExpire=true : isExpire=false;
        return {
            isValid,
            isExpire
        }
    }
    const decodeToken = (token) => {
        if(!token){
            throw new Error('token format is invalid');
        }
        let tokenVerified = verifyToken(token);
        if(tokenVerified.isValid){
            let tokenArr = token.split('.');
            let t_payload = JSON.parse(decodeBase64(tokenArr[1]));
            return t_payload;
        }else{
            throw new Error('token is invalid');
        }
    }
    const refreshToken = (token) => {
        if(!token){
            throw new Error('token format is invalid');
        }
        let t_payload = decodeToken(token);
        let refreshToken = encodeToken(t_payload);
        return refreshToken;
    }

    module.exports.encodeToken = encodeToken;
    module.exports.verifyToken = verifyToken;
    module.exports.decodeToken = decodeToken;
    module.exports.refreshToken = refreshToken;
})();