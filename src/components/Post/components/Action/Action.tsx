import React from 'react';
import { Tooltip, Icon } from 'antd';
import { actionType } from './actionType';
import { Post } from './../../../../utils/model';
import "./Action.scss";

interface IActionProps {
    post: Post;
    recentAction?: actionType;
    type: actionType;
    setRecentAction(recentAction: actionType): void;

};

interface IActionState {
};

export class Action extends React.Component<IActionProps, IActionState> {
    constructor(props: IActionProps) {
        super(props);
    }

    public like = () => {
        this.props.post.like();
        this.props.setRecentAction("like");
        this.forceUpdate();
    }

    public dislike = () => {
        this.props.post.dislike();
        this.props.setRecentAction("dislike");
        this.forceUpdate();
    }

    public render() {
        switch (this.props.type) {
            case "like":
                return (
                    <span>
                        <Tooltip title="Like">
                            <Icon
                                type="like"
                                theme={this.props.recentAction === 'like' ? 'filled' : 'outlined'}
                                onClick={this.like}
                            />
                        </Tooltip>
                        {this.props.post.likes}
                    </span>
                );
                case "dislike":
                    return (
                        <span>
                        <Tooltip title="Dislike">
                            <Icon
                                type="dislike"
                                theme={this.props.recentAction === 'dislike' ? 'filled' : 'outlined'}
                                onClick={this.dislike}
                                />
                                {this.props.post.dislikes}
                        </Tooltip>
                    </span>
                );
            default:
                break;
        }
    }
};