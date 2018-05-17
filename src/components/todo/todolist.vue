<template>
	<div>
		<el-dialog
		  title="提示"
		  :visible.sync="dialogVisible"
		  class="dialog"
		  width="50%"
		  :before-close="handleClose">
		  	<div class="todo">
		  		<h2>{{ title }}</h2>
		  		<input type="text" class="form-control" v-model="task" @keyup.enter="addTask" name="task">
		  		<!-- <div v-if="jobs.length == 0"> -->
		  			<ul class="todo-conents">
		  				<li v-for="task in jobs" :key="task.id" @click.stop.prevent="deleteTask(task)" :class="{tobedo:tobedo, done:task.status <= 0}"> {{ task.name }}</li>
		  			</ul>
		  		<!-- </div> -->
		  	</div>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="dialogVisible = false">取 消</el-button>
		    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
		  </span>
		</el-dialog>
		<div class="container">
			<div class="header">
				<a class="btn btn-sm btn-default" @click="dialogVisible = true" >todolist</a>
				<a class="btn btn-sm btn-default" @click="dialogVisible = true" >grid</a>
				<a class="btn btn-sm btn-default" @click="dialogVisible = true" >tree</a>
			</div>

			<div class="content"></div>
			<div class="footer"></div>
		</div>
		
	</div>
</template>
<script>
	export default {
		name: 'todolist',
		data() {
			return {
				title: '这个是一个todolist',
				task: '',
				jobs: [],
				done: '',
				tobedo: '',
				dialogVisible: false
			}
		},
		methods: {
			todo() {

			},
			addTask() {
				var fullTask = {
					id: new Date().getTime(),
					name: this.task,
					status: 1
				}
				this.jobs.push(fullTask);
				this.task = '';
			},
			deleteTask(_task) {
				_task.status = _task.status * (-1);
			},
			handleClose(done) {
				done();
		     }
		},
		computed: {
			tasks() {
				return this.jobs;
			}
		}
	}
</script>
<style>
	.dialog {
		height: 500px;
	}
	.container {
		width: 100%;
		height: auto;
		margin: 20px;
	}
	.todo {
		width: 100%;
		height: 80%;
		display: flex;
		flex-direction: column;
		align-items: center;
		border: 1px solid #ccc;
	}
	.todo input {
		width: 50%;
	}
	.todo-conents {
		margin: 20px;
	}
	.done {
		color: red;
	}
	.message {
		color: red;
	}
</style>