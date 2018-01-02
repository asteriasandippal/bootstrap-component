import React from 'react';
import Slider from './Slider';
import SliderData from '../../helpers/SliderData';
import '../../stylesheets/components/slider.css';

function SliderComponent() {
    return (
        <div className="sliderComponent">
            <Slider
                sliderAuto
                sliderTiming={10000}
                data={SliderData}
                sliderSelected={1}
                sliderDotted
                sliderNavigation
            />
        </div>
    );
}

export default SliderComponent;
