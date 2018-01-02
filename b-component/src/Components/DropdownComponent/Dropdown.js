import React from 'react';
import PropTypes from 'prop-types';

export class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onOpen: false,
        };
        this.onBodyHandeler = this.onBodyHandeler.bind(this);
    }
    componentDidMount() {
        document.body.addEventListener('click', this.onBodyHandeler);
    }
    componentWillUnmount() {
        document.body.removeEventListener('click', this.onBodyHandeler);
    }
    onDropdownhandle(e) {
        e.preventDefault();
        this.setState({
            onOpen: !this.state.onOpen,
        });
    }
    onBodyHandeler() {
        this.setState({
            onOpen: false,
        });
    }

    render() {
        const {
            IsIcon, triggerType, title, children,
        } = this.props;
        const isOpen = this.state.onOpen ? 'showin' : 'hidden';
        const isActiveToggle = this.state.onOpen ? 'active' : '';
        const isIcon = IsIcon ? <span className="dropdown__button__icon" /> : '';
        const Tag = triggerType || 'button';
        return (
            <div className="dropdown">
                <Tag
                    className={`dropdown__button ${isActiveToggle}`}
                    onClick={e => this.onDropdownhandle(e)}
                >
                    {title}{isIcon}
                </Tag>
                <div className={`dropdown__drop ${isOpen}`}>
                    {children}
                </div>
            </div>
        );
    }
}
Dropdown.defaultProps = {
    children: '',
    title: '',
    triggerType: 'button',
    IsIcon: false,
};
Dropdown.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    triggerType: PropTypes.string,
    IsIcon: PropTypes.bool,
};

export function DropdownItemGroup(props) {
    return (
        <ul className="dropdown__items">
            {props.children}
        </ul>
    );
}
DropdownItemGroup.defaultProps = {
    children: '',
};
DropdownItemGroup.propTypes = {
    children: PropTypes.any,
};

export function DropdownItem(props) {
    function handleDropdown(e) {
        props.onClick(e);
    }
    return (
        <li
            className="dropdown__item"
            onClick={e => handleDropdown(e)}
            onKeyDown={e => handleDropdown(e)}
            role="presentation"
        >{props.children}
        </li>
    );
}
DropdownItem.defaultProps = {
    children: '',
    onClick: () => {},
};
DropdownItem.propTypes = {
    children: PropTypes.any,
    onClick: PropTypes.func,
};
