<template>
  <body>
 <Nav/>
   <router-view></router-view>
  </body>
</template>

<script>
import Nav from './components/Nav'

export default {
components:{
  Nav,
  // Home
}
}
</script>
<style>
html {
    height: 100%;
}
@font-face {
  font-family: 'Material Icons Outlined';
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialiconsoutlined/v22/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUce.woff2) format('woff2');
}

.material-icons-outlined {
  font-family: 'Material Icons Outlined';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: 'liga';
  -webkit-font-smoothing: antialiased;
}

@import url('https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap');
:root {
  --primary-color: black;
  --background-color: #996515;
}

body {
  background-color: var(--background-color);
  display: flex;
  flex-direction: row;
  font-family: 'Titillium Web', sans-serif;
  transition: 0.6s;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin:0;
  padding: 0;
}


</style>
