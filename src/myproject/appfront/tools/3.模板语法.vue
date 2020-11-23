
<script>
//========1.插值=============================================//

//1.文本    
//{{msg}}   v-test="msg" v-once(值不会改变)

//2.html    
//  html=<p sytle='color:red'>this is red.</p>   <div v-html="html"/>
//  v-html 只会解释 html，字符串，不会解析 vue语法
//  绝不要对用户提供的内容使用插值-xss攻击

//3.属性
//HTML属性使用 v-bind:属性=
v-bind:id='xxx'  v-bind:disable='false'

//4.表达式

//========2.指令=============================================//


</script>


