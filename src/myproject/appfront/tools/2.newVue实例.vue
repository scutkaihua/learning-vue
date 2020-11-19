//一个典型的Vue实例
<!--参考资料
  1.vue 对象参数 https://www.jianshu.com/p/cf2611ed1b1f
  2.vue 基础知识 https://cn.vuejs.org/v2/guide/custom-directive.html
!-->
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
        directives:{//2.自定义指令  用法  < el - button @click='editClick' type = "primary"  v-test  > 编辑</el - button >
            'test':function(el,binding,vnode){
                el.style.border = "1px solid red";
            }
        },
        components:{//3.注册组件: 局部注册组件，注册后的组件只有在该实例作用域下有效,组件中也可以包括组件
            HelloWorld
            },
        //========杂项=============================================//
        name:'test',        //允许组件模板递归地调用自身。注意，组件在全局用 Vue.component() 注册时，全局 ID 自动作为组件的 name
        parent:HelloWorld,  //指定父实例   子实例可以用 this.$parent 访问父实例，子实例被推入父实例的 $children 数组中
        mixins:[HelloWorld],//合并多个组件，多继承,  优先使用当前组件的data与方法,watch/HOOKS 生命周期钩子=>合并成数组，先调用 mixins/extends,再调用当前组件的
        extends:HelloWorld, //扩展单文件组件,单继承，合并方式与mixins相同
        delimiters:['${','}'],//修改插值的符号为 ${msg}, 默认为 {{msg}}
        functional:true,    //使组件无状态（没有 data ）和无实例（没有 this 上下文）。他们用一个简单的 render 函数返回虚拟节点使他们更容易渲染。
                            //没有生命周期，没有实例，只能看作是函数集构成的类
        //========生命周期钩子=====================================//
        beforeCreate:function(){},//1.创建前data,methods,watcher,dom 无
        created:function(){},     //2.已创建data,methods,watcher,有 dom 无
        beforeMount:function(){}, //3.加载前data,methods,watcher,dom 有
        mounted:function(){},     //4.已加载data,methods,watcher,dom 有,html渲染完成
        beforeUpdate:function(){},//5.更新前,data已改变,dom未改变,html未更新
        updated:function(){},     //6.已更新,data已改变,dom已更新,html已更新
        beforeDestroy:function(){},//7.销毁前,数据不变
        destroyed:function(){},   //8.销毁后,外部销毁:v-if='show',销毁组件,销毁dom   内部销毁:this.$destory(),销毁组件,保留dom

    }
);
</script>
