import React from 'react';
import 'prismjs';
import { PrismCode } from 'react-prism';
import { Tab, TabContent } from './Tab';
import '../../stylesheets/components/tab.css';
import {
    ContentComponent,
    ComponentUsed }
    from '../common/ComponentContent';
import {
    ComponentButtonToggle,
    ComponentToggleContent }
    from '../common/ComponentButtonToggle';

function TabComponent() {
    return (
        <div className="isComponent">
            <div className="onComponent">
                <Tab selectedTab={0}>
                    <TabContent title="Tab1">
                        <p>Boolean OR Function indicating which element to focus when
                        the component mounts. TRUE will automatically find the first
                        tabbable element within the modal.
                        </p>
                    </TabContent>
                    <TabContent title="Tab2">
                        <p>git push origin --delete the_remote_branch. Note. If you get
                        the error error: unable to push to unqualified destination:
                        the_remote_branch The destination refspec neither matches
                        an existing ref on the remote nor begins with refs/, and we are
                        unable to guess a prefix based on the source ref. error:
                        failed to push some refs to ...
                        </p>
                    </TabContent>
                </Tab>
            </div>
            <ContentComponent>
                <ComponentUsed title="Uses Component For Tab">
                    <PrismCode component="pre" className="language-javascript">
                        {`<Tab selectedTab={0}>
    <TabContent title="Tab1">
        <p>Boolean OR Function indicating which element to focus when
        the component mounts. TRUE will automatically find the first
        tabbable element within the modal.
        </p>
    </TabContent>
    <TabContent title="Tab2">
        <p>git push origin --delete the_remote_branch. Note. If you get
        the error error: unable to push to unqualified destination:
        the_remote_branch The destination refspec neither matches
        an existing ref on the remote nor begins with refs/, and we are
        unable to guess a prefix based on the source ref. error:
        failed to push some refs to ...
        </p>
    </TabContent>
</Tab>`}
                    </PrismCode>
                </ComponentUsed>
                <ComponentButtonToggle>
                    <ComponentToggleContent title="jsX Code">
                        <PrismCode component="pre" className="language-javascript">
                            {`import React from 'react';
import PropTypes from 'prop-types';

export class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: props.selectedTab,
        };
    }
    handleClick(e, index) {
        e.preventDefault();
        this.setState({
            selected: index,
        });
    }

    render() {
        const { selected } = this.state;
        const { children } = this.props;
        const tabTitle = React.Children.map(children, (child, index) => (
            <li className="tab__list-item">
                <a
                    className={'tab__link' + selected === index ? 'active' : ''}
                    href="#/"
                    onClick={e => this.handleClick(e, index)}
                >{child.props.title}
                </a>
            </li>
        ));

        return (
            <div className="tab">
                <ul className="tab__lists">
                    {tabTitle}
                </ul>
                <div className="tab__content">
                    {children[selected]}
                </div>
            </div>
        );
    }
}

Tab.defaultProps = {
    children: '',
    selectedTab: 0,
};

Tab.propTypes = {
    children: PropTypes.any,
    selectedTab: PropTypes.number,
};

export function TabContent(props) {
    return (
        <div className="tab__content__text">
            {props.children}
        </div>
    );
}

TabContent.defaultProps = {
    children: '',
};

TabContent.propTypes = {
    children: PropTypes.any,
};
                            `}
                        </PrismCode>
                    </ComponentToggleContent>
                </ComponentButtonToggle>
            </ContentComponent>
        </div>
    );
}

export default TabComponent;
