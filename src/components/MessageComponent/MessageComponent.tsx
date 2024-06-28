import React, { useEffect, useMemo, useRef, useState } from 'react';
import { IMessages } from '../../model/MessagesModel';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { mobileChatState } from '../../store/rootSlice';
import { setChatId } from '../../store/rootSlice';
import { mobileScreenEnable } from '../../store/selectors';
import { useLocation } from 'react-router-dom';
interface IProps {
	item: IMessages;
	typingState?: boolean;
	typingChatId?: number;
}

// type CombinedProps = {item: IMessages} & IProps

const MessageComponent = ({ item, typingState, typingChatId }: IProps) => {



	
	const [mobileScreen, setMobileScreen] = useState(false);
	const mobileDimension = useSelector(mobileScreenEnable);
	const chatId = useSelector((state: any) => state.mainState.chatId);
	const chatRef = useRef<HTMLLIElement>(null)
	const location = useLocation();
	const path = location.pathname



	const dispatch = useDispatch();

	const handleActiveChat = (id: string) => {
		const chats = document.querySelectorAll('.chat');
		chats.forEach((chat: any) => {
			chat.id === id ? chat.classList.add('activeChat') : chat.classList.remove('activeChat');
		});
	};

	const insertText = (messages: IMessages["messages"]) => {
		return messages.length ? item.messages[item.messages.length - 1].text : '';
		
	}

	const linkToChat = (chatId: any) => {
		if (mobileScreen) {
			dispatch(mobileChatState('mobileChat-open'));
		}

		dispatch(setChatId(chatId.toString()));
	};

	const checkMobileScreen = useMemo(() => {
		return mobileDimension;
	}, [mobileDimension]);

	useEffect(() => {
		
		if (chatRef.current) {
			const activeChat = chatRef.current
			if (activeChat.id === chatId && path !== '/messages') {
				activeChat.classList.add('activeChat')
			}
		}
		
		checkMobileScreen ? setMobileScreen(true) : setMobileScreen(false);
	}, [chatId, checkMobileScreen, item, path]);

	return (
		<>
			<Link to={`/messages/chat/${item.id}`} onClick={() => linkToChat(item.id)}>
				<li
					key={item.id}
					className='chat'
					id={item.id.toString()}
					ref={chatRef}
					onClick={(event: any) => {
						handleActiveChat(event.currentTarget.id);
					}}
				>
					<div className='userAvatar'>
						<img src={item.image} alt='avatar' />
						{item.userOnLine ? <div className='onLinePin'></div> : null}
					</div>
					<div className='userMessage'>
						<div className='userName'>
							<div className='name'>
								<span>{item.userName}</span>
							</div>
							{item.isLike ? (
								<div className='likeLabel'>
									<span>Лайкнул(а) тебя</span>
								</div>
							) : null}
						</div>
						<div className='message'>
							{item.userOnLine ? (
								<span>{typingState && typingChatId === item.id ? <>Пишет...</> : insertText(item.messages)}</span>
							) : (
								<span className='lastUserActivity'>Был(а) недавно, создай пару прямо сейчас!</span>
							)}
						</div>
					</div>
					{item.newMessages ? <div className='unReadPin'></div> : null}
				</li>
			</Link>
		</>
	);
};

export default MessageComponent;
