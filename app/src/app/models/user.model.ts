import { Image } from './image.model';

export type User = {
    username: string;
    shortBio: string;
    longBio: string;
    image: Image;
    links: {
        gitHub: string;
        linkedIn: string;
    };
};