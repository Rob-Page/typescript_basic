import React from 'react';
import { User, Post as Post_Model } from './../../utils/model';
import { Action } from './components'
import { Comment, Icon, Avatar, Spin } from 'antd';
import './Post.scss'
import { actionType } from './components/Action/actionType';

interface IPostProps {
    post: Post_Model
};

interface IPostState {
    recentAction?: actionType;
};

export class Post extends React.Component<IPostProps, IPostState> {
    constructor(props: IPostProps) {
        super(props);
        this.state = {

        }
    }

    public componentWillMount = () => {
    }

    public setRecentAction = (recentAction: actionType) => {
        this.setState({ recentAction });
    }

    public render() {
        if (this.props.post) {
            return (
                <div className='post'>
                    <Comment
                        content={(<p>{this.props.post.text}</p>)}
                        author={this.props.post.user.name}
                        actions={[
                            <Action type={"like"} post={this.props.post} setRecentAction={this.setRecentAction} recentAction={this.state.recentAction} />,
                            <Action type={"dislike"} post={this.props.post} setRecentAction={this.setRecentAction} recentAction={this.state.recentAction} />
                        ]}
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