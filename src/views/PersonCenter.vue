<template>
  <div class="common-layout">
      <el-container>
          <el-header>
              <p>订单列表</p>
          </el-header>
          <el-main>
              <div class="main">
                  <el-table :data="list" height="300" stripe style="width: 100%">
                      <el-table-column :style="{ backgroundColor: 'red' }" prop="orderDate" label="订单日期" width="300" />
                      <el-table-column prop="orderNumber" label="订单号" width="300" />
                      <el-table-column prop="flowerTitle" label="商品标题" />
                      <el-table-column prop="price" label="价格" />
                  </el-table>
              </div>
          </el-main>
      </el-container>
  </div>
</template>


<script setup >
import { ref, onMounted } from 'vue'
import { GetOrder } from '../http/index'
const list = ref();
onMounted(async () => {
  list.value = (await GetOrder()).data.result
})
</script>


<style lang="scss" scoped>
.common-layout {
  padding-left: 0;
}
.main {
  width: 1000px;
  height: 500px;
  margin: 0px auto;
}
</style>