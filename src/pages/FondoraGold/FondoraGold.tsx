import React from "react";
import SVGIcon from "../../assets/icons/svgComponent";
import titleImg from '../../assets/images/fondoraGoldTitle.png'
import DefaultBtn from "../../components/DefaultBtn/DefaultBtn";
import { useNavigate } from "react-router-dom";
import './FondoraGold.scss';

const FondoraGold = () => {



    const [toggleExtra, setToggleExtra] = React.useState<boolean>(false)


    const navigate = useNavigate();





    const activeExtra = (item: boolean) => {
        item ? setToggleExtra(true) : setToggleExtra(false);
    }


    return(
        <>
           <div className="page FondoraGold">
            <div className="pagesWrapper">
                <div className="topItems">
                    <div className='logo'>
                        <SVGIcon name='logoGoldWhite' className='logo-effect' />
                        <div className='status'>
                            <span>GOLD</span>
                        </div>
                    </div>
                    <button onClick={() => navigate('/')}>
                        <SVGIcon name={"cancelBtn"} size={20}/>
                    </button>



                </div>
                <div className="mainImg">
                    <img src={titleImg} alt="titleImg" />
                </div>
                <div className="title">
                    <span>
                    Смотри, кто ставит тебе лайки, и создавай пары с 
                    </span>&nbsp;
                    <span className="colorText"> 
                    Fondora Gold
                    </span>
                    <span>
                    .
                    </span>

                </div>
                <div className="extraWrapper">

                    <div className={`extraItem ${toggleExtra ? 'activeExtra' : ''}`} onClick={() => activeExtra(true)}>
                        <div className="topItems">
                            <span className="title">
                                Легкий старт
                            </span>
                            {/* {
                                toggleExtra ?
                                <> */}
                                    <SVGIcon name={'checkboxIcon'} size={20} />
                                {/* </>
                                :
                                null
                            } */}

                        </div>
                        <div className="timeAvailable">
                            <span>
                                1 месяц

                            </span>
                        </div>
                        <div className="bottomItems">
                            <span className="coast">
                                7,99 $ / мес.
                            </span>
                            <DefaultBtn text=" СКИДКА 25%" background="red" arrow={false} />

                        </div>

                    </div>
                    <div className={`extraItem ${toggleExtra ? '' : 'activeExtra'}`} onClick={() => activeExtra(false)}>
                        <div className="topItems">
                            <span className="title">
                                Популярно
                            </span>
                            {/* {
                                !toggleExtra ?
                                <> */}
                                    <SVGIcon name={'checkboxIcon'} size={20} />
                                {/* </>
                                :
                                null
                            } */}

                        </div>
                        <div className="timeAvailable">
                            <span>
                                6 месяц
                            </span>

                        </div>
                      
                        <div className="bottomItems">
                            <span className="coast">
                                Итого: 46,99 $
                            </span>
                            <DefaultBtn text=" СКИДКА 22%" background="red" arrow={false} />

                        </div>

                    </div>
                </div>
                <div className='optionWrapper'>
					<div className='optionTitle'>
						<h5>Что входит в Fondora Gold</h5>
					</div>
					<div className='itemWrapper'>
						<div className='option'>
							<h4>Безлимит лайков</h4>
						</div>
						<div className='includeOption'>
							<SVGIcon name='checkboxIcon' size={20} className='checkBoxIcon' />
						</div>
					</div>
					<div className='itemWrapper'>
						<div className='option'>
							<h4>Просмотр лайков</h4>
						</div>
						<div className='includeOption'>
							<SVGIcon name='checkboxIcon' size={20} className='checkBoxIcon' />
						</div>
					</div>
                    <div className='itemWrapper'>
						<div className='option'>
							<h4>“Перемотка” без играничений</h4>
						</div>
						<div className='includeOption'>
							<SVGIcon name='checkboxIcon' size={20} className='checkBoxIcon' />
						</div>
					</div>
                    <div className='itemWrapper'>
						<div className='option'>
							<h4>1 бесплатный буст в месяц</h4>
						</div>
						<div className='includeOption'>
							<SVGIcon name='checkboxIcon' size={20} className='checkBoxIcon' />
						</div>
					</div>
                    <div className='itemWrapper'>
						<div className='option'>
							<h4>5 бесплатных суперлайков в неделю</h4>
						</div>
						<div className='includeOption'>
							<SVGIcon name='checkboxIcon' size={20} className='checkBoxIcon' />
						</div>
					</div>
                    <div className='itemWrapper'>
						<div className='option'>
							<h4>Загранпасторт</h4>
							<div className='optionDescription'>
								<p>Знакомься и общайся с людьми по всему миру.</p>
							</div>
						</div>
						<div className='includeOption'>
							<SVGIcon name='checkboxIcon' size={20} className='checkBoxIcon' />
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
							<SVGIcon name='checkboxIcon' size={20} className='checkBoxIcon' />
						</div>
					</div>
                    <div className='itemWrapper'>
						<div className='option'>
							<h4>Управление профилем</h4>
							<div className='optionDescription'>
								<p>Они узнают о тебе только то, что ты разрешишь.</p>
							</div>
						</div>
						<div className='includeOption'>
							<SVGIcon name='checkboxIcon' size={20} className='checkBoxIcon' />
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
							<SVGIcon name='checkboxIcon' size={20} className='checkBoxIcon' />
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
							<SVGIcon name='checkboxIcon' size={20} className='checkBoxIcon' />
						</div>
					</div>
					<div className='itemWrapper'>
						<div className='option'>
							<h4>Никакой рекламы</h4>
						</div>
						<div className='includeOption'>
							<SVGIcon name='checkboxIcon' size={20} className='checkBoxIcon' />
						</div>
					</div>
					
				</div>
                <div className="mobileWrapper">
                    <p>
                        Нажимая «Продолжить», ты соглашаешься с нашими <span style={{color: 'var(--main-red)'}}>Условиями</span>.  Сумма будет списана, а подписка будет автоматически продлеваться на выбранный период времени и по той же цене до тех пор, пока ты не отменишь ее в настройках App Store.
                    </p>
                    <DefaultBtn text="Продолжить - 7,99 $" background="blue" arrow={true}/>
                </div>



            </div>
            
           </div>
        </>
    )
}






export default FondoraGold