<template>
  <div class="page ff-DIN-Bold">
    <PageBack />
    <!-- 提示 -->
    <div class="tips">Times：{{ times }}</div>
    <!-- 容器 -->
    <div class="turntable">
      <div class="turntable-wrap">
        <img class="wheel" src="./images/big_wheel.png" ref="turntableRef" />
        <img class="point" src="./images/point.png" @click="onTurntable" />
      </div>
      <img class="support" src="./images/support.png" />
    </div>
  </div>
</template>
<script setup lang="ts">
// -- imports
import { ref } from "vue";
import PageBack from "@/components/PageBack/index.vue";
import { ElMessage } from "element-plus";
import TurntableHook from "@/utils/TurntableHook";

// -- refs
const turntableRef = ref();
const times = ref(3);
const isAnimating = ref(false);

// -- methods

// -- events
const onTurntable = () => {
  if (!turntableRef.value || isAnimating.value) return;
  if (times.value < 1) {
    ElMessage.closeAll();
    ElMessage.error("出现错误了！");
    return;
  }
  isAnimating.value = true;
  times.value--;
  TurntableHook.turntable({
    wrap: turntableRef.value,
    count: 8,
    index: 3,
    duration: 10,
    loop: 8,
    completed: () => {
      isAnimating.value = false;
      // ElMessage.success("恭喜你，你获奖了！");
    },
  });
};
</script>
<style lang="less" scoped>
.page {
  padding-top: 80px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(to bottom, #111114 60%, #4b69ff);
  color: #fff;
}
.tips {
  margin-bottom: 20px;
  letter-spacing: 2px;
}
.turntable {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.turntable-wrap {
  width: 400px;
  height: 400px;
  background: url("./images/dis.png") no-repeat center center;
  background-size: cover;
  position: relative;
  z-index: 1;
  .wheel {
    width: 330px;
    height: 330px;
    position: absolute;
    top: 30px;
    left: 34px;
  }
  .point {
    width: 70px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
}
.support {
  margin-top: -36px;
}
</style>
