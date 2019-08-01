import React from 'react';
import { User, Chat as Chat_Model } from '../../utils/model';
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
        return (<Post username="Rob" text="Hi there how's it going?" avatar="https://ca.slack-edge.com/T1DAWF55Z-UAQC13709-85d7a1c00242-48" />);
    }
};