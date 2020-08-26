<template>
  <main>
    <div class="main">
      <h2>Login</h2>
      <span class="sp1">With</span>
      <div class="social">
        <div class="bod"><img src="https://img.icons8.com/color/48/000000/google-logo.png" /></div>
        <div class="bod"><img src="https://img.icons8.com/fluent/48/000000/instagram-new.png" /></div>
        <div class="bod"><img src="https://img.icons8.com/fluent/48/000000/twitter.png" /></div>
      </div>

<span class="sp2">or</span>
      <form @submit.prevent="handleSub" action="">
        <div class="err">{{error}}</div>
        <div>
          <input type="text" v-model="Email" placeholder="Email"/>
        </div>
        <div>
          <input type="text" v-model="Password" placeholder="Password"/>
        </div>
        <div class="spc">
          <span class="sp"> <router-link to="/login">Create Account</router-link> </span>
          <span class="sp"> Forget password</span>
        </div>

        <button  type="submit">Submit</button>
      </form>
    </div>
  </main>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth';
  export default {
    data() {
      return {
           Email:'',
        Password:'',
        error:''
      };
    },
    methods: {
   handleSub() {
     console.log(this.Email, this.Password)
        firebase
        .auth()
        .signInWithEmailAndPassword(this.Email, this.Password)
        .then(
          ()=>{
             this.$router.go({path:'/home'})
          }
         
        )
        .catch((error)=> {
          console.log(error.message) 
          this.error = error.message
});
      }
    }
  };
</script>

<style scoped>
.err{
  color: red;
  font-size: 12px;
}
a{
  text-decoration: none;
}
  .spc {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px !important;
  }
  .sp1 {
    font-size: 0.8rem;
    word-spacing: normal;
    letter-spacing: normal;
    color: var(--primary-color);
    margin-bottom: 15px !important;
  }
  .sp2 {
    font-size: 0.8rem;
    word-spacing: normal;
    letter-spacing: normal;
    color: var(--primary-color);
    margin-top: 20px !important;
  }
  .sp {
    font-size: 0.6rem;
    word-spacing: normal;
    letter-spacing: normal;
    color: var(--primary-color);
    cursor:pointer
  }
  button {
    margin: 5px 0px !important;
    padding: 0.8rem;
    background-color: var(--primary-color);
    outline: none;
    border-radius: 5px;
    border: transparent;
    width: fit-content;
    color: white !important;
  }
  button:hover {
    padding: 0.8rem;
    color: var(--primary-color) !important;
    background-color: transparent;
    outline: none;
    border-radius: 5px;
    border: 1px solid var(--background-color);
  }
  form {
    margin-top: 3rem !important;
    width: fit-content;
  }
  input {
    padding: 7px;
    margin-bottom: 15px !important;
    outline: none;
    border: none;
    border-bottom: 1px solid grey;
  }
  input:focus {
    outline: none;
    border: none;
    border-bottom: 2px solid var(--background-color);
  }
  img {
    max-width: 100%;
    height: auto;
  }
  .bod {
    border: 1px solid black;
    width: 30px;
    height: 30px;
    margin: 0px 3px !important;
    border-radius: 15%;
    padding: 2px;
  }
  .social {
    display: flex;
    justify-content: center;
  }

  * {
    margin: 0 !important;
    transition: 0.6s linear;
  }

  main {
    background-color: white;
    height: 100vh;
    width: 87vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    letter-spacing: 1px;
    word-spacing: 0.4rem;
  }

  main p {
    padding: 5px;
  }
  main h2 {
    color: var(--primary-color);
    font-size: 2.1rem;
    font-weight: 600 !important;
    margin: 1rem 0rem !important;
  }

  @media screen and (max-width: 813px) {
    body {
      overflow: auto;
    }
    main {
      width: 100vw;
      overflow-y: auto;
    }
    .main {
      display: flex;
      flex-direction: column;
      align-items: center;
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
