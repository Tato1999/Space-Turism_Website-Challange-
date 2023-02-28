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
        <p><span class="num">03</span>  <span class="text">SPACE LAUNCH 101</span></p>
      </div>
      <div class="dest_img">
        <img :src = 'this.dest_img' alt="Moon">
      </div>
      <div class="select_dest">
        <div class="select_tech_first" @click="this.change_first"><span>1</span></div>
        <div class="select_tech_second" @click="this.change_second"><span>2</span></div>
        <div class="select_tech_third" @click="this.change_third"><span>3</span></div>
      </div>
      <div class="desc_text">
        <div class='first_text'>
            THE TERMINOLOGY…
        </div>
        <div class="title">
            {{this.title}}
        </div>
        <div class="dest_text">
            {{this.description}}
            </div>
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
        <p @mouseenter="this.hover_menu_3 = true" @mouseout="this.hover_menu_3 = false"><span class = 'menu_num' style="width: 17px">02</span><span class="st_text_menu" style="width: 40px">CREW</span></p>
        </router-link>
      </div>
      <div class="tech">
          <router-link to="/technology">
          <p><span class = 'menu_num' style="width: 17px">03</span><span class="st_text_menu" style="width: 96px">TECNOLOGY</span></p>
          </router-link></div>
        <div class="underline_menu"></div>
        <div class="hover_underline_1" v-if="hover_menu_1"></div>
        <div class="hover_underline_2" v-if="hover_menu_2"></div>
        <div class="hover_underline_3" v-if="hover_menu_3"></div>
        </div>
        </div>
      </div>
  </template>
  
  <script>
  export default {
    data(){
        return{
            render: false,
            dest_img: require('../assets/mobile/image-launch-vehicle-landscape.jpg'),
            title: 'LAUNCH VEHICLE',
            description: 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth"s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it"s quite an awe-inspiring sight on the launch pad!',
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
      change_second(){
        if(screen.width>=1440){
          this.dest_img = require('../assets/mobile/image-spaceport-portrait.jpg')
        }else{
        this.dest_img = require('../assets/mobile/image-spaceport-landscape.jpg')
        }
        document.querySelector('.select_tech_first').style.backgroundColor = 'transparent'
        document.querySelector('.select_tech_first').style.opacity = '0.25'
        document.querySelector('.select_tech_second').style.opacity = '1'
        document.querySelector('.select_tech_third').style.opacity = '0.25'
        document.querySelector('.select_tech_second').style.backgroundColor = '#FFFFFF'
        document.querySelector('.select_tech_second span').style.color = 'black'
        document.querySelector('.select_tech_first span').style.color = 'white'
        document.querySelector('.select_tech_third span').style.color = 'white'
        document.querySelector('.select_tech_third').style.backgroundColor = ''
        this.title = "SPACEPORT"
        this.description = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
      },
      change_third(){
        if(screen.width>=1440){
          this.dest_img = require('../assets/mobile/image-space-capsule-portrait.jpg')
        }else{
        this.dest_img = require('../assets/mobile/image-space-capsule-landscape.jpg')
        }
        document.querySelector('.select_tech_second').style.backgroundColor = 'transparent'
        document.querySelector('.select_tech_first').style.backgroundColor = 'transparent'
        document.querySelector('.select_tech_first').style.opacity = '0.25'
        document.querySelector('.select_tech_third').style.opacity = '1'
        document.querySelector('.select_tech_second').style.opacity = '0.25'
        document.querySelector('.select_tech_third').style.backgroundColor = '#FFFFFF'
        document.querySelector('.select_tech_third span').style.color = 'black'
        document.querySelector('.select_tech_second span').style.color = 'white'
        document.querySelector('.select_tech_first span').style.color = 'white'
        this.title = "SPACE CAPSULE"
        this.description = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
      },
      change_first(){
        if(screen.width>=1440){
          this.dest_img = require('../assets/mobile/image-launch-vehicle-portrait.jpg')
        }else{
        this.dest_img = require('../assets/mobile/image-launch-vehicle-landscape.jpg')
        }
        document.querySelector('.select_tech_second').style.backgroundColor = 'transparent'
        document.querySelector('.select_tech_third').style.backgroundColor = 'transparent'
        document.querySelector('.select_tech_first').style.opacity = '1'
        document.querySelector('.select_tech_third').style.opacity = '0.25'
        document.querySelector('.select_tech_second').style.opacity = '0.25'
        document.querySelector('.select_tech_first').style.backgroundColor = '#FFFFFF'
        document.querySelector('.select_tech_first span').style.color = 'black'
        document.querySelector('.select_tech_second span').style.color = 'white'
        document.querySelector('.select_tech_third span').style.color = 'white'
        this.title = "LAUNCH VEHICLE"
        this.description = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
      }
    },
    mounted(){
      if(screen.width>=1440){
          this.dest_img = require('../assets/mobile/image-launch-vehicle-portrait.jpg')
        }else{
          this.dest_img = require('../assets/mobile/image-launch-vehicle-landscape.jpg')
        }
    }
  }
  </script>
  
  <style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&family=Dancing+Script:wght@600&family=Noto+Serif+Georgian&display=swap');
  
    @media screen and (max-width: 710px){
      .mobile_page{
        width: 100vw; /*367*/
        height: 100vh;
        position: absolute;
        margin: 0 0 0 0;
        left: 0;
        top: 0;
        background-image: url('../assets/mobile/background-technology-mobile.jpg');
        background-size: 100vw 100vh;
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
          width: 176px;
          height: 19px;
          position: absolute;
          margin: 88px auto auto calc((100vw - 176px)/2);
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
          width: 375px;
          height: 170px;
          position: absolute;
          margin: 139px auto auto calc((100vw - 375px)/2);
        }
        
        @media screen and (max-width: 375px){
          .dest_img img{
            width: 100vw;
            height: 170px;
            margin: 0;
          }
          .dest_img{
          width: 100vwpx;
          height: 170px;
          position: absolute;
          margin: 139px auto auto auto;
        }
        }
        @media screen and (min-width: 375px){
          .dest_img img{
              width: 375px;
              height: 170px;
            }
            .dest_img{
            width: 375px;
            height: 170px;
            position: absolute;
            margin: 139px auto auto calc((100vw - 375px)/2);
          }
        }
        .select_dest{
          position: absolute;
          color:rgb(4, 4, 4);
          width: 152px;
          height: 40px;
          margin: 343px auto auto calc((100vw - 152px)/2);
        }
        .select_dest div{
          display: inline;
          
        }
        .select_tech_first{
          display: inline;
          position: absolute;
          width: 40px;
          height: 40px;
          margin: auto auto auto 0;
          background-color: white;
          text-align: center;
          border-radius: 100%;
          border: 1px solid #FFFFFF;
        }
        .select_tech_first span{
          position: absolute;
          height: 18px;
          left: 40%;
          right: 40%;
          top: calc(50% - 18px/2);
          font-family: 'Bellefair';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 18px;
          text-align: center;
          letter-spacing: 1px;

          color: #010000;
        }
        .select_tech_second{
          display: inline;
          position: absolute;
          width: 40px;
          height: 40px;
          margin: auto auto auto 56px;
          color: white;
          text-align: center;
          mix-blend-mode: normal;
          border-radius: 100%;
          opacity: 0.25;
          border: 1px solid #FFFFFF;
        }
        .select_tech_second span{
          position: absolute;
          height: 18px;
          left: 40%;
          right: 40%;
          top: calc(50% - 18px/2);

          font-family: 'Bellefair';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 18px;
          text-align: center;
          letter-spacing: 1px;

          color: #FFFFFF;
        }
        .select_tech_third{
          display: inline;
          position: absolute;
          width: 40px;
          height: 40px;
          margin: auto auto auto 112px;
          text-align: center;
          border-radius: 100%;
          mix-blend-mode: normal;
          border-radius: 100%;
          opacity: 0.25;
          border: 1px solid #FFFFFF;
        }
        .select_tech_third span{
          position: absolute;
          height: 18px;
          left: 40%;
          right: 40%;
          top: calc(50% - 18px/2);
          font-family: 'Bellefair';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 18px;
          text-align: center;
          letter-spacing: 1px;

          color: #FFFFFF;
        }
        .desc_text{
          position: absolute;
          width: 327px;
          height: 220px;
          margin: 409px auto auto calc((100vw - 327px)/2); 
        }
        .title{
          position: absolute;
          width: 327px;
          height: 28px;
          margin: 26px auto auto auto;

          font-family: 'Bellefair';
          font-style: normal;
          font-weight: 400;
          font-size: 24px;
          line-height: 28px;

          text-align: center;
          text-transform: uppercase;

          color: #FFFFFF;
        }
        .dest_text{
          position: absolute;
          width: 327px;
          margin: 16px auto auto auto;
          height: 175px;
          left: 0%;
          right: 0%;
          top: calc(50% - 175px/2 + 47.5px);

          font-family: 'Barlow';
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 25px;

          text-align: center;

          color: #D0D6F9;
        }
        .first_text{
          position: absolute;
          width: 135px;
          height: 17px;
          margin: auto auto auto 98px;
          font-family: 'Barlow Condensed';
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 17px;

          text-align: center;
          letter-spacing: 2.3625px;

          color: #D0D6F9;
        }
        .split_line{
          width: 327px;
          height: 1px;
          position: absolute;
          margin: 605px auto auto 6.5vw;
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
    @media  screen and (min-width: 768px){
    .mobile_page{
        width: 100vw; /*367*/
        height: 100vh;
        position: absolute;
        margin: 0 0 0 0;
        left: 0;
        top: 0;
        background-image: url('../assets/mobile/background-technology-mobile.jpg');
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
          margin: 1 auto auto 0;
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
        width: 100vw;
        height: 310px;
        position: absolute;
        margin: 220px auto auto 0.2vw;
      }
      .dest_img img{
        width: 100vw;
        height: 310px;
      }
      .select_dest{
        width: 210px;
        height: 60px;
        position: absolute;
        margin: 586px auto auto calc((100vw - 210px)/2);
      }
      .select_dest div{
          display: inline;
          
        }
        .select_tech_first{
          display: inline;
          position: absolute;
          width: 60px;
          height: 60px;
          margin: auto auto auto 0;
          background-color: white;
          text-align: center;
          border-radius: 100%;
          border: 1px solid #FFFFFF;
        }
        .select_tech_first span{
          position: absolute;
          height: 18px;
          left: 40%;
          right: 40%;
          top: calc(50% - 18px/2);
          font-family: 'Bellefair';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 18px;
          text-align: center;
          letter-spacing: 1px;

          color: #010000;
        }
        .select_tech_second{
          display: inline;
          position: absolute;
          width: 60px;
          height: 60px;
          margin: auto auto auto 76px;
          color: white;
          text-align: center;
          mix-blend-mode: normal;
          border-radius: 100%;
          opacity: 0.25;
          border: 1px solid #FFFFFF;
        }
        .select_tech_second span{
          position: absolute;
          height: 18px;
          left: 40%;
          right: 40%;
          top: calc(50% - 18px/2);

          font-family: 'Bellefair';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 18px;
          text-align: center;
          letter-spacing: 1px;

          color: #FFFFFF;
        }
        .select_tech_third{
          display: inline;
          position: absolute;
          width: 60px;
          height: 60px;
          margin: auto auto auto 152px;
          text-align: center;
          border-radius: 100%;
          mix-blend-mode: normal;
          border-radius: 100%;
          opacity: 0.25;
          border: 1px solid #FFFFFF;
        }
        .select_tech_third span{
          position: absolute;
          height: 18px;
          left: 40%;
          right: 40%;
          top: calc(50% - 18px/2);
          font-family: 'Bellefair';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 18px;
          text-align: center;
          letter-spacing: 1px;

          color: #FFFFFF;
        }
        .desc_text{
          width: 458px;
          height: 237px;
          position: absolute;
          margin: 690px auto auto calc((100vw - 458px)/2);
        }
        .title{
          position: absolute;
          width: 457px;
          height: 46px;
          margin: 35px auto auto auto;

          font-family: 'Bellefair';
          font-style: normal;
          font-weight: 400;
          font-size: 40px;
          line-height: 45.84px;

          text-align: center;
          text-transform: uppercase;

          color: #FFFFFF;
        }
        .dest_text{
          position: absolute;
          width: 458px;
          margin: 16px auto auto auto;
          height: 140px;
          left: 0%;
          right: 0%;
          top: calc(50% - 175px/2 + 47.5px);

          font-family: 'Barlow';
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 25px;

          text-align: center;

          color: #D0D6F9;
        }
        .first_text{
          position: absolute;
          width: 160px;
          height: 19px;
          margin: auto auto auto 150px;
          font-family: 'Barlow Condensed';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 19.2px;

          text-align: center;
          letter-spacing: 2.7px;

          color: #D0D6F9;
        }
        .underline_menu{
          width: 86px;
          height: 3px;
          position: relative;
          margin: 69px auto auto 270px;
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
          background-image: url('../assets/mobile/background-technology-mobile.jpg');
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
      .desc_text{
          width: 470px;
          height: 303px;
          position: absolute;
          margin: 383px auto auto 22.57vw;
        }
        .title{
          position: absolute;
          width: 470px;
          height: 64px;
          margin: 30px auto auto 0;

          font-family: 'Bellefair';
          font-style: normal;
          font-weight: 400;
          font-size: 56px;
          line-height: 64.18px;

          text-align: left;
          text-transform: uppercase;

          color: #FFFFFF;
        }
        .dest_text{
          position: absolute;
          width: 458px;
          margin: 17px auto auto 0;
          height: 192px;

          font-family: 'Barlow';
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 32px;

          text-align: left;

          color: #D0D6F9;
        }
        .first_text{
          position: absolute;
          width: 160px;
          height: 19px;
          margin: auto auto auto 0;
          font-family: 'Barlow Condensed';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 19.2px;

          text-align: left;
          letter-spacing: 2.7px;

          color: #D0D6F9;
        }
        .dest_img{
        width: 552px;
        height: 858px;
        position: absolute;
        margin: 98px auto auto 64.51vw;
      }
      .dest_img img{
        width: 515px !important;
        height: 527px !important;
        position: absolute;
        margin: 174px auto auto 0;
      }
      .select_dest{
        width: 80px;
        height: 304px;
        position: absolute;
        margin: 383px auto auto 11.46vw;
      }
      .select_tech_first{
          display: inline;
          position: absolute;
          width: 80px;
          height: 80px;
          margin: auto auto auto 0;
          background-color: white;
          text-align: center;
          border-radius: 100%;
          border: 1px solid #FFFFFF;
        }
        .select_tech_first span{
          position: absolute;
          height: 18px;
          left: 40%;
          right: 40%;
          top: calc(50% - 18px/2);
          font-family: 'Bellefair';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 18px;
          text-align: center;
          letter-spacing: 1px;

          color: #010000;
        }
        .select_tech_second{
          display: inline;
          position: absolute;
          width: 80px;
          height: 80px;
          margin: 112px auto auto 0;
          color: white;
          text-align: center;
          mix-blend-mode: normal;
          border-radius: 100%;
          opacity: 0.25;
          border: 1px solid #FFFFFF;
        }
        .select_tech_second span{
          position: absolute;
          height: 18px;
          left: 40%;
          right: 40%;
          top: calc(50% - 18px/2);

          font-family: 'Bellefair';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 18px;
          text-align: center;
          letter-spacing: 1px;

          color: #FFFFFF;
        }
        .select_tech_third{
          display: inline;
          position: absolute;
          width: 80px;
          height: 80px;
          margin: 224px auto auto 0;
          text-align: center;
          border-radius: 100%;
          mix-blend-mode: normal;
          border-radius: 100%;
          opacity: 0.25;
          border: 1px solid #FFFFFF;
        }
        .select_tech_third span{
          position: absolute;
          height: 18px;
          left: 40%;
          right: 40%;
          top: calc(50% - 18px/2);
          font-family: 'Bellefair';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 18px;
          text-align: center;
          letter-spacing: 1px;

          color: #FFFFFF;
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
        .hover_underline_3{
          width: 71px;
          height: 3px;
          position: relative;
          margin: 0px auto auto 296px;
          background-color: white;
          z-index: 1;
          opacity: 0.5;
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
        .underline_menu{
          width: 120px;
          height: 3px;
          position: relative;
          margin: 69px auto auto 415px;
          background-color: white;
          z-index: 1;
        }
        .select_tech_first:hover{
          opacity: 1 !important;
        }
        .select_tech_second:hover{
          opacity: 1 !important;
        }
        .select_tech_third:hover{
          opacity: 1 !important;
        }
    }
  </style>>
  
  