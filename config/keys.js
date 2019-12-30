

if(process.env.NODE_ENV === 'production'){
    module.exports = require('./prod');
}else{

   module.exports = require('./dev');

}

//prod-googleId - 113475742828-9c4rhmbap6esa62eh4u6g9q8fsbij7or.apps.googleusercontent.com

//prod-googleSecret   0qzb9nhWbvWK-QUy9f-fSz9g