<template>
    <div class="mobile_page">
      <div class="line"></div>
      <div class="hover_select_line"></div>
      <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>  
      </div>
      <div class="pop_up_menu" @click="this.open_menu">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>
      </div>
      <div class="first_div">
        <p><span class="num">01</span>  <span class="text">PICK YOUR DESTINATION</span></p>
      </div>
      <div class="dest_img">
        <img :src = 'this.dest_img' alt="Moon">
      </div>
      <div class="all_in_one">
      <div class="select_dest">
        <div @mouseenter="this.moon_hover" @mouseleave="this.hover_out" class="select_dest_moon" @click="this.change_moon">MOON</div>
        <div @mouseenter="this.mars_hover" @mouseleave="this.hover_out" class="select_dest_mars" @click="this.change_mars" @onmouseover="this.test()">MARS</div>
        <div @mouseenter="this.europa_hover" @mouseleave="this.hover_out" class="select_dest_europe" @click="this.change_europe">EUROPA</div>
        <div @mouseenter="this.titan_hover" @mouseleave="this.hover_out" class="select_dest_titan" @click="this.change_titan">TITAN</div>
        <div class="underline"></div>
        
      </div>
      <div class="title">
        {{this.title}}
      </div>
      <div class="dest_text">
        {{this.description}}
      </div>
      <div class="split_line"></div>
      <div class="dis_and_time_for_unmobile">
      <div class="distance">
        <div class="distance_text">AVG. DISTANCE</div>
        <div class="distance_value">{{ this.distance }}</div>
      </div>
      <div class="travel_time">
        <div class="travel_time_text">Est. travel time</div>
        <div class="travel_time_value">{{this.time}}</div>
      </div>
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
          <p><span class="menu_num" style="width: 15px">01</span><span class="st_text_menu" style="width: 97px">DESTINATION</span></p>
          </router-link>
        </div>
        <div class="crew">
        <router-link to="/crew">
        <p @mouseenter="this.hover_menu_3 = true" @mouseout="this.hover_menu_3 = false"><span class = 'menu_num' style="width: 17px">02</span><span class="st_text_menu" style="width: 40px">CREW</span></p>
        </router-link>
      </div>
      <div class="tech">
          <router-link to="/technology">
          <p @mouseenter="this.hover_menu_4 = true" @mouseout="this.hover_menu_4 = false"><span class = 'menu_num' style="width: 17px">03</span><span class="st_text_menu" style="width: 96px">TECNOLOGY</span></p>
          </router-link></div>
        <div class="underline1"></div>
        <div class="hover_underline_1" v-if="hover_menu_1"></div>
        <div class="hover_underline_3" v-if="hover_menu_3"></div>
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
            dest_img: require('../assets/mobile/image-moon.png'),
            title: 'MOON',
            description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
            distance: '384,400 km',
            time: '3 DAYS',
            hover_menu_1: false,
            hover_menu_2: false,
            hover_menu_3: false,
            hover_menu_4: false,
            item1: document.querySelector(".select_dest_mars")
        
        }
    },
    methods:{
      mars_hover(){
        if(this.title != "MARS"){
          document.querySelector(".hover_select_line").style.visibility = "visible"
          document.querySelector(".hover_select_line").style.marginLeft = "63vw" 
          document.querySelector(".hover_select_line").style.width = '43px'
        }
      },
      europa_hover(){
        if(this.title != "EUROPA"){
          document.querySelector(".hover_select_line").style.visibility = "visible"
          document.querySelector(".hover_select_line").style.marginLeft = "68.49vw" 
          document.querySelector(".hover_select_line").style.width = '55px'
        }
      },
      titan_hover(){
        if(this.title != "TITAN"){
          document.querySelector(".hover_select_line").style.visibility = "visible"
          document.querySelector(".hover_select_line").style.marginLeft = "75.18vw" 
          document.querySelector(".hover_select_line").style.width = '35px'
        }
      },
      moon_hover(){
        if(this.title != "MOON"){
            document.querySelector(".hover_select_line").style.visibility = "visible"
            document.querySelector(".hover_select_line").style.marginLeft = "58.13vw" 
            document.querySelector(".hover_select_line").style.width = '43px'
          }
      },  
      hover_out(){
        document.querySelector(".hover_select_line").style.visibility = "hidden"
      },
      open_menu(){
        document.querySelector('.pop_menu_back').style.display = 'inline'
      },
      close_menu(){
        document.querySelector('.pop_menu_back').style.display = 'none'
      },
      change_mars(){
        document.querySelector(".hover_select_line").style.visibility = "hidden"
        this.dest_img = require('../assets/mobile/image-mars.png')
        document.querySelector('.select_dest_moon').style.color = 'rgba(208, 214, 249, 1)'
        document.querySelector('.select_dest_mars').style.color = 'rgba(255, 255, 255, 1)'
        document.querySelector('.underline').style.margin = '8px auto auto 75.5px'
        this.title = "MARS"
        this.description = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
        this.distance = '225 MIL. km'
        this.time = '9 months'
      },
      change_europe(){
        document.querySelector(".hover_select_line").style.visibility = "hidden"
        this.dest_img = require('../assets/mobile/image-europa.png')
        document.querySelector('.select_dest_mars').style.color = 'rgba(208, 214, 249, 1)'
        document.querySelector('.select_dest_europe').style.color = 'rgba(255, 255, 255, 1)'
        document.querySelector('.select_dest_moon').style.color = 'rgba(208, 214, 249, 1)'
        document.querySelector('.underline').style.margin = '8px auto auto 157.5px'
        this.title = "EUROPA"
        this.description = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
        this.distance = '628 MIL. km'
        this.time = '3 years'
      },
      change_titan(){
        document.querySelector(".hover_select_line").style.visibility = "hidden"
        this.dest_img = require('../assets/mobile/image-titan.png')
        document.querySelector('.select_dest_mars').style.color = 'rgba(208, 214, 249, 1)'
        document.querySelector('.select_dest_titan').style.color = 'rgba(255, 255, 255, 1)'
        document.querySelector('.select_dest_moon').style.color = 'rgba(208, 214, 249, 1)'
        document.querySelector('.select_dest_europe').style.color = 'rgba(208, 214, 249, 1)'
        document.querySelector('.underline').style.margin = '8px auto auto 245.5px'
        this.title = "TITAN"
        this.description = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
        this.distance = '1.6 BIL. km'
        this.time = '7 years'
      },
      change_moon(){
        document.querySelector(".hover_select_line").style.visibility = "hidden"
        this.dest_img = require('../assets/mobile/image-moon.png')
        document.querySelector('.select_dest_mars').style.color = 'rgba(208, 214, 249, 1)'
        document.querySelector('.select_dest_titan').style.color = 'rgba(255, 255, 255, 1)'
        document.querySelector('.select_dest_moon').style.color = 'rgba(255, 255, 255, 1)'
        document.querySelector('.select_dest_europe').style.color = 'rgba(208, 214, 249, 1)'
        document.querySelector('.underline').style.margin = '8px auto auto auto'
        this.title = "MOON"
        this.description = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
        this.distance = '384,400 km'
        this.time = '3 DAYS'
      }
    },
    mounted(){
        this.render = true
        }
    }
  </script>
  
  <style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&family=Dancing+Script:wght@600&family=Noto+Serif+Georgian&display=swap');
  
    @media screen and (max-width: 710px){
    .mobile_page{
      width: 100vw; /*367*/
      height: 850px;
      position: absolute;
      margin: 0 0 0 0;
      left: 0;
      top: 0;
      background-image: url('/Users/programing/Desktop/programing/challange/space/space-turism-website/src/assets/mobile/background-destination-mobile.jpg');
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
        width: 221px;
        height: 19px;
        position: absolute;
        margin: 88px auto auto calc((100vw - 221px)/2);
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
        width: 170px;
        height: 170px;
        position: absolute;
        margin: 139px auto auto calc((100vw - 170px)/2);
      }
      .dest_img img{
        width: 170px;
        height: 170px;
      }
      .select_dest{
        position: absolute;
        color:white;
        width: 237.5px;
        height: 28px;
        margin: 335px auto auto calc((100vw - 237.5px)/2);
      }
      .select_dest div{
        display: inline;
        
      }
      .select_dest_moon{
        display: inline;
        position: relative;
        margin: auto auto auto 0.5px;
        width: 35px;
        height: 17px;
        font-style: normal;
        font-family: 'Barlow Condensed';
        font-weight: 400;
        font-size: 14px;
        line-height: 16.8px;
        letter-spacing: 2.36px;
        color: rgba(255, 255, 255, 1);
      }
      .select_dest_mars{
        display: inline;
        position: relative;
        margin: auto auto auto 26px;
        width: 33px;
        height: 17px;
        font-style: normal;
        font-family: 'Barlow Condensed';
        font-weight: 400;
        font-size: 14px;
        line-height: 16.8px;
        letter-spacing: 2.36px;
        color: rgba(208, 214, 249, 1);
      }
      .select_dest_europe{
        display: inline;
        position: relative;
        margin: auto auto auto 27px;
        width: 49px;
        height: 17px;
        font-style: normal;
        font-family: 'Barlow Condensed';
        font-weight: 400;
        font-size: 14px;
        line-height: 16.8px;
        letter-spacing: 2.36px;
        color: rgba(208, 214, 249, 1);
      }
      .select_dest_mars{
        display: inline;
        position: relative;
        margin: auto auto auto 27px;
        width: 37px;
        height: 17px;
        font-style: normal;
        font-family: 'Barlow Condensed';
        font-weight: 400;
        font-size: 14px;
        line-height: 16.8px;
        letter-spacing: 2.36px;
        color: rgba(208, 214, 249, 1);
      }
      .select_dest_titan{
        display: inline;
        position: relative;
        margin: auto auto auto 27px;
        width: 37px;
        height: 17px;
        font-style: normal;
        font-family: 'Barlow Condensed';
        font-weight: 400;
        font-size: 14px;
        line-height: 16.8px;
        letter-spacing: 2.36px;
        color: rgba(208, 214, 249, 1);
      }
      .underline1{
        width: 36px;
        height: 3px;
        position: absolute;
        margin: 8px auto auto auto;
        background: rgba(255, 255, 255, 1);
        z-index: 1;
;
      }
      .title{
        width: 187px;
        height: 64px;
        position: absolute;
        margin: 383px auto auto calc((100vw - 187px)/2);
        font-style: normal;
        font-family: 'Bellefair';
        font-weight: 400;
        font-size: 56px;
        line-height: 64.18px;
        text-align: center;
        color: rgba(255,255,255,1);
      }
      .dest_text{
        width: 327px;
        height: 125px;
        position: absolute;
        margin: 448px auto auto calc((100vw - 327px)/2);
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
        margin: 605px auto auto calc((100vw - 87.2vw)/2);
        background-color: rgba(56, 59, 75, 1);
      }
      .distance{
        width: 216px;
        height: 61px;
        position: absolute;
        margin: 638px auto auto calc((100vw - 216px)/2);
      }
      .distance_text{
        width: 216px;
        height: 17px;
        font-style: normal;
        font-family: 'Barlow Condensed';
        font-weight: 400;
        font-size: 14px;
        line-height: 16.8px;
        letter-spacing: 2.36px;
        text-align: center;
        color: rgba(208, 214, 249, 1);
      }
      .distance_value{
        width: 216px;
        height: 32px;
        position: absolute;
        margin: 29px auto auto auto;
        font-style: normal;
        font-family: 'Bellefair';
        font-weight: 400;
        font-size: 28px;
        line-height: 32.09px;
        text-align: center;
        color: rgba(255, 255, 255, 1);
        top: 0;
      }
      .travel_time{
        width: 223px;
        height: 61px;
        position: absolute;
        margin: 731px auto auto calc((100vw - 223px)/2);
      }
      .travel_time_text{
        width: 223px;
        height: 17px;
        font-style: normal;
        font-family: "Barlow Condensed";
        font-weight: 400;
        font-size: 14px;
        line-height: 16.8px;
        letter-spacing: 2.36px;
        text-align: center;
        color: rgba(208, 214, 249, 1);
        text-transform: uppercase;
      }
      .travel_time_value{
        width: 223px;
        height: 32px;
        position: absolute;
        margin: 29px auto auto auto;
        font-style: normal;
        font-family: 'Bellefair';
        font-size: 28px;
        line-height: 32.09px;
        text-align: center;
        color: rgba(255, 255, 255, 1);
        text-transform: uppercase;
        top: 0;
      }
      .pop_menu_back{
        position: absolute;
        width: 69vw;
        height: 850px;
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
      .underline1{
        display: none;
      }
    }
    /* tablet media query */
  @media  screen and (min-width: 709px){
    .mobile_page{
        width: 100vw; /*367*/
        height: 100vh;
        position: absolute;
        margin: 0 0 0 0;
        left: 0;
        top: 0;
        background-image: url('../assets/mobile/background-destination-tablet.jpg');
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
        width: 300px;
        height: 300px;
        position: absolute;
        margin: 220px auto auto calc((100vw - 300px) / 2);
        left: 0;
      }
      .dest_img img{
        width: 300px;
        height: 300px;
      }
      .select_dest{
        width: 285.5px;
        height: 34px;
        color: white;
        position: absolute;
        margin: 573px auto auto calc((100vw - 285.5px) / 2);
      }
      .select_dest div{
        display: inline;
        
      }
      .select_dest_moon{
        display: inline;
        position: relative;
        margin: auto auto auto 0.5px;
        width: 39px;
        height: 19px;
        font-style: normal;
        font-family: 'Barlow Condensed';
        font-weight: 400;
        font-size: 16px;
        line-height: 19.2px;
        letter-spacing: 2.7px;
        color: rgba(255, 255, 255, 1);
      }
      .select_dest_mars{
        display: inline;
        position: relative;
        margin: auto auto auto 35px;
        width: 37px;
        height: 19px;
        font-style: normal;
        font-family: 'Barlow Condensed';
        font-weight: 400;
        font-size: 16px;
        line-height: 19.2px;
        letter-spacing: 2.7px;
        color: rgba(208, 214, 249, 1);
      }
      .select_dest_europe{
        display: inline;
        position: relative;
        margin: auto auto auto 36px;
        width: 56px;
        height: 19px;
        font-style: normal;
        font-family: 'Barlow Condensed';
        font-weight: 400;
        font-size: 16px;
        line-height: 19.2px;
        letter-spacing: 2.7px;
        color: rgba(208, 214, 249, 1);
      }
      .select_dest_titan{
        display: inline;
        position: relative;
        margin: auto auto auto 36px;
        width: 37px;
        height: 17px;
        font-style: normal;
        font-family: 'Barlow Condensed';
        font-weight: 400;
        font-size: 14px;
        line-height: 16.8px;
        letter-spacing: 2.36px;
        color: rgba(208, 214, 249, 1);
      }
      .underline{
        width: 43px;
        height: 3px;
        position: absolute;
        margin: 8px auto auto auto;
        background: rgba(255, 255, 255, 1);
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
      .dest_text{
        width: 573px;
        height: 84px;
        position: absolute;
        margin: 739px auto auto calc((100vw - 573px)/2);
        color: rgba(208, 214, 249, 1);
        text-align: center;
        font-style: normal;
        font-family: 'Barlow';
        font-weight: 400;
        font-size: 16px;
        line-height: 28px
      }
      .split_line{
        width: 87.2vw;
        height: 1px;
        position: absolute;
        margin: 872px auto auto calc((100vw - 87.2vw)/2);
        background-color: rgba(56, 59, 75, 1);

      }
      .distance{
        width: 216px;
        height: 61px;
        position: absolute;
        margin: 901px auto auto calc((100vw - 216px)/3.39);
      }
      .distance_text{
        width: 216px;
        height: 17px;
        font-style: normal;
        font-family: 'Barlow Condensed';
        font-weight: 400;
        font-size: 14px;
        line-height: 16.8px;
        letter-spacing: 2.36px;
        text-align: center;
        color: rgba(208, 214, 249, 1);
      }
      .distance_value{
        width: 216px;
        height: 32px;
        position: absolute;
        margin: 29px auto auto auto;
        font-style: normal;
        font-family: 'Bellefair';
        font-weight: 400;
        font-size: 28px;
        line-height: 32.09px;
        text-align: center;
        color: rgba(255, 255, 255, 1);
        top: 0;
      }
      .travel_time{
        width: 223px;
        height: 61px;
        position: absolute;
        margin: 901px calc((100vw - 223px) / 3.5048) auto auto;
        left: 0;
        right: 0;
      }
      .travel_time_text{
        width: 223px;
        height: 17px;
        font-style: normal;
        font-family: "Barlow Condensed";
        font-weight: 400;
        font-size: 14px;
        line-height: 16.8px;
        letter-spacing: 2.36px;
        text-align: center;
        color: rgba(208, 214, 249, 1);
        text-transform: uppercase;
      }
      .travel_time_value{
        width: 223px;
        height: 32px;
        position: absolute;
        margin: 29px auto auto auto;
        font-style: normal;
        font-family: 'Bellefair';
        font-size: 28px;
        line-height: 32.09px;
        text-align: center;
        color: rgba(255, 255, 255, 1);
        text-transform: uppercase;
        top: 0;
      }
      .dist_and_time_for_unmobile{
        width: 573px;
        height: 90px;
        position: absolute;
        margin: 872px auto auto calc((100vw - 573px) / 2);
      }
      .underline1{
          width: 87px;
          height: 3px;
          position: relative;
          margin: 69px auto auto 71px;
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
        .underline1{
          width: 130px;
          height: 3px;
          position: relative;
          margin: 69px auto auto 118px;
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
      .all_in_one{
        width: 445px;
        height: 472px;
        position: absolute;
        margin: 310px auto auto 832px;
      }
      .dest_img{
        width: 445px;
        height: 445px;
        position: absolute;
        margin: 343px auto auto 16.12vw;
        left: 0;
      }
      .dest_img img{
        width: 300px;
        height: 300px;
      }
      .select_dest{
        width: 285.5px;
        height: 34px;
        color: white;
        position: absolute;
        margin: 0 auto auto  0;
      }
      .select_dest div{
        display: inline;
        
      }
      .select_dest_moon{
        display: inline;
        position: relative;
        margin: auto auto auto 0.5px;
        width: 39px;
        height: 19px;
        font-style: normal;
        font-family: 'Barlow Condensed';
        font-weight: 400;
        font-size: 16px;
        line-height: 19.2px;
        letter-spacing: 2.7px;
        color: rgba(255, 255, 255, 1);
      }
      .select_dest_mars{
        display: inline;
        position: relative;
        margin: auto auto auto 35px;
        width: 37px;
        height: 19px;
        font-style: normal;
        font-family: 'Barlow Condensed';
        font-weight: 400;
        font-size: 16px;
        line-height: 19.2px;
        letter-spacing: 2.7px;
        color: rgba(208, 214, 249, 1);
      }
      .select_dest_europe{
        display: inline;
        position: relative;
        margin: auto auto auto 36px;
        width: 56px;
        height: 19px;
        font-style: normal;
        font-family: 'Barlow Condensed';
        font-weight: 400;
        font-size: 16px;
        line-height: 19.2px;
        letter-spacing: 2.7px;
        color: rgba(208, 214, 249, 1);
      }
      .select_dest_titan{
        display: inline;
        position: relative;
        margin: auto auto auto 36px;
        width: 37px;
        height: 17px;
        font-style: normal;
        font-family: 'Barlow Condensed';
        font-weight: 400;
        font-size: 14px;
        line-height: 16.8px;
        letter-spacing: 2.36px;
        color: rgba(208, 214, 249, 1);
      }
      .underline{
        width: 43px;
        height: 3px;
        position: absolute;
        margin: 8px auto auto auto;
        background: rgba(255, 255, 255, 1);
      }
      .title{
        width: 333px;
        height: 115px;
        position: absolute;
        margin: 71px auto auto 0;
        font-style: normal;
        font-family: 'Bellefair';
        font-weight: 400;
        font-size: 100px;
        line-height: 114.6px;
        text-align: center;
        color: rgba(255,255,255,1);
      }
      .dest_text{
        width: 444px;
        height: 128px;
        position: absolute;
        margin: 200px auto auto 0;
        color: rgba(208, 214, 249, 1);
        text-align: left;
        font-style: normal;
        font-family: 'Barlow';
        font-weight: 400;
        font-size: 18px;
        line-height: 32px
      }
      .split_line{
        width: 444px;
        height: 1px;
        position: absolute;
        margin: 382px auto auto 0;
        background-color: rgba(56, 59, 75, 1);

      }
      .distance{
        width: 143px;
        height: 61px;
        position: absolute;
        margin: 411px auto auto 0.5px;
      }
      .distance_text{
        width: 216px;
        height: 17px;
        font-style: normal;
        font-family: 'Barlow Condensed';
        font-weight: 400;
        font-size: 14px;
        line-height: 16.8px;
        letter-spacing: 2.36px;
        text-align: left;
        color: rgba(208, 214, 249, 1);
      }
      .distance_value{
        width: 216px;
        height: 32px;
        position: absolute;
        margin: 29px auto auto auto;
        font-style: normal;
        font-family: 'Bellefair';
        font-weight: 400;
        font-size: 28px;
        line-height: 32.09px;
        text-align: left;
        color: rgba(255, 255, 255, 1);
        top: 0;
      }
      .travel_time{
        width: 122px;
        height: 61px;
        position: absolute;
        margin: 411px auto auto 222.5px;
        left: 0;
        right: 0;
      }
      .travel_time_text{
        width: 223px;
        height: 17px;
        font-style: normal;
        font-family: "Barlow Condensed";
        font-weight: 400;
        font-size: 14px;
        line-height: 16.8px;
        letter-spacing: 2.36px;
        text-align: left;
        color: rgba(208, 214, 249, 1);
        text-transform: uppercase;
      }
      .travel_time_value{
        width: 223px;
        height: 32px;
        position: absolute;
        margin: 29px auto auto auto;
        font-style: normal;
        font-family: 'Bellefair';
        font-size: 28px;
        line-height: 32.09px;
        text-align: left;
        color: rgba(255, 255, 255, 1);
        text-transform: uppercase;
        top: 0;
      }
      .dist_and_time_for_unmobile{
        width: 573px;
        height: 90px;
        position: absolute;
        margin: 872px auto auto calc((100vw - 573px) / 2);
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
        .hover_underline_4{
          width: 127px;
          height: 3px;
          position: relative;
          margin: 0px auto auto 415px;
          background-color: white;
          z-index: 1;
          opacity: 0.5;
        }
       .hover_select_line{
        width: 43px;
        height: 3px;
        background-color: rgba(255,255,255,1);
        opacity: 0.5;
        margin-top: 341px;
        position: absolute;
        visibility: hidden;
       }
      }
      

  </style>>
  
  