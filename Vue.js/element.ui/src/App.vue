<template>
  <div id="app">
    <el-container>
      <el-header>
        <div class="navbar-icon">
          <img class="navbar-img" src="./assets/image/icon.png">
        </div>
        <div class="sidebar-collapse" :class="!isCollapse?'':'active'" @click="changeCollapse"><i class="el-icon-menu"></i></div>
        <div class="navbar-account">
          <div class="user-info">whl2826746721@qq.com</div>
          <div class="user-config"><i class="el-icon-setting"></i></div>
        </div>
      </el-header>
      <el-container class="main-container">
        <el-aside>
          <el-menu default-active="2" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
              </template>
              <el-menu-item index="1-3">选项3</el-menu-item>
              <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
                <el-menu-item index="1-4-2">选项2</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
              </template>
              <el-menu-item index="5-3">选项3</el-menu-item>
              <el-submenu index="5-4">
                <span slot="title">选项4</span>
                <el-menu-item index="5-4-1">选项1</el-menu-item>
                <el-menu-item index="5-4-2">选项2</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    changeCollapse () {
      this.isCollapse = !this.isCollapse
    }
  }
}

</script>
<style lang="stylus">
@import '~assets/stylus/variabled.styl'
@import '~assets/stylus/mixin.styl'
.el-header
  background: $color-background
  height: 45px !important
  min-height: 45px
  display: flex
  align-items:center
  padding: 0px 8px
  border-bottom: solid 1px $color-border
  .navbar-icon
    width: 180px
    height: 45px
    overflow: hidden
    .navbar-img
      width: 100%
      height: 100%
  .sidebar-collapse
    width: 45px
    line-height: 45px
    text-align: center
    font-size: 18px
    cursor: pointer
    &.active
      box-shadow: 0 0 20px rgba(45, 195, 232, 0.5)
  .navbar-account
    display: flex
    flex: 1
    justify-content: flex-end
    align-items:center
    .user-info
      line-height: 45px
      max-width: 120px
      no-wrap()
    .user-config
      width: 45px
      line-height: 45px
      text-align: center
      font-size: 18px
.main-container
  position: absolute
  top: 45px
  left: 0px
  right: 0px
  bottom: 0px
  .el-aside
    width: auto !important
    border-right: solid 1px $color-border
    .el-menu
      background-color: $color-background
      border-right: none
      width: 233px !important
      &.el-menu--collapse
        width: 60px !important
      .el-submenu__title,.el-menu-item
        &:hover
          background: $color-theme
          color: $color-text
          i
            color: $color-text
      .el-submenu__title
        // padding-left: 8px !important
      .el-menu-item
        &.is-active
          color: $color-theme
          &:hover
            color: $color-text
  .el-main
    padding: 10px
</style>
