import React from 'react';
import { Comment, Icon, Avatar, Spin } from 'antd';
import { Post } from '../Post';
import './Chat.scss'
import { chatAPI } from '../../utils/api/chat';

interface IChatProps {

};

interface IChatState {

};

export class Chat extends React.Component<IChatProps, IChatState> {
    constructor(props: IChatProps) {
        super(props);
        this.state = {

        }
    }

    public componentWillMount = async () => {
    }

    public render() {
        return (
            <div className="chat">
            </div>
        );
    }
};