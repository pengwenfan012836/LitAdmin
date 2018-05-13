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
		<el-steps :active="active" finish-status="success" class="step" space="200px">
			<el-step >
			</el-step>
			<el-step ></el-step>
			<el-step ></el-step>
			<el-step ></el-step>
		</el-steps>
		<el-row class="content">
			
		</el-row>
		<el-button style="margin-top: 12px;" size="small" @click="next">下一步</el-button>
		<el-button style="margin-top: 12px;" size="small" @click.native.prevent="goBack">取消</el-button>
	</div>
</template>
<script>
  	import API from '../../api/jobs';
	export default {
	    data() {
	      return {
	        active: 0
	      };
	    },
	    methods: {
	      next() {
	        if (this.active++ > 2) this.active = 0;
	      },
	      goBack() {
	      	history.back();
	      }
	    }
	 }
</script>
<style>
	.step {
		margin:40px 200px;
	}
	.content {
		height: 400px;
		min-height: 400px;
		width:94%;
		margin-left:3%;
		margin-right:3%;
		margin:;
		border: 1px solid #999;
	}
</style>