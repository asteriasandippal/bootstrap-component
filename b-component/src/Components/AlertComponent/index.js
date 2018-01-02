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
    ComponentButtonToggle,
    ComponentToggleContent }
    from '../common/ComponentButtonToggle';

function AlertComponent() {
    return (
        <div className="isComponent">

            <Alert />
            <Alert appearance="primary" />
            <Alert appearance="success" />
            <Alert appearance="danger" />
            <Alert appearance="warning" />
            <Alert appearance="info" onClick={() => alert('ASDASD')} />
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
                <ComponentButtonToggle>
                    <ComponentToggleContent title="jsX Code">
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
                    </ComponentToggleContent>
                </ComponentButtonToggle>
            </ContentComponent>
        </div>
    );
}

export default AlertComponent;
