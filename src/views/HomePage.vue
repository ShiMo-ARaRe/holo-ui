<template>
  <!-- 轮播图 -->
  <!-- 组件来自于 https://element.eleme.cn/#/zh-CN/component/carousel#carousel-methods -->
  <el-carousel
    height="580px"
    direction="vertical"
    interval="2000"
    v-if="isShow"
  >
    <el-carousel-item v-for="item in images" :key="item">
      <h3>
        <!-- courseUrl是跳转链接， target="_blank"表示链接将在新的浏览器标签页中打开。 -->
        <!-- :href="item.courseUrl" -->
        <!-- 暂时不用跳转，因为不好测试 -->
        <a
          target="_self"
          style="display: inline-block; height: 100%; width: 2160px"
        >
          <!-- imageUrl是图片的本地路径 -->
          <img
            :src="item.imageUrl"
            style="
              object-fit: cover;
              object-position: center;
              height: 100%;
              width: 100%;
            "
          />
          <!-- <img> 标签是 HTML 标准中定义的标签，用于在网页中插入图像。它是一个自闭合标签，不需要闭合标签。
              例如：<img src="image.jpg" alt="Image" />。
              <image> 不是 HTML 标准中定义的标签，因此在 HTML 中使用 <image> 标签是不正确的。
              在某些 SVG（可缩放矢量图形）上下文中，<image> 可能被用作表示图像的标签。 -->
        </a>
      </h3>
    </el-carousel-item>
  </el-carousel>

  <HomeContent />
</template> 


<script setup>
import { ref, onMounted } from "vue";
import { getBanners2 } from "../http/index";
import HomeContent from "../components/HomeContent.vue";

const images = ref();
const isShow = ref(false); // 挂载完毕前为false，即不展示轮播图

onMounted(async () => {
  images.value = (await getBanners2()).data;
  isShow.value = true; // 这个的作用就是让数据获取完毕后重新渲染一次
});
</script>

<style lang="scss" scoped>
/* 对比缩放和裁剪图片 */
.el-carousel__item h3 {
  color: #475669; // h3标签内容的字体颜色
  font-size: 14px; // h3标签内容的字体大小
  opacity: 0.75; // 设置元素的不透明度
  height: 100%; // h3标签的高度
  margin: 0;
}

/* 背景颜色交替 */
.el-carousel__item:nth-child(2n) {
  // background-color: #324764;
  background-color: #1b293a;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #1b293a;
}
</style>