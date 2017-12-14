import React from 'react';
import 'prismjs';
import { PrismCode } from 'react-prism';
import Button from '../ButtonComponent/Button';
import '../../stylesheets/components/button.css';
import {
    ComponentButtonToggle,
    ComponentToggleContent }
    from '../common/ComponentButtonToggle';
import {
    ContentComponent,
    ComponentContentText,
    ComponentUsed }
    from '../common/ComponentContent';


function ButtonComponent() {
    return (
        <div className="isComponent">
            <div className="onComponent">
                <Button />
                <Button appearance="primary" />
                <Button appearance="success" />
                <Button appearance="danger" />
                <Button appearance="warning" />
                <Button appearance="info" />
                <Button appearance="light" />
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
                        {`<Button onClick={() => console.log('Hello Button!')} />
<Button appearance="primary" />
<Button appearance="success" />
<Button appearance="danger" />
<Button appearance="warning" />
<Button appearance="info" />
<Button appearance="light" />
<Button href="http://google.co.in" appearance="primary block">Link</Button>
<Button appearance="danger large" />`}
                    </PrismCode>
                </ComponentUsed>
                <ComponentButtonToggle>
                    <ComponentToggleContent title="jsX Code">
                        <PrismCode component="pre" className="language-javascript">
                            {`import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
    const isAppearance = props.appearance ? 'button-' + props.appearance : '';
    const isClassName = props.className ? props.className : '';
    const className = 'button ' + isAppearance + ' ' +isClassName;

    const Tag = props.href ? 'a' : 'button';
    return (
        <Tag {...props} className={className} onClick={props.onClick}>
            {props.children || ''}
        </Tag>
    );
}

Button.defaultProps = {
    children: 'Button',
    className: '',
    appearance: null,
    href: null,
    onClick: () => {},
};

Button.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    appearance: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
`}
                        </PrismCode>
                    </ComponentToggleContent>
                </ComponentButtonToggle>
            </ContentComponent>
            <hr />
            <ContentComponent>
                <ComponentUsed title="Uses Component for Link">
                    <div className="onComponent">
                        <Button href="http://google.co.in" appearance="primary">Link</Button>
                    </div>
                    <PrismCode component="pre" className="language-javascript">
                        {'<Button href="http://google.co.in" appearance="primary">Link</Button>'}
                    </PrismCode>
                </ComponentUsed>
            </ContentComponent>
            <hr />
            <ContentComponent>
                <ComponentUsed title="Uses onClick Function">
                    <div className="onComponent">
                        <Button appearance="primary" onClick={() => alert('Hello Button!')} />
                    </div>
                    <PrismCode component="pre" className="language-javascript">
                        {'<Button appearance="primary" onClick={() => alert(\'Hello Button!\')} />'}
                    </PrismCode>
                </ComponentUsed>
            </ContentComponent>
            <hr />
            <ContentComponent>
                <ComponentUsed title="Uses Component for Large">
                    <div className="onComponent">
                        <Button appearance="primary large" />
                    </div>
                    <PrismCode component="pre" className="language-javascript">
                        {'<Button appearance="primary large" />'}
                    </PrismCode>
                </ComponentUsed>
            </ContentComponent>
            <hr />
            <ContentComponent>
                <ComponentUsed title="Uses Component for Block">
                    <div className="onComponent">
                        <Button appearance="primary block" />
                    </div>
                    <PrismCode component="pre" className="language-javascript">
                        {'<Button appearance="primary block" />'}
                    </PrismCode>
                </ComponentUsed>
            </ContentComponent>
        </div>
    );
}

export default ButtonComponent;
