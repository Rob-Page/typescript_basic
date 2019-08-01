export class User {
    constructor(id: number, name: string, avatar: string) {
        this.id = id;
        this.name = name;
        this.avatar = avatar;
    }
    public id: number;
    public name: string;
    public avatar: string;
};