// import React, { useState, useEffect } from 'react';
// import styled, { keyframes } from 'styled-components';
// import { motion } from 'framer-motion';

// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   background-color: #1c1c1c;
// `;

// const Preloader = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-bottom: 20px;
// `;

// const circleAnimation = keyframes`
//   0%, 100% { transform: scale(0); }
//   50% { transform: scale(1); }
// `;

// const Circle = styled.div<{ delay: number }>`
//   width: 15px;
//   height: 15px;
//   margin: 0 5px;
//   background-color: #ffffff;
//   border-radius: 50%;
//   animation: ${circleAnimation} 1.2s infinite;
//   animation-delay: ${({ delay }) => delay}s;
// `;

// const ProgressBar = styled(motion.div)`
//   width: 100%;
//   height: 10px;
//   background-color: #333;
//   border-radius: 5px;
//   overflow: hidden;
// `;

// const Progress = styled(motion.div)`
//   height: 100%;
//   background-color: #007bff;
// `;

// const Loader: React.FC = () => {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress(prev => (prev < 100 ? prev + 1 : 100));
//     }, 100);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <Wrapper>
//       <Preloader>
//         {[...Array(8)].map((_, i) => (
//           <Circle key={i} delay={i * 0.1} />
//         ))}
//       </Preloader>
//       <ProgressBar initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1 }}>
//         <Progress initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ duration: 0.1 }} />
//       </ProgressBar>
//     </Wrapper>
//   );
// };

// export default Loader;

// import React, { useState, useEffect } from 'react';
// import styled, { keyframes } from 'styled-components';
// import { motion, useAnimation } from 'framer-motion';

// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   background-color: #1c1c1c;
// `;

// const Preloader = styled.div`
//   position: relative;
//   width: 50px;
//   height: 50px;
//   margin-bottom: 20px;
// `;

// const circleAnimation = keyframes`
//   0% { transform: rotate(0deg); }
//   100% { transform: rotate(360deg); }
// `;

// const Circle = styled(motion.div)`
//   position: absolute;
//   width: 10px;
//   height: 10px;
//   background-color: #ffffff;
//   border-radius: 50%;
// `;

// const ProgressBar = styled(motion.div)`
//   width: 300px;
//   height: 10px;
//   background-color: #333;
//   border-radius: 5px;
//   overflow: hidden;
// `;

// const Progress = styled(motion.div)`
//   height: 100%;
//   background-color: #007bff;
// `;

// const Loader: React.FC = () => {
//   const [progress, setProgress] = useState(0);
//   const controls = useAnimation();

//   useEffect(() => {
//     controls.start({
//       rotate: 360,
//       transition: {
//         duration: 1,
//         repeat: Infinity,
//         ease: "linear",
//       },
//     });

//     const interval = setInterval(() => {
//       setProgress((prev) => (prev < 100 ? prev + 1 : 100));
//     }, 100);

//     return () => clearInterval(interval);
//   }, [controls]);

//   return (
//     <Wrapper>
//       <Preloader>
//         {[...Array(8)].map((_, i) => {
//           const angle = (i * 360) / 8;
//           return (
//             <Circle
//               key={i}
//               animate={controls}
//               style={{
//                 top: `calc(50% - 5px)`,
//                 left: `calc(50% - 5px)`,
//                 transformOrigin: "20px 20px",
//                 transform: `rotate(${angle}deg) translate(20px)`,
//               }}
//             />
//           );
//         })}
//       </Preloader>
//       <ProgressBar initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1 }}>
//         <Progress initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ duration: 0.1 }} />
//       </ProgressBar>
//     </Wrapper>
//   );
// };

// export default Loader;


// import React, { useState, useEffect } from 'react';
// import styled, { keyframes } from 'styled-components';
// import { motion, useAnimation } from 'framer-motion';

// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   background-color: #1c1c1c;
// `;

// const PreloaderContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Preloader = styled.div`
//   position: relative;
//   width: 60px;
//   height: 60px;
//   margin-bottom: 20px;
// `;

// const Circle = styled(motion.div)`
//   position: absolute;
//   width: 8px;
//   height: 8px;
//   background-color: #ffffff;
//   border-radius: 50%;
// `;

// const ProgressBar = styled(motion.div)`
//   width: 300px;
//   height: 10px;
//   background-color: #333;
//   border-radius: 5px;
//   overflow: hidden;
// `;

// const Progress = styled(motion.div)`
//   height: 100%;
//   background-color: #007bff;
// `;

