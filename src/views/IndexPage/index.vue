<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="page">
    <div class="wrapper">
      <nav>
        <RouterLink to="/lattice">01.九宫格</RouterLink>
        <RouterLink to="/turntable">02.大转盘</RouterLink>
      </nav>
    </div>
  </div>

  <!-- 外层容器 -->
  <div class="lucky-draw">
    <!-- 中间标识线（表示中奖的物品） -->
    <div class="lucky-draw-line"></div>
    <!-- 奖品容器，后续通过设置 transition + translateX 值实现滚动效果 -->
    <div class="lucky-draw-wrap">
      <!-- 奖品xn，撑起奖品容器的宽度 -->
      <div class="lucky-draw-item"></div>
      ...
    </div>
    <!-- 展示抽奖结果 -->
    <div class="lucky-draw-results"></div>
  </div>
</template>

<style lang="less" scoped>
.page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

a,
.title {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
}

.tips {
  max-width: 340px;
  margin-bottom: 12px;
  .title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
  }
  p {
    color: #999;
  }
}
nav a:not(:last-child) {
  &::after {
    content: "|";
    margin: 0 20px;
  }
}
</style>
