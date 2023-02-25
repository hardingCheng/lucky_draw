/**********************
 ** 【九宫格】参数类型
 **********************/
interface LatticeOptions {
  /** 奖品元素的class */
  elClass: string;
  /** 中奖下标 */
  winningIndex: number;
  /** 回调，抽奖动效结束之后的回调 */
  completed: Function;
  /** 旋转圈数（默认8） */
  loop?: number;
}
class LatticeHook {
  /**
   * 【九宫格】
   * @param options
   */
  static lattice(options: LatticeOptions) {
    // -- 解构
    const { elClass, winningIndex, completed, loop = 8 } = options;
    // -- 九宫格每个格子的元素获取元素
    const doms = document.querySelectorAll(`.${elClass}`);
    const len = doms.length;
    // -- 清空上一次抽奖时的状态
    doms.forEach((dom) => dom.classList.remove("active"));
    // -- 定义变量
    let index = 0; /** 记录当前激活元素的下标 */
    let lastIndex = 0; /** 记录上次激活元素的下标 */
    let speed = 250; /** 初始速度，用于设置定时器的interval参数 */
    let times = loop * len + winningIndex + 1; /** 高亮总次数*/
    let startEndTimes = 10; /** 开始和结束时的缓冲次数 */
    let startTimes = times - startEndTimes; /** 开始循环缓冲次数 */
    let endTimes = startEndTimes; /** 结束循环缓冲次数 */
    let timer = 0; /** 定时器 */

    // -- 动画函数
    const running = () => {
      // 移除上一次激活状态元素的样式
      doms[lastIndex].classList.remove("active");
      // 设置当前激活状态元素的样式
      doms[index].classList.add("active");
      // 赋值lastIndex
      lastIndex = index;
      // 当前次数+1
      index++;
      // 如果+1之后的元素大于数组长度-1，则复位（满足条件，则表示已转慢一圈）
      if (index > len - 1) {
        index = 0;
      }
      // 循环次数-1
      times--;
      // 「开始阶段」，speed 加速，减少值
      if (times >= startTimes) {
        speed -= 20;
      }
      // 「结束阶段」，speed 减速，增加值
      if (times <= endTimes) {
        speed += 20;
      }
      // 判断是否结束
      if (times <= 0) {
        clearTimeout(timer); // 停止计时器，释放资源
        completed(); // 调用完成回调函数
        return false; // 终止函数运行，结束循环。
      }
      // 「正常阶段」
      timer = setTimeout(running, speed);
    };
    // -- 开始动画
    timer = setTimeout(running, speed);
  }
}
export default LatticeHook;
