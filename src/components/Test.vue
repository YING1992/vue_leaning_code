<template>
  <div class="test">
    <!--获取数据-->
    <h1>{{title}}</h1>
    <p>{{user.firstName}}</p>
    <p v-text="user.lastName"></p>

    <!--v-if-->
    <p v-if="showName">{{user.firstName}}</p>
    <!--v-else-->
    <p v-else="showName">Nobody</p>

    <!--v-for-->
    <ul>
      <li v-for="item in items">{{item.title}}</li>
    </ul>

    <!--v-on-->
    <button v-on:click="greet('hello syx')">Say Greeting</button>

    <!--键盘事件-->
    <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit">

    <hr>
    <!--computed 计算属性-->
    <label>Fisrt Name:</label>
    <input type="text" v-model="user.firstName">
    <br>
    <label>Last Name:</label>
    <input type="text" v-model="user.lastName">
    <br>

    <h3>{{fullName}}</h3>

    <!--props 属性-->
    <h2>{{msg}}</h2>


  </div>
</template>
<script>
  export default {//为了外部能够调用
    name: "test", //和组件名称一直，如上文中的test
    props:{
      msg:{
        type:String,
        default:"默认这些文字"
      }
    },
    data() {
      return{
        title:"hello vue",
        user:{
          firstName:"Hemiah",
          lastName:"Wu"
        },
        showName: true,
        items:[
          {title:"item 1"},
          {title:"item 2"},
          {title:"item 3"}
        ]
      }
    },
    methods:{
      greet:function (greeting) {
        alert(greeting)
      },
      pressKey:function () {
        console.log("press key")
      },
      enterHit: function () {
        console.log("send")
      }
    },
    computed: {
      fullName: function () {
        return this.user.firstName+this.user.lastName
      }
    }
  }

</script>

<!--scoped只会影响当前组件的部分，不影响外部-->
<style scoped>


</style>
