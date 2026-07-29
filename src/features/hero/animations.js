const EASE = t => 1 - Math.pow(1 - t, 4);

function animate({
  delay = 0,
  duration,
  draw,
  complete = () => {},
}) {
  let start = null;

  function frame(time) {
    if (!start) start = time;

    const elapsed = time - start;

    if (elapsed < delay) {
      requestAnimationFrame(frame);
      return;
    }

    const progress = Math.min((elapsed - delay) / duration, 1);

    draw(EASE(progress));

    if (progress < 1) {
      requestAnimationFrame(frame);
    } else {
      complete();
    }
  }

  requestAnimationFrame(frame);
}


export function animateImageEnter(image, delay = 0) {
  image.style.opacity = 0;

  image.style.transform =
    "translateY(-180px) scale(1.15)";

  animate({
    delay,

    duration: 1200,

    draw(progress) {
      const y = -180 + progress * 180;

      const scale = 1.15 - progress * .15;

      image.style.opacity = progress;

      image.style.transform =
        `translateY(${y}px) scale(${scale})`;
    },
  });
}

export function animateButton(
  button,
  delay = 0
) {
  button.style.opacity = 0;

  button.style.transform =
    "translateY(50px) scale(.92)";

  animate({
    delay,

    duration: 800,

    draw(progress) {
      const y = 50 - progress * 50;

      const scale = .92 + progress * .08;

      button.style.opacity = progress;

      button.style.transform =
        `translateY(${y}px) scale(${scale})`;
    },
  });
}


export function animateDescription(
  element,
  delay = 0
) {
  element.style.opacity = 0;

  element.style.filter = "blur(8px)";

  element.style.transform =
    "translateY(40px)";

  animate({
    delay,

    duration: 900,

    draw(progress) {
      element.style.opacity = progress;

      element.style.filter =
        `blur(${8 - progress * 8}px)`;

      element.style.transform =
        `translateY(${40 - progress * 40}px)`;
    },
  });
}


export function animateTitleLine(
  line,
  delay = 0
) {
  line.style.opacity = 0;

  line.style.transform =
    "translateY(80px)";

  animate({
    delay,

    duration: 900,

    draw(progress) {
      line.style.opacity = progress;

      line.style.transform =
        `translateY(${80 - progress * 80}px)`;
    },
  });
}


export function animateImageZoom(image, delay = 0) {
  setTimeout(() => {
    image.animate(
      [
        {
          transform: "translateY(0) scale(1)",
        },
        {
          transform: "translateY(0) scale(1.08)",
        },
      ],
      {
        duration: 5200,

        easing: "linear",

        fill: "forwards",
      }
    );
  }, delay);
}
