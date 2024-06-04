export interface IMessages {
    id: number
    image: string
    photos?: string[]
    userName: string
    userAge?: number
    verification?: boolean
    location?: string
    tall?: number
    gender?: string
    dateMet?: string
    userOnLine: boolean;
    isLike: boolean;
    newMessages?: boolean
    messages: [{
        id: number,
        text: string,
        time: string,
        daySend: string[],
        unRead: boolean,
        owner: boolean,
        imageUrl?: string,
        storagePhotoArr?: string[],
        reaction: string

    }]
}