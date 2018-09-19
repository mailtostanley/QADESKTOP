<template>
  <div>
    <div class="container">
      <mu-raised-button v-on:click='query()' label="成交明细" class="demo-raised-button" primary />
      <router-link :to="{ name:'visual',params: {id:this.message}}">
        <mu-raised-button label="账户表现" class="demo-raised-button" secondary/>
      </router-link>
      
      <router-link :to="{ name:'strategy',params: {id:this.message}}">
        <mu-raised-button label="策略查看" class="demo-raised-button" />
      </router-link>
      <mu-divider />
    </div>
    <mu-table :height="height" :fixedHeader=true :showCheckbox=false>
      <mu-thead>
        <mu-tr>
          <mu-td>Account Name: {{data0}}</mu-td>
        </mu-tr>

        <mu-tr>

          <mu-td>date</mu-td>
          <mu-td>code</mu-td>
          <mu-td>price</mu-td>
          <mu-td>towards</mu-td>
          <mu-td>amounts</mu-td>
          <mu-td>commission</mu-td>
        </mu-tr>
      </mu-thead>
      <template v-for="item in items">
        <mu-tbody>
          <mu-tr>
            <mu-td>{{item[0]}}</mu-td>
            <mu-td>{{item[1]}}</mu-td>
            <mu-td>{{item[2]}}</mu-td>
            <mu-td>{{item[3]}}</mu-td>
            <mu-td>{{item[4]}}</mu-td>
            <mu-td>{{item[7]}}</mu-td>

          </mu-tr>
        </mu-tbody>
      </template>
    </mu-table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      data0: this.$route.params.id,
      height: '800px',
      multiSelectable: true,
      enableSelectAll: false,
      message: this.$route.params.id,
      items: [['2018-08-01', 'RBL8', '4288', '多开', '100', 'xx', 'xxx', '50'],
        ['2018-08-13', 'RBL8', '4250', '多平', '100', 'xx', 'xxx', '70']],
      acc: [''],
      total: 180,
      current: 1,
      showSizeChanger: true
    }
  },

  methods: {
    query () {
      console.log(this.message)
      let val = this.message
      console.log(val)
      axios.get('http://localhost:8010/accounts?account_cookie=' + val)
        .then(response => {
          this.items = response.data['result'][0]['history']
          this.acc = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>


<style>
.container{
    width: 900px;
    display: inline-block;

}
</style>
