<template>
  <div class="con">
    <el-container>
      <el-header>
        <!-- 面包屑导航 -->
        <!-- <el-breadcrumb>：这是 <el-breadcrumb> 组件的根元素，用于容纳面包屑导航项。
             separator="/"：通过 separator 属性设置面包屑导航项之间的分隔符为 /。 -->
        <el-breadcrumb separator="/">
          <!-- <el-breadcrumb-item>：这是面包屑导航的每个项。 -->
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>列表页</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>

      <el-container>
        <!-- 侧边栏 -->
        <el-aside width="200px">
          <div class="navigation">
            <div class="item">
              <div class="title">
                <span class="ico ico-effect"></span>
                <h4>用途</h4>
              </div>
              待开发1
              <!-- <ul class="item-list list-inline">
                <li>
                  <a href="/aiqingxianhua/">爱情鲜花</a>
                </li>
                <li>
                  <a href="/youqingxianhua/">友情鲜花</a>
                </li>
                <li>
                  <a href="/shengriliwu/" target="_blank">生日鲜花</a>
                </li>
                <li>
                  <a href="/songzhangbeixianhua/">问候长辈</a>
                </li>
                <li>
                  <a href="/songlaoshixianhua/">回报老师</a>
                </li>
                <li>
                  <a href="/tanbingweiwenxianhua/">探病慰问</a>
                </li>
                <li>
                  <a href="/daoqianxianhua/">道歉鲜花</a>
                </li>
                <li>
                  <a href="/hunqingxianhua/">婚庆鲜花</a>
                </li>
                <li>
                  <a href="/zhufuqinghexianhua/">祝贺鲜花</a>
                </li>
                <li>
                  <a href="/aisixianhua/">哀思鲜花</a>
                </li>
                <li>
                  <a href="/businessFlower/">商务鲜花</a>
                </li>
                <li>
                  <a href="/businessFlower/kaiyehualan/">开业花篮</a>
                </li>
                <li>
                  <a href="/florist/">自选鲜花</a>
                </li>
                <li>
                  <a href="/worldflora/">港澳台送花</a>
                </li>
              </ul> -->
            </div>

            <div class="item">
              <div class="title">
                <span class="ico ico-texture"></span>
                <h4>用途</h4>
              </div>
              待开发2
              <!-- <ul class="item-list list-inline">
                <li>
                  <a href="/aiqingxianhua/">爱情鲜花</a>
                </li>
                <li>
                  <a href="/youqingxianhua/">友情鲜花</a>
                </li>
                <li>
                  <a href="/shengriliwu/" target="_blank">生日鲜花</a>
                </li>
                <li>
                  <a href="/songzhangbeixianhua/">问候长辈</a>
                </li>
                <li>
                  <a href="/songlaoshixianhua/">回报老师</a>
                </li>
                <li>
                  <a href="/tanbingweiwenxianhua/">探病慰问</a>
                </li>
                <li>
                  <a href="/daoqianxianhua/">道歉鲜花</a>
                </li>
                <li>
                  <a href="/hunqingxianhua/">婚庆鲜花</a>
                </li>
                <li>
                  <a href="/zhufuqinghexianhua/">祝贺鲜花</a>
                </li>
                <li>
                  <a href="/aisixianhua/">哀思鲜花</a>
                </li>
                <li>
                  <a href="/businessFlower/">商务鲜花</a>
                </li>
                <li>
                  <a href="/businessFlower/kaiyehualan/">开业花篮</a>
                </li>
                <li>
                  <a href="/florist/">自选鲜花</a>
                </li>
                <li>
                  <a href="/worldflora/">港澳台送花</a>
                </li>
              </ul> -->
            </div>

            <div class="item">
              <div class="title">
                <span class="ico ico-color"></span>
                <h4>用途</h4>
              </div>
              待开发3
              <!-- <ul class="item-list list-inline">
                <li>
                  <a href="/aiqingxianhua/">爱情鲜花</a>
                </li>
                <li>
                  <a href="/youqingxianhua/">友情鲜花</a>
                </li>
                <li>
                  <a href="/shengriliwu/" target="_blank">生日鲜花</a>
                </li>
                <li>
                  <a href="/songzhangbeixianhua/">问候长辈</a>
                </li>
                <li>
                  <a href="/songlaoshixianhua/">回报老师</a>
                </li>
                <li>
                  <a href="/tanbingweiwenxianhua/">探病慰问</a>
                </li>
                <li>
                  <a href="/daoqianxianhua/">道歉鲜花</a>
                </li>
                <li>
                  <a href="/hunqingxianhua/">婚庆鲜花</a>
                </li>
                <li>
                  <a href="/zhufuqinghexianhua/">祝贺鲜花</a>
                </li>
                <li>
                  <a href="/aisixianhua/">哀思鲜花</a>
                </li>
                <li>
                  <a href="/businessFlower/">商务鲜花</a>
                </li>
                <li>
                  <a href="/businessFlower/kaiyehualan/">开业花篮</a>
                </li>
                <li>
                  <a href="/florist/">自选鲜花</a>
                </li>
                <li>
                  <a href="/worldflora/">港澳台送花</a>
                </li>
              </ul> -->
            </div>

            <div class="item">
              <div class="title">
                <span class="ico ico-sort"></span>
                <h4>用途</h4>
              </div>
              待开发4
              <!-- <ul class="item-list list-inline">
                <li>
                  <a href="/aiqingxianhua/">爱情鲜花</a>
                </li>
                <li>
                  <a href="/youqingxianhua/">友情鲜花</a>
                </li>
                <li>
                  <a href="/shengriliwu/" target="_blank">生日鲜花</a>
                </li>
                <li>
                  <a href="/songzhangbeixianhua/">问候长辈</a>
                </li>
                <li>
                  <a href="/songlaoshixianhua/">回报老师</a>
                </li>
                <li>
                  <a href="/tanbingweiwenxianhua/">探病慰问</a>
                </li>
                <li>
                  <a href="/daoqianxianhua/">道歉鲜花</a>
                </li>
                <li>
                  <a href="/hunqingxianhua/">婚庆鲜花</a>
                </li>
                <li>
                  <a href="/zhufuqinghexianhua/">祝贺鲜花</a>
                </li>
                <li>
                  <a href="/aisixianhua/">哀思鲜花</a>
                </li>
                <li>
                  <a href="/businessFlower/">商务鲜花</a>
                </li>
                <li>
                  <a href="/businessFlower/kaiyehualan/">开业花篮</a>
                </li>
                <li>
                  <a href="/florist/">自选鲜花</a>
                </li>
                <li>
                  <a href="/worldflora/">港澳台送花</a>
                </li>
              </ul> -->
            </div>

            <div class="item">
              <div class="title">
                <span class="ico ico-price"></span>
                <h4>用途</h4>
              </div>
              待开发5
              <!-- <ul class="item-list list-inline">
                <li>
                  <a href="/aiqingxianhua/">爱情鲜花</a>
                </li>
                <li>
                  <a href="/youqingxianhua/">友情鲜花</a>
                </li>
                <li>
                  <a href="/shengriliwu/" target="_blank">生日鲜花</a>
                </li>
                <li>
                  <a href="/songzhangbeixianhua/">问候长辈</a>
                </li>
                <li>
                  <a href="/songlaoshixianhua/">回报老师</a>
                </li>
                <li>
                  <a href="/tanbingweiwenxianhua/">探病慰问</a>
                </li>
                <li>
                  <a href="/daoqianxianhua/">道歉鲜花</a>
                </li>
                <li>
                  <a href="/hunqingxianhua/">婚庆鲜花</a>
                </li>
                <li>
                  <a href="/zhufuqinghexianhua/">祝贺鲜花</a>
                </li>
                <li>
                  <a href="/aisixianhua/">哀思鲜花</a>
                </li>
                <li>
                  <a href="/businessFlower/">商务鲜花</a>
                </li>
                <li>
                  <a href="/businessFlower/kaiyehualan/">开业花篮</a>
                </li>
                <li>
                  <a href="/florist/">自选鲜花</a>
                </li>
                <li>
                  <a href="/worldflora/">港澳台送花</a>
                </li>
              </ul> -->
            </div>

            <div class="item">
              <div class="title">
                <span class="ico ico-num"></span>
                <h4>用途</h4>
              </div>
              待开发6
              <!-- <ul class="item-list list-inline">
                <li>
                  <a href="/aiqingxianhua/">爱情鲜花</a>
                </li>
                <li>
                  <a href="/youqingxianhua/">友情鲜花</a>
                </li>
                <li>
                  <a href="/shengriliwu/" target="_blank">生日鲜花</a>
                </li>
                <li>
                  <a href="/songzhangbeixianhua/">问候长辈</a>
                </li>
                <li>
                  <a href="/songlaoshixianhua/">回报老师</a>
                </li>
                <li>
                  <a href="/tanbingweiwenxianhua/">探病慰问</a>
                </li>
                <li>
                  <a href="/daoqianxianhua/">道歉鲜花</a>
                </li>
                <li>
                  <a href="/hunqingxianhua/">婚庆鲜花</a>
                </li>
                <li>
                  <a href="/zhufuqinghexianhua/">祝贺鲜花</a>
                </li>
                <li>
                  <a href="/aisixianhua/">哀思鲜花</a>
                </li>
                <li>
                  <a href="/businessFlower/">商务鲜花</a>
                </li>
                <li>
                  <a href="/businessFlower/kaiyehualan/">开业花篮</a>
                </li>
                <li>
                  <a href="/florist/">自选鲜花</a>
                </li>
                <li>
                  <a href="/worldflora/">港澳台送花</a>
                </li>
              </ul> -->
            </div>
          </div>
        </el-aside>

        <!-- 内容区 -->
        <el-main>
          <!-- display: inherit 让图像继承其父级元素的显示方式（块，行内，行内块） -->
          <el-image
            :fit="'cover'"
            style="display: inherit; width: 1048px; height: 500px; margin-top: -20px"
            :src="image"
          ></el-image>

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

 <script lang="ts" setup>
