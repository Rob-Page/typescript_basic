import React from 'react';
import { User, Post as Post_Model } from '../../utils/model';
import { Comment, Icon, Avatar, Spin } from 'antd';
import './Post.scss'

interface IPostProps {
    post: Post_Model
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
        if (this.props.post) {
            return (
                <div className='post'>
                    <Comment
                        content={(<p>{this.props.post.text}</p>)}
                        author={this.props.post.user.name}
                        avatar={
                            <Avatar
                                src={this.props.post.user.avatar}
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