<template>
<main>
    <div class="main">
          <div class="content">
             <h2>Finding a personal Tutor has never been more easy</h2>
          
            <router-link to="/signup"><button> <b>CREATE AN ACCOUNT</b> </button></router-link>
            <button> <b>Tell a Friend</b> </button>          
          </div>
          <div class="img">
            <img src="../assets/teacher.svg" alt="teacher">          
          </div>
    </div>


  </main>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

main {
  background-color: white;
  height: 100vh;
  width: 80vw;
  z-index: 10;
  /* margin: 2rem 4rem 2rem auto; */
  /* border-radius: 45px; */
  display: flex;
}

main .content {
  width: 50%;
  padding: 1rem;
  padding-left: 5em;
  letter-spacing: 1px;
  word-spacing: 0.8rem;
  text-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

main .content h2 {
  font-size: 2.5rem;
  font-weight: 600 !important;
}

main .img {
  width: 50%;
  display: flex;
  align-items: center;
}

main .content button {
  margin: 5px 0px !important;
  padding: 1rem;
  color: var(--primary-color);
  background-color:transparent;
  outline: none;
  border-radius: 5px;
  border: 1px solid var(--background-color) ;
   width: fit-content;
}

main .content button:hover {
  margin: 5px 0px !important;
  padding: 1rem;
  color: white;
  background-color: var(--primary-color);
  outline: none;
  border-radius: 5px;
  border: transparent;
  width: fit-content;
}


.main {
  height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

main .img img {
  width: 100%;
  height: auto;
  justify-content: center;
}

@media screen and (max-width: 813px) {
  body {
    overflow: hidden;
  }
  main {
    padding-bottom: 50rem;
  }

  main {
    background-color: white;
    height: 93vh;
    width: 100vw;
    z-index: 1;
    margin: 0rem 0rem 0rem 0rem;
    border-radius: 0px;
    display: flex;
    flex-direction: row;
  }
  .main {
    position: absolute;
    top: 0rem;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    overflow: auto;
  }

}

@media screen and (max-width: 613px) { 
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
  main .content {
    width: 100%;
    padding: 2rem;
    padding: 0em;
    letter-spacing: 1px;
    word-spacing: 0.8rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  main .img img {
    width: 100%;
    height: auto;
    justify-content: center;
    margin-top: auto;
  }
  .main {
    position: absolute;
    /* top: 10rem; */
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }
}
</style>