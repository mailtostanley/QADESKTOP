<template>
  <div id='personal'>
    <!-- <div class='welcome'>
      <mu-list>
        <router-link to='/personal/index'>
          <mu-list-item title='个人中心'></mu-list-item>
        </router-link>
        <router-link to='/personal/block'>
          <mu-list-item title='版块监控'></mu-list-item>
        </router-link>


        <router-link to='/personal/account'>
          <mu-list-item title='账户管理'></mu-list-item>
        </router-link>
        <mu-divider/>
        <router-link to='/personal/setting'>
          <mu-list-item title='设置'></mu-list-item>
        </router-link>
      </mu-list>
    </div> -->
    <div id='view'>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>


</script>
<style lang='css'>
  #personal {
    position: relative;
    width: 100%;
    height: 100%;
    display: block;
  }

  .welcome {
    margin-top: 2%;
    margin-right: 3%;
    width: 18%;
    height: 100%;
    float: left;
    display: inline-block;
  }

  #view {
    margin-top: 2%;

    height: 100%;
    float: left;
    display: inline-block;
  }

  .mu-item-content {
    font-size: 18px;
    text-align: middle;
  }

</style>
