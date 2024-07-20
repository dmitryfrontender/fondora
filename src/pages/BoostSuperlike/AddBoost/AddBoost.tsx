import React, { useState } from 'react';
import SVGIcon from '../../../assets/icons/svgComponent';
import DefaultBtn from '../../../components/DefaultBtn/DefaultBtn';
import { useNavigate } from 'react-router-dom';
import boostsImg from '../../../assets/images/boosts.png';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import '../BoostSuperLike.scss';
import { useSelector } from 'react-redux';

const AddBoost = () => {
	const navigate = useNavigate();
	const [currentSlide, setCurrentSlide] = React.useState(0);
	const [loaded, setLoaded] = useState(false);
	const mobileScreen = useSelector((state: any) => state.mainState.mobileScreen);
	
	const [ref, instanceRef] = useKeenSlider<HTMLDivElement>({
		slides: {
		  perView: mobileScreen ? 1 : 2,
		  spacing: 15,
		},
		slideChanged(slider) {
			setCurrentSlide(slider.track.details.rel)
		  },
		created() {
			setLoaded(true)
		  },
	  })

	  function Arrow(props: {
		disabled: boolean
		left?: boolean
		onClick: (e: any) => void
	  }) {
		const disabled = props.disabled ? " arrow--disabled" : ""
		return (
			<>
				{ 
					<SVGIcon
						onClick={props.onClick}
						name={ props.left ?
							"sliderLeftBtn"
							:
							"sliderRightBtn"
						}
						className={`arrow ${
							props.left ? "arrow--left" : "arrow--right"
						  } ${disabled}`}
						  size={20}
						style={{ padding: "10px" }}
					/>
				}
			</>
		)
	  }

	return (
		<>
			<div className='page Boosts'>
				<div className='superLikeWrapper'>
					<div className='topItem'>
						<div className='title'>
							<h3>Нужны Бусты?</h3>
						</div>
						<div className='cancelBtn' onClick={() => navigate(-1)}>
							<SVGIcon name='cancelBtn' size={20} />
						</div>
					</div>
					<div className='superLikeBanner boostBanner'>
						<div className='bannerTitle'>
							<span className='colorText'>Тебя заметят!</span>
						</div>
						<div className='bannerImg'>
							<img src={boostsImg} alt='boosts' />
						</div>
					</div>
					<div className='cardWrapper'>
						<div className='title'>
							<h3>Подними свой профиль в топ в выбранной зоне поиска на 30 минут, чтобы найти больше пар!</h3>
						</div>


						<div className='itemWrapper keen-slider' ref={ref}>
							<div className='item keen-slider__slide number-slide1'>
								<div className='itemTitle'>
									<span>Популярно</span>
								</div>
								<div className='quantityLikes'>
									<h2>10 Бустов</h2>
								</div>
								<div className='description'>
									<span>3 $ / за 1шт.</span>
								</div>
								<div className='summaryInfo'>
									<div className='summary'>
										<span>Итого: 29,99 $</span>
									</div>
									<div className='discount'>
										<span>СКИДКА 25%</span>
									</div>
								</div>
								<DefaultBtn background='roseAquaGradient' arrow={true} text='Выбрать' />
							</div>
							<div className='item keen-slider__slide number-slide2'>
								<div className='itemTitle'>
									<span>Популярно</span>
								</div>
								<div className='quantityLikes'>
									<h2>30 Бустов</h2>
								</div>
								<div className='description'>
									<span>2,5 $ / за 1шт.</span>
								</div>
								<div className='summaryInfo'>
									<div className='summary'>
										<span>Итого: 46,99 $</span>
									</div>
									<div className='discount'>
										<span>СКИДКА 22%</span>
									</div>
								</div>
								<DefaultBtn background='roseAquaGradient' arrow={true} text='Выбрать' />
							</div>
							<div className='item keen-slider__slide number-slide3'>
								<div className='itemTitle'>
									<span>Популярно</span>
								</div>
								<div className='quantityLikes'>
									<h2>10 Бустов</h2>
								</div>
								<div className='description'>
									<span>3 $ / за 1шт.</span>
								</div>
								<div className='summaryInfo'>
									<div className='summary'>
										<span>Итого: 29,99 $</span>
									</div>
									<div className='discount'>
										<span>СКИДКА 25%</span>
									</div>
								</div>
								<DefaultBtn background='roseAquaGradient' arrow={true} text='Выбрать' />
							</div>
							<div className='item keen-slider__slide number-slide4'>
								<div className='itemTitle'>
									<span>Популярно</span>
								</div>
								<div className='quantityLikes'>
									<h2>30 Бустов</h2>
								</div>
								<div className='description'>
									<span>2,5 $ / за 1шт.</span>
								</div>
								<div className='summaryInfo'>
									<div className='summary'>
										<span>Итого: 46,99 $</span>
									</div>
									<div className='discount'>
										<span>СКИДКА 22%</span>
									</div>
								</div>
								<DefaultBtn background='roseAquaGradient' arrow={true} text='Выбрать' />
							</div>
						</div>
						{loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) => 
                e.stopPropagation() || instanceRef.current?.next()

				
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 2
              }
            />
          </>
        )}
						{loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length -1).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)

                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            )
          })}
        </div>
      )}


					</div>
					<div className='breakLine'>
						<span>или</span>
					</div>
					<div className='goldPlanBanner'>
						<div className='logo'>
							<SVGIcon name='logoGold' className='logo-effect' />
							<div className='marker'>
								<span>GOLD</span>
							</div>
						</div>
						<div className='description'>
							<p>1 бесплатный буст в месяц</p>
							<div className='goBtn'>
								<span>Перейти</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AddBoost;
