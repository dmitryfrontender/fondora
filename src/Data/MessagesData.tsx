import { IMessages } from '../model/MessagesModel';
import user1 from '../assets/images/messages/user1.png';
import user2 from '../assets/images/messages/user2.png';
import user3 from '../assets/images/messages/user3.png';
import user4 from '../assets/images/messages/user4.png';
import user5 from '../assets/images/messages/user5.png';
//photos

import photo1 from '../assets/avatar/avatar1.png';
import photo2 from '../assets/avatar/avatar2.png';
import photo3 from '../assets/avatar/avatar3.png';
import photo4 from '../assets/avatar/avatar4.png';

export const messagesData: IMessages[] = [
	{
		id: 1,
		image: user1,
		photos: [photo1, photo2, photo3, photo4],
		userName: 'Валюха',
		userAge: 29,
		verification: true,
		location: 'Санкт-Петербург',
		tall: 175,
		dateMet: '10.10.2020',
		userOnLine: true,
		isLike: false,
		newMessages: false,
		messages: [
			// {
			// 	id: 1,
			// 	text: 'Привет!',
			// 	time: '10:00',
			// 	daySend: ['today', 'yesterday', 'last week', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
			// 	unRead: false,
			// 	owner: true,
			// 	reaction: ''
			// }
		
		]
	},
	{
		id: 2,
		image: user2,
		userName: 'Alex',
		userOnLine: false,
		isLike: true,
		newMessages: false,

		messages: [
			{
				id: 1,
				text: 'Привет!',
				time: '10:00',
				daySend: ['today', 'yesterday', 'last week', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
				unRead: false,
				owner: true,
				reaction: ''
			}
		]
	},
	{
		id: 3,
		image: user3,
		userName: 'Строитель',
		userOnLine: true,
		isLike: false,
		newMessages: false,

		messages: [
			{
				id: 1,
				text: 'Привет!',
				time: '10:00',
				daySend: ['today', 'yesterday', 'last week', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
				unRead: false,
				owner: false,
				reaction: ''
			}
		]
	},
	{
		id: 4,
		image: user4,
		userName: 'Волшебный',
		userOnLine: false,
		isLike: true,
		newMessages: false,
		messages: [
			{
				id: 1,
				text: 'Привет!',
				time: '10:00',
				daySend: ['today', 'yesterday', 'last week', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
				unRead: false,
				owner: true,
				reaction: ''
			}
		]
	},
	{
		id: 5,
		image: user5,
		userName: 'Dj Aligator',
		userOnLine: true,
		isLike: false,
		newMessages: false,

		messages: [
			{
				id: 1,
				text: 'Привет!',
				time: '10:00',
				daySend: ['today', 'yesterday', 'last week', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
				unRead: false,
				owner: true,
				reaction: ''
			}
		]
	},
	{
		id: 6,
		image: user1,
		userName: 'Валюха',
		userOnLine: true,
		isLike: false,
		newMessages: false,

		messages: [
			{
				id: 1,
				text: 'Привет!',
				time: '10:00',
				daySend: ['today', 'yesterday', 'last week', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
				unRead: false,
				owner: true,
				reaction: ''
			}
		]
	},
	{
		id: 7,
		image: user2,
		userName: 'Alex',
		userOnLine: false,
		isLike: true,
		newMessages: true,

		messages: [
			{
				id: 1,
				text: 'Привет!',
				time: '10:00',
				daySend: ['today', 'yesterday', 'last week', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
				unRead: false,
				owner: true,
				reaction: ''
			}
		]
	},
	{
		id: 8,
		image: user3,
		userName: 'Строитель',
		userOnLine: true,
		isLike: false,
		newMessages: false,

		messages: [
			{
				id: 1,
				text: 'Привет!',
				time: '10:00',
				daySend: ['today', 'yesterday', 'last week', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
				unRead: false,
				owner: true,
				reaction: ''
			}
		]
	},
	{
		id: 9,
		image: user4,
		userName: 'Волшебный',
		userOnLine: false,
		isLike: true,
		newMessages: true,
		messages: [
			{
				id: 1,
				text: 'Привет!',
				time: '10:00',
				daySend: ['today', 'yesterday', 'last week', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
				unRead: true,
				owner: false,
				reaction: ''
			}
		]
	},
	{
		id: 10,
		image: user5,
		userName: 'Dj Aligator',
		userOnLine: true,
		isLike: false,
		newMessages: false,
		messages: [
			{
				id: 1,
				text: 'Привет!',
				time: '10:00',
				daySend: ['today', 'yesterday', 'last week', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
				unRead: false,
				owner: true,
				reaction: ''
			}
		]
	},
	{
		id: 11,
		image: user1,
		userName: 'Валюха',
		userOnLine: true,
		isLike: false,
		newMessages: false,
		messages: [
			{
				id: 1,
				text: 'Привет!',
				time: '10:00',
				daySend: ['today', 'yesterday', 'last week', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
				unRead: true,
				owner: true,
				reaction: ''
			}
		]
	},
	{
		id: 12,
		image: user2,
		userName: 'Alex',
		userOnLine: false,
		isLike: true,
		newMessages: false,
		messages: [
			{
				id: 1,
				text: 'Привет!',
				time: '10:00',
				daySend: ['today', 'yesterday', 'last week', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
				unRead: false,
				owner: false,
				reaction: ''
			}
		]
	},
	{
		id: 13,
		image: user3,
		userName: 'Строитель',
		userOnLine: true,
		isLike: false,
		newMessages: true,
		messages: [
			{
				id: 1,
				text: 'Привет!',
				time: '10:00',
				daySend: ['today', 'yesterday', 'last week', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
				unRead: false,
				owner: true,
				reaction: ''
			}
		]
	},
	{
		id: 14,
		image: user4,
		userName: 'Волшебный',
		userOnLine: false,
		isLike: true,
		newMessages: false,
		messages: [
			{
				id: 1,
				text: 'Привет!',
				time: '10:00',
				daySend: ['today', 'yesterday', 'last week', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
				unRead: false,
				owner: true,
				reaction: ''
			}
		]
	},
	{
		id: 15,
		image: user5,
		userName: 'Dj Aligator',
		userOnLine: true,
		isLike: false,
		newMessages: false,
		messages: [
			{
				id: 1,
				text: 'Привет!',
				time: '10:00',
				daySend: ['today', 'yesterday', 'last week', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
				unRead: false,
				owner: false,
				reaction: ''
			}
		]
	}
];
