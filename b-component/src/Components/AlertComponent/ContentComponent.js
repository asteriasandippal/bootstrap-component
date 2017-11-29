import React from 'react';
import "prismjs";
import {PrismCode} from "react-prism";

function ContentComponent () {
    return (
        <div className="content-component">
            <article className="content-component__article">It is a long established fact that a reader will be distracted by the readable content of a 
                page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
                distribution of letters, as opposed to using 'Content here, content here'.</article>

            <h4 className="content-component__subtitle">Uses Component</h4>
            <div className="showcomponent">
                <PrismCode component="pre" className="language-javascript">
                    {`<Alert className="hello">Hello</Alert>`}
                </PrismCode>
            </div>
            <div className="showcomponet-code">
                <PrismCode component="pre" className="language-javascript">
                    {`
import React from 'react';
import PropTypes from 'prop-types';
                        
function Alert(props) {
    const isClassName = props.className ? 'alert-'+ props.className : '';
    const className = 'alert ' + isClassName;
    return (
        <div className={className} role="alert">
            {props.children || ''}
        </div>
    );
}

Alert.defaultProps = {
    className: '',
    children: 'Alert Box'
};

Alert.propTypes = {
    className: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired
};

export default Alert;
                    `}
                </PrismCode>
            </div>
        </div>
    );
}

export default ContentComponent;
