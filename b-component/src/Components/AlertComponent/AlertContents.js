import React from 'react';
import 'prismjs';
import { PrismCode } from 'react-prism';
import { ComponentsTabs, TabPanel } from '../common/ComponentsTabs';

function ContentComponent() {
    return (
        <div className="content-component">
            <article className="content-component__article">
                It is a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point of
                using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using Content here, content here.
            </article>

            <h4 className="content-component__subtitle">Uses Component</h4>
            <div className="content-component__showcomponent showcomponent">
                <PrismCode component="pre" className="language-javascript">
                    {`<Alert>This is Alert Component!</Alert>

<Alert className="[add custom class]">This is Alert Component!</Alert>`}
                </PrismCode>
            </div>
            <ComponentsTabs>
                <TabPanel label="JSX Code">
                    <PrismCode component="pre" className="language-javascript">
                        {`
import React from 'react';
import PropTypes from 'prop-types';

function Alert(props) {
    const isClassName = props.className ? 'alert-' +props.className' : '';
    const className = 'alert '+isClassName;
    return (
        <div className={className} role="alert">
            {props.children || ''}
        </div>
    );
}

Alert.defaultProps = {
    className: '',
    children: 'This is Alert Component!',
};

Alert.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
};

export default Alert;

                        `}
                    </PrismCode>
                </TabPanel>
                <TabPanel label="CSS Code">
                    <PrismCode component="pre" className="language-css">
                        {`
.alert {
    position: relative;
    padding: 15px 20px;
    margin-bottom: 1rem;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    background-color: #f1f1f1;
}
                        `}
                    </PrismCode>
                </TabPanel>
            </ComponentsTabs>

            <div className="component-block content-component__component-block" />
        </div>
    );
}

export default ContentComponent;
