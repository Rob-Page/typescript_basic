import React from 'react';
import { Comment, Icon, Avatar, Spin } from 'antd';
import './Post.scss'

interface IPostProps {

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
        return (
            <div className='post'>

            </div>
        );
    }
};