<template>
  <div id='acc'>
      <h1>> account</h1>
      <div  class='inside_list'>
        <mu-list>
        <router-link to='/personal/account/bind'>
            <mu-list-item title='绑定账户'></mu-list-item>
        </router-link>

        <router-link to='/personal/account/reset_password'>
            <mu-list-item title='重置密码'></mu-list-item>
        </router-link>
        <router-link to='/personal/index/chart'>
            <mu-list-item title='行情中心'></mu-list-item>
        </router-link>
        
        </mu-list>
        </div>
    
        <div id='views'>
          <router-view>
          </router-view>
        </div>

  </div>

  
</template>
<style lang="css">

#views{
    width:750px;
    height: 1000px;
    display: inline-block;
    float: right;
    
}
.mu-item-content {
    font-size: 18px;
    text-align: middle;
    display: inline;
  }
.inside_list{
   width: 200px;
   height: 1000px;
   float: left;
   display: inline-block;
   
}
</style>