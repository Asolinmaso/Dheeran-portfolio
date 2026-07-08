// "use client";

// import { useEffect, useState } from "react";

// const letters = [
//   "D",
//   "H",
//   "E",
//   "E",
//   "R",
//   "A",
//   "N",
//   "DHEERAN",
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
//       }, 1000);

//       return () => clearTimeout(timer);
//     }

//     const finishTimer = setTimeout(() => {
//       onComplete();
//     }, 2500);

//     return () => clearTimeout(finishTimer);
//   }, [index, onComplete]);

//   const isFullName = letters[index] === "DHEERAN";

//   return (
//     <div className="introScreen">
//       <h1 className={isFullName ? "introName" : "introLetter"}>
//         {letters[index]}
//       </h1>
//     </div>
//   );
// }