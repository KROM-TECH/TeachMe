<template>
    <main>
      <div  class='card'>
        <img src='https://randomuser.me/api/portraits/women/68.jpg' alt='photo'/>
        <content><span class="ted">Rating:</span> 7.3</content>
        <content><span class="ted">Location:</span> Unilag</content>
        <content><span class="ted">Remote:</span> Yes</content>
        <content><span class="ted">charge per hour:</span> 500</content>
        <content><span class="ted">Why Me:</span> I speak sixteen different languages with experiences in kick-boxing and farming, stop laughing am serious</content>
        <div style='display:flex; justify-content:space-between'>
          <button >Message</button>
          <button >Share</button>
        </div>
      </div>

    </main>
</template>

<script>
  export default {};
</script>

<style scoped>
.ted{
  color: white;
  text-transform: uppercase;
  background-color:black;
  padding: 0.2rem;
  border-radius: 0.2rem;
  font-weight: 400 !important;
}
.card{
  padding: 1rem;
  max-width: 30rem;
  background-color: var(--background-color);
  height: 100vh;
  border-radius: 2rem 2rem 0 0;
}
content {
  display: block;
  margin: 0.6rem !important;
  font-weight:600;
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
  margin: 5px 0px !important;
  padding: 0.8rem;
  color: black !important;
  background-color: transparent;
  outline: none;
  border-radius: 5px;
  border: 1px solid black;
  width: fit-content;
}
  * {
    margin: 0 !important;
    transition: 1s linear;
  }

  main {
    background-color: white;
    height: 100vh;
    width: 87vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
     letter-spacing: 1px;
  word-spacing: 0.4rem;
  }

  main p {
    padding: 5px;
  }
  main  h2 {
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
    main{
      overflow-y: auto;    
    }
    .main{
      margin-bottom: 4rem !important;  
      overflow-y: auto;    
    }
  }
</style>
