<script setup>
/**
 *
 **/
const changePlaylistId = () => {

}
</script>

<template>
  <el-aside width="210px">

    <el-menu default-active="/section/Personalized" :router="true">
      <el-menu-item-group>
        <template #title>推荐</template>
        <el-menu-item index="/section/Personalized">发现音乐</el-menu-item>
        <el-menu-item index="/video">视频</el-menu-item>
      </el-menu-item-group>

      <el-menu-item-group>
        <template #title>我的音乐</template>
        <el-menu-item index="/cloudMusic">我的音乐云盘</el-menu-item>
      </el-menu-item-group>

      <el-menu-item-group>
        <template #title>创建的歌单</template>
<!--        <el-menu-item :index="'/songlist/'+item.id" @click="changePlaylistId(item.id)"
                      v-for="item in currentUserPlayList"
                      v-if="!item.subscribed">{{item.name}}
        </el-menu-item>-->
      </el-menu-item-group>

      <el-menu-item-group>
        <template #title>收藏的歌单</template>
<!--        <el-menu-item :index="'/songlist/'+item.id" @click="changePlaylistId(item.id)"
                      v-for="item in currentUserPlayList"
                      v-if="item.subscribed">{{item.name}}
        </el-menu-item>-->
      </el-menu-item-group>

    </el-menu>

  </el-aside>
</template>

<style scoped lang="scss">
.el-aside {
  //position: fixed;
}

.el-menu-item {
  --el-menu-active-color: var(--el-color-danger);
}

.el-menu-item-group__title {
  padding-left: 5px !important;
  margin-top: 7px;
}

.el-menu {
  position: fixed;
  width: 210px;
  height: 100%;
}
</style>