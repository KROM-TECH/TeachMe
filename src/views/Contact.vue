<template>
  <main>
    <div class="main">
      <hr />
      <h5>You can reach on us the following Platforms <br />We generally try to reply all Messages in less than 24hrs</h5>
      <div class="social">
        <a href="mailto:kromatictech@mail.com">
          <div class=" card mail">
            <h3>Mail</h3>
          </div>
        </a>

        <a href="https://twitter.com/kromtech_1">
          <div class="card twitter">
            <h3>Twitter</h3>
          </div>
        </a>

        <a href="https://instagram.com/kromate__24">
          <div class="card instagram">
            <h3>Instagram</h3>
          </div>
        </a>
    

        <a href="https://wa.me/2348146923944">
          <div class="card whatsapp">
            <h3>Whatsapp</h3>
          </div>
        </a>
      </div>
    </div>
  </main>
</template>

<script>
  export default {};
</script>

<style scoped>
    .card {
      padding: 1px;
      width: 200px;
      height: 63px;
      display: flex;
      border-radius: 2px;
      box-shadow: 2px 3px 1px white;
      transition: 10s;
      margin: 5px;
      text-align: center;
      transition: 0.2s linear background-color;
      justify-content: center;
    }
    
  .mail:hover {
    background-color: white;
    color: #b23121;
    border: 1px solid #b23121;
  }
  .mail {
    background-color: #b23121;
    color: white;
  }

  .twitter:hover {
    background-color: white;
    color: #00acee;
    border: 1px solid #00acee;
  }
  .twitter {
    background-color: #00acee;
    color: white;
  }

  .instagram:hover {
    background-color: white;
    color: #3f729b;
    border:1px solid #3f729b
  }
  .instagram {
    background-color: #3f729b;
    color: white;
  }

  .whatsapp:hover {
    background-color: white;
    color: #25d366;
    border: 1px solid #25d366;
  }
  .whatsapp {
    background-color: #25d366;
    color: white;
  }
  a {
    text-decoration: none;
  }
  .social {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }
  h5 {
    color: grey;
    margin-top: 1rem !important;
  }
  hr {
    margin: 0px!important;
    width: 100%;
    background-color: var(--primary-color);
    height: 0.2rem;
  }

  * {
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

  @media screen and (max-width: 813px) {
    body {
      overflow: auto;
    }
    main {
      width: 100vw;
      overflow-y: auto;
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
