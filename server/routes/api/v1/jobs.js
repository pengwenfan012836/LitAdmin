/***
 * jobs相关路由
 * 采用 restful api 风格
 */
var express = require('express');
var router = express.Router();
var indexRouter = {};
var userController = require('../../../controllers/user');
var jobController = require('../../../controllers/job');

//先检查登录
router.use(userController.checkLogin);

//返回job的集合
router.get('/', jobController.find);

// //返回指定的job
// router.get('/:id', jobController.findById);

// //创建job
// router.post('/', jobController.create);

// //更新job全部信息
// router.put('/:id', jobController.update);

// //更新job部分信息
// router.patch('/:id', jobController.patch);

// //批量删除
// router.delete('/batch/:ids', jobController.deleteBatch);

// //删除指定的job
// router.delete('/:id', jobController.delete);



indexRouter.router = router;

module.exports = indexRouter;
