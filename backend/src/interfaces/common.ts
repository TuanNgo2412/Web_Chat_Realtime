export enum ChatType {
    ServiceMessage = ' service-message',
    Text = 'text',
    Image = 'image',
    Video = 'video',
    Voice = 'voice',
}

export interface ModelName {
    Chat?: object;
    Event?: object;
    GroupChat?: object;
    Message?: object;
    User?: object;
}

export type Token = object | string;
