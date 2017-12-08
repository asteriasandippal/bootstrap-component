import React from 'react';
import 'prismjs';
import { PrismCode } from 'react-prism';
import Badge from './Badge';
import Button from '../ButtonComponent/Button';
import '../../stylesheets/components/badge.css';
import {
    ContentComponent,
    ComponentContentText,
    ComponentUsed }
    from '../common/ComponentContent';
import {
    ComponentsTabs,
    TabPanel }
    from '../common/ComponentsTabs';

function BadgeComponent() {
    return (
        <div className="isComponent">

            <div className="onComponent">
                <h1>Example heading <Badge>New</Badge></h1>
                <h2>Example heading <Badge appearance="primary">New</Badge></h2>
                <h3>Example heading <Badge appearance="danger">New</Badge></h3>
                <h4>Example heading <Badge>New</Badge></h4>
                <h5>Example heading <Badge appearance="primary">New</Badge></h5>
                <h6>Example heading <Badge appearance="danger">New</Badge></h6>
            </div>

            <ContentComponent>
                <ComponentContentText>
                    It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The point of
                    using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed to using Content here, content here.
                </ComponentContentText>

                <ComponentUsed title="Uses Component For Heading">
                    <PrismCode component="pre" className="language-javascript">
                        {/* {`${Badge}`} */}
                        {`<h1>Example heading <Badge>New</Badge></h1>
<h2>Example heading <Badge>New</Badge></h2>
<h3>Example heading <Badge>New</Badge></h3>
<h4>Example heading <Badge>New</Badge></h4>
<h5>Example heading <Badge>New</Badge></h5>
<h6>Example heading <Badge>New</Badge></h6>

<Badge classname="[add-custom-class]">New</Badge>
`}
                    </PrismCode>
                </ComponentUsed>
                <ComponentsTabs>
                    <TabPanel label="JSX Code">
                        <PrismCode component="pre" className="language-javascript">
                            {`import React from 'react';
import PropTypes from 'prop-types';

function Badge(props) {
    const isAppearance = props.appearance ? 'badge-'+ props.appearance : '';
    const isClassName = props.className ? props.className : '';
    const className = 'badge '+ isAppearance + ' ' + isClassName;
    return (
        <span className={className}>
            {props.children || ''}
        </span>
    );
}

Badge.defaultProps = {
    className: '',
    children: 'New!',
    appearance: '',
};

Badge.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
    appearance: PropTypes.string,
};

export default Badge;

                            `}
                        </PrismCode>
                    </TabPanel>
                    <TabPanel label="CSS Code">
                        <PrismCode component="pre" className="language-css">
                            {`.badge {
    display: inline-block;
    padding: .3em .5em;
    font-size: 75%;
    font-weight: normal;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .25rem;
    background-color: #EBECF0;
}

.badge-primary {
    color: #ffffff;
    background-color: #004085;
}

.badge-danger {
    color: #ffffff;
    background-color: #721c24;
}
                            `}
                        </PrismCode>
                    </TabPanel>
                </ComponentsTabs>
            </ContentComponent>
            <hr />
            <ContentComponent>
                <ComponentContentText>
                    It is a long established fact that a reader will be distracted.
                </ComponentContentText>
                <ComponentUsed title="Uses Component For Button">
                    <Button appearance="primary">
                    Button <Badge>New</Badge>
                    </Button>
                    <PrismCode component="pre" className="language-javascript">
                        {`<Button className="btn btn-primary">
    Button <Badge>New</Badge>
</Button>
`}
                    </PrismCode>
                    <hr />
                    <div>
                        <PrismCode component="pre" className="language-css">
                            {`.btn .badge {
    background-color: #ffffff;
    color: #004085;
}
                            `}
                        </PrismCode>
                    </div>
                </ComponentUsed>
            </ContentComponent>
        </div>
    );
}

export default BadgeComponent;
