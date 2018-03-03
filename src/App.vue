<template>
	<div>
		<header class="header-set">
			<div class="header-content">
				<div class="logo">
					<router-link to="/">
						<span class="logo1">Penny's </span>
						<span class="logo2">Website</span>
					</router-link>
				</div>
				<div class="header-item">
					<ul>
						<li><router-link to="/"><span>主页</span></router-link></li>
						<li><router-link to="/blogs"><span>博客</span></router-link></li>
						<li><router-link to="/about"><span>关于</span></router-link></li>
					</ul>
				</div>
			</div>
		</header>

		<div class="main-content">
			<div class="get-position"></div>
			<transition name="fade" mode="out-in">
				<router-view></router-view>
			</transition>
		</div>
	</div>
</template>

<script>
	export default{

	}
</script>

<style >
 body{
	 margin: 0;
	 padding: 0;
 }
	.header-set{
		width: 100%;
		height: 55px;
		border-bottom: 1px solid #EEEEEE;
	}
	.header-content{
		width: 1200px;
		height: 55px;
		box-sizing: border-box;
		margin: auto auto;
	}
	.logo{
		float: left;
	}
	.logo1{
		display: inline-block;
		margin-top: 18px;
		font-weight: 700;
		letter-spacing: 1px;
	}
	.logo2{
		display: inline-block;
		margin-top: 18px;
		font-weight: 700;
		color: #B2B0B0;
		letter-spacing: 1px;
		padding-left: 5px;
	}
	.header-item{
		margin-left: 850px;
		width: 350px;
		height: 55px;
	}
	.header-item ul{
		margin: 0;
		padding: 0;
	}
	.header-item li{
		list-style: none;
		float: left;
		margin-top: 22px;
		display: inline-block;
		height: 31px;
		font-size: 16px;
		letter-spacing: 2px;
		cursor: pointer;
	}
	.header-item span{
		display: inline-block;
		margin: 0 20px auto 20px;
	}
	.header-item a{
		display: inline-block;
		height: 31px;
		color: #B2B0B0;
		border-bottom:2px solid white;
		transition:color,border-color 0.5s;
		-moz-transition:color,border-color borderBottom 0.5s; /* Firefox 4 */
		-webkit-transition:color,border-color borderBottom 0.5s; /* Safari and Chrome */
		-o-transition:color,border-color borderBottom 0.5s; /* Opera */
	}
	.header-item a:hover{
		color:black;
		border-color:black
	}

</style>
