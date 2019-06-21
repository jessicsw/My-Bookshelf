import { TweenLite } from 'gsap';

const duration = 1.5;

export default {
  show(node, cb) {
    return TweenLite
      .from(node, duration, {
        opacity: 0,
        scaleX: 0,
        scaleY: 0,
        onComplete() {
          cb();
        }
      })
  }
}