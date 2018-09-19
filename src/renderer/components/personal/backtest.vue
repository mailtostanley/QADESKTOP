<template>
  <div id='acc'>
      <h1>> BACKTEST</h1>
      <!-- <div  class='inside_list'>
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
        </div> -->
        <div class='left_side'>
            <mu-table :height="height">


            <mu-thead  slot="header">
              <mu-tr>
                <mu-th>group</mu-th>
                <mu-th>strategy</mu-th>
                <mu-th>start</mu-th>
                <mu-th>end</mu-th>
                <mu-th>annualized_returns</mu-th>
              </mu-tr>
            </mu-thead>
            <template v-for="item in items">
                <mu-tbody>
                    <mu-tr>
                        <mu-td><router-link :to="{ name:'history',params: {id:item['account_cookie']}}">{{ item['portfolio_cookie']}}</router-link></mu-td>
                        <mu-td><router-link :to="{ name:'history',params: {id:item['account_cookie']}}">{{ item['account_cookie']}}</router-link></mu-td>
                        <mu-td>{{ item['start_time']}}</mu-td>
                        <mu-td>{{ item['end_time']}}</mu-td>
                        <mu-td>{{ item['annualized_returns']}}</mu-td>

                    </mu-tr>
                </mu-tbody>

          </template>

        </mu-table>
        </div>

        <div id='viewx'>
          <router-view>
          </router-view>
        </div>

  </div>

  
</template>

<script>
export default {
  data () {
    return {
      height: '1000px',
      user: sessionStorage.user,
      items: [{
        'user_cookie': 'admin',
        'portfolio_cookie': 'macd_test',
        'account_cookie': 'future fast',
        'strategy': 'test_strategy',
        'start_time': '2017-12-01',
        'end_time': '2018-09-15',
        'annualized_returns': '35%'
      }, {
        'user_cookie': 'admin',
        'portfolio_cookie': 'macd_test',
        'account_cookie': 'macd_x',
        'strategy': 'test_strategy',
        'start_time': '2017-12-01',
        'end_time': '2018-09-15',
        'annualized_returns': '35%'
      }, {
        'user_cookie': 'admin',
        'portfolio_cookie': 'macd_test',
        'account_cookie': 'macd_x',
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
#viewx {
  padding-left: 100px;
  width: 1200px;
  height: 1000px;
  display: inline-block;
}
.mu-item-content {
  font-size: 18px;
  text-align: middle;
  display: inline;
}
.inside_list {
  width: 200px;
  height: 1000px;
  display: block;
}
.left_side {

  width:500px;
  height: 1000px;
  display: block;
  float: left;
}
.mu-table, .mu-tr, .mu-td{
    background-color: rgb(52, 52, 52);
    color: white;
}

</style>