<template>
  <main>
    <div class="main">
      <div>
        <h2>About</h2>
        <p>
          Below is a list of all kromtech services <br />
          feel free to explore, we might just have solved that problem you are facing already
        </p>
      </div>

      <div   class="card">
        <span class="heading"> KMP</span>
        <span 
          >An Initiative to Help guide young university students by peering them with students of higher level usually the same faculty and department</span
        >
      </div>
      <div class="card">
        <span class="heading">Studee</span>
        <span 
          >Get your Past Questions available to you both Online and Offline With added benefits of 24/7 available online tutor and Course Outline</span
        >
        </div>

      <div  class="card">
        <span class="heading">PrintInc</span>
        <span 
          >Print any document from anywhere you are at low cost less stress high quality</span
        >
      </div>
      <div class="card">
        <span class="heading">Fastrac</span>
        <span 
          >You need publicity for your Product or need a site to advertise your goods?. Fastrac has your back, We provide everything you would need to take your Business to the next level </span
        >
      </div>
    
    </div>
  </main>
</template>

<script>
  export default {
    data() {
      return {
        isActive: false
      };
    },
    created(){
     document.querySelectorAll('.card').forEach(item => {
  item.addEventListener('click', event => {
    alert(event)
  })
})
    },
    methods: {
      show() {
        this.isActive = true;
      },
      hide() {
        this.isActive = false;
      }
    }
  };
</script>

<style scoped>
  * {
    margin: 0 !important;
    transition: 1s linear;
  }
  .hide {
    display: none;
  }
  .heading {
    display: block;
    font-weight: 600;
    font-size: 1.5rem;
  }
  .card {
    margin: 5px 0px !important;
    background-color: var(--background-color);
    max-width: 90%;
    height: fit-content;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 1px 2px 3px black;
    color: black;
    transition: 1s;
  }
  .price {
    color: black;
  }
  ul {
    text-align: start !important;
  }

  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 1s;
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
    transition: 1s;
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
