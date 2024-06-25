import React, { useState } from 'react';
import './ProfileComponent.scss';
import PhotoSlider from './PhotoSlider/PhotoSlider';
import SVGIcon from '../../assets/icons/svgComponent';
import TextAreaAutosize from 'react-textarea-autosize';
import companionAvatar from '../../assets/avatar/companionAvatar.png';

import { sliderProfiles } from '../../Data/SliderProfiles';

import { toggleToBlockUser, protectModalState, reportUserAvatar, reportUserName, setReportModal } from '../../store/ProtectSlice';

import { useDispatch } from 'react-redux';
import { shareProfileState } from '../../store/ShareProfileSlice';

const ProfileComponent = (props: any) => {
	const dispatch = useDispatch();

	const activeUser = sliderProfiles[0];
	const [inputValue, setInputValue] = useState('');

	return (
		<>
			<div className='ProfileComponent'>
				<PhotoSlider images={activeUser.images} />

				<div className='ProfileComponentInfo'>
					{props.profileVisibility && (
						<div
							className='ProfileComponentProfileToggler'
							onClick={() => {
								props.sendDataToGamepad(false);
							}}
						>
							<SVGIcon name='arrowDown' size={6} width={11} />
						</div>
					)}
					<div className='ProfileComponentMainInfo'>
						<span className='name'>{activeUser.userName}</span>
						<span className='age'>{activeUser.userAge}</span>
						<SVGIcon name='fillVerification' size={16} />
					</div>
					<div className='ProfileComponentAdditionalInfo'>
						<ul>
							<li>
								<SVGIcon name='homeIcon' size={14} />
								<span>{activeUser.userLocation}</span>
							</li>
							<li>
								<SVGIcon name='distanceIcon' size={14} />
								<span>9 km from you</span>
							</li>
							<li>
								<SVGIcon name='tall' size={14} />
								<span>178 см</span>
							</li>
							<li>
								<SVGIcon name='femaleGender' size={14} />
								<span>Гетеро Женщина</span>
							</li>
						</ul>
					</div>
					<div className='ProfileComponentDescriptionInfo'>
						<p>Не люблю длинные переписки( лучше увидимся на нашем первом свидании. Пригласить можешь в заведение. Гулять п...</p>
					</div>
					<div className='ProfileComponentSearching'>
						<span className='ProfileComponentSearchingBlock'>
							<span className='ProfileComponentSearchingIcon'>💖</span>
							<div className='ProfileComponentSearchingText'>
								<span className='ProfileComponentSearchingTitle'>Я ищю</span>
								<span className='ProfileComponentSearchingSubTitle'>Долгосрочный партнер</span>
							</div>
						</span>
					</div>
					<div className='ProfileComponentSignInfo'>
						<div className='ProfileComponentTitle'>Основное</div>
						<ul className='ProfileComponentLabelsList'>
							<li>
								<div className='tag'>
									<SVGIcon name='signGemini' size={16} />
									<span>Близнецы</span>
								</div>
							</li>
						</ul>
					</div>
					<div className='ProfileComponentStyleInfo'>
						<div className='ProfileComponentTitle'>Стиль жизни</div>
						<ul className='ProfileComponentLabelsList'>
							<li>
								<div className='tag'>
									<SVGIcon name='wineIcon' size={16} />
									<span>Я не пью</span>
								</div>
							</li>
							<li>
								<div className='tag'>
									<SVGIcon name='smokingIcon' size={16} />
									<span>Не курю</span>
								</div>
							</li>
							<li>
								<div className='tag'>
									<SVGIcon name='gymIcon' size={16} />
									<span>Часто</span>
								</div>
							</li>
							<li>
								<div className='tag'>
									<SVGIcon name='pizzaIcon' size={16} />
									<span>Другое</span>
								</div>
							</li>
							<li>
								<div className='tag'>
									<SVGIcon name='emailIcon' size={16} />
									<span>Просто смотрю</span>
								</div>
							</li>
						</ul>
					</div>
					<div className='ProfileComponentInterestsInfo'>
						<div className='ProfileComponentTitle'>Мои интересы</div>
						<ul className='ProfileComponentLabelsList'>
							<li>
								<div className='tag'>
									<span>Йога</span>
								</div>
							</li>
							<li>
								<div className='tag'>
									<span>Музыка</span>
								</div>
							</li>
							<li>
								<div className='tag'>
									<span>Кофе</span>
								</div>
							</li>
							<li>
								<div className='tag'>
									<span>Медитация</span>
								</div>
							</li>
							<li>
								<div className='tag'>
									<span>Духовность</span>
								</div>
							</li>
							<li>
								<div className='tag'>
									<span>Гарри Поттер</span>
								</div>
							</li>
							<li>
								<div className='tag'>
									<span>Транс</span>
								</div>
							</li>
						</ul>
					</div>
					<div className='ProfileComponentMessageBlock'>
						<div className='ProfileComponentMessageBlockTop'>
							<span className='ProfileComponentMessageIcon'>
								<div className='imageContainer'>
									<div className='imageBorder'></div>
									<img src={companionAvatar} alt='avatar' />
								</div>
								<SVGIcon name='writeMessageIcon' size={15} />
							</span>
							<span className='ProfileComponentMessageText'>
								<span className='ProfileComponentMessageTitle'>Jessica Black ждет твоего сообщения! </span>
								<span className='ProfileComponentMessageSubTitle'>Добавь его к суперлайку и увеличь шансы создать пару на 25%.</span>
							</span>
						</div>

						<TextAreaAutosize placeholder='Напишите сообщение...' value={inputValue} minRows={1} maxRows={4} onChange={(e) => setInputValue(e.target.value)} />
					</div>
					<div className='ProfileComponentButtons'>
						<span
							className='ProfileComponentButtonsBlock'
							onClick={() => {
								dispatch(shareProfileState(true));
							}}
						>
							<span className='ProfileComponentButtonsIcon'>
								<SVGIcon name='shareProfile' size={20} />
							</span>
							<div className='ProfileComponentButtonsText'>
								<span className='ProfileComponentButtonsTitle'>Поделиться профилем</span>
								<span className='ProfileComponentButtonsSubTitle'>Узнай, что думают друзья.</span>
							</div>
						</span>
						<span
							className='ProfileComponentButtonsBlock'
							onClick={() => {
								dispatch(protectModalState(true));
								dispatch(reportUserAvatar(companionAvatar));
								dispatch(reportUserName(activeUser.userName));
								dispatch(toggleToBlockUser());
							}}
						>
							<span className='ProfileComponentButtonsIcon'>
								<SVGIcon name='blockProfile' size={20} />
							</span>
							<div className='ProfileComponentButtonsText'>
								<span className='ProfileComponentButtonsTitle'>Заблокировать Jessica Black</span>
								<span className='ProfileComponentButtonsSubTitle'>Вы больше не будете видеть друг друга.</span>
							</div>
						</span>
						<span
							className='ProfileComponentButtonsBlock'
							onClick={() => {
								dispatch(setReportModal(true));
								dispatch(reportUserAvatar(companionAvatar));
								dispatch(reportUserName(activeUser.userName));
							}}
						>
							<span className='ProfileComponentButtonsIcon'>
								<SVGIcon name='reportProfile' size={20} />
							</span>
							<div className='ProfileComponentButtonsText'>
								<span className='ProfileComponentButtonsTitle'>Пожаловаться на Jessica Black</span>
								<span className='ProfileComponentButtonsSubTitle'>Пользователь об этом не узнает.</span>
							</div>
						</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProfileComponent;
