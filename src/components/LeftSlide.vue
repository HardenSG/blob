<template>
  <div class="container">
    <img src="../assets/微信图片_20220517203235.jpg" class="adv" />
    <h2>SG</h2>
    <i>天津理工大学《软件工程》专业</i>
    <ul>
      <li v-for="item in contactMethods" :key="item.titleName">
        <span class="iconfont" :class="item.className"></span>
        <a
          :title="titleName"
          :href="item.hrefLocation"
          :target="
            item.titleName != '微信' && item.titleName != 'QQ' ? '_blank' : ''
          "
          >{{ item.description }}</a
        >
      </li>
    </ul>
    <img
      src="../assets/微信图片_20220517203235.jpg"
      class="play"
      :class="{
        playLoop:playLoop 
      }"
      @click="play"
    />
    <audio :src="music" class="music" @click="play" loop></audio>
    <h2 class="word">
      {{ ShowWord }}
    </h2>
  </div>
</template>

<script>
import axios from "axios";
import { reactive, ref } from "@vue/reactivity";
import { onBeforeMount, onMounted } from "@vue/runtime-core";
export default {
  name: "LeftSlide",
  setup() {
    /**
     *  music 是音频的地址
     *  musicing 是用于控制音频播放的
     *  showWord 是用于展示的歌词
     *  word 是歌词的数组
     *  time 是时间的数组
     *  target 是时间和歌词组合在一起的Map
     *  playLoop 是播放时图片转动的样式
     */
    let music = ref("");
    let musicing = false;
    let ShowWord = ref("");
    let word = [];
    let time = [];
    let target = new Map();
    let playLoop = ref(false)

    let contactMethods = reactive([
      {
        className: ["git", "icon-github"],
        titleName: "GitHub",
        hrefLocation: "https://github.com/HardenSG",
        description: "HardenSG",
      },
      {
        className: ["fly", "icon-feishu"],
        titleName: "飞书",
        hrefLocation:
          "https://www.feishu.cn/invitation/page/add_contact/?token=1fbkd201-c89c-4bce-961c-d9c1c18df706&amp;unique_id=a5SlHXAFPSfMTdFKJ6Kjqw==",
        description: "SG",
      },
      {
        className: ["qq", "icon-QQ"],
        titleName: "QQ",
        hrefLocation: "javascript:;",
        description: "2767525216",
      },
      {
        className: ["wechat", "icon-weixin"],
        titleName: "微信",
        hrefLocation: "javascript:;",
        description: "y15620343859dq",
      },
      {
        className: ["weibo", "icon-weibo"],
        titleName: "微博",
        hrefLocation: "https://weibo.com/u/6598846144",
        description: "億分之十",
      },
    ]);

    onMounted(() => {
    // audio
    const audio = document.querySelector(".music");
    // add addEventListeners of timeupdate for audio
    audio.addEventListener("timeupdate", () => {
        // 此处为什么不删除已经show的target中的内容
        // 因为可能该歌曲需要循环播放，所以不需要删除，否则可能会重新请求

        // Map().prototype.has(key) 判断该key是否存在于 Map实例中
        // 如果存在即展示此word，将其值get出并赋给showWord.value
        if (target.has(Math.floor(audio.currentTime))) {
          ShowWord.value = target.get(Math.floor(audio.currentTime));
        }
      });

    });

    onBeforeMount(() => {

    // ajax 来 音频 location 歌词 和 时间
      axios({
        url: "http://122.112.203.149:8082/api/music",
        method: "GET",
      }).then((res) => {
        // 定义取出歌词的Reg
        const reg = /\[.+\].+/g;
        // 歌词和时间
        const wordAndTime = res.data.result.word.match(reg);
        // map拿出时间和歌词
        // 遍历数组
        // 数组每个元素是这样式的："[00:00.000] 作词 : 赵雷"
        // time 和 word是 上方提前define好的变量，一个接受歌词一个接受时间
        wordAndTime.map((item) => {
            // 分钟：秒 ：毫秒
            // 考虑到时间不会超出一个小时，所以采用此方法
            // 如果时间超出，那么此处建议采取Date转换
            time.push(Number(item.substr(1, 2)) * 60 + Number(item.substr(4, 2)));
            // 将歌词取出
            word.push(item.substr(11, 100));
        });

        // 创建Map
        // key是时间，value是歌词
        time.forEach((item, index) => {
          target.set(item, word[index]);
        });

        // 将音频地址转为请求来的src
        music.value = res.data.result.src;
      });
    });

    // 音乐的播放设置
    function play() {
        // 获取音频Dom
        const audio = document.querySelector(".music");

        // 不论是暂停还是播放都是让它的样式playLoop的boolean取反就可以了

        playLoop.value = !playLoop.value

        // 如果正在播放，则点击暂停
        if (musicing) {
            audio.pause();
            musicing = false;
            return;
        }
        // 如果已暂停，则点击重新播放
        audio.play();
        musicing = true;
    }

    return {
      music,
      musicing,
      ShowWord,
      contactMethods,
      playLoop,
      play,
    };
  },
};
</script>

<style lang="less" scoped>
.container {
  position: absolute;
  left: 10px;
  display: flex;
  width: 200px;
  height: 600px;
  background-color: transparent;
  border-radius: 15px;
  border: 2px solid #999;
  box-shadow: 0 0 10px rgb(31, 30, 30);

  flex-direction: column;
  align-items: center;

  .adv {
    width: 90px;
    height: 90px;
    border-radius: 20px;
    margin-top: 20px;
    transition: 1s;
    &:hover {
      transform: rotate(360deg);
    }
  }

  .play {
    width: 90px;
    height: 90px;
    border-radius: 20px;
    margin-top: 20px;
    transition: 1s;
    cursor: pointer;
    &::before {
      content: "&#xe63a;";
      font-family: "icon-font";
      font-size: 20px;
      display: block;
    }
  }

  .playLoop {
    -webkit-animation: play 5s linear infinite;
    -moz-animation: play 5s linear infinite;
    animation: play 5s linear infinite;
  }
  @-webkit-keyframes play {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @-moz-keyframes play {
    0% {
      -moz-transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes play {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  h2 {
    margin: 10px;
  }
  i {
    font-size: 13px;
    font-weight: 700;
    margin: 10px;
  }
  //图标颜色
  .git {
    color: rgb(78, 4, 78);
  }
  .fly {
    color: rgb(11, 190, 218);
  }
  .qq {
    color: rgb(11, 146, 224);
  }
  .wechat {
    color: rgb(19, 190, 19);
  }
  .weibo {
    color: rgb(142, 98, 15);
  }

  ul {
    width: 100%;
    li {
      padding-left: 10px;
      height: 30px;
      float: none;
      vertical-align: bottom;

      transition: 0.2s;
      // &:hover{
      //     box-shadow: 0 0 5px rgb(31, 30, 30);
      //     border-radius: 5px;
      // }

      span {
        margin-right: 20px;
      }
      a {
        color: white !important;
        font-style: normal;
        vertical-align: top;
      }
    }
  }

  .music {
    width: 70px;
    height: 70px;
    background-color: yellow;
  }
}
.word {
  // margin-top:10px ;
  font-size: 14px;
  color: yellow;
}
</style>