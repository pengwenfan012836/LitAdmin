<template>
	<div class="back">
		<el-row class="warp">
			<el-col >
				<el-breadcrumb separator="/">
				  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
				  <el-breadcrumb-item>任务</el-breadcrumb-item>
				</el-breadcrumb>
			</el-col>
		</el-row>
		<el-row class="back-toolbar">
			<el-col>
				<el-button size="small" @click="newJob">新建</el-button>
			  	<el-button size="small">编辑</el-button>
				<el-button size="small">删除</el-button>
			</el-col>
		</el-row>
		<el-row class="back-joblists">
			<template>
				<el-table
				   ref="multipleTable"
				   :data="tableData"
				   tooltip-effect="dark"
				   style="width: 100%"
				   @selection-change="handleSelectionChange">
				   <el-table-column
				     type="selection"
				     width="55">
				   </el-table-column>
				   <el-table-column
				     prop="name"
				     label="姓名"
				     width="200">
				   </el-table-column>
				   <el-table-column
				    	prop="publishAt"
				     	label="日期"
				     	width="200">
				     <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
				   </el-table-column>
				 </el-table>
			</template>
		</el-row>

	</div>
</template>
<script>
  	import API from '../../api/jobs';
	export default {
		data() {
			return {
				tableData: [],
				page: 1,
				total: 0,
				limit: 10,
				loading: false
			}
		},
		mounted: function () {
		  this.$nextTick(() => {
		  	this.getTableData();
		  });
		},
		methods: {
			getTableData() {
				var that = this;
				let params = {
				  	page: that.page,
				  	limit: 10
				  	// name: that.filters.name
				};
				API.jobs(params).then(function (result) {
			      that.loading = false;
			      if (result && result.jobs) {
			        that.total = result.total;
			        that.tableData = result.jobs;
			      }
			    }, function (err) {
			      that.loading = false;
			      that.$message.error({showClose: true, message: err.toString(), duration: 2000});
			    }).catch(function (error) {
			      that.loading = false;
			      console.log(error);
			      that.$message.error({showClose: true, message: '请求出现异常', duration: 2000});
			    });
			},
			toggleSelection(rows) {
		        if (rows) {
		          rows.forEach(row => {
		            this.$refs.multipleTable.toggleRowSelection(row);
		          });
		        } else {
		          this.$refs.multipleTable.clearSelection();
		        }
		    },
			handleSelectionChange(val) {
				this.multipleSelection = val;
			},
			newJob() {
				this.$router.push('/newuser/newuserlist/newjob');
			}
		}
	}
</script>
<style>
	.hello {
		color: red;
	}
	.back-toolbar {
		margin:20px 0;
	}
	.back-joblists {

	}
</style>