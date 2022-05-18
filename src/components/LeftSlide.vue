<template>
  <div class="container">
      <img src="http://36.133.40.168:8083/uploadImg/img/1652791793884-WeChat Image_20211011071504 - 副本 (4) - 副本.jpg" class="adv">
      <h2>SG</h2>
      <i>天津理工大学《软件工程》专业</i>
      <ul>
          <li>
            <span class="iconfont git">&#xe63a;</span>
            <a title="GitHub" href="https://github.com/HardenSG">HardenSG</a>
          </li>
          <li>
            <span class="iconfont fly">&#xe612;</span>
            <a title="飞书" href="https://www.feishu.cn/invitation/page/add_contact/?token=1fbkd201-c89c-4bce-961c-d9c1c18df706&amp;unique_id=a5SlHXAFPSfMTdFKJ6Kjqw==">飞书</a>
          </li>
          <li>
            <span class="iconfont qq">&#xe882;</span>
            <a href="javascript:;">2767525216</a>
          </li>
          <li>
            <span class="iconfont wechat">&#xe600;</span>
            <a href="javascript:;">y15620343859dq</a>
          </li>
          <li>
            <span class="iconfont weibo">&#xe625;</span>
            <a href="https://weibo.com/u/6598846144">億分之十</a>
          </li>
      </ul>
      <img src="http://36.133.40.168:8083/uploadImg/img/1652791793884-WeChat Image_20211011071504 - 副本 (4) - 副本.jpg" class="play" @click="play">
      <audio :src="music" class="music" @click="play" loop></audio>


    <!-- <transition
      name="animate__animated animate__bounce"
      enter-active-class="animate__fadeIn"
      leave-active-class="animate__fadeOut"
    > -->
    <h2 class="word">
        {{ ShowWord }}
    </h2>
    <!-- </transition> -->
    <!-- <h1>
        {{ more }}
    </h1> -->

  </div>
</template>

<script>
import axios from 'axios'
import { reactive, ref } from '@vue/reactivity'
import { onBeforeMount, onMounted } from '@vue/runtime-core'
export default {
    name:'LeftSlide',
    setup ( ) {
        let music = ref('')
        let musicing = ref(false)
        let ShowWord = ref('')
        // let more = ref('')
        let word = []
        let time = []
        let target = new Map()

        // let nextWord = ''

        onMounted( ( ) => {
            const audio = document.querySelector( ".music" )

            audio.addEventListener("timeupdate", ( ) => {

                if ( target.has( Math.floor( audio.currentTime ) ) ) {
                    
                    ShowWord.value = target.get( Math.floor( audio.currentTime ) ) 

                    // target.delete( Math.floor( audio.currentTime ) )

                    // const key = target.keys()

                    // for (const iterator of key) {

                    //     nextWord = target.get( iterator ) 

                    //     break;
                    // }

                    // more.value = nextWord

                }
            })
        } )

        onBeforeMount( ( ) => {
            axios( {
                url:'http://localhost:8082/api/music',
                method:'GET'
            } ).then( res => {

                const reg = /\[.+\].+/g

                //歌词和时间
                const music1 = res.data.result.word.match(reg)

                // map拿出时间和歌词
                music1.map( item => {
                    time.push( ( Number( item.substr(1 , 2) ) * 60 ) + Number( item.substr(4 , 2 ) ) )
                    word.push( item.substr( 11,100 ) )
                } )

                // 创建Map
                time.forEach( ( item , index ) => {
                    target.set( item , word[index] )
                } )

                music.value = res.data.result.src
                word.value = res.data.result.word
            } )

        } )

        function play ( ) {
            const audio = document.querySelector( ".music" )
            const img   = document.querySelector(".play")
            if( musicing.value ) {
                audio.pause()
                musicing.value = false
                img.classList.remove("playLoop")
                return
            }
            audio.play()
            img.classList.add("playLoop")
            musicing.value = true
        }



        return {
            music,
            play,
            musicing,
            ShowWord,
            // more
        }

    }
}
</script>

<style lang="less" scoped>

    .container{
        position: absolute;
        left: 10px;
        display: flex;
        width: 200px;
        height:600px;
        background-color: transparent;
        border-radius: 15px;
        border: 2px solid #999;
        box-shadow: 0 0 10px rgb(31, 30, 30);

        flex-direction: column;
        align-items: center;

        .adv{
            width: 90px;
            height: 90px;
            border-radius: 20px;
            margin-top: 20px;
            transition: 1s;
            &:hover{
                transform: rotate(360deg);
            }
        }

        .play{
            width: 90px;
            height: 90px;
            border-radius: 20px;
            margin-top: 20px;
            transition: 1s;
            cursor: pointer;
            &::before {
                content: "&#xe63a;";
                font-family: 'icon-font';
                font-size: 20px;
                display: block;
            }
        }

        .playLoop{
            -webkit-animation: play 5s linear infinite;
            -moz-animation: play 5s linear infinite;
            animation: play 5s linear infinite;
        }
        @-webkit-keyframes play{
            0%{-webkit-transform: rotate(0deg);}
            100%{transform: rotate(360deg);}
        }
        @-moz-keyframes play {
            0%{-moz-transform: rotate(0deg);}
            100%{transform: rotate(360deg);}
        }
        @keyframes play{
            0%{transform: rotate(0deg);}
            100%{transform: rotate(360deg);}
        }

        h2{
            margin: 10px;
        }
        i{
            font-size: 13px;
            font-weight: 700;
            margin: 10px;
        }
        //图标颜色
        .git {
            color: rgb(78, 4, 78);
        }
        .fly{
            color: rgb(11, 190, 218);
        }
        .qq{
            color: rgb(11, 146, 224);
        }
        .wechat{
            color: rgb(19, 190, 19);
        }
        .weibo{
            color: rgb(142, 98, 15);
        }






        ul {
            width: 100%;
            li {
                padding-left: 10px;
                height: 30px;
                float: none;
                vertical-align: bottom;

                
                transition: .2s;
                &:hover{
                    box-shadow: 0 0 5px rgb(31, 30, 30);
                    border-radius: 5px;
                }

                span{
                    margin-right: 20px;
                }
                a{
                    color: white !important;
                    font-style: normal;
                    vertical-align: top;
                }


            }
        }

        .music{
            width: 70px;
            height: 70px;
            background-color: yellow;
        }
    }
    .word{
        // margin-top:10px ;
        font-size: 14px;
        color: yellow;
    }
</style>