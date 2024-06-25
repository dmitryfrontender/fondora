import React, { useEffect, useMemo, useState } from 'react';
import { pairData } from '../../Data/PairData';
import { IPairs } from '../../model/PairsModel';
import SVGIcon from '../../assets/icons/svgComponent';
import './Pairs.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { mobileNewChatState, setNewChatId } from '../../store/rootSlice';
import { mobileScreenEnable } from '../../store/selectors';

const Pairs = () => {
	// const [pairArray, setPairArray] = useState<IPairs[]>([...pairData]);

	const dispatch = useDispatch();
	const [mobileScreen, setMobileScreen] = useState(false);
	const mobileDimension = useSelector(mobileScreenEnable);

	// const sendMessage = (person: IPairs) => {

	//     const newPairData = pairArray.filter(element => element.id !== person.id);
	//     setPairArray(newPairData);

	// }
	const checkMobileScreen = useMemo(() => {
		return mobileDimension;
	}, [mobileDimension]);

	const linkToNewChat = (newChatId: number) => {
		if (mobileScreen) {
			dispatch(mobileNewChatState('mobileNewChat-open'));
		}

		dispatch(setNewChatId(newChatId.toString()));
	};

	useEffect(() => {
		checkMobileScreen ? setMobileScreen(true) : setMobileScreen(false);
	}, [checkMobileScreen]);

	return (
		<>
			<div className='Pairs'>
				<div className='pairsWrapper'>
					<div className='pairElement likes'>
						<div className='blurWrapper'>
							<img src={pairData[0].image} alt='pair' />
							<div className='countSlides'>
								<span>{pairData.length}</span>
							</div>
						</div>
						<div className='heartIcon'>
							<SVGIcon name='heartIcon' stroke='white' size={16} />
						</div>
						<div className='pairName'>
							<span>Лайков</span>
						</div>
					</div>
					{pairData.map((item: IPairs) => {
						return (
							<Link className='pairElement' to={`/pairs/newChat/${item.id}`} key={item.id} onClick={() => linkToNewChat(item.id)}>
								<div className="userPhoto">
									<img src={item.image} alt='pair' />
								</div>
								<div className='pairName'>
									<span>{item.userName}</span>
									{item.verification ? <SVGIcon name='verificationProfile' fill='green' size={15} /> : null}
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Pairs;
