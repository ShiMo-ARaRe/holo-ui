<template>
  <div>
    <!-- 轮播图 -->
    <el-carousel height="150px" v-if="isShow">
      <el-carousel-item v-for="item in images" :key="item">
        <!-- courseUrl是跳转链接， target="_blank"表示链接将在新的浏览器标签页中打开。 -->
        <el-link :href="item.courseUrl" target="_blank">
          <!-- imageUrl是图片的本地路径 -->
          <el-image :src="item.imageUrl"></el-image>
        </el-link>
      </el-carousel-item>
    </el-carousel>
  </div>
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

<style lang="scss">
.el-carousel__container {
  height: 480px !important; // 高优先级
  margin-top: 10px;
}
</style>