<template>
  <div id='acc'>
      <h1>> account</h1>
      <mu-list class='inside_list'>
           
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
        <div id='views'>
          <router-view>
          </router-view>
        </div>

  </div>

  
</template>
<style lang="css">

#views{
    width:75%;
    height: 100%;
    float: right;
}
.mu-item-content {
    font-size: 18px;
    text-align: middle;
  }
.inside_list{
   width: 20%;
   height: 100%;
   float: left;
}
</style>