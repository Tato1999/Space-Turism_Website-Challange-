<template>
    <div class="mobile_page">
      <div class="line"></div>
      <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>  
      </div>
      <div class="pop_up_menu" @click="this.open_menu">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>
      </div>
      <div class="first_div">
        <p><span class="num">02</span>  <span class="text">Meet your crew</span></p>
      </div>
      <div class="dest_img">
        <img :src = 'this.dest_img' alt="Crew" class="img_class">
      </div>
      <div class="split_line"></div>
      <div class="select_dest">
        <div class="select_crew_first" @click="this.change_first"></div>
        <div class="select_crew_second" @click="this.change_second"></div>
        <div class="select_crew_third" @click="this.change_third"></div>
        <div class="select_crew_fourth" @click="this.change_fourth"></div>
        <div class="underline"></div>
      </div>
      <div class="title">
        <div class="crew_title">
          {{this.title}}
        </div>
        <div class="crew_name">
          {{this.name}}
        </div>
      </div>
      <div class="crew_text">
        {{this.description}}
      </div>
      <div class="pop_menu_back">
        <div class="opened_pop_up_menu" @click="this.close_menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/></g></svg>
        </div>
        <div class="for_unmobile_menu">
        <div class="home">
          <router-link to="/">
          <p @mouseenter="this.hover_menu_1 = true" @mouseout="this.hover_menu_1 = false"><span class="menu_num" style="width: 18px">00</span><span class="st_text_menu" style="width: 39px">HOME</span></p>
          </router-link>
        </div>
        <div class="dest">
          <router-link to="/destination">
          <p @mouseenter="this.hover_menu_2 = true" @mouseout="this.hover_menu_2 = false"><span class="menu_num" style="width: 15px">01</span><span class="st_text_menu" style="width: 97px">DESTINATION</span></p>
          </router-link>
        </div>
        <div class="crew">
        <router-link to="/crew">
        <p><span class = 'menu_num' style="width: 17px">02</span><span class="st_text_menu" style="width: 40px">CREW</span></p>
        </router-link>
      </div>
      <div class="tech">
          <router-link to="/technology">
          <p @mouseenter="this.hover_menu_4 = true" @mouseout="this.hover_menu_4 = false"><span class = 'menu_num' style="width: 17px">03</span><span class="st_text_menu" style="width: 96px">TECNOLOGY</span></p>
          </router-link></div>
        <div class="underline_menu"></div>
        <div class="hover_underline_1" v-if="hover_menu_1"></div>
        <div class="hover_underline_2" v-if="hover_menu_2"></div>
        <div class="hover_underline_4" v-if="hover_menu_4"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data(){
        return{
            render: false,
            dest_img: require('../assets/mobile/image-douglas-hurley.png'),
            title: 'Commander',
            name: 'Douglas Hurley',
            description: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
            hover_menu_1: false,
            hover_menu_2: false,
            hover_menu_3: false,
            hover_menu_4: false,
        }
    },
    methods:{
      open_menu(){
        document.querySelector('.pop_menu_back').style.display = 'inline'
      },
      close_menu(){
        document.querySelector('.pop_menu_back').style.display = 'none'
      },
      test(){
        console.log()
      },
      change_second(){
        if(screen.width < 709){
          console.log('test2')
          this.dest_img = require('../assets/mobile/image-mark-shuttleworth.png')
          document.querySelector('.select_crew_second').style.opacity = '1'
          document.querySelector('.select_crew_third').style.opacity = '0.17'
          document.querySelector('.select_crew_first').style.opacity = '0.17'
          document.querySelector('.select_crew_fourth').style.opacity = '0.17'
          document.querySelector('.crew_title').style.width = '155px'
          document.querySelector('.crew_title').style.marginLeft = '95px'
          document.querySelector('.img_class').style.width = '153.92px'
          document.querySelector('.img_class').style.position = 'absolute'
          document.querySelector('.img_class').style.marginLeft = '88px'
          this.title = "Mission Specialist "
          this.name = "MARK SHUTTLEWORTH"}
          this.description = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
        if (screen.width >= 709){
          this.dest_img = require('../assets/mobile/image-mark-shuttleworth.png')
          document.querySelector('.select_crew_second').style.opacity = '1'
          document.querySelector('.select_crew_third').style.opacity = '0.17'
          document.querySelector('.select_crew_first').style.opacity = '0.17'
          document.querySelector('.select_crew_fourth').style.opacity = '0.17'
          document.querySelector('.crew_title').style.width = '232px'
          document.querySelector('.crew_title').style.marginLeft = '-30px'
          this.title = "Mission Specialist "
          this.name = "MARK SHUTTLEWORTH"
          this.description = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
        }
        if (screen.width >= 1440){
          this.dest_img = require('../assets/mobile/image-mark-shuttleworth.png')
          document.querySelector('.select_crew_second').style.opacity = '1'
          document.querySelector('.select_crew_third').style.opacity = '0.17'
          document.querySelector('.select_crew_first').style.opacity = '0.17'
          document.querySelector('.select_crew_fourth').style.opacity = '0.17'
          document.querySelector('.crew_title').style.width = '309px'
          document.querySelector('.crew_name').style.width = '614px'
          document.querySelector('.crew_title').style.marginLeft = '0'
          this.title = "Mission Specialist "
          this.name = "MARK SHUTTLEWORTH"
          this.description = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
        }
      },
      change_third(){
      if(screen.width < 709){  
        this.dest_img = require('../assets/mobile/image-victor-glover.png')
        document.querySelector('.select_crew_second').style.opacity = '0.17'
        document.querySelector('.select_crew_third').style.opacity = '1'
        document.querySelector('.select_crew_first').style.opacity = '0.17'
        document.querySelector('.select_crew_fourth').style.opacity = '0.17'

        document.querySelector('.dest_img img').style.width = '180.73px'
        document.querySelector('.dest_img img').style.height = '222px'
        document.querySelector('.dest_img').style.margin = '139px auto auto calc((100vw - 327px)/2)'
        document.querySelector('.img_class').style.marginLeft = '54px'
        this.title = "PILOT"
        this.name = "Victor Glover"
        this.description = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."}
        if (screen.width >= 709){
          this.dest_img = require('../assets/mobile/image-victor-glover.png')
          document.querySelector('.select_crew_second').style.opacity = '0.17'
          document.querySelector('.select_crew_third').style.opacity = '1'
          document.querySelector('.select_crew_first').style.opacity = '0.17'
          document.querySelector('.select_crew_fourth').style.opacity = '0.17'
          document.querySelector('.crew_title').style.width = '232px'
          document.querySelector('.crew_title').style.marginLeft = '-30px'
          this.title = "PILOT"
          this.name = "Victor Glover"
          this.description = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
        }
        if (screen.width >= 1440){
          this.dest_img = require('../assets/mobile/image-victor-glover.png')
          document.querySelector('.select_crew_second').style.opacity = '0.17'
          document.querySelector('.select_crew_third').style.opacity = '1'
          document.querySelector('.select_crew_first').style.opacity = '0.17'
          document.querySelector('.select_crew_fourth').style.opacity = '0.17'
          document.querySelector('.crew_title').style.width = '309px'
          document.querySelector('.crew_name').style.width = '614px'
          document.querySelector('.crew_title').style.marginLeft = '0'
        }
      },
      change_fourth(){
        if(screen.width < 709){
          this.dest_img = require('../assets/mobile/image-anousheh-ansari.png')
          document.querySelector('.select_crew_second').style.opacity = '0.17'
          document.querySelector('.select_crew_third').style.opacity = '0.17'
          document.querySelector('.select_crew_first').style.opacity = '0.17'
          document.querySelector('.select_crew_fourth').style.opacity = '1'
          document.querySelector('.dest_img img').style.width = '226.15px'
          document.querySelector('.dest_img img').style.height = '223px'
          document.querySelector('.dest_img').style.margin = '139px auto auto calc((100vw - 327px)/2)'
          document.querySelector('.img_class').style.marginLeft = '50px'
          this.title = "Flight Engineer"
          this.name = "Anousheh Ansari"
          this.description = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
        }
        if (screen.width >= 709){
          this.dest_img = require('../assets/mobile/image-anousheh-ansari.png')
          document.querySelector('.select_crew_second').style.opacity = '0.17'
          document.querySelector('.select_crew_third').style.opacity = '0.17'
          document.querySelector('.select_crew_first').style.opacity = '0.17'
          document.querySelector('.select_crew_fourth').style.opacity = '1'
          document.querySelector('.crew_title').style.width = '232px'
          document.querySelector('.crew_title').style.marginLeft = '-30px'
          this.title = "Flight Engineer"
          this.name = "Anousheh Ansari"
          this.description = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
        }
        if (screen.width >= 1440){
          this.dest_img = require('../assets/mobile/image-anousheh-ansari.png')
          document.querySelector('.select_crew_second').style.opacity = '0.17'
          document.querySelector('.select_crew_third').style.opacity = '0.17'
          document.querySelector('.select_crew_first').style.opacity = '0.17'
          document.querySelector('.select_crew_fourth').style.opacity = '1'
          document.querySelector('.crew_title').style.width = '309px'
          document.querySelector('.crew_name').style.width = '614px'
          document.querySelector('.crew_title').style.marginLeft = '0'
        }
      },
      change_first(){
        if(screen.width < 709){
          this.dest_img = require('../assets/mobile/image-douglas-hurley.png')
          document.querySelector('.select_crew_second').style.opacity = '0.17'
          document.querySelector('.select_crew_third').style.opacity = '0.17'
          document.querySelector('.select_crew_first').style.opacity = '1'
          document.querySelector('.select_crew_fourth').style.opacity = '0.17'
          document.querySelector('.dest_img img').style.width = '177.12px'
          document.querySelector('.dest_img img').style.height = '222px'
          document.querySelector('.dest_img').style.margin = '139px auto auto calc((100vw - 327px)/2)'
          document.querySelector('.dest_img img').style.marginLeft = '74.62px'
          this.title = "Commander"
          this.name = "Douglas Hurley"
          this.description = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
      }
      if (screen.width >= 709){
          this.dest_img = require('../assets/mobile/image-douglas-hurley.png')
          document.querySelector('.select_crew_second').style.opacity = '0.17'
          document.querySelector('.select_crew_third').style.opacity = '0.17'
          document.querySelector('.select_crew_first').style.opacity = '1'
          document.querySelector('.select_crew_fourth').style.opacity = '0.17'
          document.querySelector('.crew_title').style.width = '232px'
          document.querySelector('.crew_title').style.marginLeft = '-30px'
          this.title = "Commander"
          this.name = "Douglas Hurley"
          this.description = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
       }
        if (screen.width >= 1440){
          document.querySelector('.crew_title').style.width = '309px'
          document.querySelector('.crew_name').style.width = '614px'
          document.querySelector('.crew_title').style.marginLeft = '0'
        } 
     }
    },
    computed(){
        this.render = true
    }
  }
  </script>
  
  <style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&family=Dancing+Script:wght@600&family=Noto+Serif+Georgian&display=swap');
    
    @media screen and (max-width: 710px){
    
        @media screen and (min-height: 0px) and (max-height: 709px ){
        .mobile_page{
            width: 100vw; /*367*/
            height: 710px;
            position: absolute;
            margin: 0 0 0 0;
            left: 0;
            top: 0;
            background-image: url('../assets/mobile/background-crew-mobile.jpg');
            background-size: 100vw 100vh;
          }
        }
        @media screen and (min-height: 709px ) and (max-height: 1200px){
        .mobile_page{
            width: 100vw; 
            height: 100vh;
            position: absolute;
            margin: 0 0 0 0;
            left: 0;
            top: 0;
            background-image: url('../assets/mobile/background-crew-tablet.jpg');
            background-size: 100vw 100vh;
          }
        }
      .icon{
        position:absolute;
        width: 40px;
        height: 40px;
        margin: 24px auto auto 24px;
        border-radius: 50%;
        }
        .pop_up_menu{
          position:absolute;
          width: 24px;
          height: 21px;
          margin: 33px 24px auto auto;
          right: 0;
        }
        .first_div{
          width: 221px;
          height: 19px;
          position: absolute;
          margin: 88px auto auto calc((100vw - 166px)/2);
        }
        .first_div p .text{
          position: absolute;
          height: 19px;
          left: 14.93%;
          top: calc(50% - 19px/2);

          font-family: 'Barlow Condensed';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
          letter-spacing: 2.7px;
          text-transform: uppercase;

          color: #FFFFFF;
        }
        .first_div p .num{
          position: absolute;
          height: 19px;
          left: 0%;
          right: 93.21%;
          top: calc(50% - 19px/2);

          font-family: 'Barlow Condensed';
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 19px;
          letter-spacing: 2.7px;

          color: #FFFFFF;

          mix-blend-mode: normal;
          opacity: 0.25;
        }
        .dest_img{
          width: 327px;
          height: 223px;
          position: absolute;
          margin: 139px auto auto calc((100vw - 327px)/2);
        }
        .dest_img img{
          width: 177.12px;
          height: 222px;
          position: absolute;
          margin: 0 auto auto 74.62px;
        }
        .select_dest{
          position: absolute;
          color:white;
          width: 88px;
          height: 19px;
          margin: 394px auto auto calc((100vw - 88px)/2);
        }
        .select_dest div{
          display: inline;
          
        }
        .select_crew_first{ 
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 100%;
        background: #FFFFFF;
        
        }
        .select_crew_second{
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 100%;
          background: #FFFFFF;
          mix-blend-mode: normal;
          margin: auto auto auto 26px;
          opacity: 0.17;
        }
        .select_crew_third{
          position: absolute;
          width: 10px;
          height: 10px;
          margin: auto auto auto 52px;
          border-radius: 100%;
          background: #FFFFFF;
          mix-blend-mode: normal;
          opacity: 0.17;
        }
        .select_crew_fourth{
          position: absolute;
          width: 10px;
          height: 10px;
          margin: auto auto auto 78px;
          border-radius: 100%;
          background: #FFFFFF;
          mix-blend-mode: normal;
          opacity: 0.17;
        }
        .crew_title{
          width: 107px;
          height: 18px;
          position: absolute;
          margin: auto auto auto 100px;
          opacity: 0.5;
          font-style: normal;
          font-family: 'Bellefair';
          font-weight: 400;
          font-size: 16px;
          line-height: 18.34px;
          text-align: center;
          color: rgba(255, 255, 255, 1);
          text-transform: uppercase;
        }
        .crew_name{
          width: 327px;
          height: 28px;
          position: absolute;
          margin: 26px auto auto auto;
          font-style: normal;
          font-family: 'Bellefair';
          font-size: 24px;
          line-height: 27.5px;
          text-align: center;
          color: rgba(255, 255, 255, 1);
          text-transform: uppercase;
        }
        .title{
          width: 327px;
          height: 54px;
          font-size: 30px;
          position: absolute;
          margin: 436px auto auto calc((100vw - 327px)/2);
          color: white;
        
        }
        .crew_text{
          width: 327px;
          height: 100px;
          position: absolute;
          margin: 506px auto auto calc((100vw - 327px)/2);
          color: rgba(208, 214, 249, 1);
          text-align: center;
          font-style: normal;
          font-family: 'Barlow';
          font-weight: 400;
          font-size: 15px;
          line-height: 25px
        }
        .split_line{
          width: 87.2vw;
          height: 1px;
          position: absolute;
          margin: 361px auto auto calc((100vw - 87.2vw)/2);
          background-color: rgba(56, 59, 75, 1);
        }
        .pop_menu_back{
          position: absolute;
          width: 69vw;
          height: 100vh;
          margin: 0 auto 0 calc(100vw - 69vw);
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(40.7742px);
          display: none;
        }
        .opened_pop_up_menu{
          width: 19.09px;
          height: 19.09px;
          position: absolute;
          margin: 33.95px auto auto 56.79vw;
          z-index: 1;
        }
        .home{
          width:70px;
          height: 19px;
          position:absolute;
          margin: 118px auto auto 8.7vw;
          display: inline;
        }
        .dest{
          width:130px;
          height: 19px;
          position:absolute;
          margin: 169px auto auto 8.7vw;
        }
        .crew{
          width: 71px;
          height: 19px;
          position:absolute;
          margin: 220px auto auto 8.7vw;
        }
        .tech{
          width:127px;
          height: 19px;
          position:absolute;
          margin: 271px auto auto 8.7vw;
        }
        .pop_menu_back div span{
          font-style: normal;
          font-family: 'Barlow Condensed';
          font-weight: 700;
          font-size: 16px;
          line-height: 19.2px;
          letter-spacing: 2.7px;
          color: rgba(255, 255, 255, 1);
          display: inline;
        }
        .st_text_menu{
          font-style: normal;
          font-family: 'Barlow Condensed';
          font-weight: 400;
          font-size: 16px;
          line-height: 19.2px;
          letter-spacing: 2.7px;
          color: rgba(255, 255, 255, 1);
          display: inline;
        }
      }
    @media  screen and (min-width: 709px){
    .mobile_page{
        width: 100vw; /*367*/
        height: 100vh;
        position: absolute;
        margin: 0 0 0 0;
        left: 0;
        top: 0;
        background-image: url('../assets/mobile/background-crew-mobile.jpg');
        background-size: 100vw 100vh;
        background-repeat: no-repeat;
      }
      .icon{
        position:absolute;
        width: 40px;
        height: 40px;
        margin: 28px auto auto 39px;
        border-radius: 50%;
        }
        .pop_up_menu{
          display: none;
        }
        .pop_menu_back svg{
          display: none;
        }
        .pop_menu_back{
          width: 450px;
          height: 96px;
          position: absolute;
          margin: 0px 0px auto auto;
          top: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(40.7742px);
        }
        .for_unmobile_menu{
          width: 356px;
          height: 18px;
          position: absolute;
          margin: auto auto 57px 48px;
          bottom: 0;
          display: inline;
        }
        .home{
          width:70px;
          height: 19px;
          position:absolute;
          display: inline;          
          margin: 1px auto auto 0;
        }
        .dest{
          width:130px;
          height: 19px;
          position:absolute;
          display: inline;
          margin: 1px auto auto 71px;
        }
        .crew{
          width: 71px;
          height: 19px;
          position:absolute;
          display: inline;
          margin: 1px auto auto 198px;
        }
        .tech{
          width:127px;
          height: 19px;
          position:absolute;
          display: inline;
          margin: auto auto auto 270px;
        }
        .opened_pop_up_menu{
          display: none;
        }
        .pop_menu_back div span{
          font-style: normal;
          font-family: 'Barlow Condensed';
          font-weight: 700;
          font-size: 16px;
          line-height: 19.2px;
          letter-spacing: 2.7px;
          color: rgba(255, 255, 255, 1);
          display: inline;
        }
        .menu_num{
          display: none !important;
        }
        .first_div{
          width: 300px;
          height: 24px;
          position: absolute;
          margin: 136px auto auto 38.5px;
        }
        .first_div p .text{
        position: absolute;
        height: 19px;
        left: 14.93%;
        top: calc(50% - 19px/2);

        font-family: 'Barlow Condensed';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 3.8px;
        text-transform: uppercase;

        color: #FFFFFF;
      }
      .first_div p .num{
        position: absolute;
        height: 19px;
        left: 0%;
        right: 93.21%;
        top: calc(50% - 19px/2);

        font-family: 'Barlow Condensed';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 3.8px;

        color: #FFFFFF;

        mix-blend-mode: normal;
        opacity: 0.25;
      }
      .dest_img{
        width: 456.37px;
        height: 532px;
        position: absolute;
        margin: 492px auto auto calc((100vw - 456.37px) / 2);
        left: 0;
      }
      .dest_img img{
        position: absolute;
        width: 456.37px;
        height: 532px;
      }
      .select_dest{
        width: 88px;
        height: 10px;
        color: white;
        position: absolute;
        margin: 442px auto auto calc((100vw - 88px) / 2);
      }
      .select_dest div{
        display: inline;
        
      }
      .select_crew_first{
        width: 10px;
        height: 10px;
        position: absolute;
        background-color: white;
        border-radius: 100%;
      }
      .select_crew_second{
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 100%;
          background: #FFFFFF;
          mix-blend-mode: normal;
          margin: auto auto auto 26px;
          opacity: 0.17;
        }
        .select_crew_third{
          position: absolute;
          width: 10px;
          height: 10px;
          margin: auto auto auto 52px;
          border-radius: 100%;
          background: #FFFFFF;
          mix-blend-mode: normal;
          opacity: 0.17;
        }
        .select_crew_fourth{
          position: absolute;
          width: 10px;
          height: 10px;
          margin: auto auto auto 78px;
          border-radius: 100%;
          background: #FFFFFF;
          mix-blend-mode: normal;
          opacity: 0.17;
        }
      .title{
        width: 230px;
        height: 92px;
        position: absolute;
        margin: 639px auto auto calc((100vw - 230px)/2);
        font-style: normal;
        font-family: 'Bellefair';
        font-weight: 400;
        font-size: 80px;
        line-height: 91.68px;
        text-align: center;
        color: rgba(255,255,255,1);
      }     
      .title{
        position: absolute;
        width: 458px;
        height: 200px;
        margin: 220px auto auto calc((100vw - 458px)/2);
      }
      .crew_title{
        position: absolute;
        height: 28px;
        left: 32.42% !important;
        right: 32.42% !important;
        top: calc(50% - 28px/2 - 77px) !important;

        font-family: 'Bellefair';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        /* identical to box height */

        text-align: center;
        text-transform: uppercase;

        color: #FFFFFF;

        mix-blend-mode: normal;
        opacity: 0.5;
        }
        .crew_name{
          position: absolute;
          height: 46px;
          left: 0.11%;
          right: 0.11%;
          top: calc(50% - 46px/2 - 32px);

          font-family: 'Bellefair';
          font-style: normal;
          font-weight: 400;
          font-size: 40px;
          line-height: 46px;
          /* identical to box height */

          text-align: center;
          text-transform: uppercase;

          color: #FFFFFF;
        }
        .crew_text{
          position: absolute !important;
          width: 458px !important;
          height: 84px !important;
          margin: 325px auto auto calc((100vw - 458px)/2) !important;

          font-family: 'Barlow';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 28px;
          /* or 175% */

          text-align: center;
          color: #D0D6F9;
        }
        .split_line{
          display: none;
        }
        .underline{
          display: none !important;
        }
        .underline_menu{
          width: 36px;
          height: 3px;
          position: relative;
          margin: 69px auto auto 198px;
          background-color: white;
          z-index: 1;
        }
      }
      @media screen and (min-width: 1440px){
        .mobile_page{
          width: 100vw; /*367*/
          height: 100vh;
          position: absolute;
          margin: 0 0 0 0;
          left: 0;
          top: 0;
          background-image: url('../assets/mobile/background-destination-mobile.jpg');
          background-size: 100vw 100vh;
          background-repeat: no-repeat;
      }
      .icon{
        position:absolute;
        width: 48px;
        height: 48px;
        margin: 64px auto auto 55px;
        border-radius: 50%;
        }
        .pop_up_menu{
          display: none;
        }
        .pop_menu_back svg{
          display: none;
        }
        .pop_menu_back{
          width: 57.803vw;
          height: 96px;
          position: absolute;
          margin: 40px 0px auto auto;
          top: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(40.7742px);
        }
        .for_unmobile_menu{
          width: 542px;
          height: 19px;
          position: absolute;
          margin: 20px auto auto 123px;
          top: 0;
          bottom: 0;
          display: inline;
        }
        .line{
          width: 33.3vw;
          height: 1px;
          position: absolute;
          opacity: 0.25;
          background-color: rgba(255, 255, 255, 1);
          margin: 88px auto auto 11.6vw;
          z-index: 1;
        }
        .home{
          width:70px;
          height: 19px;
          position:absolute;
          display: inline;          
          margin: 1 auto auto 0;
        }
        .dest{
          width:130px;
          height: 19px;
          position:absolute;
          display: inline;
          margin: 1px auto auto 118px;
        }
        .crew{
          width: 71px;
          height: 19px;
          position:absolute;
          display: inline;
          margin: 1px auto auto 296px;
        }
        .tech{
          width:127px;
          height: 19px;
          position:absolute;
          display: inline;
          margin: auto auto auto 415px;
        }
        .opened_pop_up_menu{
          display: none;
        }
        .pop_menu_back div span{
          font-style: normal;
          font-family: 'Barlow Condensed';
          font-weight: 700;
          font-size: 16px;
          line-height: 19.2px;
          letter-spacing: 2.7px;
          color: rgba(255, 255, 255, 1);
          display: inline;
        }
        .menu_num{
          display: inline !important;
          margin-right: 10px;
        }
        .underline_menu{
          width: 71px;
          height: 3px;
          position: relative;
          margin: 69px auto auto 296px;
          background-color: white;
          z-index: 1;
        }
        .first_div{
          width: 382px;
          height: 34px;
          position: absolute;
          margin: 212px auto auto 11.57vw;
        }
        .first_div p .text{
        position: absolute;
        height: 19px;
        left: 14.93%;
        top: calc(50% - 19px/2);

        font-family: 'Barlow Condensed';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 3.8px;
        text-transform: uppercase;

        color: #FFFFFF;
      }
      .first_div p .num{
        position: absolute;
        height: 19px;
        left: 0%;
        right: 93.21%;
        top: calc(50% - 19px/2);

        font-family: 'Barlow Condensed';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 3.8px;

        color: #FFFFFF;

        mix-blend-mode: normal;
        opacity: 0.25;
      }
      .title{
        position: absolute;
        width: 488px;
        height: 200px;
        margin: 400px auto auto 11.49vw;
      }
      .crew_text{
          position: absolute !important;
          width: 444px !important;
          height: 128px !important;
          margin: 543px auto auto 11.49vw !important;

          font-family: 'Barlow';
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 34px;
          /* or 175% */

          text-align: left;
          color: #D0D6F9;
        }
        .crew_title{
        position: absolute;
        width: 214px;
        height: 37px;
        left: 0 !important;
        right: 32.42% !important;
        top: calc(50% - 28px/2 - 77px) !important;

        font-family: 'Bellefair';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 36.67px;
        /* identical to box height */

        text-align: left;
        text-transform: uppercase;

        color: #FFFFFF;

        mix-blend-mode: normal;
        opacity: 0.5;
        }
        .crew_name{
          position: absolute;
          width: 388px;
          height: 64px;
          margin-top: 15px;

          font-family: 'Bellefair';
          font-style: normal;
          font-weight: 400;
          font-size: 42px;
          line-height: 64px;
          /* identical to box height */

          text-align: left;
          text-transform: uppercase;

          color: #FFFFFF;
        }
        .select_dest{
        width: 132px;
        height: 15px;
        color: white;
        position: absolute;
        margin: 791px auto auto 11.6vw;
      }
      .dest_img{
        width: 568.07px;
        height: 712px;
        position: absolute;
        margin: 198px auto auto 51.28vw;
        left: 0;
      }
      .dest_img img{
        position: absolute;
        width: 568.07px;
        height: 712px;
      }
      .hover_underline_1{
          width: 70px;
          height: 3px;
          position: relative;
          margin: 0px auto auto 0;
          background-color: white;
          z-index: 1;
          opacity: 0.5
        }
        .hover_underline_2{
          width: 130px;
          height: 3px;
          position: relative;
          margin: 0px auto auto 118px;
          background-color: white;
          z-index: 1;
          opacity: 0.5
        }
        .hover_underline_4{
          width: 127px;
          height: 3px;
          position: relative;
          margin: 0px auto auto 415px;
          background-color: white;
          z-index: 1;
          opacity: 0.5;
        }
        .select_crew_first:hover{
          opacity: 0.5 !important;
        }
        .select_crew_second:hover{
          opacity: 0.5 !important;
        }
        .select_crew_third:hover{
          opacity: 0.5 !important;
        }
        .select_crew_fourth:hover{
          opacity: 0.5 !important;
        }
      
    }
  </style>>
  
  