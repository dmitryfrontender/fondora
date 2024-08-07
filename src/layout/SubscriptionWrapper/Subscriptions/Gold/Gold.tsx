import React from 'react';
import SVGIcon from '../../../../assets/icons/svgComponent';
import DefaultBtn from '../../../../components/DefaultBtn/DefaultBtn';
import '../../Subscriptions.scss';
import './Gold.scss';

const Gold = () => {
	return (
		<>
			<div className='subscriptionWrapper gold'>
				
				<div className='optionWrapper'>
					<div className='optionTitle'>
						<h5>Лайкай</h5>
					</div>
					<div className='itemWrapper'>
						<div className='option'>
							<h4>Безлимит лайков</h4>
						</div>
						<div className='includeOption'>
							<SVGIcon name='checkboxIcon' size={15} className='checkBoxIcon' />
						</div>
					</div>
					<div className='itemWrapper'>
						<div className='option'>
							<h4>Просмотр лайков</h4>
						</div>
						<div className='includeOption'>
							<SVGIcon name='checkboxIcon' size={15} className='checkBoxIcon' />
						</div>
					</div>
					<div className='itemWrapper'>
						<div className='option'>
							<h4>Приоритетные лайки</h4>
							<div className='optionDescription'>
								<p>С приоритетными лайками тебя увидят в первую очередь</p>
							</div>
						</div>
						<div className='includeOption'>
							<SVGIcon name='lockBtn' size={30} style={{ padding: '8px 1px' }}/>
						</div>
					</div>
				</div>
				<div className='optionWrapper'>
					<div className='optionTitle'>
						<h5>Знакомься</h5>
					</div>
					<div className='itemWrapper'>
						<div className='option'>
							<h4>“Перемотка” без играничений</h4>
						</div>
						<div className='includeOption'>
							<SVGIcon name='checkboxIcon' size={15} className='checkBoxIcon' />
						</div>
					</div>
					<div className='itemWrapper'>
						<div className='option'>
							<h4>1 бесплатный буст в месяц</h4>
						</div>
						<div className='includeOption'>
							<SVGIcon name='checkboxIcon' size={15} className='checkBoxIcon' />
						</div>
					</div>
					<div className='itemWrapper'>
						<div className='option'>
							<h4>5 бесплатных суперлайков в неделю</h4>
						</div>
						<div className='includeOption'>
							<SVGIcon name='checkboxIcon' size={15} className='checkBoxIcon' />
						</div>
					</div>
					<div className='itemWrapper'>
						<div className='option'>
							<h4>Сообшения до создания пары</h4>
							<div className='optionDescription'>
								<p>Добавляй комментарии к суперлайкам</p>
							</div>
						</div>
						<div className='includeOption'>
							<SVGIcon name='lockBtn' size={30} style={{ padding: '8px 1px'  }} />
						</div>
					</div>
				</div>
				<div className='optionWrapper'>
					<div className='optionTitle'>
						<h5>Находки</h5>
					</div>
					<div className='itemWrapper'>
						<div className='option'>
							<h4>Загранпасторт</h4>
							<div className='optionDescription'>
								<p>Знакомься и общайся с людьми по всему миру.</p>
							</div>
						</div>
						<div className='includeOption'>
							<SVGIcon name='checkboxIcon' size={15} className='checkBoxIcon' />
						</div>
					</div>
					<div className='itemWrapper'>
						<div className='option'>
							<h4>Топ - Профили</h4>
							<div className='optionDescription'>
								<p>Ежедневная персональная подборка лучших профилей.</p>
							</div>
						</div>
						<div className='includeOption'>
							<SVGIcon name='checkboxIcon' size={15} className='checkBoxIcon' />
						</div>
					</div>
				</div>
				<div className='optionWrapper'>
					<div className='optionTitle'>
						<h5>Все под контролем</h5>
					</div>
					<div className='itemWrapper'>
						<div className='option'>
							<h4>Управление профилем</h4>
							<div className='optionDescription'>
								<p>Они узнают о тебе только то, что ты разрешишь.</p>
							</div>
						</div>
						<div className='includeOption'>
							<SVGIcon name='checkboxIcon' size={15} className='checkBoxIcon' />
						</div>
					</div>
					<div className='itemWrapper'>
						<div className='option'>
							<h4>Кто видит тебя</h4>
							<div className='optionDescription'>
								<p>Укажи, кто может тебя видеть.</p>
							</div>
						</div>
						<div className='includeOption'>
							<SVGIcon name='checkboxIcon' size={15} className='checkBoxIcon' />
						</div>
					</div>
					<div className='itemWrapper'>
						<div className='option'>
							<h4>Кого видишь ты</h4>
							<div className='optionDescription'>
								<p>Укажи категорию людей, с которыми хочешь знакомиться.</p>
							</div>
						</div>
						<div className='includeOption'>
							<SVGIcon name='checkboxIcon' size={15} className='checkBoxIcon' />
						</div>
					</div>
					<div className='itemWrapper'>
						<div className='option'>
							<h4>Никакой рекламы</h4>
						</div>
						<div className='includeOption'>
							<SVGIcon name='checkboxIcon' size={15} className='checkBoxIcon' />
						</div>
					</div>
				</div>
				<DefaultBtn background='blue' arrow={true} text={'от 4,99 $'} />
			</div>
			{/* </div> */}
		</>
	);
};

export default Gold;
