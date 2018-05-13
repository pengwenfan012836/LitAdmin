// 默认index.js文件
import * as API from './'

export default {
	//查询获取book列表(通过page分页)
	jobs: params => {
	  return API.GET('/api/v1/jobs', params)
	},
}