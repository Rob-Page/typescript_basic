import React from 'react';
import { User, Post as Post_Model } from '../../utils/model';
import { Comment, Icon, Avatar, Spin } from 'antd';
import './Post.scss'

interface IPostProps {
    text:string;
    username:string;
    avatar:string;
};

interface IPostState {
};

export class Post extends React.Component<IPostProps, IPostState> {
    constructor(props: IPostProps) {
        super(props);
        this.state = {

        }
    }

    public componentWillMount = () => {
    }

    public render() {
        if (this.props.text) {
            return (
                <div className='post'>
                    <Comment
                        content={(<p>{this.props.text}</p>)}
                        // actions={}
                        author={this.props.username}
                        avatar={
                            <Avatar
                                src={this.props.avatar}
                            />
                        }
                    />
                </div>
            );
        }
        else {
            return (
                <p>Loading...</p>
            );
        }
    }
};