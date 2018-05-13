/**
 * books 控制器
 * Created by jerry on 2017/11/2.
 */
const Mock = require('mockjs');
const jobs = require('../data/jobs');
let jobController = {};
let _jobs = jobs;

/**
 * 通过书名查询，获取图书列表
 * @param req
 * @param res
 */
jobController.find = function (req, res) {
  let page = parseInt(req.query.page || 1); //页码（默认第1页）
  let limit = parseInt(req.query.limit || 10); //每页显示条数（默认10条）
  let name = req.query.name || ''; //图书名称
  let total = 0;
  let rltjobs = [];
  if (name.length > 0) {
    let mockjobs = _jobs.filter(job => {
      return job.name.indexOf(name) > -1;
    });
    total = mockjobs.length; //总条数
    rltjobs = mockjobs.filter((u, index) => index < limit * page && index >= limit * (page - 1))
  } else {
    total = _jobs.length; //总条数
    rltjobs = _jobs.filter((u, index) => index < limit * page && index >= limit * (page - 1))
  }
  res.json({
    total: total,
    limit: limit,
    jobs: rltjobs
  })
};

/**
 * 通过id获取某一条图书新
 * @param req
 * @param res
 */
// jobController.findById = function (req, res) {
//   let id = _.trim(req.params.id || '');
//   if (!id) {
//     return res.json({"errcode": 40002, "errmsg": "不合法的参数"});
//   }
//   let book = _.find(_jobs, function (b) {
//     return b.id === id;
//   });
//   res.json(book || null)
// };

/**
 * 添加一条图书信息
 * @param req
 * @param res
 */
// bookController.create = function (req, res) {
//   let name = req.body.name;
//   let author = req.body.author;
//   let description = req.body.description;
//   let publishAt = req.body.publishAt;
//   _Books.push({
//     id: Mock.Random.guid(),
//     name: name,
//     author: author,
//     description: description,
//     publishAt: publishAt
//   });
//   res.json({"errcode": 0, "errmsg": "新增成功"})
// };

// /***
//  * 更新一条图书记录
//  * @param req
//  * @param res
//  */
// bookController.update = function (req, res) {
//   let id = _.trim(req.params.id || '');
//   if (!id) {
//     return res.json({"errcode": 40002, "errmsg": "不合法的参数"});
//   }
//   let name = req.body.name;
//   let author = req.body.author;
//   let description = req.body.description;
//   let publishAt = req.body.publishAt;

//   let i = _.findIndex(_Books, function (u) {
//     return u.id === id
//   })
//   if (i > -1) {
//     _Books[i].name = name;
//     _Books[i].author = author;
//     _Books[i].description = description;
//     _Books[i].publishAt = publishAt;
//     res.json({"errcode": 0, "errmsg": "修改成功"});
//   } else {
//     res.json({"errcode": 40009, "errmsg": "处理失败"});
//   }
// };

// /**
//  * 更新一条图书记录的部分信息
//  * @param req
//  * @param res
//  */
// bookController.patch = function (req, res) {

// };

// /**
//  * 批量删除
//  * @param req
//  * @param res
//  */
// bookController.deleteBatch = function (req, res) {
//   let ids = req.params.ids;
//   ids = ids.split(',');
//   _Books = _Books.filter(b => !ids.includes(b.id))
//   res.json({"errcode": 0, "errmsg": "删除成功"});
// };

/**
 * 单条删除
 * @param req
 * @param res
 */
// bookController.delete = function (req, res) {
//   let id = _.trim(req.params.id || '');
//   if (!id) {
//     return res.json({"errcode": 40002, "errmsg": "不合法的参数"});
//   }
//   let i = _.findIndex(_Books, function (u) {
//     return u.id === id
//   })
//   if (i > -1) {
//     _Books.splice(i, 1);
//     res.json({"errcode": 0, "errmsg": "修改成功"});
//   } else {
//     res.json({"errcode": 40009, "errmsg": "处理失败"});
//   }
// };

module.exports = jobController;
