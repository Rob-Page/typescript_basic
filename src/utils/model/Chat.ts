import { Post } from "./Post";

export class Chat {
    constructor(name: string = "New Chat", created_date: Date = new Date(), posts: Post[]) {
        this.name = name;
        this.created_date = created_date;
        this.posts = posts;
    }
    public name: string;
    public created_date: Date;
    public posts: Post[];
};