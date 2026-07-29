// import { PAYMENT_METHODS } from "../../constants/paymentMethods.js";

// export function createPaymentMethods() {
//   const methods = PAYMENT_METHODS.map(
//     (method) => `
//       <div
//         class="
//           flex
//           h-12
//           min-w-[120px]
//           items-center
//           justify-center

//           rounded-xl

//           border
//           border-white/10

//           bg-white/[0.03]

//           px-5

//           text-sm
//           font-medium
//           tracking-wide
//           text-white/70

//           transition-all
//           duration-300

//           hover:border-[#A07936]
//           hover:bg-[#A07936]/10
//           hover:text-[#A07936]
//         "
//       >
//         ${method}
//       </div>
//     `
//   ).join("");

//   return `
// <section
//   class="
//     border-t
//     border-white/10
//     bg-[#181818]
//   "
// >

//   <div
//     class="
//       mx-auto
//       flex
//       max-w-7xl
//       flex-col
//       gap-6
//       px-6
//       py-10
//       lg:flex-row
//       lg:items-center
//       lg:justify-between
//       lg:px-8
//     "
//   >

//     <div>

//       <h3
//         class="
//           mb-3
//           text-sm
//           font-semibold
//           uppercase
//           tracking-[0.18em]
//           text-white
//         "
//       >
//         Secure Payments
//       </h3>

//       <p
//         class="
//           text-sm
//           text-white/50
//         "
//       >
//         Multiple trusted payment options for a safe checkout.
//       </p>

//     </div>

//     <div
//       class="
//         flex
//         flex-wrap
//         gap-3
//       "
//     >
//       ${methods}
//     </div>

//   </div>

// </section>
// `;
// }
