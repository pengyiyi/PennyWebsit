<template>
  <div id="app">
    <header>
      <div class="logo">
        <router-link to='/'>
          <span class="logo1">Penny's</span>
          <span class="logo2">Website</span>
        </router-link>

        <div class="headerItem">
          <nav>
            <ul>
              <li><router-link to='/'><span>主页</span></router-link></li>
              <li><router-link to='/blogs'><span>文章</span></router-link></li>
              <li><router-link to='/about'><span>关于</span></router-link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
      data(){
        return{

        }
      },
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
html,body{
  margin:0;
  padding: 0;
}
header{
  width: 100%;
  height: 55px;
  border-bottom: 1px solid #EEEEEE;
}

</style>
