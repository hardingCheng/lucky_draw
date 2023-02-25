<template>
  <div class="page ff-DIN-Bold">
    <PageBack />
    <div class="lattice">
      <!-- 抽奖底层s背景 -->
      <img width="500" height="500" src="./images/lattice_bg.png" />
      <!-- 外层容器 -->
      <div class="lattice-wrap">
        <div class="lattice-item"><img src="./images/goods_1.png" /></div>
        <div class="lattice-item"><img src="./images/goods_2.png" /></div>
        <div class="lattice-item"><img src="./images/goods_3.png" /></div>
        <div class="lattice-item"><img src="./images/goods_4.png" /></div>
        <div class="lattice-item"><img src="./images/goods_5.png" /></div>
        <div class="lattice-item"><img src="./images/goods_6.png" /></div>
        <div class="lattice-item"><img src="./images/goods_7.png" /></div>
        <div class="lattice-item"><img src="./images/goods_8.png" /></div>
      </div>
      <!-- 点击抽奖按钮 -->
      <img
        class="start-button"
        src="./images/lattice_btn.png"
        @click="onLattice"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import PageBack from "@/components/PageBack/index.vue";
import { ElMessage } from "element-plus";
import LatticeHook from "@/utils/LatticeHook";

// -- refs
const isAnimating = ref(false);

// -- events
const onLattice = () => {
  if (isAnimating.value) return;
  isAnimating.value = true;
  LatticeHook.lattice({
    elClass: "lattice-item",
    // 这个地方可以换成洗牌算法
    winningIndex: Math.floor(Math.random() * 9),
    completed: () => {
      isAnimating.value = false;
      ElMessage.success("恭喜你，你获奖了！");
    },
  });
};
</script>

<style lang="less" scoped>
.page {
  padding-top: 80px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #111114;
  color: #ffffff;
  font-size: 12px;
}

.lattice {
  position: relative;
  .lattice-wrap {
    width: 400px;
    height: 255px;
    position: absolute;
    top: 97px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    flex-wrap: wrap;

    .place,
    .lattice-item {
      position: absolute;
      width: 110px;
      height: 80px;
      img {
        width: inherit;
        height: inherit;
      }
      &:nth-child(1) {
        top: 0;
        left: 0;
      }
      &:nth-child(2) {
        top: 0;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(3) {
        top: 0;
        right: 0;
      }
      &:nth-child(4) {
        top: 50%;
        right: 0;
        transform: translateY(-50%);
      }
      &:nth-child(5) {
        bottom: 0;
        right: 0;
      }
      &:nth-child(6) {
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
      &:nth-child(7) {
        bottom: 0;
        left: 0;
      }
      &:nth-child(8) {
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }
      &.active::before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        background: linear-gradient(
          180deg,
          rgba(255, 231, 56, 0.5) 0%,
          rgba(255, 238, 0, 0.65) 100%
        );
        box-shadow: 0px 0px 8px 4px rgba(255, 255, 255, 0.5);
        border-radius: 10px;
        border: 2px solid #ffffff;
      }
    }
  }
  .start-button {
    height: 60px;
    position: absolute;
    left: 50%;
    bottom: 58px;
    transform: translateX(-50%);
    cursor: pointer;
  }
}
</style>
