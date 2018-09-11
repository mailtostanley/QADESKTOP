<template>
  <div id='table_view'>
    <div id="menu_view">
    <mu-paper :z-depth="1" class="demo-list-wrap">

      <mu-list>
        <mu-list-item button :ripple="false">
          <mu-list-item-title>SET</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button :ripple="false">

          <mu-list-item-title>Stared</mu-list-item-title>
        </mu-list-item>

      </mu-list>
    </mu-paper>
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
.demo-list-wrap {
  width: 100%;
  height: 100%;
}

#view {
  width: 100%;
  height: 100%;
  float: right;
}

#menu_view {
  width: 5%;
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
</style>