import React from 'react';
import 'prismjs';
import { PrismCode } from 'react-prism';
import Alert from './Alert';
import '../../stylesheets/components/alert.css';
import {
    ContentComponent,
    ComponentContentText,
    ComponentUsed }
    from '../common/ComponentContent';
import {
    ComponentsTabs,
    TabPanel }
    from '../common/ComponentsTabs';

function AlertComponent() {
    return (
        <div className="isComponent">

            <Alert />
            <Alert appearance="primary" />
            <Alert appearance="success" />
            <Alert appearance="danger" />
            <Alert appearance="warning" />
            <Alert appearance="info" />
            <Alert appearance="light" />

            <ContentComponent>
                <ComponentContentText>
                    It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The point of
                    using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed to using Content here, content here.
                </ComponentContentText>
                <ComponentUsed title="Uses Component">
                    <PrismCode component="pre" className="language-javascript">
                        {`<Alert>This is Alert Component!</Alert>
<Alert appearance="primary" />
<Alert appearance="success" />
<Alert appearance="danger" />
<Alert appearance="warning" />
<Alert appearance="info" />
<Alert appearance="light" />

<Alert className="[add-custom-class]">This is Alert Component!</Alert>`}
                    </PrismCode>
                </ComponentUsed>
                <ComponentsTabs>
                    <TabPanel label="JSX Code">
                        <PrismCode component="pre" className="language-javascript">
                            {`
import React from 'react';
import PropTypes from 'prop-types';

function Alert(props) {
    const isAppearance = props.appearance ? 'alert-' + props.appearance : '';
    const isClassName = props.className ? props.className : '';
    const className = 'alert ' + isAppearance + ' ' + isClassName;
    return (
        <div className={className} role="alert">
            {props.children || ''}
        </div>
    );
}

Alert.defaultProps = {
    className: '',
    children: 'This is Alert Component!',
    appearance: '',
};

Alert.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
    appearance: PropTypes.string,
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

.alert-primary {
    color: #004085;
    background-color: #a7d0fa;
    border-color: #7dbafd;
}

.alert-success {
    color: #155724;
    background-color: #c5ffd3;
    border-color: #7aef95;
}

.alert-danger {
    color: #721c24;
    background-color: #fcb8be;
    border-color: #ea818c;
}

.alert-warning {
    color: #856404;
    background-color: #f4e5b6;
    border-color: #e8cf83
}

.alert-info {
    color: #0c5460;
    background-color: #a8e8f4;
    border-color: #7ad1de;
}

.alert-light {
    color: #818182;
    background-color: #fefefe;
    border-color: #fdfdfe;
}
                            `}
                        </PrismCode>
                    </TabPanel>
                </ComponentsTabs>
            </ContentComponent>
        </div>
    );
}

export default AlertComponent;
