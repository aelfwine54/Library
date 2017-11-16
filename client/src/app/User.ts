import {BucketItem} from './BucketItem';

export class User {
    id: number;
    firstName: string;
    lastName: string;
    email: number;
    bucket: BucketItem[];
    currentKey: string;
    connected: boolean;
    cryptedPassword: string;
}