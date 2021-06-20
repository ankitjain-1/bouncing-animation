const ball = document.querySelector(".ball");

const duration = 1;
let flag = true;
setInterval(() => {
  if (flag) {
    ball.style.animation = `bounce ${duration}s cubic-bezier(.17,.84,.44,1) infinite forwards`;
  } else {
    ball.style.animation = `bounce ${duration}s cubic-bezier(.9,.03,.69,.22) infinite forwards`;
  }
  flag = !flag;
}, (duration * 1000) / 2);
