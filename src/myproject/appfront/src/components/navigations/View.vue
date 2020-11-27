<template>
  <div class="homeview">
    <el-row>
      <el-col :span="4">
        <!-- 左侧导航栏 -->
        <slider></slider>
      </el-col>
      <el-col :span='20'>
        <!-- header -->
        <nav-top></nav-top>
        <!-- 内容区 -->
        <div class="app-wrap">
          <!-- 此处放置el-tabs代码 -->
          <div>
            <el-tabs v-model="activeIndex" type="border-card" closable v-if="openTab.length" @tab-click='tabClick' @tab-remove='tabRemove'>
              <el-tab-pane :key="item.name" v-for="(item, index) in openTab" :label="item.name" :name="item.route" />
            </el-tabs>
          </div>
          <!--此处放置页面具体内容-->
          <div class="content-wrap">
            <router-view />
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import Slider from '@/components/navigations/Slider.vue'
import navTop from '@/components/navigations/Header.vue'
export default {
  name: 'homeview',
  components: {
    Slider,
    navTop,
  },
  data() {
    return {}
  },
  methods: {
    // tab标签点击时，切换相应的路由
    tabClick(tab) {
      console.log('tab', tab)
      console.log('active', this.activeIndex)
      this.$router.push({ path: this.activeIndex })
    },
    // 移除tab标签
    tabRemove(targetName) {
      console.log('tabRemove', targetName)
      // 首页不删
      if (targetName === '/' || targetName === '/main') {
        return
      }
      this.$store.commit('delete_tabs', targetName)
      if (this.activeIndex === targetName) {
        // 设置当前激活的路由
        if (this.openTab && this.openTab.length >= 1) {
          console.log(
            '=============',
            this.openTab[this.openTab.length - 1].route
          )
          this.$store.commit(
            'set_active_index',
            this.openTab[this.openTab.length - 1].route
          )
          this.$router.push({ path: this.activeIndex })
        } else {
          this.$router.push({ path: '/' })
        }
      }
    }
  },
  mounted() {
    console.log("View Mounted.")
    // 刷新时以当前路由做为tab加入tabs
    // 当前路由不是首页时，添加首页以及另一页到store里，并设置激活状态
    // 当当前路由是首页时，添加首页到store，并设置激活状态
    if (this.$route.path !== '/' && this.$route.path !== '/main') {
      console.log('1')
      this.$store.commit('add_tabs', { route: '/main', name: 'main' })
      this.$store.commit('add_tabs', {
        route: this.$route.path,
        name: this.$route.name
      })
      this.$store.commit('set_active_index', this.$route.path)
    } else {
      console.log('2')
      this.$store.commit('add_tabs', { route: '/main', name: 'main' })
      this.$store.commit('set_active_index', '/main')
      this.$router.push('/')
    }
  },
  computed: {
    openTab() {
      return this.$store.state.openTab
    },
    activeIndex: {
      get() {
        return this.$store.state.activeIndex
      },
      set(val) {
        this.$store.commit('set_active_index', val)
      }
    }
  },
  watch: {
    $route(to, from) {
      //1.已经打开的 ，将其置为active  
      let flag = false
      for (let item of this.openTab) {
        if (item.name === to.name) {
          this.$store.commit('set_active_index', to.path)
          flag = true
          break
        }
      }
      //2.未打开的，将其放入队列里
      if (!flag) {
        this.$store.commit('add_tabs', { route: to.path, name: to.name })
        this.$store.commit('set_active_index', to.path)
      }
    }
  }
}
</script>
<style scoped lang='less'>
.home {
  height: 100vh;
}
.app-wrap {
  padding: 10px;
}
.content-wrap {
  border: 1px solid #dcdff7;
  border-top: none;
}
.el-tabs.el-tabs--border-card {
  box-shadow: none;
  border-bottom: none;
}
</style>
