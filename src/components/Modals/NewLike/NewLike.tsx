import React, { useEffect, useRef, useState } from 'react';
import { myLikes } from '../../../Data/MyLikes';
import { useDispatch } from 'react-redux';
import { ILikes } from '../../../model/LikesModel';
import DefaultBtn from '../../DefaultBtn/DefaultBtn';
import { newLikeModalState } from '../../../store/NewLikeSlice';
import './NewLike.scss';
import SVGIcon from '../../../assets/icons/svgComponent';

const NewLike = () => {
	const [mainAvatar, setMainAvatar] = useState<string>('');
	const [itemAvatar1, setItemAvatar1] = useState<string>('');
	const [itemAvatar2, setItemAvatar2] = useState<string>('');
	const [countLikes, setCountLikes] = useState<number>(0);
	const ref = useRef<HTMLInputElement>(null);
	const dispatch = useDispatch();

	const getData = () => {
		myLikes.forEach((item: ILikes) => {
			switch (item.id) {
				case 1:
					setMainAvatar(item.image);
					break;
				case 2:
					setItemAvatar1(item.image);
					break;
				case 3:
					setItemAvatar2(item.image);
					break;
			}
		});
		setCountLikes(myLikes.length);
	};

	const handleClickOutside = (e: any) => {
		if (e.target.className === ref.current?.className) {
			dispatch(newLikeModalState(false));
		}
	};

	useEffect(() => {
		getData();
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, [handleClickOutside]);

	return (
		<>
			<div className='NewLikeModal Modal' ref={ref}>
				<div className='modalWrapper'>
					<div className='likesPreview'>
						<div className='item first'>
							<div className="imageWrapper">
								<img src={mainAvatar} alt='like' />
								
							</div>
						</div>
						<div className='item second'>
							<div className="imageWrapper">
								<img src={itemAvatar1} alt='like' />
							</div>
						</div>
						<div className='item third'>
							<div className="imageWrapper">
								<img src={itemAvatar2} alt='like' />
								
							</div>
						</div>
						<div className="heartLabe">
							<SVGIcon name='newLikeHeart' size={20} />
						</div>
					</div>
					<div className='tittle'>
						<h2>Вы получили {countLikes} Лайков</h2>
					</div>
					<div className='description'>
						<span>Не заставляй свои пар ждать! Перейди на Tinder Gold" и узнай, кто поставил тебе лайк.</span>
					</div>
					<div className='modalButtons'>
						<div className='btn'>
							<DefaultBtn text='Узнай, кто тебя лайкнул' background='red' arrow={true} />
						</div>
						<div
							className='btn'
							onClick={() => {
								dispatch(newLikeModalState(false));
							}}
						>
							<DefaultBtn text='Не сейчас' background='transparent' arrow={false} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default NewLike;
