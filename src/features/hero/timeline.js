const DEFAULT_DURATION = 6500;

let rafId = null;

let running = false;

let duration = DEFAULT_DURATION;

let startTime = 0;
let elapsedTime = 0;

let onProgress = () => {};
let onComplete = () => {};

/* ------------------------------------------------ */
/* RAF LOOP                                         */
/* ------------------------------------------------ */

function tick(timestamp) {
  if (!running) return;

  if (!startTime) {
    startTime = timestamp - elapsedTime;
  }

  elapsedTime = timestamp - startTime;

  const progress = Math.min(
    elapsedTime / duration,
    1
  );

  onProgress(progress);

  if (progress >= 1) {
    running = false;
    rafId = null;
    elapsedTime = 0;
    startTime = 0;

    onComplete();

    return;
  }

  rafId = requestAnimationFrame(tick);
}

/* ------------------------------------------------ */
/* START                                            */
/* ------------------------------------------------ */

export function startTimeline({
  slideDuration = DEFAULT_DURATION,
  progress,
  complete,
}) {
  cancelTimeline();

  duration = slideDuration;

  startTime = 0;
  elapsedTime = 0;

  running = true;

  onProgress = progress ?? (() => {});
  onComplete = complete ?? (() => {});

  rafId = requestAnimationFrame(tick);
}

/* ------------------------------------------------ */
/* PAUSE                                            */
/* ------------------------------------------------ */

export function pauseTimeline() {
  if (!running) return;

  running = false;

  if (rafId !== null) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
}

/* ------------------------------------------------ */
/* RESUME                                           */
/* ------------------------------------------------ */

export function resumeTimeline() {
  if (running) return;

  running = true;

  startTime = 0;

  rafId = requestAnimationFrame(tick);
}

/* ------------------------------------------------ */
/* CANCEL                                           */
/* ------------------------------------------------ */

export function cancelTimeline() {
  running = false;

  if (rafId !== null) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }

  startTime = 0;
  elapsedTime = 0;

  onProgress = () => {};
  onComplete = () => {};
}

/* ------------------------------------------------ */
/* GETTERS                                          */
/* ------------------------------------------------ */

export function getTimelineProgress() {
  return Math.min(
    elapsedTime / duration,
    1
  );
}

export function isTimelineRunning() {
  return running;
}
