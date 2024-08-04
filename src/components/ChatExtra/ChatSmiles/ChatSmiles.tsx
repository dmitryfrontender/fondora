import React, { useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import SVGIcon from '../../../assets/icons/svgComponent';
import './ChatSmiles.scss';

interface ISmile {
	addSmile: (smile: string) => void;
}

const ChatSmiles = ({ addSmile }: ISmile) => {
	const [areaValue, setAreaValue] = useState('');

	const handleInput = (e: any) => {
		setAreaValue(e.target.value);
	};
	return (
		<>
			<div className='smiles'>
			<div className='input'>
				{/* <input type="text" placeholder="Поиск GIF" /> */}
				<TextareaAutosize placeholder='Поиск GIF' value={areaValue} minRows={2} maxRows={4} onChange={handleInput} />
				<SVGIcon name='searchBtn' size={20} />
			</div>
				<div className='smilesWrapper'>
					<div className='smile' onClick={() => addSmile('😍')}>
						<span>😍</span>
					</div>
					<div className='smile' onClick={() => addSmile('😭')}>
						<span>😭</span>
					</div>
					<div className='smile' onClick={() => addSmile('😄')}>
						<span>😄</span>
					</div>
					<div className='smile' onClick={() => addSmile('😂')}>
						<span>😂</span>
					</div>
					<div className='smile' onClick={() => addSmile('👍🏻')}>
						<span>👍🏻</span>
					</div>
					<div className='smile' onClick={() => addSmile('😎')}>
						<span>😎</span>
					</div>
					<div className='smile' onClick={() => addSmile('😷')}>
						<span>😷</span>
					</div>
					<div className='smile' onClick={() => addSmile('🤑')}>
						<span>🤑</span>
					</div>
					<div className='smile' onClick={() => addSmile('🤟')}>
						<span>🤟</span>
					</div>
					<div className='smile' onClick={() => addSmile('🫶')}>
						<span>🫶</span>
					</div>
					<div className='smile' onClick={() => addSmile('💰')}>
						<span>💰</span>
					</div>
					<div className='smile' onClick={() => addSmile('❤')}>
						<span>❤</span>
					</div>
					<div className='smile' onClick={() => addSmile('💪')}>
						<span>💪</span>
					</div>
					<div className='smile' onClick={() => addSmile('🖖')}>
						<span>🖖</span>
					</div>
					<div className='smile' onClick={() => addSmile('👀')}>
						<span>👀</span>
					</div>
					<div className='smile' onClick={() => addSmile('🦷')}>
						<span>🦷</span>
					</div>
					<div className='smile' onClick={() => addSmile('👄')}>
						<span>👄</span>
					</div>
					<div className='smile' onClick={() => addSmile('👧🏿')}>
						<span>👧🏿</span>
					</div>
					<div className='smile' onClick={() => addSmile('🧑‍🦳')}>
						<span>👩‍🦳</span>
					</div>
					<div className='smile' onClick={() => addSmile('🧑‍🦲')}>
						<span>🧑‍🦳</span>
					</div>
					<div className='smile' onClick={() => addSmile('🧑‍🦲')}>
						<span>👩‍🦲</span>
					</div>
					<div className='smile' onClick={() => addSmile('👻')}>
						<span>👻</span>
					</div>
					<div className='smile' onClick={() => addSmile('💀')}>
						<span>💀</span>
					</div>
					<div className='smile' onClick={() => addSmile('☠️')}>
						<span>☠️</span>
					</div>
					<div className='smile' onClick={() => addSmile('👽')}>
						<span>👽</span>
					</div>
					<div className='smile' onClick={() => addSmile('👾')}>
						<span>👾</span>
					</div>
					<div className='smile' onClick={() => addSmile('🤖')}>
						<span>🤖</span>
					</div>
					<div className='smile' onClick={() => addSmile('🎃')}>
						<span>🎃</span>
					</div>
					<div className='smile' onClick={() => addSmile('😺')}>
						<span>😺</span>
					</div>
					<div className='smile' onClick={() => addSmile('😹')}>
						<span>😹</span>
					</div>
					<div className='smile' onClick={() => addSmile('😻')}>
						<span>😻</span>
					</div>
					<div className='smile' onClick={() => addSmile('👐')}>
						<span>👐</span>
					</div>
					<div className='smile' onClick={() => addSmile('🙌')}>
						<span>🙌</span>
					</div>
					<div className='smile' onClick={() => addSmile('👏')}>
						<span>👏</span>
					</div>
					<div className='smile' onClick={() => addSmile('👍')}>
						<span>👍</span>
					</div>
					<div className='smile' onClick={() => addSmile('👎🏻')}>
						<span>👎🏻</span>
					</div>
					<div className='smile' onClick={() => addSmile('👊')}>
						<span>👊</span>
					</div>
					<div className='smile' onClick={() => addSmile('✊')}>
						<span>✊</span>
					</div>
					<div className='smile' onClick={() => addSmile('🤛')}>
						<span>🤛</span>
					</div>
					<div className='smile' onClick={() => addSmile('🤜')}>
						<span>🤜</span>
					</div>
					<div className='smile' onClick={() => addSmile('🤞')}>
						<span>🤞</span>
					</div>
					<div className='smile' onClick={() => addSmile('✌️')}>
						<span>✌️</span>
					</div>
					<div className='smile' onClick={() => addSmile('🤟')}>
						<span>🫰</span>
					</div>
					<div className='smile' onClick={() => addSmile('🤟')}>
						<span>🤟</span>
					</div>
					<div className='smile' onClick={() => addSmile('👌')}>
						<span>👌</span>
					</div>
					<div className='smile' onClick={() => addSmile('🤌')}>
						<span>🤌</span>
					</div>
					<div className='smile' onClick={() => addSmile('🖖')}>
						<span>🖖</span>
					</div>
					<div className='smile' onClick={() => addSmile('🖕')}>
						<span>🖕</span>
					</div>
					<div className='smile' onClick={() => addSmile('🧶')}>
						<span>🧶</span>
					</div>
					<div className='smile' onClick={() => addSmile('🧵')}>
						<span>🧵</span>
					</div>
					<div className='smile' onClick={() => addSmile('👩‍👩‍👧')}>
						<span>👩‍👩‍👧</span>
					</div>
					<div className='smile' onClick={() => addSmile('👠')}>
						<span>👠</span>
					</div>
					<div className='smile' onClick={() => addSmile('👢')}>
						<span>👢</span>
					</div>
					<div className='smile' onClick={() => addSmile('👑')}>
						<span>👑</span>
					</div>
					<div className='smile' onClick={() => addSmile('🎩')}>
						<span>🎩</span>
					</div>
					<div className='smile' onClick={() => addSmile('🧢')}>
						<span>🧢</span>
					</div>
					<div className='smile' onClick={() => addSmile('🌻')}>
						<span>🌻</span>
					</div>
					<div className='smile' onClick={() => addSmile('🎲')}>
						<span>🎲</span>
					</div>
					<div className='smile' onClick={() => addSmile('🚙')}>
						<span>🚙</span>
					</div>
					<div className='smile' onClick={() => addSmile('🛺')}>
						<span>🛺</span>
					</div>
					<div className='smile' onClick={() => addSmile('🚕')}>
						<span>🛵</span>
					</div>
					<div className='smile' onClick={() => addSmile('🚖')}>
						<span>🚖</span>
					</div>
					<div className='smile' onClick={() => addSmile('🚛')}>
						<span>🚅</span>
					</div>
					<div className='smile' onClick={() => addSmile('🚥')}>
						<span>🚥</span>
					</div>
					<div className='smile' onClick={() => addSmile('⛱')}>
						<span>⛱</span>
					</div>
					<div className='smile' onClick={() => addSmile('🎢')}>
						<span>🎢</span>
					</div>
					<div className='smile' onClick={() => addSmile('⛺️')}>
						<span>⛺️</span>
					</div>
					<div className='smile' onClick={() => addSmile('🏠')}>
						<span>🏠</span>
					</div>
					<div className='smile' onClick={() => addSmile('⛩')}>
						<span>⛩</span>
					</div>
					<div className='smile' onClick={() => addSmile('💿')}>
						<span>💿</span>
					</div>
					<div className='smile' onClick={() => addSmile('☎️')}>
						<span>☎️</span>
					</div>
					<div className='smile' onClick={() => addSmile('📟')}>
						<span>📟</span>
					</div>
					<div className='smile' onClick={() => addSmile('🧲')}>
						<span>🧲</span>
					</div>
					<div className='smile' onClick={() => addSmile('🧨')}>
						<span>🧨</span>
					</div>
					<div className='smile' onClick={() => addSmile('💣')}>
						<span>💣</span>
					</div>
					<div className='smile' onClick={() => addSmile('🪓')}>
						<span>🪓</span>
					</div>
					<div className='smile' onClick={() => addSmile('🦠')}>
						<span>🦠</span>
					</div>
					<div className='smile' onClick={() => addSmile('🧽')}>
						<span>🧽</span>
					</div>
					<div className='smile' onClick={() => addSmile('🛎')}>
						<span>🛎</span>
					</div>
					<div className='smile' onClick={() => addSmile('🔑')}>
						<span>🔑</span>
					</div>
					<div className='smile' onClick={() => addSmile('🚪')}>
						<span>🚪</span>
					</div>
					<div className='smile' onClick={() => addSmile('🧸')}>
						<span>🧸</span>
					</div>
					<div className='smile' onClick={() => addSmile('🎁')}>
						<span>🎁</span>
					</div>
					<div className='smile' onClick={() => addSmile('🎀')}>
						<span>🎀</span>
					</div>
					<div className='smile' onClick={() => addSmile('🎊')}>
						<span>🎊</span>
					</div>
					<div className='smile' onClick={() => addSmile('🎉')}>
						<span>🎉</span>
					</div>
					<div className='smile' onClick={() => addSmile('📪')}>
						<span>📪</span>
					</div>
					<div className='smile' onClick={() => addSmile('📄')}>
						<span>📄</span>
					</div>
					<div className='smile' onClick={() => addSmile('📯')}>
						<span>📯</span>
					</div>
					<div className='smile' onClick={() => addSmile('🗓')}>
						<span>🗓</span>
					</div>
					<div className='smile' onClick={() => addSmile('🗑')}>
						<span>🗑</span>
					</div>
					<div className='smile' onClick={() => addSmile('🏧')}>
						<span>🏧</span>
					</div>
					<div className='smile' onClick={() => addSmile('🕐')}>
						<span>🕐</span>
					</div>
					<div className='smile' onClick={() => addSmile('🕹')}>
						<span>🕹</span>
					</div>
					<div className='smile' onClick={() => addSmile('🍁')}>
						<span>🍁</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default ChatSmiles;
