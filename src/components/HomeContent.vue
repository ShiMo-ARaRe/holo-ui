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
            <a href="/loveflower">鲜花</a>
            <span>送 · 让你怦然心动的人</span>
          </h3>
        </div>
      </el-header>

      <el-container>
        <!-- <el-aside> 标签是 Element UI 中的一个组件，用于创建一个侧边栏（Sidebar）的容器。
        它通常用于与主要内容区域进行布局，并提供额外的辅助信息、导航或工具。 -->
        <el-aside width="400px">
          <!-- 你的代码中，:fit="cover" 这部分可能出现了问题。在 Vue 中，如果你想传递一个字符串 'cover' 给 fit 属性，
          你需要在 'cover' 前后加上引号，像这样 :fit="'cover'"。
          否则，Vue 会把 cover 当作一个变量来处理，如果这个变量没有定义，就会出现问题。 -->
          <el-image
            style="height: 730px; margin-top: 20px"
            :fit="'cover'"
            src="/images/content/Amamya.jpg"
          ></el-image>
        </el-aside>

        <el-main>
          <div class="fl-products">
            <div class="fl-products-item" v-for="item in list" :key="item">
              <a>
                <div class="img-box">
                  <!-- object-fit: contain 指定了将图像调整为适应容器大小，同时保持其纵横比。
                  你可以根据需要选择不同的 object-fit 值，包括：

                    fill：拉伸图像以填充整个容器，可能导致图像变形。
                    contain：将图像调整为适应容器大小，保持其纵横比，可能会在容器内留有空白区域。
                    cover：将图像调整为填充容器大小，保持其纵横比，可能会超出容器范围。
                    none：图像原始大小，可能会超出容器范围。
                    scale-down：将图像调整为适应容器大小，但如果图像本身比容器小，则保持图像的原始大小。 -->
                  <el-image
                    style="width: 220px; height: 240px"
                    :src="item.image"
                  />
                </div>
                <div class="product-content">
                  <p class="product-title">{{ item.title }}</p>
                  <p class="product-price">
                    <span class="price-sign">¥</span>
                    <span class="price-num">{{ item.price }}</span>
                  </p>
                </div>
              </a>
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
const list = ref();

onMounted(async () => {
  let parms = {
    Id: 0,
    Type: 1,
  };
  list.value = (await getFlowers(parms)).data.result; // 数据套了一层ApiResult，所以要从result中拿数据
});
</script>


<style lang="scss" scoped>
.con {
  width: 1500px;
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
      color: #232628;
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
        color: #232628;
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
}
</style>