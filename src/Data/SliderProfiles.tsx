// import React from "react";
import profilePic1 from '../assets/images/profile/profile-1.jpg';
import profilePic2 from '../assets/images/profile/profile-2.jpg';
import profilePic3 from '../assets/images/profile/profile-3.jpg';
import profilePic4 from '../assets/images/profile/profile-4.jpg';
import profilePic5 from '../assets/images/profile/profile-5.jpg';
import { ISliderProfile } from '../model/SliderProfileModel';

export const sliderProfiles: ISliderProfile[] = [
	{
		id: 1,
		images: [
			{
				id: 1,
				src: profilePic1,
				alt: 'profilePic'
			},
			{
				id: 2,
				src: profilePic2,
				alt: 'profilePic'
			},
			{
				id: 3,
				src: profilePic3,
				alt: 'profilePic'
			},
			{
				id: 4,
				src: profilePic4,
				alt: 'profilePic'
			},
			{
				id: 5,
				src: profilePic5,
				alt: 'profilePic'
			}
		],
		userName: 'Jessica White',
		userAge: 28,
		userLocation: 'New York, USA',
		userDistance: '9km from you',
		userDescription: 'Не люблю длинные переписки( лучше увидимся на нашем первом свидании. Пригласить можешь в заведение. Гулять п...',
		timeStamp: 2
	},
	{
		id: 2,
		images: [
			{
				id: 1,
				src: profilePic1,
				alt: 'profilePic'
			},
			{
				id: 2,
				src: profilePic2,
				alt: 'profilePic'
			}
		],
		userName: 'Jessica White',
		userAge: 28,
		userLocation: 'New York, USA',
		userDistance: '9km from you',
		userDescription: 'Не люблю длинные переписки( лучше увидимся на нашем первом свидании. Пригласить можешь в заведение. Гулять п...',
		timeStamp: 2
	},
	{
		id: 3,
		images: [
			{
				id: 1,
				src: profilePic1,
				alt: 'profilePic'
			},
			{
				id: 2,
				src: profilePic2,
				alt: 'profilePic'
			},
			{
				id: 3,
				src: profilePic3,
				alt: 'profilePic'
			},
			{
				id: 4,
				src: profilePic4,
				alt: 'profilePic'
			}
		],
		userName: 'Jessica White',
		userAge: 28,
		userLocation: 'New York, USA',
		userDistance: '9km from you',
		userDescription: 'Не люблю длинные переписки( лучше увидимся на нашем первом свидании. Пригласить можешь в заведение. Гулять п...',
		timeStamp: 2
	}
];
