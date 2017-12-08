import React from 'react';
import 'prismjs';
import { PrismCode } from 'react-prism';
import Button from '../ButtonComponent/Button';
import '../../stylesheets/components/button.css';
import {
    ContentComponent,
    ComponentContentText,
    ComponentUsed }
    from '../common/ComponentContent';
import {
    ComponentsTabs,
    TabPanel }
    from '../common/ComponentsTabs';

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
                <ComponentsTabs>
                    <TabPanel label="JSX Code">
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
                    </TabPanel>
                    <TabPanel label="CSS Code">
                        <PrismCode component="pre" className="language-css">
                            {`.button {
    background-color: #f1f1f1;
    color: #000000;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    white-space: nowrap;
    line-height: 1.4;
    font-size: 14px;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 3px;
    border: solid 1px #dcdcdc;
    transition: all 0.35s ease;
    -moz-transition: all 0.35s ease;
    -webkit-transition: all 0.35s ease;
    -o-transition: all 0.35s ease;
    -ms-transition: all 0.35s ease;
    letter-spacing: 0.06em;
    text-decoration: none;
    margin-bottom: 1.3em;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.button.block {
    display: block;
}
button.block {
    width: 100%;
}
.button.large {
    padding: 0.65em 2em;
    font-size: 120%;
}
.button:hover,
.button:focus {
    background-color: #dcdcdc;
    outline: none;
}
.button-primary {
    color: #fff;
    background-color: #007bff;
    border-color: #0265cf;
}
.button-primary:hover,
.button-primary:focus {
    background-color: #0265cf;
}
.button-success {
    color: #ffffff;
    background-color: #51ba6b;
    border-color: #459e5a;
}
.button-success:hover,
.button-success:focus {
    background-color: #459e5a;
}
.button-danger {
    color: #ffffff;
    background-color: #ec4656;
    border-color: #c34d5a;
}
.button-danger:hover,
.button-danger:focus {
    background-color: #c34d5a;
}
.button-warning {
    color: #484848;
    background-color: #f8d66d;
    border-color: #d8b855;
}
.button-warning:hover,
.button-warning:focus {
    background-color: #d8b855;
}
.button-info {
    color: #515151;
    background-color: #7fe5f8;
    border-color: #6fbcc7;
}
.button-info:hover,
.button-info:focus {
    background-color: #6fbcc7;
}
.button-light {
    color: #818182;
    background-color: #fefefe;
    border-color: #fdfdfe;
}
`}
                        </PrismCode>
                    </TabPanel>
                </ComponentsTabs>
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
