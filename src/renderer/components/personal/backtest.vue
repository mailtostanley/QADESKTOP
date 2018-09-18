<template>
  <div id='acc'>
      <h1>> BACKTEST</h1>
      <div  class='inside_list'>
        <mu-list>
        <router-link :to="{ name:'history',params: {id:cookie}}">
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
        <div class='right_side'>
            <mu-table :height="height">


            <mu-thead  slot="header">
              <mu-tr>
                <mu-th>strategy</mu-th>
                <mu-th>start</mu-th>
                <mu-th>end</mu-th>
                <mu-th>annualized_returns</mu-th>
              </mu-tr>
            </mu-thead>
            <template v-for="item in items">
                <mu-tbody>
                    <mu-tr>

                        <mu-td><router-link :to="{ name:'history',params: {id:item['account_cookie']}}">{{ item['strategy']}}</router-link></mu-td>
                        <mu-td>{{ item['start_time']}}</mu-td>
                        <mu-td>{{ item['end_time']}}</mu-td>
                        <mu-td>{{ item['annualized_returns']}}</mu-td>

                    </mu-tr>
                </mu-tbody>

          </template>

        </mu-table>
        </div>

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
      height: '80px',
      user: sessionStorage.user,
      items: [{
        'user_cookie': 'admin',
        'portfolio_cookie': 'macd_test',
        'account_cookie': 'macd_s',
        'strategy': 'test_strategy',
        'start_time': '2017-12-01',
        'end_time': '2018-09-15',
        'annualized_returns': '35%'
      }]
    }
  }
}
</script>




<style lang="css">
#views {
  width: 1100px;
  height: 1000px;
  display: inline-block;
  float: right;
}
.mu-item-content {
  font-size: 18px;
  text-align: middle;
  display: inline;
}
.inside_list {
  width: 200px;
  height: 1000px;
  float: left;
  display: inline-block;
}
.right_side {
  width: 1000px;
  height: 1000px;
  float: left;
  display: inline-block;
}
.mu-table, .mu-tr, .mu-td{
    background-color: rgb(52, 52, 52);
    color: white;
}

</style>