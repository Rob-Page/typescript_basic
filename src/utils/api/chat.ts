import { Post, User, Chat } from "../model";

export const chatAPI = {
    getChatById: async (id: number): Promise<Chat> => {
        const user1 = new User(1, "Rob", "https://ca.slack-edge.com/T1DAWF55Z-UAQC13709-85d7a1c00242-48");
        const user2 = new User(1, "KOF", "https://ca.slack-edge.com/T1DAWF55Z-U1EFEK739-1f562871dc9b-48");
        const user3 = new User(1, "Caleb", "https://ca.slack-edge.com/T1DAWF55Z-UF9F9CNJD-8c66bf9eff21-48");

        const chat = new Chat(
            "Moving?",
            new Date("5-01-2019"),
            [new Post(user1, "Hi KOF, can I move desks?", new Date("5-12-2019"), 0, 0)
                , new Post(user2, "We are getting new ones next week!", new Date("5-12-2019"), 1, 0)
                , new Post(user1, "So I can move?", new Date("5-12-2019"), 0, 1)
                , new Post(user2, "You are going to need to talk to Caleb on that one, he is now over all phacility managment issues", new Date("5-12-2019"), 1, 1)
                , new Post(user1, "Caleb, what do you think?", new Date("5-12-2019"), 0, 0)
                , new Post(user3, "Not a chance.", new Date("5-12-2019"), 0, 100)
                , new Post(user1, "ok...", new Date("5-12-2019"), 1, 0)]
        );
        const promise = new Promise<Chat>(function (resolve, reject) {
            setTimeout(function () {
                resolve(chat);
            }, 500);
        });

        return await promise;
    }
}