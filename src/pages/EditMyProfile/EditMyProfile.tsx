import React from 'react';
import './EditMyProfile.scss';
import SVGIcon from '../../assets/icons/svgComponent';
import ProfileComponent from '../../components/ProfileComponent/ProfileComponent';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import userPhoto1 from '../../assets/avatar/userPhoto1.png';
import userPhoto2 from '../../assets/avatar/userPhoto2.png';
import ToggleBtn from '../../components/ToggleBtn/ToggleBtn';

const EditMyProfile = () => {
	const [pageOption, setPageOption] = useState(true);
	const navigate = useNavigate();

	return (
		<>
			<div className='page EditMyProfile'>
				<div className='pageItems'>
					<div className='topTittle'>
						<div className='backBtn' onClick={() => navigate(-1)}>
							<SVGIcon name='arrowLeft' size={15} />
						</div>
						<div className='tittle'>
							<h3>Настройки Профиля</h3>
						</div>
						<div className='completeBtn'>
							<span>Готово</span>
						</div>
					</div>
					<div className='enterPageOption'>
						<div className='itemWrapper'>
							<div className={`item ${pageOption ? '' : 'itemDisable'}`} onClick={() => setPageOption(true)}>
								<div className='title'>
									<h3>Изменить</h3>
								</div>
								{/* <div className="underline"></div> */}
							</div>
							<div className={`item ${pageOption ? 'itemDisable' : ''}`} onClick={() => setPageOption(false)}>
								<div className='title'>
									<h3>Предпросмотр</h3>
								</div>
								{/* <div className="underline"></div> */}
							</div>
						</div>
					</div>
					{pageOption ? (
						<>
							<div className='titleWrapper'>
								<div className='listTitle'>
									<h3>Медиафайлы</h3>
								</div>
							</div>
							<div className='mediaBlock'>
								<div className='mediaItem'>
									<img src={userPhoto1} alt='img' />
								</div>
								<div className='mediaItem'>
									<img src={userPhoto2} alt='img' />
								</div>
								<div className='mediaItem'>
									<SVGIcon name='plusBtn' size={30} />
								</div>
								<div className='mediaItem'>
									<SVGIcon name='plusBtn' size={30} />
								</div>
								<div className='mediaItem'>
									<SVGIcon name='plusBtn' size={30} />
								</div>
								<div className='mediaItem'>
									<SVGIcon name='plusBtn' size={30} />
								</div>
							</div>
							<div className='titleWrapper'>
								<div className='listTitle'>
									<h3>Настройки фото</h3>
								</div>
							</div>
							<div className='listWrapper'>
								<ul>
									<li>
										<div className='itemWrapper'>
											<div className='description'>
												<span>Умные фото</span>
											</div>
											<div className='value'>
												<ToggleBtn />
												{/* <div className="text">
                                                    <span>
                                                        Выбрать
                                                    </span>
                                                </div>
                                                <SVGIcon name="arrowRight" size={20}  />
                                                <div className="underline"></div> */}
											</div>
										</div>
										<div className='optionDescription'>
											<p>Функция «Умные фото» выбирает лучшую фотографию твоего профиля и показывает её в первую очередь.</p>
										</div>
									</li>
								</ul>
							</div>
							<div className='titleWrapper'>
								<div className='listTitle'>
									<h3>Обо мне</h3>
								</div>
								<div className='extraFlag'>
									<span>Важное</span>
								</div>
								<div className='percentage'>
									<span>+30%</span>
								</div>
							</div>
							<div className='descriptionArea'>
								<textarea name='about' id='about' style={{ resize: 'none' }}></textarea>
								<div className='enterSymbols'>
									<span>500</span>
								</div>
							</div>
							<div className='titleWrapper'>
								<div className='listTitle'>
									<h3>Интересы</h3>
								</div>
							</div>
							<div className='listWrapper'>
								<ul>
									<li>
										<div className='itemWrapper'>
											{/* <div className="description"> */}
											<div className='optionWrapper'>
												<div className='option'>
													<span>Дети 90-х</span>
												</div>
												<div className='option'>
													<span>Playstation 5</span>
												</div>
												<div className='option'>
													<span>Тенис</span>
												</div>
												<div className='option'>
													<span>Прогулки на воде</span>
												</div>
												<div className='option'>
													<span>TRX-4</span>
												</div>
												<div className='option'>
													<span>Вибрация</span>
												</div>
												<div className='option'>
													<span>Лыжный бег</span>
												</div>
												<div className='option'>
													<span>Сёрфинг</span>
												</div>
											</div>

											{/* </div> */}
											<div className='value'>
												{/* <ToggleBtn /> */}
												{/* <div className="text">
                                                    <span>
                                                        Выбрать
                                                    </span>
                                                </div> */}
												<SVGIcon name='arrowRight' size={20} />
												<div className='underline'></div>
											</div>
										</div>
										{/* <div className="optionDescription">
                                            <p>
                                                Функция «Умные фото» выбирает лучшую фотографию твоего профиля
                                                и показывает её в первую очередь.
                                            </p>
                                        </div> */}
									</li>
								</ul>
							</div>
							<div className='titleWrapper'>
								<div className='listTitle'>
									<h3>Твой Рост</h3>
								</div>
							</div>
							<div className='listWrapper'>
								<ul>
									<li>
										<div className='itemWrapper'>
											<div className='description'>
												<SVGIcon name='tallIcon' size={20} />
												<div className='text'>
													<span>Добавить рост</span>
												</div>
											</div>
											<div className='value'>
												<div className='text'>
													<span>Выбрать</span>
												</div>
												<SVGIcon name='arrowRight' size={20} />
												<div className='underline'></div>
											</div>
										</div>
									</li>
								</ul>
							</div>
							<div className='titleWrapper'>
								<div className='listTitle'>
									<h3>Цели в отошениях</h3>
								</div>
							</div>
							<div className='listWrapper'>
								<ul>
									<li>
										<div className='itemWrapper'>
											<div className='description'>
												<SVGIcon name='eyeIcon' size={20} />
												<div className='text'>
													<span>Я ищу</span>
												</div>
											</div>
											<div className='value'>
												<div className='text'>
													<span>Выбрать</span>
												</div>
												<SVGIcon name='arrowRight' size={20} />
												<div className='underline'></div>
											</div>
										</div>
										<div className='smileWrapper'>
											<span className='smile'>🧐</span>
											<span className='text'>Все еще разбираюсь</span>
										</div>
									</li>
								</ul>
							</div>
							<div className='titleWrapper'>
								<div className='listTitle'>
									<h3>Языки, которые я знаю</h3>
								</div>
							</div>
							<div className='listWrapper'>
								<ul>
									<li>
										<div className='itemWrapper'>
											<div className='description'>
												<SVGIcon name='addLang' size={20} />
												<div className='text'>
													<span>Добавить языки</span>
												</div>
											</div>
											<div className='value'>
												<div className='text'>
													<span>Выбрать</span>
												</div>
												<SVGIcon name='arrowRight' size={20} />
												<div className='underline'></div>
											</div>
										</div>
									</li>
								</ul>
							</div>
							<div className='titleWrapper'>
								<div className='listTitle'>
									<h3>Основное</h3>
								</div>
							</div>
							<div className='listWrapper'>
								<ul>
									<li>
										<div className='itemWrapper'>
											<div className='description'>
												<SVGIcon name='zodiac' size={20} />
												<div className='text'>
													<span>Знак зодиака</span>
												</div>
											</div>
											<div className='value'>
												<div className='text'>
													<span>Выбрать</span>
												</div>
												<SVGIcon name='arrowRight' size={20} />
												<div className='underline'></div>
											</div>
										</div>
									</li>
									<li>
										<div className='itemWrapper'>
											<div className='description'>
												<SVGIcon name='education' size={20} />
												<div className='text'>
													<span>Образование</span>
												</div>
											</div>
											<div className='value'>
												<div className='text'>
													<span>Выбрать</span>
												</div>
												<SVGIcon name='arrowRight' size={20} />
												<div className='underline'></div>
											</div>
										</div>
									</li>
									<li>
										<div className='itemWrapper'>
											<div className='description'>
												<SVGIcon name='planFamily' size={20} />
												<div className='text'>
													<span>Планы на семью</span>
												</div>
											</div>
											<div className='value'>
												<div className='text'>
													<span>Выбрать</span>
												</div>
												<SVGIcon name='arrowRight' size={20} />
												<div className='underline'></div>
											</div>
										</div>
									</li>
									<li>
										<div className='itemWrapper'>
											<div className='description'>
												<SVGIcon name='covidVaccine' size={20} />
												<div className='text'>
													<span>Вакцина от COVID</span>
												</div>
											</div>
											<div className='value'>
												<div className='text'>
													<span>Выбрать</span>
												</div>
												<SVGIcon name='arrowRight' size={20} />
												<div className='underline'></div>
											</div>
										</div>
									</li>
									<li>
										<div className='itemWrapper'>
											<div className='description'>
												<SVGIcon name='typePerson' size={20} />
												<div className='text'>
													<span>Тип личности</span>
												</div>
											</div>
											<div className='value'>
												<div className='text'>
													<span>Выбрать</span>
												</div>
												<SVGIcon name='arrowRight' size={20} />
												<div className='underline'></div>
											</div>
										</div>
									</li>
									<li>
										<div className='itemWrapper'>
											<div className='description'>
												<SVGIcon name='styleChatting' size={20} />
												<div className='text'>
													<span>Стиль общения</span>
												</div>
											</div>
											<div className='value'>
												<div className='text'>
													<span>Выбрать</span>
												</div>
												<SVGIcon name='arrowRight' size={20} />
												<div className='underline'></div>
											</div>
										</div>
									</li>
									<li>
										<div className='itemWrapper'>
											<div className='description'>
												<SVGIcon name='loveLanguage' size={20} />
												<div className='text'>
													<span>Язык любви</span>
												</div>
											</div>
											<div className='value'>
												<div className='text'>
													<span>Выбрать</span>
												</div>
												<SVGIcon name='arrowRight' size={20} />
												<div className='underline'></div>
											</div>
										</div>
									</li>
								</ul>
							</div>
							<div className='titleWrapper'>
								<div className='listTitle'>
									<h3>Стиль жизни</h3>
								</div>
							</div>
							<div className='listWrapper'>
								<ul>
									<li>
										<div className='itemWrapper'>
											<div className='description'>
												<SVGIcon name='pets' size={20} />
												<div className='text'>
													<span>Питомцы</span>
												</div>
											</div>
											<div className='value'>
												<div className='text'>
													<span>Выбрать</span>
												</div>
												<SVGIcon name='arrowRight' size={20} />
												<div className='underline'></div>
											</div>
										</div>
									</li>
									<li>
										<div className='itemWrapper'>
											<div className='description'>
												<SVGIcon name='alcohol' size={20} />
												<div className='text'>
													<span>Алкоголь</span>
												</div>
											</div>
											<div className='value'>
												<div className='text'>
													<span>Выбрать</span>
												</div>
												<SVGIcon name='arrowRight' size={20} />
												<div className='underline'></div>
											</div>
										</div>
									</li>
									<li>
										<div className='itemWrapper'>
											<div className='description'>
												<SVGIcon name='smoking' size={20} />
												<div className='text'>
													<span>Как часто ты куришь?</span>
												</div>
											</div>
											<div className='value'>
												<div className='text'>
													<span>Выбрать</span>
												</div>
												<SVGIcon name='arrowRight' size={20} />
												<div className='underline'></div>
											</div>
										</div>
									</li>
									<li>
										<div className='itemWrapper'>
											<div className='description'>
												<SVGIcon name='gym' size={20} />
												<div className='text'>
													<span>Тренировка</span>
												</div>
											</div>
											<div className='value'>
												<div className='text'>
													<span>Выбрать</span>
												</div>
												<SVGIcon name='arrowRight' size={20} />
												<div className='underline'></div>
											</div>
										</div>
									</li>
									<li>
										<div className='itemWrapper'>
											<div className='description'>
												<SVGIcon name='food' size={20} />
												<div className='text'>
													<span>Предпочтения в еде</span>
												</div>
											</div>
											<div className='value'>
												<div className='text'>
													<span>Выбрать</span>
												</div>
												<SVGIcon name='arrowRight' size={20} />
												<div className='underline'></div>
											</div>
										</div>
									</li>
									<li>
										<div className='itemWrapper'>
											<div className='description'>
												<SVGIcon name='socialMedia' size={20} />
												<div className='text'>
													<span>Соцсети</span>
												</div>
											</div>
											<div className='value'>
												<div className='text'>
													<span>Выбрать</span>
												</div>
												<SVGIcon name='arrowRight' size={20} />
												<div className='underline'></div>
											</div>
										</div>
									</li>
									<li>
										<div className='itemWrapper'>
											<div className='description'>
												<SVGIcon name='dream' size={20} />
												<div className='text'>
													<span>Привычки во сне</span>
												</div>
											</div>
											<div className='value'>
												<div className='text'>
													<span>Выбрать</span>
												</div>
												<SVGIcon name='arrowRight' size={20} />
												<div className='underline'></div>
											</div>
										</div>
									</li>
								</ul>
							</div>
							<div className='titleWrapper'>
								<div className='listTitle'>
									<h3>Должность</h3>
								</div>
								<div className='extraFlag'>
									<span>Важное</span>
								</div>
								<div className='percentage'>
									<span>+5%</span>
								</div>
							</div>
							<div className='listWrapper'>
								<ul>
									<li>
										<div className='itemWrapper'>
											<div className='description'>
												<SVGIcon name='jobTitle' size={20} />
												<div className='text'>
													<span>Должность</span>
												</div>
											</div>
											<div className='value'>
												<div className='text'>
													<span>Выбрать</span>
												</div>
												<SVGIcon name='arrowRight' size={20} />
												<div className='underline'></div>
											</div>
										</div>
									</li>
								</ul>
							</div>
							<div className='titleWrapper'>
								<div className='listTitle'>
									<h3>Компания</h3>
								</div>
								<div className='percentage' style={{ paddingLeft: '10px' }}>
									<span>+5%</span>
								</div>
							</div>
							<div className='listWrapper'>
								<ul>
									<li>
										<div className='itemWrapper'>
											<div className='description'>
												<SVGIcon name='company' size={20} />
												<div className='text'>
													<span>Компания</span>
												</div>
											</div>
											<div className='value'>
												<div className='text'>
													<span>Выбрать</span>
												</div>
												<SVGIcon name='arrowRight' size={20} />
												<div className='underline'></div>
											</div>
										</div>
									</li>
								</ul>
							</div>
							<div className='titleWrapper'>
								<div className='listTitle'>
									<h3>Образование</h3>
								</div>
							</div>
							<div className='listWrapper'>
								<ul>
									<li>
										<div className='itemWrapper'>
											{/* <div className="description"> */}
											<div className='optionWrapper'>
												<div className='option'>
													<span>Harvard</span>
												</div>
											</div>

											{/* </div> */}
											<div className='value'>
												{/* <ToggleBtn /> */}
												{/* <div className="text">
                                                    <span>
                                                        Выбрать
                                                    </span>
                                                </div> */}
												<SVGIcon name='arrowRight' size={20} />
												<div className='underline'></div>
											</div>
										</div>
									</li>
								</ul>
							</div>
							<div className='titleWrapper'>
								<div className='listTitle'>
									<h3>Живу в</h3>
								</div>
							</div>
							<div className='listWrapper'>
								<ul>
									<li>
										<div className='itemWrapper'>
											<div className='description'>
												<SVGIcon name='hometown' size={20} />
												<div className='text'>
													<span>Добавить город</span>
												</div>
											</div>
											<div className='value'>
												<div className='text'>
													<span>Выбрать</span>
												</div>
												<SVGIcon name='arrowRight' size={20} />
												<div className='underline'></div>
											</div>
										</div>
									</li>
								</ul>
							</div>
							<div className='titleWrapper'>
								<div className='listTitle'>
									<h3>Сексуальная ориентация</h3>
								</div>
							</div>
							<div className='listWrapper'>
								<ul>
									<li>
										<div className='itemWrapper'>
											{/* <div className="description"> */}
											<div className='optionWrapper'>
												<div className='option'>
													<span>Гетеро</span>
												</div>
												<div className='option'>
													<span>Лесби</span>
												</div>
											</div>

											{/* </div> */}
											<div className='value'>
												{/* <ToggleBtn /> */}
												{/* <div className="text">
                                                    <span>
                                                        Выбрать
                                                    </span>
                                                </div> */}
												<SVGIcon name='arrowRight' size={20} />
												<div className='underline'></div>
											</div>
										</div>
									</li>
								</ul>
							</div>
							<div className='titleWrapper'>
								<div className='listTitle'>
									<h3>Контроль над профилем</h3>
								</div>
								<div className='goldMarker' style={{ marginLeft: '10px' }}>
									<span>GOLD</span>
								</div>
							</div>
							<div className='listWrapper'>
								<ul>
									<li>
										<div className='itemWrapper'>
											<div className='description'>
												<div className='text'>
													<span>Не показывать мой возраст</span>
												</div>
											</div>
											<div className='value'>
												<ToggleBtn />
											</div>
										</div>
									</li>
									<li>
										<div className='itemWrapper'>
											<div className='description'>
												<div className='text'>
													<span>Не показывать расстояние до меня</span>
												</div>
											</div>
											<div className='value'>
												<ToggleBtn />
											</div>
										</div>
									</li>
								</ul>
							</div>
						</>
					) : (
						<div className='prewiewBlock'>
							<ProfileComponent />
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default EditMyProfile;
