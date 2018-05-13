/**
 * 初始化jbos
 *
 * Created by carey.peng on 2018/5/10.
 */
const Mock = require('mockjs');

const Jobs = [];
for (let i = 0; i < 100; i++) {
  Jobs.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.ctitle(2, 12),
    publishAt: Mock.Random.date()
  }))
}

module.exports = Jobs;
