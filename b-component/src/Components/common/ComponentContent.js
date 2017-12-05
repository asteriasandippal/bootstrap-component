import React from 'react';
import PropTypes from 'prop-types';

export function ComponentUsed(props) {
    return (
        <div>
            <h4 className="content-component__subtitle">{props.title}</h4>
            <div className="content-component__showcomponent showcomponent">
                {props.children}
            </div>
        </div>
    );
}

ComponentUsed.defaultProps = {
    children: '',
    title: '',
};

ComponentUsed.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
};

export function ComponentContentText(props) {
    return (
        <article className="content-component__article">
            {props.children}
        </article>
    );
}

ComponentContentText.defaultProps = {
    children: '',
};

ComponentContentText.propTypes = {
    children: PropTypes.any,
};

export function ContentComponent(props) {
    return (
        <div className="content-component">
            {props.children}
        </div>
    );
}

ContentComponent.defaultProps = {
    children: '',
};
ContentComponent.propTypes = {
    children: PropTypes.any,
};
