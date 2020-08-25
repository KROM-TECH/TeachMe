<template>
  <main>
    <div class="main">
     <div>
          <h2>About</h2>
          <p>
            TeachMe is another innovative platform from Kromtech, it seeks to bridge the gap between Tutors and Students, to explain better imagine you just finished a class and you don't understand certain area in the just concluded topic
            instead of waiting for tutorial services or a friend to come and teach just log on to TeachMe and Book a Tutor for 2 hours or even a month and get quality knowledge impacted on you
        </p>
        </div>
        <div>
          <h2>How It Works</h2>
            <ul>
              <li>Login</li>
              <li>Search for a particular subject in which you need a tutor for</li>
              <li>Scan through the Database of Tutors for that Subject and select one</li>
              <li>Send the Tutor a message and start a conversation</li>
              <li>Agree on a date and price</li>
              <li>Make Payment and commence Tutorial</li>
            </ul>
        </div>
        <div>
          <h2>How Payment works</h2>
            <ul>
              <li>TeachMe gets 10% on every transaction</li>
              <li>in order to avoid sad story</li>
              <li>When a payment is made, the Tutor is given half of the money</li>
              <li>And the other half is paid when the Tutorial is complete</li>
              <li>Due to certain conditions, a tutor can only request payment have they have accumulated over one thousand naira and above</li>
              <li>Pay Outs Can be requested Anytime</li>
            </ul>
        </div>

   </div>


  </main>
</template>

<script>
  export default {};
</script>

<style scoped>
.price{
 color: tomato;
}
ul{
  text-align: start !important;
}
  * {
    margin: 0 !important;
    transition: 1s linear;
  }
  .main{
    overflow-y: auto;
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
