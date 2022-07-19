<template>
  <div>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="totalEssayNumber"
      :page-size="5"
      class="mt-4"
      hide-on-single-page
      @update:current-page="currentPage"
      style="display: flex;justify-content: center;"
    />
    <transition-group
        name="animate__animated animate__bounce"
        appear
        enter-active-class="animate__bounceInt"
        leave-active-class="animate__bounceOut"
    >
        <section v-show="isShow" @click="pushDetail(p.Essayid)" v-for="p in data" :key="p.Essayid">
            <span>
                {{ p.title }}
            </span>
            <i>
                {{ p.name }}
            </i>
        </section>
    </transition-group>
    <div v-if="data.length == 0" class="noContent">暂时没有更多内容呢！</div>
  </div>
</template>

<script>
import { onBeforeMount, reactive ,ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

export default {
  name: "EssayMain",
  setup() {
    // 路由
    let router = useRouter();
    // 接受页面文章title的数组
    let data = reactive([]);
    // 页数
    let page = 1;
    // 总数
    let totalEssayNumber = ref(1)
    //isShow
    let isShow = ref(true)

    // 接受页数的essay信息
    const receiveEssayTitle = ( page ) => {
      axios({
        url: "http://localhost:8082/api/receiveEssayTitle",
        method: "GET",
        params: {
          page
        },
      }).then((res) => {
        // 清空原数组，重新push
        if (!data.length) {
          data.push(...res.data.arr);
        } else {
          data.splice(0, data.length);
          data.push(...res.data.arr);
        }
        // 将总文章数保存起来
        totalEssayNumber.value = res.data.count
        // 将文章信息展示出来
        isShow.value = true
      });
    };

    // 在挂载之前请求第一页数据
    onBeforeMount(() => {
      receiveEssayTitle( page );
    });
    
    // 当分页currentPage改变时调用函数
    const currentPage = ( currentPage ) => {
        // 先让它隐藏，等分页完毕再显示
        isShow.value = false
        // 接受改变的索引值
        page = currentPage
        // 调用文章分页的receiveEssayTitle函数
        receiveEssayTitle(page)
    }       

    // 跳转页面至详细文章页面
    // 跳转params是文章id
    const pushDetail = (id) => {
      router.push({
        name: "detail",
        params: {
          id,
        },
      });
    };

    // 交付出去
    return {
      data,
      totalEssayNumber,
      isShow,
      currentPage,
      pushDetail,
    };
  },
};
</script>

<style lang="less" scoped>
section {
  width: 100%;
  height: auto;
  padding: 40px 30px;
  margin-top: 20px;
  opacity: 0.8;
  border-radius: 10px;
  transition: 0.4s;
  box-shadow: 0 0 10px white;
  border: 2px solid rgb(53, 52, 52);
  color: var(--dark-mode-text-color, black);
  font-weight: 700;
  font-size: 25px;
  &:hover {
    cursor: pointer;
    transform: scale(0.9);
  }
  i {
    float: right;
    font-size: 18px;
  }
}

.noContent {
  color: white;
  text-align: center;
  font-size: 25px;
  font-weight: 700;
}

.flip-list-move {
  transition: transform 0.8s ease;
}

</style>