import React from 'react';
import 'prismjs';
import { PrismCode } from 'react-prism';
import Comment from './Comment';
import '../../stylesheets/components/comment.css';
import {
    ContentComponent,
    ComponentContentText,
    ComponentUsed }
    from '../common/ComponentContent';
import {
    ComponentButtonToggle,
    ComponentToggleContent }
    from '../common/ComponentButtonToggle';

function CommentComponent() {
    return (
        <div className="isComponent">
            <div className="onComponent">
                <Comment
                    type="Author"
                    author="Sandip Pal"
                    avatar={<img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="Author" />}
                    date="24 December, 2017"
                    target="https://www.google.co.in/"
                    content={
                        <p>Use the Avatar component to represent users with their profile picture.
                Optionally, a presence to indicate online status can also be displayed.
                        </p>
                    }
                />
                <Comment
                    type="Author"
                    author="Sandip Pal"
                    avatar={<img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="Author" />}
                    date="24 December, 2017"
                    target="https://www.google.co.in/"
                    content={
                        <p>Use the Avatar component to represent users with their profile picture.
                Optionally, a presence to indicate online status can also be displayed.
                        </p>
                    }
                />
            </div>
            <ContentComponent>
                <ComponentContentText>
                    It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The point of
                    using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed to using Content here, content here.
                </ComponentContentText>
                <ComponentUsed title="Uses Component">
                    <PrismCode component="pre" className="language-javascript">
                        {`<Comment
    type="Author"
    author="Sandip Pal"
    avatar={<img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="Author" />}
    date="24 December, 2017"
    target="https://www.google.co.in/"
    content={
        <p>Use the Avatar component to represent users with their profile picture.
    Optionally, a presence to indicate online status can also be displayed.
        </p>
    }
/>
<Comment
    type="Author"
    author="Sandip Pal"
    avatar={<img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="Author" />}
    date="24 December, 2017"
    target="https://www.google.co.in/"
    content={
        <p>Use the Avatar component to represent users with their profile picture.
    Optionally, a presence to indicate online status can also be displayed.
        </p>
    }
/>`}
                    </PrismCode>
                </ComponentUsed>
                <ComponentButtonToggle>
                    <ComponentToggleContent title="jsX Code">
                        <PrismCode component="pre" className="language-javascript">
                            {`import React from 'react';
import PropTypes from 'prop-types';

function Comment(props) {
    const isAvatarClass = props.avatar ? 'comment--avatar' : '';
    const className = 'comment commit--block ' + props.className +' '+ isAvatarClass';
    const isAvatar = props.avatar ?
        <figure className="comment__avatar">{props.avatar}</figure>
        : '';
    const isAvatarLink = props.target ?
        <a className="comment__heading__link" href={props.target}>{props.author}</a>
        : props.author;
    const isContent = props.content ?
        <div className="comment__text">{props.content}</div>
        : '';
    const isDate = props.date ?
        <p className="comment__date">{props.date}</p>
        : '';
    const isType = props.type ?
        <small className="comment__small">{props.type}</small>
        : '';
    return (
        <article className={className}>
            {isAvatar}
            <div className="comment__content">
                <h4 className="comment__heading">
                    {isAvatarLink}
                    {isType}
                </h4>
                {isDate}
                {isContent}
            </div>
        </article>
    );
}

Comment.defaultProps = {
    className: '',
    type: '',
    author: '',
    avatar: '',
    date: '',
    content: '',
    target: '',
};

Comment.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    author: PropTypes.string,
    avatar: PropTypes.any,
    date: PropTypes.any,
    content: PropTypes.any,
    target: PropTypes.string,
};

export default Comment;`}
                        </PrismCode>
                    </ComponentToggleContent>
                </ComponentButtonToggle>
            </ContentComponent>
        </div>
    );
}

export default CommentComponent;
