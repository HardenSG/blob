<template>
  <section>
      <h1>
          {{ $store.getters.getTitle }}
      </h1>
      <h4>
          ----我的博客
      </h4>
      <hr>
      <ul>
          <li>
            <router-link to="/">博客</router-link>
          </li>
          <li>
            <router-link to="/introduce">介绍</router-link>
          </li>
          <li>
            <a href="javascript:;">联系我</a>
          </li>
          <li>
              <router-link to="/location">官微地址</router-link>
          </li>
      </ul>
  </section>
</template>

<script>
import { ref } from '@vue/reactivity'

export default {
    name:"HeaderNav",
    setup ( ) {
        let headerContent = ref('')

        return {
            headerContent
        }
    }
}
</script>

<style lang="less" scoped>
    section{
        width: 100%;
        margin-top: 100px !important;
        padding: 40px 60px;
        border: 2px solid rgb(78, 76, 76);
        box-shadow: 0 0 10px rgb(90, 89, 89);
        border-radius: 10px;
        font-family: "隶书";
        color: var(--dark-mode-text-color,black) ;
        transition: .4s;
        h4{
            float: right;
            transition: 0s;
        }
        hr{
            margin-top: 30px;
        }
        ul{
            display: flex;
            flex-direction: row;
            justify-content: center;
            li{
                width: 200px;
                text-align: center;
                font-size: 24px;
            }
        }
    }
</style>