import React from 'react';
import PropTypes from 'prop-types';

function Comment(props) {
    const isAvatarClass = props.avatar ? 'comment--avatar' : '';
    const className = `comment commit--block ${props.className}${isAvatarClass}`;
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

export default Comment;
