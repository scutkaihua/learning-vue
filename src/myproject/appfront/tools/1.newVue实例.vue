//一个典型的Vue实例

import Vue from 'vue'

<script>
const { filter }=require("vue/types/umd");

    myvue = new Vue(
    {
        //========DOM==============================================//
        el: "#id",                 //1.DOM成员,挂载点
        template: "<tag>{{a|dataFormat}}</tag>",   //2.DOM成员，模板
        render: (h) => {h(App)},   //3.DOM成员, 渲染
        //========数据=============================================//
        data() {  //1.data Vue实例的数据对象                  
            return {
                a: 1, b: 1, cc: 1
            }
        },
        methods: {//2.methods Vue实例的方法对象                            
        handleClick() {this.counter++; }
        },
        watch: {  //3.watch 0:变量cc必须定义 1.是观察的动作 2.应用:监听props,$emit或本组件的值执行异步操作               3.无缓存性,传入的值想作为局部变量来使用,直接使用会
            a:function(val){this.cc = this.a + this.b},
            b:function(val){this.cc = this.a + this.b},
            oc(){console.log("oc 发生了改变")} //使用computed中的oc()为中介，监听oc的变化
        },
        computed:{//4.computed 0:变量oc不用定义  1.是计算值     2.应用：就是简化tempalte里面{{}}计算和处理props或$emit的传值  3.具有缓存性，页面重新渲染值不变化,计算属性会立即返回之前的计算结果，而不必再次执行函数
            oc(){ return this.a + this.b}     //ab变化，重新计算
        },
        props:{},   //5.父组件通过props属性向子组件传递数据,数组or对象
        propsData:{},//6.

        //========资源=============================================//
        filter:{    //1.过滤器,多用于格式化  {{msg|dataFormat}}
            dataFormat:function(av){ if(parseFloat(av)<0)av=-parseFloat(av)}
        },

    }
);
</script>
