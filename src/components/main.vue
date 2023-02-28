<template>
  <div class="mobile_page">
    <div class="icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>  
    </div>
    <div class="pop_up_menu" @click="this.open_menu">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>
    </div>
    <div class="main_text">
      <p class="top_text">
        SO, YOU WANT TO TRAVEL TO
      </p>
      <h1 class="middle_text">SPACE</h1>
      <p class="bottom_text">
        Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
      </p>
    </div>
    <div class="button" @mouseenter="this.hover_btn = true" @mouseout="this.hover_btn = false">
      <p>
        EXPLORE
      </p>
    </div>
    <div class="hover_btn" v-show="this.hover_btn"></div>
    <div class="line"></div>
    <div class="pop_menu_back">
      <div class="opened_pop_up_menu" @click="this.close_menu">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/></g></svg>
      </div>
      <div class="for_unmobile_menu">
      <div class="home">
        <router-link to="/">
        <p><span class = 'menu_num' style="width: 18px">00</span><span class="st_text_menu" style="width: 39px">HOME</span></p>
        </router-link>
      </div>
      <div class="dest">
        <router-link to="/destination">
        <p  @mouseenter="this.hover_menu_2 = true" @mouseout="this.hover_menu_2 = false"><span class = 'menu_num' style="width: 15px">01</span><span class="st_text_menu" style="width: 97px">DESTINATION</span></p>
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
      <div class="underline"></div>
      <div class="hover_underline_2" v-if="hover_menu_2"></div>
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
      hover_btn: false,
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
        background-image: url('../assets/mobile/background-home-mobile.jpg');
        background-size: 100vw 100vh;
        background-repeat: no-repeat;
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
        .main_text{
          position:absolute;
          width:327px;
          height: 276px;
          margin: 112px auto auto calc((100vw - 327px)/2);
        }
        .top_text{
          width: 217px;
          height: 19px;
          position: absolute;
          margin: auto auto auto 55px;
          font-weight: 400;
          font-size: 10px;
          font-style: normal;
          line-height: 19.2px;
          letter-spacing: 2.7px;
          text-align: center;
          color: #D0D6F9;
          font-family: 'Barlow Condensed';
        }
        .middle_text{
          position: absolute;
          width: 327px;
          height: 100px;
          margin: 35px auto auto auto;
          font-style: normal;
          font-family: 'Bellefair';
          font-weight: 400;
          font-size: 80px;
          line-height: 100px;
          text-align: center;
          color:#FFFFFF;

        }
        .bottom_text{
          position: absolute;
          height: 125px;
          left: 0%;
          right: 0%;
          top: calc(50% - 125px/2 + 75.5px);

          font-family: 'Barlow';
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 25px;
          /* or 167% */

          text-align: center;

          color: #D0D6F9;
        }
        .button{
          width: 150px;
          height: 150px;
          background-color: #FFFFFF;
          position:absolute;
          margin: 469px auto auto calc((100vw - 150px)/2);
          border-radius: 100%;
          text-align: center;
          justify-content: center;
        }
        .button p {
          width: 93px;
          height: 23px;
          position: absolute;
          margin: 68px auto auto 29.5px;
          font-style: normal;
          font-family: 'Bellefair';
          font-size: 20px;
          line-height: 22.92px;
          letter-spacing: 1.25px;
          text-align: center;
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
  /* tablet media query */
  @media  screen and (min-width: 709px){
    .mobile_page{
        width: 100vw; /*367*/
        height: 100vh;
        position: absolute;
        margin: 0 0 0 0;
        left: 0;
        top: 0;
        background-image: url('../assets/mobile/background-home-tablet.jpg');
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
        .main_text{
          position:absolute;
          width:450px;
          height: 334px;
          margin: 202px auto auto calc((100vw - 450px)/2);
        }
        .top_text{
          width: 271px;
          height: 24px;
          position: absolute;
          margin: auto auto auto 90px;
          font-weight: 400;
          font-size: 20px;
          font-style: normal;
          line-height: 24px;
          letter-spacing: 3.8px;
          text-align: center;
          color: #D0D6F9;
          font-family: 'Barlow Condensed';
        }
        .middle_text{
          position: absolute;
          width: 445px;
          height: 150px;
          margin: 48px auto auto auto;
          font-style: normal;
          font-family: 'Bellefair';
          font-weight: 400;
          font-size: 150px;
          line-height: 150px;
          text-align: center;
          color:#FFFFFF;

        }
        .bottom_text{
          position: absolute;
          width: 444px;
          height: 112px;
          left: 3px;
          right: 0%;
          top: calc(50% - 125px/2 + 75.5px);

          font-family: 'Barlow';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 28px;
          /* or 167% */

          text-align: center;

          color: #D0D6F9;
        }
        .button{
          width: 242px;
          height: 242px;
          background-color: #FFFFFF;
          position:absolute;
          margin: 692px auto auto calc((100vw - 242px)/2);
          border-radius: 100%;
          text-align: center;
          justify-content: center;
        }
        .button p {
          width: 148px;
          height: 37px;
          position: absolute;
          margin: 103px auto auto 48px;
          font-style: normal;
          font-family: 'Bellefair';
          font-size: 20px;
          line-height: 22.92px;
          letter-spacing: 1.25px;
          text-align: center;
        }
        .underline{
          width: 36px;
          height: 3px;
          position: relative;
          margin: 69px auto auto 0;
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
          background-image: url('../assets/mobile/background-home-desktop.jpg');
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
        .main_text{
          position:absolute;
          width:450px;
          height: 382px;
          margin: 387px auto auto 11.49vw;
        }
        .top_text{
          width: 300px;
          height: 24px;
          position: absolute;
          margin: auto auto auto 20px;
          font-weight: 400;
          font-size: 20px;
          font-style: normal;
          line-height: 24px;
          letter-spacing: 3.8px;
          text-align: left;
          color: #D0D6F9;
          font-family: 'Barlow Condensed';
        }
        .middle_text{
          position: absolute;
          width: 445px;
          height: 150px;
          margin: 48px auto auto auto;
          font-style: normal;
          font-family: 'Bellefair';
          font-weight: 400;
          font-size: 150px;
          line-height: 150px;
          text-align: center;
          color:#FFFFFF;

        }
        .bottom_text{
          position: absolute;
          width: 444px;
          height: 112px;
          left: 3px;
          right: 0%;
          top: calc(50% - 125px/2 + 75.5px);

          font-family: 'Barlow';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 28px;
          /* or 167% */

          text-align: left;

          color: #D0D6F9;
        }
        .button{
          width: 274px;
          height: 274px;
          background-color: #FFFFFF;
          position:absolute;
          margin: auto auto 131px 69.93vw;
          bottom: 0;
          border-radius: 100%;
          text-align: center;
          justify-content: center;
        }
        .button p {
          width: 148px;
          height: 37px;
          position: absolute;
          margin: 119px auto auto 62px;
          font-style: normal;
          font-family: 'Bellefair';
          font-size: 32px;
          line-height: 36.67px;
          letter-spacing: 2px;
          text-align: center;
        }
        .underline{
          width: 70px;
          height: 3px;
          position: relative;
          margin: 69px auto auto 0;
          background-color: white;
          z-index: 1;
        }
        .hover_btn{
          position: absolute;
          width: 450px;
          height: 450px;
          left: 0%;
          right: 0%;
          top: 0%;
          bottom: 0%;
          border-radius: 100%;
          background: #FFFFFF;
          mix-blend-mode: normal;
          opacity: 0.1;
          margin: auto auto 43px 64vw;
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
      }
      
  
</style>>

