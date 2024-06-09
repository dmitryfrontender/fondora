import { ISliderProfileImage } from './SliderProfileImageModel';

export interface ISliderProfile {
	id: number;
	images: ISliderProfileImage[];
	userName: string;
	userAge: number;
	timeStamp: number;
	userLocation: string;
	userDistance: string;
	userDescription: string;
}
