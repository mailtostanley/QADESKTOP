<template>
  <div id='table_view'>
    <div id="menu_view">

      <mu-list class='inside_list'>
           
        <router-link to='/personal/index/chart'>
            <mu-list-item class='index_name' title='行情中心'></mu-list-item>
        </router-link>

        <router-link to='/personal/account/reset_password'>
            <mu-list-item class='index_name' title='交易'></mu-list-item>
        </router-link>
        </mu-list>

  </div>
  <div id="list_view">
      <router-view></router-view>
  </div>
  <div id="charts_view">
      <router-view></router-view>
  </div>
  </div>
</template>

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

.index_name{
  width: 20%;
}

.mu-item-wrapper{
  width:100%;
}
  

</style>