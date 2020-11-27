<script>
//================================注释=============================
//一、<template>标签中注释
//    <!-- 注释，单行或多行 -->
//二、<style>标签内注释
    /*
      多行注释
    */
//三、<script>标签内注释
    // 单行注释
    /*
        多行注释
        多行注释
    */

//================================介绍=============================
//1.Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架
    Vue 的核心库只关注视图层

//2.引入vue
    //(1) html添加vue.js
         <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    //(2) vue-cli初始化webpack使用

//3.声明式渲染
    //html文件:
        <div id="app">
            {{ message }}
        </div>
    //vue文件:
        var app = new Vue({
            el: '#app',
            data: {
                message: 'Hello Vue!'
            }
        })

    //其中id='app' 为挂载点  {{message}} 为插值

//4.组件化
    //(1)定义一个组件  定义名为 todo-item 的新组件
        Vue.component('todo-item', {
        template: '<li>这是个待办项</li>'
        })
    //(2)使用组件
        <todo-item></todo-item>
<script>
