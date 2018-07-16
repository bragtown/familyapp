
<template>
  <div id="app">
    <BragNav
      :brand = "'Family'" 
      :isLoggedIn="isLoggedIn"  
      :setIsLoggedIn="setIsLoggedIn"
      :leftNavItems = "$router.options.routes"
      :showLogInOption = "true"
      :currentRoute = "$route">
    </BragNav>
    <router-view/>
  </div>
</template>
<script>
import BragNav from 'bragnav';
import {mapMutations, mapGetters} from 'vuex';
export default {
  components: {
    BragNav
  },
  methods:{
    ...mapMutations([
      'setIsLoggedIn'
    ])
  },
  computed:{
    ...mapGetters([
      'isLoggedIn'
    ])
  },
  beforeMount(){
    console.log(this.$router, this.$route);
  }
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
