<template>
  
<div id="chatbox">
	<div id="friendslist">
    	<div id="topmenu">
        	<span class="friends"><i class="material-icons-outlined">perm_identity</i></span>
            <span class="deals"><i class="material-icons-outlined">receipt</i></span>
            <span class="Schedule"><i class="material-icons-outlined">schedule</i></span>
        </div>
        
        <div id="friends">
        	<div class="friend">
            	<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1_copy.jpg" />
                <p>
                	<strong>Miro Badev</strong>
	                <span>mirobadev@gmail.com</span>
                </p>
                <div class="status available"></div>
            </div>
            
            <div class="friend">
            	<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2_copy.jpg" />
                <p>
                	<strong>Martin Joseph</strong>
	                <span>marjoseph@gmail.com</span>
                </p>
                <div class="status away"></div>
            </div>
            
            <div class="friend">
            	<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/3_copy.jpg" />
                <p>
                	<strong>Tomas Kennedy</strong>
	                <span>tomaskennedy@gmail.com</span>
                </p>
                <div class="status inactive"></div>
            </div>
            
            <div class="friend">
            	<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/4_copy.jpg" />
                <p>
                	<strong>Enrique	Sutton</strong>
	                <span>enriquesutton@gmail.com</span>
                </p>
                <div class="status inactive"></div>
            </div>
            
            <div class="friend">
            	<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/5_copy.jpg" />
                <p>
                <strong>	Darnell	Strickland</strong>
	                <span>darnellstrickland@gmail.com</span>
                </p>
                <div class="status inactive"></div>
            </div>
                        
        </div>                
        
    </div>	
    
    
</div>	
</template>

<script>
export default {

}
</script>

<style scoped>
* { margin: 0px; padding: 0px; }
body {
	background: #f0f1f2;
	font:12px "Open Sans", sans-serif; 
}

#chatbox{

      background-color: white;
    height: 100vh;
    width: 87vw;
    display: flex;
    flex-direction: column;
    text-align: center;
    letter-spacing: 1px;
    word-spacing: 0.4rem;
}

#friendslist{

	width:100%;
	height:484px;
}
#topmenu{
	height:69px;
	width:100%;
	border-bottom:1px solid #d8dfe3;	
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@font-face {
  font-family: 'Material Icons Outlined';
  font-style: normal;
  font-weight: 100;
  src: url(https://fonts.gstatic.com/s/materialiconsoutlined/v22/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUce.woff2) format('woff2');
}

.material-icons-outlined {
  font-family: 'Material Icons Outlined';
  font-weight: normal;
  font-style: normal;
  font-size: 48px;
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

#topmenu span{
  margin: 0px 2rem;
  cursor: pointer;
}
#topmenu span:hover{
  color: var(--background-color);
}
.friend{
	height:70px;
	border-bottom:1px solid #e7ebee;		
	position:relative;
}
.friend:hover{
	background:#f1f4f6;
	cursor:pointer;
}
.friend img{
	width:40px;
	border-radius:50%;
	margin:15px;
	float:left;
}
.floatingImg{
	width:40px;
	border-radius:50%;
	position:absolute;
	top:0;
	left:12px;
	border:3px solid #fff;
}
.friend p{
  display: flex;
  flex-direction: column;
  text-align: start;
	padding:15px 0 0 0;			
	float:left;
	width:60%;
}
.friend p strong{
  font-weight:600;
  font-size:15px;
	color:#597a96;  

}
.friend p span{
	font-size:13px;
	font-weight:400;
	color:#aab8c2;
}
.friend .status{
	background:#26c281;
	border-radius:50%;	
	width:9px;
	height:9px;
	position:absolute;
	top:31px;
	right:17px;
}
.friend .status.away{background:#ffce54;}
.friend .status.inactive{background:#eaeef0;}

  @media screen and (max-width: 813px) {
    body {
      overflow: auto;
    }
    #chatbox {
      width: 100vw;
      overflow-y: auto;
    }
  }


</style>