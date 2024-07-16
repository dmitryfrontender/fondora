
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  background-color: #1c1c1c;
  height: 100%;
  width: 100%;
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
background: rgba(255, 255, 255, 0.1);
padding: 10px;
border-radius: 20px;
`;

const Circle = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
`;

const ProgressBar = styled(motion.div)`
  width: 130px;
  height: 10px;
  background-color: #333;
  border-radius: 5px;
  overflow: hidden;
`;

const Progress = styled(motion.div)`
  height: 100%;
  background-color: #007bff;
`;
const ProgressInfo = styled.div`
    width: inherit;
    font-size: 17px;
    color: white;
    position: absolute;
    margin: 10px 0;
`;

const Loader: React.FC = () => {
  const [progress, setProgress] = useState(0);
//   console.log(progress);
  

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const numberOfCircles = 8; // Количество кружков
  const radius = 20; // Радиус круга, по которому движутся кружки
  const circleSizes = [6, 8, 5, 7, 9, 6, 5, 8];

  const minSize = 5;
  const maxSize = 12;

//   // Функция для расчета цвета кружка в градации серого
//   const getColor = (index: number) => {
//     const maxGray = 255; // белый
//     const minGray = 100; // темно-серый

//     // const grayValue = Math.round(minGray + ((maxGray - minGray) * index) / (numberOfCircles - 1));
//     const grayValue = Math.round(maxGray + ((minGray -  maxGray) * index) / (numberOfCircles - 1));

//     // console.log(grayValue);
    
//     return `rgb(${grayValue}, ${grayValue}, ${grayValue})`;
//   };

  return (
    <Wrapper>
      <PreloaderContainer>
        <Preloader>
          {[...Array(numberOfCircles)].map((_, i) => {
            const angle = ((i - 1) * 410) / numberOfCircles ;
            // const angle = ((i - 1.6) * 455) / numberOfCircles ;

            // const x = radius * Math.cos((angle * Math.PI) / 180);
            // const y = radius * Math.sin((angle * Math.PI) / 180);
            // const size = maxSize - ((maxSize - minSize) / (numberOfCircles - 1)) * i;
            const size = circleSizes[i % circleSizes.length];
            // const color = getColor(numberOfCircles - 1 - i); // Инвертируем порядок для цвета
            return (
              <Circle
                key={i}
                initial={{ opacity: 0, size: 0, backgroundColor: 'white' }}
                animate={{
                  rotate: [360],
                //   x: [radius * Math.cos((angle * Math.PI) / 180), radius * Math.cos((angle * Math.PI) / 180)],
                //   y: [radius * Math.sin((angle * Math.PI) / 180), radius * Math.sin((angle * Math.PI) / 180)],
                x: [radius * Math.cos((angle * Math.PI) / 200), radius * Math.cos((angle * Math.PI) / 200)],
                y: [radius * Math.sin((angle * Math.PI) / 200), radius * Math.sin((angle * Math.PI) / 200)],
                opacity: [1, 0],
                                //   x: [x, x],
                                //   y: [y, y],
                                  width: [maxSize, minSize],
                                  height: [maxSize, minSize],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.06
                }}
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  backgroundColor: 'white',
                  top: `calc(50% - ${size / 2}px)`,
                  left: `calc(50% - ${size / 2}px)`
                }}
              />
            );
          })}
        </Preloader>
        <ProgressBar initial={{ width: 0 }} animate={{ width: '90px' }} transition={{ duration: 1.1 }}>
          <Progress initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ duration: 0.1 }} />
          <ProgressInfo>{`${progress}%`}</ProgressInfo>
        </ProgressBar>
      </PreloaderContainer>
    </Wrapper>
  );
};

export default Loader;