<template>
  <main>
    <div class="main">
      <h2>Welcome</h2>
      <h4>You are Signed in as <span class="price">{{currentUser}}</span></h4>
      <div class="con">
          <router-link to="/tutor"
        ><button><b>Find a Tutor</b></button></router-link
      >
          <router-link to="/profile"
        ><button><b>Profile</b></button></router-link
      >
          <router-link to="/Message"
        ><button><b>Messsages</b></button></router-link
      >
          <router-link to="/contact"
        ><button><b>Contact</b></button></router-link
      >
<button class="pricey" @click="signOut"><b>sign Out</b></button>
      
      </div>
    
    </div>
  </main>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth';
  export default {
    data(){
      return{
        currentUser:''
      }
    },
    created(){
      if(firebase.auth().currentUser){
        this.currentUser = firebase.auth().currentUser.email
      }
    },
    methods:{
      signOut(){
        firebase
        .auth()
        .signOut()
        .then(()=>{
          this.$router.go({path:'/'})
        })
      }
    }
  };
</script>

<style scoped>
.con{
  margin-top: 5rem !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}
main button:hover {
  text-transform: uppercase;
  margin: 5px 0px !important;
  padding: 1rem;
  color: var(--primary-color);
  background-color:transparent;
  outline: none;
  border-radius: 5px;
  border: 1px solid var(--background-color) ;
   width: fit-content;
}

main button {
  margin: 5px 0px !important;
  padding: 1rem;
  color: white;
  background-color: var(--primary-color);
  outline: none;
  border-radius: 5px;
  border: transparent;
  width: fit-content;
}
  .price {
    color: tomato;
  }
  .pricey {
    color: tomato;
    border: 1px solid tomato;
  }
  ul {
    text-align: start !important;
  }
  * {
    margin: 0 !important;
    transition: 0.3s linear;
  }

  main {
    background-color: white;
    height: 100vh;
    width: 87vw;
    display: flex;
    flex-direction: column;
    text-align: center;
    letter-spacing: 1px;
    word-spacing: 0.4rem;
  }

  main h2 {
    color: var(--primary-color);
    font-size: 1.6rem;
    font-weight: 600 !important;
    margin: 1rem 0rem !important;
  }

  @media screen and (max-width: 813px) {
    main button:hover {
  border: 1px solid black ;
}
    body {
      overflow: auto;
          
    }
    main {
      width: 100vw;
      overflow-y: auto;
      background-color: var(--background-color);
    }
    .main {
      width: 100vw;
      margin-bottom: 4rem !important;
      overflow-y: auto;
    }
  }

  @media screen and (max-width: 613px) {
    main {
      overflow-y: auto;
    }
    .main {
      margin-bottom: 4rem !important;
      overflow-y: auto;
    }
  }
</style>
