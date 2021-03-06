import React from 'react';
import { User, Chat as Chat_Model } from '../../utils/model';
import { Comment, Icon, Avatar, Spin } from 'antd';
import {Post} from '../Post';
import './Chat.scss'
import { chatAPI } from '../../utils/api/chat';

interface IChatProps {

};

interface IChatState {
    chat?: Chat_Model
};

export class Chat extends React.Component<IChatProps, IChatState> {
    constructor(props: IChatProps) {
        super(props);
        this.state = {

        }
    }

    public componentWillMount = async () => {
        const chat = await chatAPI.getChatById(1);
        this.setState({ chat });
    }

    public render() {
        if (this.state.chat) {
            return (
                this.state.chat.posts.map((post, key) =>
                    <Post post={post} />
                )
            );
        }
        else {
            return (
                <p>Loading...</p>
            );
        }
    }
};