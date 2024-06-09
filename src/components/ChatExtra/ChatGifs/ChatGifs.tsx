import React, { useState } from 'react';
import { gifs } from '../../../Data/Gifs';
import SVGIcon from '../../../assets/icons/svgComponent';
import TextareaAutosize from 'react-textarea-autosize';
import './ChatGifs.scss';

interface IGifs {
	addGif: (gif: string) => void;
}

const ChatGifs = ({ addGif }: IGifs) => {
	const [areaValue, setAreaValue] = useState('');

	const handleInput = (e: any) => {
		setAreaValue(e.target.value);
	};

	return (
		<div className='ChatGifs'>
			<div className='input'>
				{/* <input type="text" placeholder="Поиск GIF" /> */}
				<TextareaAutosize placeholder='Поиск GIF' value={areaValue} minRows={2} maxRows={4} onChange={handleInput} />
				<SVGIcon name='searchBtn' size={20} />
			</div>
			<div className='gifWrapper'>
				{gifs.map((elem: any) => {
					return (
						<div className='gif' key={elem.id} onClick={() => addGif(elem.url)}>
							<img src={elem.url} alt='gif' />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ChatGifs;

// gifs.map((elem: any) => {

//     <div className="gif" >
//         <img src={elem} alt="gif" />
//     </div>

// })
