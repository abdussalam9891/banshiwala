// export function initRevealAnimations() {
//   const items = document.querySelectorAll(".reveal");

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (!entry.isIntersecting) return;

//         entry.target.classList.remove("opacity-0", "translate-y-8");
//         entry.target.classList.add("opacity-100", "translate-y-0");

//         observer.unobserve(entry.target);
//       });
//     },
//     {
//       threshold: 0.2,
//     }
//   );

//   items.forEach((item, index) => {
//     item.style.transitionDelay = `${index * 120}ms`;
//     observer.observe(item);
//   });
// }







// export function initRevealAnimations() {
//   const reveals = document.querySelectorAll(".reveal");

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (!entry.isIntersecting) return;

//         entry.target.classList.add("active");
//         observer.unobserve(entry.target);
//       });
//     },
//     {
//       threshold: 0.15,
//       rootMargin: "0px 0px -60px 0px",
//     }
//   );

//   reveals.forEach((item) => observer.observe(item));
// }






// export function initRevealAnimations() {
//   const reveals = document.querySelectorAll(".reveal");

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (!entry.isIntersecting) return;

//         entry.target.classList.add("active");
//         observer.unobserve(entry.target);
//       });
//     },
//     {
//       threshold: 0.15,
//       rootMargin: "0px 0px -60px 0px",
//     }
//   );

//   reveals.forEach((item) => observer.observe(item));
// }







export function initRevealAnimations() {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -60px 0px",
    }
  );

  const parentMap = new Map();

  reveals.forEach((item) => {
    const parent = item.parentElement;

    const delay = parentMap.get(parent) || 0;
    item.style.transitionDelay = `${delay}ms`;

    parentMap.set(parent, delay + 120);

    observer.observe(item);
  });
}
