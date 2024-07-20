import React, { useState } from 'react';
import './SubscriptionWrapper.scss';
import './Subscriptions.scss';
import Gold from './Subscriptions/Gold/Gold';
import Plus from './Subscriptions/Plus/Plus';
import Vip from './Subscriptions/Vip/Vip';
import SVGIcon from '../../assets/icons/svgComponent';
import { useNavigate } from 'react-router-dom';

import { useKeenSlider } from 'keen-slider/react';
import { motion, AnimatePresence } from "framer-motion";
import 'keen-slider/keen-slider.min.css';

interface IShow {
	page: number;
}

const SubscriptionWrapper = ({ page }: IShow) => {
	const navigate = useNavigate();
	const [currentSlide, setCurrentSlide] = React.useState(page || 0);
	const [loaded, setLoaded] = useState(false);
	const subscriptionArr = [<Plus/>, <Gold/>,  <Vip/>];
	const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
		{
			initial: page || 0,
			slides: {
				perView: 1.04,
				spacing: 10,
			  },
			  breakpoints: {
				  '(max-width: 768px)': {
					  slides: {
						  perView: 1,
						  spacing: 0,
					  }
				  }
			  },

			slideChanged(slider) {
				setCurrentSlide(slider.track.details.rel);
			},
			created() {
				setLoaded(true);
			},
			updated(slider) {
				// setCurrentSlide(slider.track.details.rel);
				console.log(slider);
				
			},

			// resize(600)
		},
		[
			(slider) => {
				slider.size = 575;
			}
		]
	);

	return (
		<>
			<div className='page Subscription'>
				<div className='bannerItem'>
					<div className='subscriptionWrapper'>
						<div className='topItem'>
							<div className='title'>
								<h3>Моя Подписка</h3>
							</div>
							<div className='cancelBtn' onClick={() => navigate(-1)}>
								<SVGIcon name='cancelBtn' size={20} />
							</div>
						</div>
					</div>
					<div className='navigation-wrapper'>
						<div ref={sliderRef} className='keen-slider'>
							<div className='keen-slider__slide number-slide1'>
								<div className='banner plus'>
									<div className='bannerImg'>
										<SVGIcon name='logoPlus' size={20} />
										<div className='marker'>
											<span>PLUS</span>
										</div>
									</div>
									<div className='buyBtn' onClick={() => navigate('/fondora-gold')}>
										<span>Купить Подписку</span>
									</div>
								</div>
							</div>
							<div className='keen-slider__slide number-slide2'>
								<div className='banner gold'>
									<div className='bannerImg'>
										<SVGIcon name='logoGold' size={20} />
										<div className='marker'>
											<span>GOLD</span>
										</div>
									</div>
									<div className='buyBtn' onClick={() => navigate('/fondora-gold')}>
										<span>Купить Подписку</span>
									</div>
								</div>
							</div>
							<div className='keen-slider__slide number-slide3'>
								<div className='banner vip'>
									<div className='bannerImg'>
										<SVGIcon name='logoVip' size={20} />
										<div className='marker'>
											<span>VIP</span>
										</div>
									</div>
									<div className='buyBtn' onClick={() => navigate('/fondora-gold')}>
										<span>Купить Подписку</span>
									</div>
								</div>
							</div>
						</div>
						{loaded && instanceRef.current && (
							<div className='dots'>
								{[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => {
									return (
										<button
											key={idx}
											onClick={() => {
												instanceRef.current?.moveToIdx(idx);
											}}
											className={'dot' + (currentSlide === idx ? ' active' : '')}
										></button>
									);
								})}
							</div>
						)}
					</div>
				</div>
				{
					subscriptionArr.map((item, index) => {
						return (
							<>
								{currentSlide === index &&
									<AnimatePresence mode="wait">
										<motion.div
										//   key={selectedTab ? selectedTab.label : "empty"}
										key={currentSlide}
										initial={{ y: 20, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										exit={{ y: -10, opacity: 0 }}
										transition={{ duration: 0.3 }}
										>
									
											{item}
										</motion.div>
									</AnimatePresence>
								}
							</>
						)
					})
				}
			</div>
		</>
	);
};

export default SubscriptionWrapper;
