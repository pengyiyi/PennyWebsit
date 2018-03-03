<template>
	<div class="blog-container">
		<div class="motto">
			<div class="blog-img">
				<img src="../../assets/blog.png" height="100" width="240">
			</div>
			<span>{{motto}}</span>
		</div>

		<!--此处显示文章列表-->
		<div class="show-blogs">
			<ul>
				<li v-for="item in showItems">
					<router-link :to="{path:'/article',query:{id:item.inquire}}"><h1>{{item.title}}</h1></router-link>
					<div class="blogs-mes">发表于 {{item.time}}</div>
					<div class="blogs-description">{{item.description}}</div>
					<router-link :to="{path:'/article',query:{id:item.inquire}}"><button class="blogs-button">阅读全文 >></button></router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
  import Axios from 'axios'
	import {AllBlogsURL} from '../../api/httpapi.js'
	export default{
		data(){
			return{
				motto:'学而有所悟',
				showItems:[],
			}
		},
		mounted() {
		  //do something after mounting vue instance
		  Axios.get(AllBlogsURL)
			.then(function(res){
				var ret = res.data.data;
				var len =ret.length;
				var tem =[]
				for(var i=0;i<len;i++){
					tem.push(ret[i]);
				}
				this.showItems = tem;
			}.bind(this))
			.catch(function(){
				console.log('error');
			})
		}
	}
</script>

<style>
	.blog-container{
		width: 100%;
	}
	.motto{
		width: 600px;
		text-align: center;
		font-size: 15px;
		margin: auto auto;
		color:#B2B0B0;
	}
	.blog-img{
		width: 300px;
		margin-left: 100px;
	}
	.show-blogs{
		width: 100%;
		margin-top: 50px;
	}
	.show-blogs ul{
		margin:0;
		padding: 0;
	}
	.show-blogs li{
		list-style: none;
		border-bottom: 1px solid #e5e5e5;
		padding-left: 140px;
		width: 900px;
		padding-right: 30px;
	}
	.show-blogs h1{
		font-size: 20px;
		color: #555555;
		font-weight: 500;
		margin: 0;
		margin-top: 10px;
		cursor: pointer;
	}
	.blogs-mes{
		font-size: 15px;
		color: #999;
	}
	.blogs-description{
		margin-top: 20px;
		font-size: 16px;
		color: #555;
		height: 50px;
	}
	.blogs-button{
		margin-top: 5px;
		border: none;
		background-color: black;
		color:white;
		width: 120px;
		height: 32px;
		margin-bottom: 20px;
		border: 2px solid black;
		cursor: pointer;
		transition: all 0.3s;
	}
	.blogs-button:hover{
		color:black;
		background-color: white;
	}
	.page{
		margin-top: 50px;
		width: 1200px;
		height: 150px;
	}
	.changePage{
		width: 230px;
		height: 40px;
		margin: 20px auto;
		position: relative;
	}
	.showPage{
		position: absolute;
		top:0;
		left: 70px;
	}
	.inline{
		display:inline-block;
		cursor: pointer;
	}
	.getPosition{
		width:50px;
		display:inline-block;
	}
</style>
