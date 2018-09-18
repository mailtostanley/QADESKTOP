<template>
  <div id='acc'>
      <h1>> BACKTEST</h1>
      <div  class='inside_list'>
        <mu-list>
        <router-link to='/personal/backtest/history'>
            <mu-list-item title='历史记录'></mu-list-item>
        </router-link>

        <router-link to='/personal/backtest/strategy'>
            <mu-list-item title='策略查看'></mu-list-item>
        </router-link>
        <router-link to='/personal/backtest/assets'>
            <mu-list-item title='资金曲线'></mu-list-item>
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
    width:1100px;
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