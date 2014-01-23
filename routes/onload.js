var mongoose = require('mongoose');    //引用mongoose模块
var db = mongoose.createConnection('localhost','mongolist'); //创建一个数据库连接
/*
 * GET home page.
 */

exports.index = function(req, res){

	
  res.render('mylayout', { title: 'Express' });
};