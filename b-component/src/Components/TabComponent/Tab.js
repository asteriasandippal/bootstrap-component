import React from 'react';
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
                    className={`tab__link ${selected === index ? 'active' : ''}`}
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
