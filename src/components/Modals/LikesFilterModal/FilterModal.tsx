import React from "react";
import './FilterModal.scss'
import { useDispatch } from "react-redux";
import { likesModalState } from "../../../store/LikesStateSlice";
import SVGIcon from "../../../assets/icons/svgComponent";
import DefaultBtn from "../../DefaultBtn/DefaultBtn";
import ToggleBtn from "../../ToggleBtn/ToggleBtn";
// import likesModalState from "../../../store/rootSlice"





const FilterModal = () => {
    
    const dispatch = useDispatch();
    // const [checkedBtn, setCheckedBtn] = useState();



    return (
        <>
            <div className="FilterModal">
                <div className="modalWrapper">
                    <div className="topItem">
                        <div className="title">
                            <h3>
                                Фильтр лайков
                            </h3>
                        </div>
                        <div className="closeBtn"  onClick={() => {dispatch(likesModalState('close-likesModal'))}}>
                            <SVGIcon name="cancelBtn"  size={25}/>
                        </div>
                    </div>
                    <div className="filterOption">
                        <div className="description">
                            <span>
                                Максимальное расстояние
                            </span>

                        </div>
                        <div className="value">
                            <span>
                                80 км
                            </span>
                        </div>
                    </div>
                    <div className="filterOption">
                        <div className="description">
                            <span>
                                Возрастной диапазон
                            </span>

                        </div>
                        <div className="value">
                            <span>
                                18-42
                            </span>
                        </div>
                    </div>
                    <div className="maxPhotos">
                        <div className="optionTitle">
                            <h3>
                                Минимальное количество фото
                            </h3>
                        </div>
                        <form>
                            <fieldset>
                                
                                <label>
                                    <input type="radio" defaultChecked name="radio-example"/>
                                    <span className="radioItem">
                                        1
                                    </span>
                                </label>
                                <label>
                                    <input type="radio" name="radio-example"/>
                                    <span className="radioItem">
                                        2
                                    </span>
                                </label>
                                <label>
                                    <input type="radio" name="radio-example"/>
                                    <span className="radioItem">
                                        3
                                    </span>
                                </label>
                                <label>
                                    <input type="radio" name="radio-example"/>
                                    <span className="radioItem">
                                        4
                                    </span>
                                </label>
                                <label>
                                    <input type="radio" name="radio-example"/>
                                    <span className="radioItem">
                                        5
                                    </span>
                                </label>
                                <label>
                                    <input type="radio" name="radio-example"/>
                                    <span className="radioItem">

                                        6
                                    </span>
                                </label>
                                <label>
                                    <input type="radio" name="radio-example"/>
                                    <span className="radioItem">
                                        7
                                    </span>
                                </label>
                                <label>
                                    <input type="radio" name="radio-example"/>
                                    <span className="radioItem">
                                        8
                                    </span>
                                </label>
                                <label>
                                    <input type="radio" name="radio-example"/>
                                    <span className="radioItem">
                                        9
                                    </span>
                                </label>
                            </fieldset>
                        </form>
                    </div>
                    <div className="interestsBlock">
                        <div className="title">
                            <h3>
                                Интересы
                            </h3>
                        </div>
                        <div className="itemWrapper">
                            <div className="item">
                                <span>
                                    Дети 90-х
                                </span>
                            </div>
                            <div className="item">
                                <span>
                                    Playstation 5
                                </span>
                            </div>
                            <div className="item">
                                <span>
                                    Гусеницы
                                </span>
                            </div>
                            <div className="item">
                                <span>
                                    TRX-4
                                </span>
                            </div>
                            <div className="item">
                                <span>
                                    Вибрация
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="bottomOptionsWrapper">
                        <div className="bottomOption">
                            <div className="description">
                                <span>
                                    Фото подтверждено
                                </span>
                            </div>
                            <ToggleBtn />
                        </div>
                        <div className="bottomOption">
                            <div className="description">
                                <span>
                                    Фото подтверждено
                                </span>
                            </div>
                            <ToggleBtn />
                        </div>
                    </div>
                    <div className="buttonsWrapper">
                        <DefaultBtn background="transparent" arrow={false} text="Очистить"/>
                        <DefaultBtn background="red" arrow={false} text="Применить"/>
                    </div>
                    
                </div>
            </div>
        </>
    )
}



export default FilterModal