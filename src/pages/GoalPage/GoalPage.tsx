import React, { useEffect } from 'react';
import goalBanner from '../../assets/images/goalBanner.png';
import SVGIcon from '../../assets/icons/svgComponent';
import DefaultBtn from '../../components/DefaultBtn/DefaultBtn';
import goal1 from '../../assets/images/goal1.png';
import goal2 from '../../assets/images/goal2.png';
import goal3 from '../../assets/images/goal3.png';
import goal4 from '../../assets/images/goal4.png';
import { setGoalPageModal } from '../../store/GoalPageSlice';

import './GoalPage.scss';
import { useDispatch } from 'react-redux';

const GoalPage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		setTimeout(() => {
			dispatch(setGoalPageModal(true));
		}, 1500);
	}, [dispatch]);

	return (
		<>
			<div className='GoalPage'>
				<div className="container">
				<div className='logo'>
					<SVGIcon name='mainLogo' size={100} />
				</div>
				<div className='banner'>
					<img src={goalBanner} alt='banner' />
					<div className='bannerTittle'>
						<h2>Подтверди свое фото</h2>
						<div className='imageBorder'>
							<SVGIcon name='verificationProfile' fill='green' size={50} />
						</div>
					</div>
					<div className='verificationBlock'>
						<div className='text'>
							<h1>Пройди верификацию</h1>
							<span>С фото</span>
						</div>
						<DefaultBtn background={'red'} arrow={false} text={'Попробуй'} />
					</div>
				</div>
				<div className='tittle'>
					<h2>Привет, это Целька</h2>
					<span className='subtext'>Мой вайб...</span>
				</div>
				<div className='cardWrapper'>
					<div className='card'>
						<img src={goal1} alt='card' />
						<div className='bg'></div>

						<span>Ищю Любовь</span>
					</div>
					<div className='card'>
						<img src={goal2} alt='card' />
						<div className='bg'></div>
						<span>Планы на сегодня</span>
					</div>
					<div className='card'>
						<img src={goal3} alt='card' />
						<div className='bg'></div>

						<span>Ищю Любовь</span>
					</div>
					<div className='card'>
						<img src={goal4} alt='card' />
						<div className='bg'></div>

						<span>Планы на сегодня</span>
					</div>
				</div>
				</div>
			</div>
		</>
	);
};

export default GoalPage;