import { getFlowers } from "../http/index";
import { ref, onMounted } from "vue";
import { defineProps } from "vue"; //用于定义组件的属性
import { useRouter } from "vue-router";  //useRouter 是 Vue Router 提供的一个钩子函数，用于在组件中获取路由实例。
const router = useRouter();

// 通过属性（props）来接收外部传递的数据。而 defineProps 函数是 Vue Composition API 中的一个功能，用于定义组件的属性。
const props = defineProps({
  image: String,
  type: Number,
});

const list = ref();
onMounted(async () => {
  let parms = {
    Id: 0, // 在后端我们处理过0的情况，即不走where
    Type: props.type,
  };
  list.value = (await getFlowers(parms)).data.result;
});

const GoToDetail = (currId: Number) => {
  const sss = ref();
  sss.value = currId; // 商品id
  router.push({ path: "/detail", query: { id: sss.value, type: props.type } });
};
</script>


<style lang="scss" scoped>
.con {
  width: 1500px;
  margin: 15px auto 0;

  .el-breadcrumb {
    margin-top: 20px;
  }

  .ico-flower,
  .ico-ysh,
  .ico-Plant,
  .ico-effect,
  .ico-texture,
  .ico-sort,
  .ico-sort-gift,
  .ico-price,
  .ico-color,
  .ico-num,
  .ico-city,
  .ico-brand {
    width: 30px;
    height: 40px;
    background-image: url(//localhost:8080/images/common_z.png);
    display: block;
    background-repeat: no-repeat;
  }

  .navigation {
    margin-bottom: 20px;
    padding: 0 9px;
    border: 1px solid #ccc;
    .item {
      position: relative;
      padding: 12px 0;
      height: 175px;
      border-bottom: 1px solid #d9d9d9;
      .title {
        position: absolute;
        width: 32px;
        margin-top: 50px;
        text-align: center;
        .ico-effect {
          background-position: -160px -234px;
        }
        .ico-texture {
          background-position: -120px -234px;
        }
        .ico-color {
          background-position: 0px -234px;
        }
        .ico-sort {
          background-position: -80px -234px;
        }
        .ico-price {
          background-position: -40px -234px;
        }
        .ico-num {
          background-position: -200px -234px;
        }
        h4 {
          font-family: tahoma, arial, "Hiragino Sans GB", "\5FAE\8F6F\96C5\9ED1",
            sans-serif;
          font-size: 14px;
          font-weight: bold;
          margin: 0;
          color: #ff6a00;
        }
      }
      .item-list {
        margin-bottom: 0;
        margin-left: 50px;
        padding-left: 0;
        list-style: none;
        li {
          font-size: 12px;
          line-height: 22px;
          width: 50%;
          margin: 0;
          margin-right: -3px;
          padding: 0;
          a {
            color: #737373;
            text-decoration: none;
          }
        }
      }
    }
  }
  .grid-wrapper {
    width: 1048px;
    .grid-item {
      float: left;
      margin-bottom: 20px;
      padding: 10px;
      border: 1px solid transparent;
      background-color: #1b293a;
      .list-image {
        width: 240px;
        height: 255px;
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