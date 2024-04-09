<template>
  <div v-if="isShow">
    <section class="con">
      <el-container>
        <el-header>
          <!--组件来自： https://element.eleme.cn/#/zh-CN/component/breadcrumb#breadcrumb-mian-bao-xie -->
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: path }">列表页</el-breadcrumb-item>
            <el-breadcrumb-item class="Detail">详情页</el-breadcrumb-item>
          </el-breadcrumb>
        </el-header>

        <div class="mainCon">

          <div class="previewWrap">
            <div class="spec-preview">
              <!-- 这里不能用el-image只能用img,不然图片大小有问题 -->
              <img style="object-fit: cover" :src="info.bigImage" />
              <!-- 鼠标移动事件 -->
              <div class="event" @mousemove="handler"></div>
              <div class="big">
                <!-- 这里不能用el-image只能用img,不然图片显示不出来 -->
                <img :src="info.bigImage" ref="big" />
              </div>
              <!-- 遮罩层 -->
              <div class="mask" ref="mask"></div>
            </div>
          </div>

          <div class="InfoWrap">
            <ul class="product-info">
              <li>
                <h3>{{ info.title }}</h3>
              </li>
              <li>
                <span>{{ info.description }}</span>
              </li>
              <li>
                <span class="left">粉丝数</span>
                <span class="right" style="color: red; font-size: 25px"
                  >{{ info.price }}万</span
                >
              </li>
              <li>
                <span class="left">萌点</span>
                <span class="right">{{ info.language }}</span>
              </li>
              <li>
                <span class="left">昵称</span>
                <span class="right">{{ info.material }}</span>
              </li>
              <li style="border-bottom: 1px solid #e7ebef">
                <span class="left">发色</span>
                <span class="right">{{ info.packing }}</span>
              </li>
              <li>
                <span class="left">配送说明</span>
                <span class="right">{{ info.deliveryRemarks }}</span>
              </li>
            </ul>
            <el-button type="warning" round @click="goToPay"
              >立即购买</el-button
            >
          </div>
        </div>
      </el-container>

      <el-container>
        <el-aside width="240px">
          <h5 style="margin-top: 83px">热销推荐</h5>
          <ul class="product-recommend">
            <li>
              <el-image src="/images/content/a1.jpg"></el-image>
              <p>韩式系列</p>
              <p>￥239</p>
            </li>
            <li>
              <el-image src="/images/content/a2.jpg"></el-image>
              <p>韩式系列</p>
              <p>￥239</p>
            </li>
            <li>
              <el-image src="/images/content/a3.jpg"></el-image>
              <p>韩式系列</p>
              <p>￥239</p>
            </li>
            <li>
              <el-image src="/images/content/a4.jpg"></el-image>
              <p>韩式系列</p>
              <p>￥239</p>
            </li>
            <li>
              <el-image src="/images/content/a5.jpg"></el-image>
              <p>韩式系列</p>
              <p>￥239</p>
            </li>
            <li>
              <el-image src="/images/content/a6.jpg"></el-image>
              <p>韩式系列</p>
              <p>￥239</p>
            </li>
            <li>
              <el-image src="/images/content/a7.jpg"></el-image>
              <p>韩式系列</p>
              <p>￥239</p>
            </li>
            <li>
              <el-image src="/images/content/a8.jpg"></el-image>
              <p>韩式系列</p>
              <p>￥239</p>
            </li>
          </ul>
        </el-aside>

        <el-main>
          <div class="product-content">
            <h3>商品详情</h3>
            <el-image :fit="'cover'" style="width: 740px; height: 1000px;" src="/images/detail/content/67329317_p0_master1200.jpg"></el-image>
            <!-- <el-image :fit="'cover'" style="width: 740px; height: 1000px;" src="/images/detail/content/by_3.jpg"></el-image>
            <el-image :fit="'cover'" style="width: 740px; height: 1000px;" src="/images/detail/content/by_4.jpg"></el-image>
            <el-image :fit="'cover'" style="width: 740px; height: 1000px;" src="/images/detail/content/by_5.jpg"></el-image>
            <el-image :fit="'cover'" style="width: 740px; height: 1000px;" src="/images/detail/content/by_6.jpg"></el-image> -->
            <el-image :fit="'cover'" style="width: 740px; height: 1500px;" src="/images/detail/content/58937599_p0.png"></el-image>
          </div>
        </el-main>
      </el-container>
    </section>
  </div>
</template>


