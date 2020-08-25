<template>
  <main>
      <img src="../assets/error.svg" alt="teacher" />
      <P>Page not Found</P>
      <router-link to="/"
        ><button><b>Back to Homepage</b></button></router-link
      >
  </main>
</template>

<script>
export default {

}
</script>

<style scoped>

  img {
    height: auto;
    max-width: 50%;
  }

  main button {
    text-transform: uppercase;
    margin: 5px 0px !important;
    padding: 0.5rem;
    color: var(--primary-color);
    background-color: transparent;
    outline: none;
    border-radius: 5px;
    border: 1px solid var(--background-color);
    width: fit-content;
  }

  main button:hover {
    margin: 5px 0px !important;
    padding: 1rem;
    color: white;
    background-color: var(--primary-color);
    outline: none;
    border-radius: 5px;
    border: transparent;
    width: fit-content;
  }

  * {
    transition: 0.3s linear;
  }

  main {
    background-color: white;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    letter-spacing: 1px;
    word-spacing: 0.4rem;
  }

  @media screen and (max-width: 813px) {
    body {
      overflow: auto;
    }
    main {
      width: 100vw;
      overflow-y: auto;
    }
    main {
      width: 100vw;
      margin-bottom: 4rem !important;
      overflow-y: auto;
    }
  }

  @media screen and (max-width: 613px) {
    main {
      overflow-y: auto;
    }
    main {
      margin-bottom: 4rem !important;
      overflow-y: auto;
    }
  }
</style>