// const Loader: React.FC = () => {
//   const [progress, setProgress] = useState(0);
//   const controls = useAnimation();

//   useEffect(() => {
//     controls.start({
//       rotate: 360,
//       transition: {
//         duration: 1,
//         repeat: Infinity,
//         ease: "linear",
//       },
//     });

//     const interval = setInterval(() => {
//       setProgress((prev) => (prev < 100 ? prev + 1 : 100));
//     }, 100);

//     return () => clearInterval(interval);
//   }, [controls]);

//   const numberOfCircles = 12; // Увеличено количество кружков
//   const radius = 20; // Радиус круга, по которому движутся кружки

//   return (
//     <Wrapper>
//       <PreloaderContainer>
//         <Preloader>
//           {[...Array(numberOfCircles)].map((_, i) => {
//             const angle = (i * 360) / numberOfCircles;
//             return (
//               <Circle
//                 key={i}
//                 animate={controls}
//                 style={{
//                   top: `calc(50% - 4px)`,
//                   left: `calc(50% - 4px)`,
//                   transformOrigin: `${radius}px ${radius}px`,
//                   transform: `rotate(${angle}deg) translate(${radius}px)`,
//                 }}
//               />
//             );
//           })}
//         </Preloader>
//         <ProgressBar initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1 }}>
//           <Progress initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ duration: 0.1 }} />
//         </ProgressBar>
//       </PreloaderContainer>
//     </Wrapper>
//   );
// };

// export default Loader;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
position: absolute;
top: 0;
  background-color: #1c1c1c;
`;

const PreloaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Preloader = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
`;

const Circle = styled(motion.div)`
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: #ffffff;
  border-radius: 50%;
`;

const ProgressBar = styled(motion.div)`
  width: 300px;
  height: 10px;
  background-color: #333;
  border-radius: 5px;
  overflow: hidden;
`;

const Progress = styled(motion.div)`
  height: 100%;
  background-color: #007bff;
`;

const Loader: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const numberOfCircles = 8; // Увеличено количество кружков
  const radius = 20; // Радиус круга, по которому движутся кружки
  const circleSizes = [6, 8, 5, 7, 9, 6, 5, 8];
  const minSize = 5;
  const maxSize = 12;

  return (
    // <Wrapper>
    //   <PreloaderContainer>
    //     <Preloader>
    //       {[...Array(numberOfCircles)].map((_, i) => {
    //         const angle = (i * 360) / numberOfCircles;
    //         return (
    //           <Circle
    //             key={i}
    //             initial={{ opacity: 0 }}
    //             animate={{
    //                 opacity: [0, 1, 0],
    //                 rotate: [angle, angle + 360]
    //               }}
    //             transition={{
    //               duration: 1,
    //               repeat: Infinity,
    //               ease: "linear",
    //               delay: i * 0.1 // Создание задержки для каждого кружка
    //             }}
    //             style={{
    //               top: `calc(50% - 4px)`,
    //               left: `calc(50% - 4px)`,
    //               transformOrigin: `${radius}px ${radius}px`,
    //               transform: `rotate(${angle}deg) translate(${radius}px)`,
    //             }}
    //           />
    //         );
    //       })}
    //     </Preloader>
    //     <ProgressBar initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1 }}>
    //       <Progress initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ duration: 0.1 }} />
    //     </ProgressBar>
    //   </PreloaderContainer>
    // </Wrapper>
    <Wrapper>
      <PreloaderContainer>
        <Preloader>
          {[...Array(numberOfCircles)].map((_, i) => {
            const angle = (i * 360) / numberOfCircles;
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);
            const size = circleSizes[i % circleSizes.length]; // Используем размеры из массива
            return (
              <Circle
                key={i}
                initial={{ opacity: 0, x: 0, y: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  x: [x, x],
                  y: [y, y],
                  width: [maxSize, minSize],
                  height: [maxSize, minSize],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.1
                }}
                style={{
                    // width: `${size}px`,
                    // height: `${size}px`,
                    // top: `calc(50% - ${size / 2}px)`,
                    // left: `calc(50% - ${size / 2}px)`,
                    top: `calc(50% - ${maxSize / 2}px)`,
                    left: `calc(50% - ${maxSize / 2}px)`,
                  }}
              />
            );
          })}
        </Preloader>
        <ProgressBar initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1 }}>
          <Progress initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ duration: 0.1 }} />
        </ProgressBar>
      </PreloaderContainer>
    </Wrapper>
  );
};

export default Loader;
