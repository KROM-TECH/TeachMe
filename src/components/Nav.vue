<template>
    <aside>
    <ul class="aside nav">
      <li class="logo">

      </li>
    <router-link to="/home" v-if="isLoggedIn"><i class="material-icons-outlined ">home</i><span class="nav-name">Home</span></router-link>
    <router-link to="/" v-if="!isLoggedIn"><i class="material-icons-outlined ">home</i><span class="nav-name">Home</span></router-link>
      <router-link to="/about"><i class="material-icons-outlined ">info</i><span class="nav-name">Info</span></router-link>
      <router-link to="/login" v-if="!isLoggedIn"><i class="material-icons-outlined">perm_identity</i><span class="nav-name">Login</span></router-link>
      <router-link to="/message" v-if="isLoggedIn"><i class="material-icons-outlined">message</i><span class="nav-name">Message</span></router-link>
      <router-link to="/services"><i class="material-icons-outlined">adjust</i><span class="nav-name">Services</span></router-link>
    </ul>
  </aside>
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth'
export default {
data(){
        return{
        isLoggedIn:true,
      }
},
created(){
  if(firebase.auth().currentUser){
    this.isLoggedIn = true;    
  }else{
    this.isLoggedIn = false;
  }
}
}
</script>

<style scoped>
a.router-link-exact-active.router-link-active{
  color:black;
}


.logo {
  display: flex;
  /* flex-direction: row-reverse;   */
  margin-left: 2px !important;
  color: white;
}

.logo img {
  transition: 2s;
}

.logo img:hover {
  transform: rotate(360deg);
}

aside {
  /* background-color: brown; */
  height: 100vh;
  width: 20%;
  padding-top: 15vh;
  margin-left: 3rem;
}

.aside {
  list-style-type: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

a {
  text-decoration: none;
  padding: 1rem;
  color: white ;
  margin: 1rem;
  width: 20vw;
  text-align: center;
  border-radius: 50px 0px 0px 50px;
  font-size: 20px;
  z-index: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: 0.9s;
}

a:hover {
  color: var(--background-color);
  padding: 1rem;
  margin: 1rem;
  background-color: rgba(255, 255, 255);
  width: 20vw;
  text-align: center;
  border-radius: 50px 0px 0px 50px;
  font-size: 20px;
  z-index: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
}





a:first-child:hover {
  font-size: 300px !important;
  background-color: transparent;
}

a .material-icons-outlined {
  font-size: 36px !important;
}

a .nav-name {
  margin-left: 1.5rem;
}

/* media queries */

@media screen and (max-width: 1024px) {

  li:last-child {
    display: none;
  }
  .logo h5 {
    display: none;
  }

}

@media screen and (max-width: 813px) {
  a.router-link-exact-active.router-link-active{
  color:var(--background-color)
}
    a:hover{
    border-radius: 0px ;
  }
  body {
    overflow: hidden;
  }
  .logo img {
    display: none;
  }
  main {
    padding-bottom: 50rem;
  }
  .aside {
    position: fixed;
    bottom: 0px;
    margin: 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    margin-bottom: 0;
    width: 100vw;
    height: 3.5rem;
    z-index: 3;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 0 !important;
  }
  aside {
    margin: 0;
    width: 0;
  }
    .a:hover {
    color: var(--primary-color);
    padding: 0.7rem;
    margin: 1rem;
    background-color: transparent;
    width: 20vw;
    text-align: center;
    border-radius: 0px;
    font-size: 20px;
    z-index: 0;
    display: flex;
    flex-direction: row;
    /* justify-content: center; */
    align-items: center;
  }
}

@media screen and (max-width: 613px) {
  
  a .nav-name {
    display: none;
  }
  a:hover{
    background-color: transparent;
  }
  main {
    background-color: white;
    height: 93vh;
    width: 100vw;
    z-index: 1;
    margin: 0rem 0rem 0rem 0rem;
    border-radius: 0px;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    text-align: center !important;
  }
}

@media screen and (max-width: 400px) {
  .aside {
    height: 4rem;
  }
}
</style>