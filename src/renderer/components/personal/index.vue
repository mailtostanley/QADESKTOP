<template>
  <div >
      <h1>>hi! {{user}}</h1>
      <mu-list class='inside_list'>
           


        <router-link to='/personal/index/chart'>
            <mu-list-item title='行情中心'></mu-list-item>
        </router-link>
        <router-link to='/personal/account/bind'>
            <mu-list-item title='绑定账户'></mu-list-item>
        </router-link>
        </mu-list>
        <div id='views'>
          <router-view>
          </router-view>
        </div>
      
  </div>


</template>

<script>
export default {
  data () {
    return {
      user: sessionStorage.user
    }
  }
}
</script>



<style>
body{
  background-color: rgb(52, 52, 52);
  color: white;
}
.mu-list-item{
  background-color: rgb(52, 52, 52);
  text-align: center;
  align:center;
}
.mu-item{
  background-color: rgb(52, 52, 52);
}
.mu-item-title{
  background-color: rgb(52, 52, 52);
  color: white;
}

.demo-list-wrap {
  width: 100%;
  height: 100%;
}
#view {
  width: 100%;
  height: 100%;
  float: right;
}

#table_view {
  width: 100%;
  height: 100%;
}
#menu_view {
  width: 20%;
  height: 100%;
}
#list_view {
  width: 15%;
  height: 100%;
}
#charts_view {
  width: 80%;
  height: 100%;
}

.inside_list{
   width: 20%;
   height: 100%;
   float: left;
}

.mu-item-wrapper{
  width:100%;
}
  
#views{
    width:80%;
    height: 100%;
    float: right;
}
.mu-item-content {
    font-size: 18px;
    text-align: middle;
  }
.inside_list{
   width: 15%;
   height: 100%;
   float: left;
}
</style>