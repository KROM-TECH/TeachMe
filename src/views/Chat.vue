<template>
  <div class="chatview">

    <div class="chat-messages">

      <div class="message" v-for="chat in chats" :key="chat.id">
        <!-- <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1_copy.jpg" /> -->
        <div class="bubble">
          {{chat.message}}
          <div class="corner"></div>
          <span>{{chat.name}}</span>
        </div>
      </div>
  
    </div>

    <div class="sendmessage">
      <button id="send"><i class="material-icons-outlined">send</i></button>
      <input type="text" v-model="message" placeholder="Send message..." />
      <button @click="send" id="send"><i class="material-icons-outlined">send</i></button>
    </div>
  </div>
</template>

<script>
  export default {
        data() {
      return {
        message:'',
 
        chats: [
          {
            id:'12344',
            name:'John',
            message:'hello there',
          },
          {
            id:'1234',
            name:'Joseph',
            message:'hey',
          },
          {
            id:'1244',
            name:'Joseph',
            message:'Just chilling',
          },
          {
            id:'1344',
            name:'John',
            message:'Who cares?',
          },
        ]
      };
    },
    methods:{
      send(){
        this.chats.push({
          id:Math.random(),
          name:'krom',
          message:this.message
        })
        this.message = ''
      }
    }
  };
</script>

<style>
  .chatview {
    background-color: white;
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    letter-spacing: 1px;
    word-spacing: 0.4rem;
  }



  .chat-messages {
    margin-top: 1rem;
    margin-bottom: 3.5rem;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    padding-right: 20px;
    padding-left: 20px;
    -webkit-transition: all 200ms cubic-bezier(0, 0.995, 0.99, 1);
    -moz-transition: all 200ms cubic-bezier(0, 0.995, 0.99, 1);
    -ms-transition: all 200ms cubic-bezier(0, 0.995, 0.99, 1);
    -o-transition: all 200ms cubic-bezier(0, 0.995, 0.99, 1);
    transition: all 200ms cubic-bezier(0, 0.995, 0.99, 1);
  }


  .chat-messages div.message {
    padding: 0 0 30px 18px;
    clear: both;
    margin-bottom: 45px;
  }

  /* .chat-messages .message img {
    float: left;
    margin-left: -38px;
    border-radius: 50%;
    width: 30px;
    margin-top: 12px;
  } */

  .message .bubble {
    background: #f0f4f7;
    font-size: 13px;
    font-weight: 600;
    padding: 12px 13px;
    border-radius: 5px 5px 5px 0px;
    color: #8495a3;
    position: relative;
    float: left;
  }

  .bubble .corner {
    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/bubble-corner.png') 0 0 no-repeat;
    position: absolute;
    width: 7px;
    height: 7px;
    left: -5px;
    bottom: 0;
  }

  .bubble span {
    color: #aab8c2;
    font-size: 11px;
    position: absolute;
    right: 0;
    bottom: -22px;
  }
  .sendmessage {
    border-top: 1px solid #e7ebee;
    width: 80%;
    height: fit-content;
    background: white;
    display: flex;
    align-items: center;
    overflow: hidden;
    position: fixed;
    bottom: 0;
  }

  .sendmessage input {
    width: 60vw;
    background: #fff;
    border: none;
    border: 1px solid black;
    padding: 10px;
    font-family: 'Open Sans', sans-serif;
  }
  .sendmessage input:focus {
    outline:0;
    border: 2px solid var(--background-color);
  }
  .sendmessage button {
    padding: 0.2rem;
    width: 10%;
  }
  .sendmessage button:hover {
    cursor: pointer;
    /* background-position: 0 0; */
  }
  .sendmessage button:focus {
    outline: 0;
  }

  @media screen and (max-width: 813px) {
    body {
      overflow: auto;
    }
      .sendmessage input {
    width: 80%;
    }
    .chatview {
      width: 100vw;
      overflow-y: auto;
    }
    .sendmessage {
      width:100%;
      overflow: hidden;
      position: fixed;
      bottom: 0;
      margin-bottom: 3.5rem;
    }
  }
</style>
