<template>
	<div class="about-container">
		<div class="motto">
			<div class="about-img">
				<img src="../../assets/about.png" height="100" width="240">
			</div>
			<span>{{motto}}</span>
		</div>
		<div class="content">
			
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				motto:"学而时习之"
			}
		}
	}
</script>

<style>
	.about-container{
		width: 100%;
	}
	.motto{
		width: 600px;
		text-align: center;
		font-size: 15px;
		margin: auto auto;
		color:#B2B0B0;
	}
	.about-img{
		width: 300px;
		margin-left: 100px;
	}
	.content{
		width: 900px;
		margin:100px auto;
		text-align: center;
	}
</style>
