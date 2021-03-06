import { User } from "./User";

export class Post {
    constructor(user: User, text: string, date: Date, likes: number, dislikes: number) {
        this.user = user;
        this.text = text;
        this.date = date;
        this.likes = likes;
        this.dislikes = dislikes;
    }
    public like = () =>{
        this.likes += 1;
    }
    public dislike = () =>{
        this.dislikes += 1;
    }
    public user: User;
    public text: string;
    public date: Date;
    public likes: number;
    public dislikes: number;
};