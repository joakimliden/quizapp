<template>
  <div class="home">

    <header>
      <button v-if="userState === 'default'" class="btn btn-primary-user" @click="changeUserState('edit')">Users</button>
      <button v-else class="btn btn-red-user" @click="changeUserState('default')">Back</button>

      <div v-if="userState === 'edit'">
        <form method="POST" id="formUser" class="new-user">
          <div>
            <input type="text" id="userName" name="userName" v-model="formData.userName">
            <input
                type="submit"
                class="btn btn-primary"
                value="Add"
                placeholder="New User"
            >
          </div>
        </form>

<!--        <form v-on:submit.prevent="addUser">
          <div class="new-user">
            <input
                v-model="newUserName"
                placeholder="New User"
            >
            <button class="btn btn-primary">Add</button>
          </div>
        </form>-->

<!--        <ul class="user-list">
          <li
              v-for="author in authors"
              @click="setAuthor(author)"
              :class="[author.active ? 'active' : '']"
          >
            {{ author.name }}
          </li>
        </ul>-->
      </div>

    </header>

    <img class="home-img" alt="City Quiz" src="../assets/city-quiz.jpg">
    <HelloWorld msg="Welcome to Our City Quiz App!"/>
    <ul>
      <h2>Top 3 Highest Scores</h2>
      <li v-for="user in user" v-bind:key="user.userId">{{ user.highScore }} {{ user.userName }}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data() {
    return {
      userState: 'default',
      newUserName: '',
      user: [],
      formData: {
        userName: ''
      }
    }
  },
  async created() {
    // POST request using fetch with async/await
    const requestOptions = {
      method: "POST",
      headers: {
      //  "Content-Type": "application/json"
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify({
        userName: '',
        highScore: 0,
        userId: 0
      })
    };
    const response = await fetch('http://127.0.0.1:3000/api/user/', requestOptions);
    const data = await response.json();
    this.userName = data.userName;
  },
  mounted(){
    fetch('http://127.0.0.1:3000/api/user/')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data.user);
          this.user = data.user;
        });
  },
  methods: {
    changeUserState: function (newUserState) {
      this.userState = newUserState
    }

    /*async postData(url='', data= {}) {
      const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
         // 'Content-Type': 'application/json'
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify({userName:userName, highScore:0}) // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON response into native JavaScript objects
    }*/
  },
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
.btn-primary-user {
  position: absolute;
  top: 0;
  right: 0;
  background: #6CB2EB;
}

.btn-primary-user:hover {
  background: #3490DC;
  color: #fff;
}

.btn-red-user {
  position: absolute;
  top: 0;
  right: 0;
  background: #EF5753;
}

.btn-red-user:hover {
  background: #E3342F;
  color: #fff;
}

.new-user {
  position: absolute;
  top: 0;
  right: 60px;
}
</style>
