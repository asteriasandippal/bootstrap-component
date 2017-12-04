import React from 'react';
import PropTypes from 'prop-types';

export function TabPanel(props) {
    return (
        <div className="hello">
            {props.children}
        </div>
    );
}

TabPanel.defaultProps = {
    children: '',
};

TabPanel.propTypes = {
    children: PropTypes.any,
};

export class ComponentsTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 1,
        };
    }

    handleClick(index, event) {
        event.preventDefault();
        this.setState({
            selected: index,
        });
    }

    TabsRenderTitles() {
        const labels = (child, index) => {
            const activeClass = (this.state.selected === index ? 'active' : '');
            const handleTab = this.handleClick.bind(this, index);
            return (
                <li
                    key={index}
                    className="content-component__tab-list"
                >
                    <a
                        href="#/"
                        className={activeClass}
                        onClick={e => handleTab(e)}
                    >
                        {child.props.label}
                    </a>
                </li>
            );
        };

        return (
            <ul className="tabs-labels content-component__tab-labels">
                {this.props.children.map(labels.bind(this))}
            </ul>
        );
    }

    TabsRenderContent() {
        return (
            <div className="tabs__content showcomponet-code content-component__tab">
                {this.props.children[this.state.selected]}
            </div>
        );
    }

    render() {
        return (
            <div className="content-component__tabs component-tabs">
                {this.TabsRenderTitles()}
                {this.TabsRenderContent()}
            </div>
        );
    }
}

ComponentsTabs.defaultProps = {
    children: '',
};

ComponentsTabs.propTypes = {
    children: PropTypes.any,
};
