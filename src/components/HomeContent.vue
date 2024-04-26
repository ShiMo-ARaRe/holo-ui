<template>
  <div class="con">
    <!-- con这个样式是我们自己定义的，用来内容总体居中的 -->

    <el-container>
      <el-header>
        <div class="hd">
          <a class="more" href="/loveflower">
            更多
            <span class="icon icon-arrow-right"></span>
          </a>
          <h3>
            <a href="/loveflower">测试</a>
            <!-- <span>送 · 让你怦然心动的人</span> -->
          </h3>
        </div>
      </el-header>

      <el-container>
        <!-- <el-aside> 标签是 Element UI 中的一个组件，用于创建一个侧边栏（Sidebar）的容器。
        它通常用于与主要内容区域进行布局，并提供额外的辅助信息、导航或工具。 -->
        <el-aside width="270px">
          <!-- 你的代码中，:fit="cover" 这部分可能出现了问题。在 Vue 中，如果你想传递一个字符串 'cover' 给 fit 属性，
          你需要在 'cover' 前后加上引号，像这样 :fit="'cover'"。
          否则，Vue 会把 cover 当作一个变量来处理，如果这个变量没有定义，就会出现问题。 -->
          <el-link @click="GoToDetail(1)">
            <el-image
              style="height: 530px; margin-top: 20px"
              :fit="'cover'"
              src="/images/content/Amamya.jpg"
            ></el-image>
          </el-link>
        </el-aside>

        <el-main>
          <!-- 原本这里放的是静态的 -->
          <div class="grid-wrapper">
            <div class="grid-item" v-for="item in list" :key="item">
              <el-link @click="GoToDetail(item.id)">
                <div class="grid-panel">
                  <div class="img-box">
                    <el-image class="list-image" :src="item.image"></el-image>
                  </div>
                  <div class="info-cont">
                    <div class="price">
                      <span class="price-sign">¥</span>
                      <span class="price-num">{{ item.price }}</span>
                    </div>
                    <div class="title">
                      <span class="product-title">{{ item.title }}</span>
                    </div>
                  </div>
                </div>
              </el-link>
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { getFlowers } from "../http/index";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router"; //useRouter 是 Vue Router 提供的一个钩子函数，用于在组件中获取路由实例。
const router = useRouter();

const list = ref();

onMounted(async () => {
  let parms = {
    Id: 0,
    Type: 1,
  };
  list.value = (await getFlowers(parms)).data.result; // 数据套了一层ApiResult，所以要从result中拿数据
});

const GoToDetail = (currId) => {
  const sss = ref();
  sss.value = currId; // 商品id
  router.push({ path: "/detail", query: { id: sss.value, type: 1 } });
};
</script>


<style lang="scss" scoped>
.con {
  width: 1040px;
  margin: 15px auto 0;

  .common-layout {
    padding-left: 16.5%;
    background-color: #f7f9fa;
  }
  .more {
    font-size: 14px;
    line-height: 30px;
    color: #71797f;
    float: right;
    margin-right: 10%;
  }

  .hd {
    text-align: initial;
    h3 {
      font-size: 26px;
      line-height: 30px;
      color:rgb(13, 131, 199);
      font-weight: bold;
      a {
        color: inherit;
      }
      span {
        padding-left: 15px;
        margin-left: 16px;
        font-size: 20px;
        line-height: 24px;
        font-weight: normal;
        border-left: 1px solid #71797f;
      }
    }
  }
  .fl-products {
    width: 912px;
    vertical-align: top;
    .fl-products-item {
      display: inline-block; // 行内块元素
      width: 212px;
      margin-left: 16px;
      margin-bottom: 16px;
      background-color: #fff;
      vertical-align: top;

      .product-content {
        padding: 10px 8px 14px;
        text-align: center;
        color: #fff;
        background-color: #1b293a;

        .product-title {
          max-width: 100%;
          overflow: hidden;
          -o-text-overflow: ellipsis;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 16px;
          line-height: 20px;
        }
        .product-price {
          margin-top: 5px;
          font-size: 16px;
          font-weight: bold;
          line-height: 20px;
        }
      }
    }
  }
  .grid-wrapper {
    width: 730px;
    .grid-item {
      float: left;
      margin-bottom: 20px;
      padding: 10px;
      border: 1px solid transparent;
      background-color: #1b293a;
      .list-image {
        width: 160px;
        height: 170px;
      }
      .info-cont {
        .price {
          text-align: initial;
          margin-top: 10px;
          margin-bottom: 8px;
          color: #ff6a00;
          .price-sign {
            font-family: arial;
          }
          .price-num {
            font-weight: 700;
            line-height: 18px;
            margin-right: 10px;
          }
        }
        .title {
          font-size: 12px;
          line-height: 18px;
          overflow: hidden;
          height: 36px;
          margin-bottom: 8px;
          text-align: justify;
          .product-title {
            color: #fff;
            text-decoration: none;
          }
        }
      }
    }
  }
}
</style>