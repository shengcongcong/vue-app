<script setup>
import { ref } from 'vue'

const isCollapse = ref(false)
const activeMenu = ref('/back')
const searchQuery = ref('')
const userInfo = ref({
  name: 'admin',
  avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
})
</script>

<template>
  <div class="backend-layout">
    <el-container style="height: 100vh; overflow: hidden;">
      <!-- 左侧边栏 -->
      <el-aside :width="isCollapse ? '64px' : '200px'" style="background-color: #001529; color: #fff;">
        <div class="logo" :style="{ width: isCollapse ? '64px' : '200px' }">
          <el-image 
            src="https://element-plus.org/images/element-plus-logo.svg" 
            :size="isCollapse ? 32 : 40" 
            fit="contain"
          />
          <span v-if="!isCollapse" class="logo-text">vue3-element-admin</span>
        </div>
        <el-menu
          default-active="/back"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          background-color="#001529"
          text-color="#fff"
          active-text-color="#409EFF"
          router
        >
          <el-menu-item index="/back">
            <el-icon><HomeFilled /></el-icon>
            <template #title>首页</template>
          </el-menu-item>
          
          <el-sub-menu index="platform">
            <template #title>
              <el-icon><Setting /></el-icon>
              <span>平台管理</span>
            </template>
            <el-menu-item index="/back/tenant">租户管理</el-menu-item>
            <el-menu-item index="/back/tenant-package">租户套餐</el-menu-item>
            <el-menu-item index="/back/menu">菜单管理</el-menu-item>
            <el-menu-item index="/back/system-config">系统配置</el-menu-item>
          </el-sub-menu>
          
          <el-sub-menu index="system">
            <template #title>
              <el-icon><Tools /></el-icon>
              <span>系统管理</span>
            </template>
            <el-menu-item index="/back/code-generator">代码生成</el-menu-item>
          </el-sub-menu>
          
          <el-sub-menu index="docs">
            <template #title>
              <el-icon><Document /></el-icon>
              <span>平台文档</span>
            </template>
          </el-sub-menu>
          
          <el-menu-item index="/back/apifox">
            <el-icon><Link /></el-icon>
            <template #title>Apifox</template>
          </el-menu-item>
          
          <el-sub-menu index="components">
            <template #title>
              <el-icon><Grid /></el-icon>
              <span>组件封装</span>
            </template>
          </el-sub-menu>
          
          <el-sub-menu index="demo">
            <template #title>
              <el-icon><Star /></el-icon>
              <span>功能演示</span>
            </template>
          </el-sub-menu>
          
          <el-sub-menu index="multi-level">
            <template #title>
              <el-icon><Menu /></el-icon>
              <span>多级菜单</span>
            </template>
          </el-sub-menu>
          
          <el-sub-menu index="route-params">
            <template #title>
              <el-icon><Right /></el-icon>
              <span>路由参数</span>
            </template>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      
      <!-- 右侧内容区 -->
      <el-container>
        <!-- 头部 -->
        <el-header style="height: 60px; background-color: #fff; border-bottom: 1px solid #e4e7ed; display: flex; align-items: center; justify-content: space-between;">
          <!-- 左侧：折叠按钮和面包屑 -->
          <div class="header-left">
            <el-button 
              type="text" 
              @click="isCollapse = !isCollapse" 
              style="margin-right: 16px;" 
            >
              <el-icon v-if="isCollapse"><Expand /></el-icon>
              <el-icon v-else><Fold /></el-icon>
            </el-button>
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/back' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/back/platform' }">平台管理</el-breadcrumb-item>
              <el-breadcrumb-item>租户管理</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          
          <!-- 右侧：搜索框、功能按钮和用户信息 -->
          <div class="header-right">
            <el-input
              v-model="searchQuery"
              placeholder="搜索菜单 Ctrl+K"
              prefix-icon="Search"
              style="width: 200px; margin-right: 16px;"
            />
            
            <el-button type="text" style="margin-right: 16px;">
              <el-icon><Grid /></el-icon>
            </el-button>
            
            <el-button type="text" style="margin-right: 16px;">
              <el-icon><Moon /></el-icon>
            </el-button>
            
            <el-button type="text" style="margin-right: 16px;">
              <el-icon><Bell /></el-icon>
            </el-button>
            
            <el-dropdown>
              <div class="user-info">
                <el-avatar :size="32" :src="userInfo.avatar"></el-avatar>
                <span style="margin-left: 8px;">{{ userInfo.name }}</span>
                <el-icon style="margin-left: 4px;"><ArrowDown /></el-icon>
              </div>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>个人中心</el-dropdown-item>
                  <el-dropdown-item>退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </el-header>
        
        <!-- 主内容区 -->
        <el-main style="padding: 20px; overflow-y: auto;">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.backend-layout {
  height: 100vh;
  overflow: hidden;
}

.logo {
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  background-color: #001529;
  border-bottom: 1px solid #002140;
  transition: width 0.3s;
}

.logo-text {
  margin-left: 12px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  transition: opacity 0.3s;
}

.header-left {
  display: flex;
  align-items: center;
}

.header-right {
  display: flex;
  align-items: center;
}

.user-info {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 4px 12px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.user-info:hover {
  background-color: #f5f7fa;
}

.el-menu {
  border-right: none;
}

.el-menu-item {
  height: 48px;
  line-height: 48px;
}

.el-sub-menu__title {
  height: 48px;
  line-height: 48px;
}
</style>

<script>
// 导入Element Plus图标
import {
  HomeFilled,
  Setting,
  Tools,
  Document,
  Link,
  Grid,
  Star,
  Menu,
  Right,
  Expand,
  Fold,
  Search,
  Moon,
  Bell,
  ArrowDown
} from '@element-plus/icons-vue'

export default {
  name: 'BackendLayout',
  components: {
    HomeFilled,
    Setting,
    Tools,
    Document,
    Link,
    Grid,
    Star,
    Menu,
    Right,
    Expand,
    Fold,
    Search,
    Moon,
    Bell,
    ArrowDown
  }
}
</script>
