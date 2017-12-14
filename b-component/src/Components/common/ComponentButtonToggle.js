import React from 'react';
import PropTypes from 'prop-types';

export const ComponentButtonToggle = props => (
    <div className="toggletab-container">
        {props.children}
    </div>
);
ComponentButtonToggle.defaultProps = {
    children: '',
};
ComponentButtonToggle.propTypes = {
    children: PropTypes.any,
};

export class ComponentToggleContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }
    handleClick(e) {
        e.preventDefault();
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        const { title, children } = this.props;
        const ToggleClass = this.state.isOpen ? 'active' : '';
        return (
            <div>
                <ul className="ulbutton-toggle">
                    <li className="ulbutton-toggle__button">
                        <a
                            href="#/"
                            className={ToggleClass}
                            onClick={e => this.handleClick(e)}
                        >
                            {title}
                            <span className="ulbutton-toggle__icon">
                                <svg
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 129 129"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    enableBackground="new 0 0 129 129"
                                >
                                    <g>
                                        <path
                                            d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"
                                        />
                                    </g>
                                </svg>
                            </span>
                        </a>
                    </li>
                </ul>

                <div className={`componenttoggle ${ToggleClass}`}>
                    {this.state.isOpen ? children : ''}
                </div>
            </div>
        );
    }
}

ComponentToggleContent.defaultProps = {
    title: '',
    children: '',
};

ComponentToggleContent.propTypes = {
    title: PropTypes.string,
    children: PropTypes.any,
};
