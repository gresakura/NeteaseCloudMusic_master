<script setup>
import { ref } from 'vue'

//展示登录的对话框
const loginDialogVisible = ref(false)

//登录的信息
const loginInfo = ref({
  phone: '',
  password: ''
})

//登录的校验规则
const loginInfoRules = {
  phone: [
    {required: true, message: ' ', trigger: 'blur'}
  ],
      password: [
    {required: true, message: ' ', trigger: 'blur'}
  ]
}

//当前用户的用户信息
const currentUserInfo = ref(null)

//搜索条件
const searchData = ref('前前前世')

/**
 * @param
 * 搜索按钮
 **/
const toSearchPage = () => {

}
/**
 *
 **/
const handleLogin = () => {

}
/**
 *
 **/
const logout = () => {

}

</script>

<template>
  <el-header>
    <el-container>
      <img src="@/assets/imgs/logo.png" alt="" class="logo">
      <span>网易QQ</span>

      <!--头部搜索区域-->
      <el-input placeholder="搜索单曲,歌手,视频,歌单" v-model="searchData" size="small" suffix-icon="Search">
        <el-button slot="suffix" class="searchBtn" size="small" @click="toSearchPage"></el-button>
      </el-input>

      <!--右侧登录区域-->
      <div class="rightContainer" style="display: flex">
        <img v-if="currentUserInfo === null" src="@/assets/imgs/userIcon.png" class="userIcon">
        <img v-else :src="currentUserInfo.avatarUrl" class="userIcon">

        <span v-if="currentUserInfo === null" style="cursor:pointer;" @click="handleLogin">
                    未登录
      </span>

        <span v-else>
                    {{currentUserInfo.nickname}}
      </span>
        <el-button type="danger" @click="logout" v-if="currentUserInfo !== null" size="mini"
                   style="height: 50%;margin-top: 10px;margin-left: 5px;">
          退出
        </el-button>
      </div>
    </el-container>

  </el-header>
</template>

<style scoped lang="scss">
.el-header {
  display: flex;
  box-sizing: border-box;
  height: 60px;
  padding: 0 20px;
  flex-shrink: 0;
  background: rgb(198, 47, 47);

  .logo {
    width: 25px;
    height: 25px;
    margin: 15px 10px;
    border-radius: 100px;
  }

  span {
    font-size: 20px;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    font-weight: 500;
    margin-top: 15px;
    color: white;
  }

  .el-input {
    width: 275px;
  }

  ::v-deep .el-input__wrapper {
    opacity: 0.4;
    margin-left: 50px;
    width: 225px;
    height: 25px;
    margin-top: 15px;
    border-radius: 10px;
  }

  .searchBtn {
    opacity: 0;
    position: absolute;
    float: right;
    width: 1px;
    height: 24px;
    left: -3px;
    margin-top: 15px !important;
    border-radius: 60%;
  }
}

.rightContainer {
  margin-left: auto;

  span {
    font-size: 17px;
    color: white;
  }

  .userIcon {
    width: 30px;
    height: 30px;
    margin-top: 13px;
    border-radius: 60%;
    margin-right: 10px;
  }
}

.el-header {
  //position: fixed;
}

.el-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  height: 60px;
  padding: 0 20px;
  background-color: rgb(198, 47, 47);
}
</style>