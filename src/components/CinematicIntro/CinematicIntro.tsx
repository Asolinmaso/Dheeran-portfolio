// // "use client";

// // import { useEffect, useState } from "react";

// // const letters = [
// //   "D",
// //   "H",
// //   "E",
// //   "E ",
// //   "R",
// //   "A",
// //   "N",
// // ];

// // export default function CinematicIntro({
// //   onComplete,
// // }: {
// //   onComplete: () => void;
// // }) {
// //   const [index, setIndex] = useState(0);

// //   useEffect(() => {
// //     if (index < letters.length - 1) {
// //       const timer = setTimeout(() => {
// //         setIndex((prev) => prev + 1);
// //       }, 1200);

// //       return () => clearTimeout(timer);
// //     }

// //     const finishTimer = setTimeout(() => {
// //       onComplete();
// //     }, 5000);

// //     return () => clearTimeout(finishTimer);
// //   }, [index, onComplete]);

// //   const isFullName = letters[index] === "DHEERAN";

// //   return (
// //     <div className="introScreen">
// //       <div
// //         key={letters[index]}
// //         className={isFullName ? "introName" : "introLetter"}
// //       >
// //         {letters[index]}
// //       </div>
// //     </div>
// //   );
// // }




// "use client";

// import { useEffect, useState } from "react";

// const letters = [
//   "D",
//   "H",
//   "E",
//   "E ",
//   "R",
//   "A",
//   "N",
// ];

// export default function CinematicIntro({
//   onComplete,
// }: {
//   onComplete: () => void;
// }) {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     if (index < letters.length - 1) {
//       const timer = setTimeout(() => {
//         setIndex((prev) => prev + 1);
//       }, 1200);

//       return () => clearTimeout(timer);
//     }

//     const finishTimer = setTimeout(() => {
//       onComplete();
//     }, 800);

//     return () => clearTimeout(finishTimer);
//   }, [index, onComplete]);

//   return (
//     <div className="introScreen">
//       <div
//         key={letters[index]}
//         className="introLetter"
//       >
//         {letters[index]}
//       </div>
//     </div>
//   );
// }