<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { getFlowers } from "../../http/index";
import { useRouter } from "vue-router"; //useRouter 是 Vue Router 提供的一个钩子函数，用于在组件中获取路由实例。
const path = ref("/loveflower");
//解析URL参数
let type = window.location.href.split("type=")[1];
switch (
  type // 用于面包屑
) {
  case "1":
    path.value = "/loveflower";
    break;
  case "2":
    path.value = "/birthdayflower";
    break;
  case "3":
    path.value = "/friendflower";
    break;
  case "4":
    path.value = "/weddingflower";
    break;
}

const isShow = ref(false);
const info = ref();
let parms = {
  Id: 0,
  Type: type,
};

const big = ref(null); // setup中获取DOM
const mask = ref(null);

onMounted(async () => {
  let urls = window.location.href.match(/id=(\S*)&type=/); // 正则表达式
  if (urls != null) {
    /*  当使用match()方法进行匹配时，它会返回一个数组，其中第一个元素是整个匹配的字符串，后续元素则是捕获分组的结果。
        因此，urls[0]将是整个匹配的字符串，而urls[1]将是第一个捕获分组的内容。 */
    parms.Id = parseInt(urls[1]);
  }
  info.value = (await getFlowers(parms)).data.result[0];
  isShow.value = true;

  // console.log("###",big); // Vue2中我们用的是refs，现在Vue3中直接定义同名变量就可以获取DOM了
  // console.log("###",mask);
});

const handler = (event:MouseEvent)=> {
      // spec-preview样式用了相对定位,即表明了offsetX与offsetY都是鼠标相对于它的位移
      // offsetWidth表示mask.value元素的宽度,offsetHeight表示mask.value元素的高度
      let left = event.offsetX - mask.value.offsetWidth/2;
      let top = event.offsetY - mask.value.offsetHeight/2;
      //约束范围
      if(left <=0) left = 0;
      if(left >=mask.value.offsetWidth) left = mask.value.offsetWidth;
      if(top<=0)top = 0;
      if(top>=mask.value.offsetHeight) top = mask.value.offsetHeight;
      //修改元素的left|top属性值
      mask.value.style.left = left+'px';
      mask.value.style.top = top +'px';
      big.value.style.left = - 2 * left+'px';
      big.value.style.top = -2 * top +'px';
    };

const router = useRouter();

const goToPay = async () => {
  router.push({ path: "/pay", query: { id: parms.Id, type: parms.Type } });
};
</script>


<style lang="scss" scoped>
.con {
  width: 1250px;
  margin: 15px auto 0;

  .el-header{
    height: 15px;
  }

  .previewWrap {
    float: left;
    width: 400px;
    position: relative;
    margin-top: 15px;

    .spec-preview {
      position: relative;
      width: 400px;
      height: 600px;
      border: 1px solid #ccc;

      img {
        width: 100%; // 宽高继承自父组件100% 即等于父组件宽高
        height: 100%;
      }

      .event {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 998;
      }

      .mask {
        width: 50%;
        height: 50%;
        background-color: rgba(0, 255, 0, 0.3);
        position: absolute;
        left: 0;
        top: 0;
        display: none;
      }

      .big {
        width: 100%;
        height: 100%;
        position: absolute;
        top: -1px;
        left: 100%;
        border: 1px solid #aaa;
        overflow: hidden;
        z-index: 998;
        display: none;
        background: white;

        img {
          width: 200%;
          max-width: 200%;
          height: 200%;
          object-fit: cover;
          position: absolute;
          left: 0;
          top: 0;
        }
      }

      // .event:hover 表示当鼠标悬停在具有 event 类的元素上时触发效果。
      // ~ 是 CSS 中的兄弟选择器，表示选择紧接在前面选择器后的所有同级元素。
      // 因此，.event:hover ~ .mask 表示当鼠标悬停在具有 event 类的元素上时，选择与之后紧邻的具有 mask 类的元素。
      .event:hover ~ .mask,
      .event:hover ~ .big {
        display: block;
      }
    }
  }

  .InfoWrap {
    width: 800px;
    float: right;
    .product-info {
      padding-left: 0;
      margin-top: 0px;
      text-align: initial;
      li {
        width: 100%;
        height: 30px;
        margin-bottom: 20px;
        .left {
          display: inline-block;
          width: 80px;
          padding-left: 12px;
          font-size: 16px;
          line-height: 18px;
          color: #387748;
          vertical-align: top;
        }
        .right {
          display: inline-block;
          width: 580px;
          font-size: 13px;
          line-height: 18px;
          color: #fff;
          vertical-align: top;
          text-align: justify;
          padding-right: 36px;
        }
      }
    }
  }
}

.product-recommend {
  padding-left: initial;
}
.product-content {
  padding: 40px 115px 95px;
  text-align: center;
}
</style>