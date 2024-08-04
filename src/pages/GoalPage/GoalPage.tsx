import React, { useEffect, useState } from "react";
import goalBanner from "../../assets/images/goalBanner.png";
import SVGIcon from "../../assets/icons/svgComponent";
import DefaultBtn from "../../components/DefaultBtn/DefaultBtn";
import goal1 from "../../assets/images/goal1.png";
import goal2 from "../../assets/images/goal2.png";
import goal3 from "../../assets/images/goal3.png";
import goal4 from "../../assets/images/goal4.png";
import { setGoalPageModal } from "../../store/GoalPageSlice";
import GamePad from "../../components/GamePad/GamePad";

import "./GoalPage.scss";
import { useDispatch } from "react-redux";

const GoalPage = () => {
  const dispatch = useDispatch();
  const [vibeState, setVibeState] = useState<number>(0);
  const [gamePadState, setGamePadState] = useState<boolean >(false);
  const [nameGamePad, setNameGamePad] = useState<string>('');
//   const [bgImg, setBgImg] = useState<string>('');

  const mobileButtons = document.querySelector(".MobileButtons") as HTMLElement;

  const renderGamePad = () => {
	// vibeState === 0 ? mobileButtons.style.display = "block" : mobileButtons.style.display = "none";

	if (gamePadState) {
		mobileButtons.style.display = "none"

		return (
			<div className="wrapperGamePad">
				<div className="bgImg">
						<img src={
							vibeState === 1
							? goal1
							: vibeState === 2
							? goal2
							: vibeState === 3
							? goal3
							: goal4
							}
						alt="bg" />
					</div>
				<div className="topBlock">
					<div className="title">
						<h2>{nameGamePad}</h2>
					</div>
					<div className="closeBtn">
						<SVGIcon 
							name="cancelBtn" 
							width={20} 
							fill='white' 
							onClick={() => {
								setVibeState(0);
								setGamePadState(false);
							}}/>
					</div>
				</div>
				<GamePad/>
			</div>
		)
	}

  }

  const renderVibeContent = () => {
	vibeState === 0 ? mobileButtons.style.display = "block" : mobileButtons.style.display = "none";
	if (vibeState !== 0) {
		return (
			<div className="vibe">
			<div className="bgImg">
				<img src={
					vibeState === 1
					? goal1
					: vibeState === 2
					? goal2
					: vibeState === 3
					? goal3
					: goal4
					}
				alt="bg" />
			</div>
			<div className="content">
				<div className="logo">
					<SVGIcon name="mainLogo" width={100} />
				</div>
				<div className="bottomContent">
				<div className="textBlock">
					<h2>
						{
							vibeState === 1
							? "Ищю любовь"
							: vibeState === 2
							? "Планы на сегодня"
							: vibeState === 3
							? "Ищю любовь"
							: "Планы на сегодня"
						}
						</h2>
					<span>
						{
							vibeState === 1
							? <span>Найди тех, кому нравится <br /> спонтанность1</span>
							: vibeState === 2
							? <span>Найди тех, кому нравится <br /> спонтанность2</span>
							: vibeState === 3
							? <span>Найди тех, кому нравится <br /> спонтанность3</span>
							: <span>Найди тех, кому нравится <br /> спонтанность4</span>
						}
					</span>
				</div>
				<div className="btnWrapper">
					<DefaultBtn
					text="Присоединиться"
					background="red"
					arrow={true}
					onClick={() => {
						// setVibeState(0);
						setNameGamePad(vibeState === 1 ? "Ищю любовь" : vibeState === 2 ? "Планы на сегодня" : vibeState === 3 ? "Ищю любовь" : "Планы на сегодня");
						setGamePadState(true)

					}}
					/>
					<DefaultBtn
					text="Нет спасибо"
					background="transparent"
					arrow={false}
					onClick={() => {
						setVibeState(0);
						mobileButtons.style.display = "block";
					}}
					/>
				</div>
				</div>
			</div>
			</div>
		);
	}
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(setGoalPageModal(true));
    }, 200);
  }, [dispatch]);

  return (
    <>
      <div className="GoalPage">
        <div className="container">
          <div className="logo">
            <SVGIcon name="mainLogo" width={100} />
          </div>
          <div className="banner">
            <img src={goalBanner} alt="banner" />
            <div className="bannerTittle">
              <h2>Подтверди свое фото</h2>
              <div className="imageBorder">
                <SVGIcon name="verificationProfile" fill="green" size={50} />
              </div>
            </div>
            <div className="verificationBlock">
              <div className="text">
                <h1>Пройди верификацию</h1>
                <span>С фото</span>
              </div>
              <DefaultBtn background={"red"} arrow={false} text={"Попробуй"} />
            </div>
          </div>
          <div className="tittle">
            <h2>Привет, это Целька</h2>
            <span className="subtext">Мой вайб...</span>
          </div>
          <div className="cardWrapper">
            <div className="card" onClick={() => setVibeState(1)}>
              <img src={goal1} alt="card" />
              <div className="bg"></div>

              <span>Ищю Любовь</span>
            </div>
            <div className="card" onClick={() => setVibeState(2)}>
              <img src={goal2} alt="card" />
              <div className="bg"></div>
              <span>Планы на сегодня</span>
            </div>
            <div className="card" onClick={() => setVibeState(3)}>
              <img src={goal3} alt="card" />
              <div className="bg"></div>

              <span>Ищю Любовь</span>
            </div>
            <div className="card" onClick={() => setVibeState(4)}>
              <img src={goal4} alt="card" />
              <div className="bg"></div>

              <span>Планы на сегодня</span>
            </div>
          </div>
          <div className="vibeContent">{renderVibeContent()}</div>
			<div className="vibeGamePad">{renderGamePad()}</div>
        </div>
      </div>
    </>
  );
};

export default GoalPage;
