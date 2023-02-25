<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="page">
    <div class="wrapper">
      <div class="content-left">
        <nav>
          抽奖类型：
          <RouterLink to="/lattice">01.九宫格</RouterLink>
          <RouterLink to="/turntable">02.大转盘</RouterLink>
        </nav>
      </div>
      <div class="content-right">
        代码地址:
        <a href="https://github.com/hardingCheng/lucky_draw">github</a>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    .content-left {
      width: 50vw;
    }
    .content-right {
      width: 50vw;
    }
  }
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
