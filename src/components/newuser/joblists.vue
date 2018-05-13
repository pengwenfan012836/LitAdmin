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
			<template>
				<div class="block">
				   <el-carousel height="600" :autoplay="autoplay">
				     <el-carousel-item v-for="item in 4" :key="item">
				       <h3>{{ item }}</h3>
				     </el-carousel-item>
				   </el-carousel>
				 </div>
			</template>
		</el-row>
		<el-row  class="step-footer">
			<el-button style="margin-top: 12px;" size="small" v-show="active!==0" @click="next(-1)">上一步</el-button>
			<el-button style="margin-top: 12px;" size="small" v-show="active!==3" @click="next(1)">下一步</el-button>
			<el-button style="margin-top: 12px;" size="small" v-show="active===3">完成</el-button>
			<el-button style="margin-top: 12px;" size="small" @click.native.prevent="goBack">取消</el-button>
		</el-row>
	</div>
</template>
<script>
  	import API from '../../api/jobs';
	export default {
	    data() {
	      return {
	        active: 0,
	        autoplay: false
	      };
	    },
	    methods: {
	      next(direction) {
	      	if (direction > 0) {
	      		this.active++;
	      		if (this.active >= 3) {
	      			this.active = 3;
	      		}
	      	} else {
	      		this.active--;
	      		if (this.active <= 0) {
	      			this.active = 0;
	      		}
	      	}
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
	.step-footer {
		float: right;
		margin-right: 3%;
	}
	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		line-height: 150px;
		margin: 0;
	}

	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}

	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}
</style>