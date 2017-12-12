<template>
  <div class="user">
    <h1>Users</h1>
    <!--添加用户信息-->
    <form v-on:submit="addUser">
      <input type="text" v-model="newUser.name" placeholder="Enter Name">
      <input type="text" v-model="newUser.email" placeholder="Enter Email">
      <input type="submit" value="Submit">
    </form>
    <!--展示用户信息-->
    <ul>
      <li v-for="user in users">
        <input type="checkbox" class="toggle" v-model="user.contacted">
        <span :class="{contacted:user.contacted}">
          {{user.name}} : {{user.email}}
          <button v-on:click="delUser(user)">x</button>
        </span>

      </li>
    </ul>
  </div>
</template>
<script>
  export default {//为了外部能够调用
    name: "user", //和组件名称一直，如上文中的test

    data() {
      return{
        newUser:{},
        users:[
          {
            name: "Heimer Wu",
            email: "heimer@gamil.com",
            contacted:false
          },
          {
            name: "Herry Wu",
            email: "herry@gamil.com",
            contacted:false
          },
          {
            name: "Emily Wu",
            email: "emily@gamil.com",
            contacted:false
          }
        ]

      }
    },
    methods:{
      addUser:function (e) {
        this.users.push({
          name: this.newUser.name,
          email: this.newUser.email,
          contacted: this.newUser.contacted
        });
        e.preventDefault()
      },
      delUser:function (user) {
        this.users.splice(this.users.indexOf(user),1)
      }

    },
  }

</script>


<!--scoped只会影响当前组件的部分，不影响外部-->
<style scoped>
  .contacted{
    text-decoration:line-through;
  }

</style>
