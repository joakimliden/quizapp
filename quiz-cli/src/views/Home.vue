<template>
  <div class="home">

    <header>
      <button v-if="userState === 'default'" class="btn btn-primary-user" @click="changeUserState('edit')">Users</button>
      <button v-else class="btn btn-red-user" @click="changeUserState('default')">Back</button>

      <div v-if="userState === 'edit'">
        <form v-on:submit.prevent="addUser">
          <div class="new-user">
            <input
                v-model="newUserName"
                placeholder="New User"
            >
            <button class="btn btn-primary">Add</button>
          </div>
        </form>

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
      <li>
        test 1
      </li>
      <li>
        test 2
      </li>
      <li>
        test 3
      </li>
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
      newUserName: ''
    }
  },
  methods: {
    changeUserState: function (newUserState) {
      this.userState = newUserState
    }
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
