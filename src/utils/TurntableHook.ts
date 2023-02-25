/**********************
 ** 【转盘抽奖】参数类型
 **********************/
interface TurntableOptions {
  /** 大转盘元素 */
  wrap: HTMLElement;
  /** 奖品数量 */
  count: number;
  /** 中奖下标 */
  index: number;
  /** 大转盘结束 */
  completed: Function;
  /** 旋转圈数（默认3） */
  loop?: number;
  /** 持续时间（默认5） */
  duration?: number;
}

class TurntableHook {
  /**
   * 【大转盘】
   *
   * 分析：每个奖品所占的角度是一致的，即平均分配一个圆，通常，命中某个奖品指针指向奖品正中间。
   * 思路：通过 transform/transition 实现大转盘的动画效果，监听 transitionend 事件，归位大转盘。
   * 计算：
   *  1. 奖品所占角度：360 / 奖品数量（设为x）
   *  2. 中奖位置计算：x * index +- x / 2 （index表示奖品下标位置，+-取决于顺时针还是逆时针）
   *  3. 如果打算转满5圈，则：5 * 360 + 中奖位置
   *
   * @param options
   */
  static turntable(options: TurntableOptions) {
    // -- 解构
    const { wrap, count, index, completed, loop = 3, duration = 5 } = options;
    // -- 每次触发动画之前先复位状态
    wrap.style.transition = `transform 0s ease 0s`;
    wrap.style.transform = `rotateZ(0deg)`;
    // -- 计算奖品所占角度
    const deg = 360 / count;
    const rotate = loop * 360 + deg * index + deg / 2;
    // -- 设置
    requestAnimationFrame(() => {
      wrap.style.transition = `transform ${duration}s cubic-bezier(0.35, 0.08, 0.26, 0.93) 0s`;
      wrap.style.transform = `rotateZ(${rotate}deg)`;
      wrap.ontransitionend = function () {
        completed();
      };
    });
  }
}

export default TurntableHook;
