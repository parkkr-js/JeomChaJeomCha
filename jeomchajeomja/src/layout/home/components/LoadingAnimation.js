// import React, { useEffect, useRef } from "react";
// import lottie from "lottie-web";
// import loadingAnimation from "./../../../img/loading.json";

// const LoadingAnimation = () => {
//   const animationContainer = useRef(null);

//   useEffect(() => {
//     const anim = lottie.loadAnimation({
//       container: animationContainer.current,
//       renderer: "svg",
//       loop: true,
//       autoplay: true,
//       animationData: loadingAnimation,
//       rendererSettings: {
//         // Adjust the size here
//         preserveAspectRatio: 'xMidYMid slice',
//         width: '120px', 
//         height: '120px' 
//       }
//     });
//     return () => anim.destroy();
//   }, []);

//   // Apply styles to the container
//   return (
//     <div
//       ref={animationContainer}
//       style={{ backgroundColor: "red", width: "357px", height: "80px" }}
//     ></div>
//   );
// };

// export default LoadingAnimation;
