import React from 'react';
import PropTypes from 'prop-types';

export default class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: props.sliderSelected,
            values: props.data,
            sliderToSlide: props.sliderTiming,
        };
    }

    componentDidMount() {
        if (this.props.sliderAuto) {
            if (this.state.values.length > this.state.selectedIndex) {
                setInterval(() => {
                    if (this.state.values.length === this.state.selectedIndex) {
                        this.setState({ selectedIndex: 1 });
                    } else {
                        this.setState({ selectedIndex: this.state.selectedIndex + 1 });
                    }
                }, this.state.sliderToSlide);
            }
        }
    }

    onHandlePrev() {
        this.setState({
            selectedIndex: this.state.selectedIndex - 1,
        });
    }

    onHandleNext() {
        this.setState({
            selectedIndex: this.state.selectedIndex + 1,
        });
    }

    onHandleDotted(event, index) {
        this.setState({
            selectedIndex: index,
        });
    }

    render() {
        const slideList = this.state.values.map((value) => {
            if (this.state.selectedIndex === value.id) {
                return (
                    <SliderItem
                        key={value.id}
                        className={this.state.selectedIndex === value.id ? 'active' : ''}
                    >
                        {value.description}
                    </SliderItem>
                );
            }
            return true;
        });

        let isNavigation = '';
        if (this.props.sliderNavigation) {
            isNavigation = (
                <div className="slider-pagination__button-group">
                    <SliderButton
                        onClick={() => this.onHandlePrev()}
                        disabled={this.state.selectedIndex === 1}
                    >Prev
                    </SliderButton>
                    <SliderButton
                        onClick={() => this.onHandleNext()}
                        disabled={this.state.selectedIndex === this.state.values.length}
                    >Next
                    </SliderButton>
                </div>
            );
        }

        let isDotted = '';
        if (this.props.sliderDotted) {
            isDotted = this.state.values.map((value, index) =>
                (
                    <SliderDotted
                        key={value.id}
                        className={this.state.selectedIndex === value.id ? 'active' : ''}
                        onClick={e => this.onHandleDotted(e, index + 1)}
                        onKeyDown={e => this.onHandleDotted(e, index + 1)}
                        role="presentation"
                    >
                        {value.id}
                    </SliderDotted>
                ));
        }

        return (
            <div className="slider-pagination">
                <ul className="slider-pagination__items">
                    {slideList}
                </ul>
                <div className="slider-pagination__dotted">
                    {isDotted}
                </div>
                {isNavigation}

            </div>
        );
    }
}
Slider.defaultProps = {
    sliderSelected: 1,
    data: [],
    sliderNavigation: false,
    sliderDotted: false,
    sliderAuto: false,
    sliderTiming: 5000,
};
Slider.propTypes = {
    sliderSelected: PropTypes.number,
    data: PropTypes.array,
    sliderNavigation: PropTypes.bool,
    sliderDotted: PropTypes.bool,
    sliderAuto: PropTypes.bool,
    sliderTiming: PropTypes.number,
};

function SliderDotted(props) {
    return (
        <span
            className={`slider-pagination__dot ${props.className}`}
            onClick={props.onClick}
            onKeyDown={props.onKeyDown}
            role="presentation"
        >{props.children}
        </span>
    );
}
SliderDotted.defaultProps = {
    className: 1,
    onClick: () => {},
    onKeyDown: () => {},
    children: '',
};
SliderDotted.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    onKeyDown: PropTypes.func,
    children: PropTypes.any,
};

function SliderItem(props) {
    return (
        <li className={`slider-pagination__item ${props.className}`}>{props.children}</li>
    );
}
SliderItem.defaultProps = {
    children: '',
};
SliderItem.propTypes = {
    children: PropTypes.any,
};


function SliderButton(props) {
    return (
        <button
            className={`slider-pagination__button slider-pagination--${props.children}`}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            <span>{props.children}</span>
        </button>
    );
}
SliderButton.defaultProps = {
    children: '',
    onClick: () => {},
    disabled: () => {},
};
SliderButton.propTypes = {
    children: PropTypes.any,
    onClick: PropTypes.func,
    disabled: PropTypes.any,
};
