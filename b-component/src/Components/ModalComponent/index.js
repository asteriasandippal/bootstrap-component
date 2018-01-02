import React from 'react';
import 'prismjs';
import { PrismCode } from 'react-prism';
import Modal from './Modal';
import '../../stylesheets/components/modal.css';
import Button from '../ButtonComponent/Button';
import {
    ContentComponent,
    ComponentContentText,
    ComponentUsed }
    from '../common/ComponentContent';
import {
    ComponentButtonToggle,
    ComponentToggleContent }
    from '../common/ComponentButtonToggle';

class ModalComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
        };
        this.isModalOpen = this.isModalOpen.bind(this);
        this.isModalClose = this.isModalClose.bind(this);
    }

    isModalOpen() {
        this.setState({
            modalVisible: true,
        });
    }

    isModalClose() {
        this.setState({
            modalVisible: false,
        });
    }
    render() {
        return (
            <div className="isComponent">
                <div className="onComponent">
                    {this.state.modalVisible && (<Modal
                        modal
                        title="Modal Title"
                        isCloseButton
                        isBackground
                        modalClose={this.isModalClose}
                        isFooter={<p>Add Footer Text</p>}
                        content={
                            <p>Boolean OR Function indicating which element to focus when
                        the component mounts. TRUE will automatically find the first
                        tabbable element within the modal. Providing a function should
                        return the element you want to focus.
                            </p>
                        }
                    />) }

                    <Button
                        appearance="primary"
                        onClick={() => this.isModalOpen()}
                    >Open Modal
                    </Button>
                    <ContentComponent>
                        <ComponentContentText>
                            It is a long established fact that a reader will be distracted by the
                            readable content of a page when looking at its layout. The point of
                            using Lorem Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using Content here, content here.
                        </ComponentContentText>

                        <ComponentUsed title="Uses Component">
                            <PrismCode component="pre" className="language-javascript">
                                {`<Modal
    modal
    title="Modal Title"
    isCloseButton
    isBackground
    modalClose={this.isModalClose}
    isFooter={<p>Add Footer Text</p>}
    content={
        <p>Boolean OR Function indicating which element to focus when
    the component mounts. TRUE will automatically find the first
    tabbable element within the modal. Providing a function should
    return the element you want to focus.
        </p>
    }
/>

`}
                            </PrismCode>
                        </ComponentUsed>
                        <ComponentButtonToggle>
                            <ComponentToggleContent title="Use jsX Code">
                                <PrismCode component="pre" className="language-javascript">
                                    {`export default class ComponentName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
        };
        this.isModalOpen = this.isModalOpen.bind(this);
        this.isModalClose = this.isModalClose.bind(this);
    }

    isModalOpen() {
        this.setState({
            modalVisible: true,
        });
    }

    isModalClose() {
        this.setState({
            modalVisible: false,
        });
    }
    render() {
        return (
            <div>
                {this.state.modalVisible && (<Modal
                    modal
                    title="Modal Title"
                    isCloseButton
                    isBackground
                    modalClose={this.isModalClose}
                    isFooter={<p>Add Footer Text</p>}
                    content={
                        <p>Boolean OR Function indicating which element to focus when
                    the component mounts. TRUE will automatically find the first
                    tabbable element within the modal. Providing a function should
                    return the element you want to focus.
                        </p>
                    }
                />) }

                <Button
                    appearance="primary"
                    onClick={() => this.isModalOpen()}
                >Open Modal
                </Button>
            </div>
        );
    }
}`}
                                </PrismCode>
                            </ComponentToggleContent>
                        </ComponentButtonToggle>
                        <ComponentButtonToggle>
                            <ComponentToggleContent title="Modal jsX Code">
                                <PrismCode component="pre" className="language-javascript">
                                    {`import React from 'react';
import PropTypes from 'prop-types';
import Button from '../ButtonComponent/Button';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: props.modal,
        };
    }

    handleModal() {
        setTimeout(() => {
            this.setState({
                isOpen: !this.state.isOpen,
            });
        }, 300);

        const body = document.querySelector('body');

        if (!this.state.isOpen) {
            setTimeout(() => {
                body.classList.add('modal-open');
            }, 600);
        } else {
            setTimeout(() => {
                body.classList.remove('modal-open');
            }, 0);
        }
    }

    render() {
        const body = document.querySelector('body');

        if (!this.state.isOpen) {
            setTimeout(() => {
                body.classList.remove('modal-open');
                this.props.modalClose();
            }, 600);
        } else {
            setTimeout(() => {
                body.classList.add('modal-open');
            }, 0);
        }
        const isHeaderTitle = this.props.title ? (
            <header className="modal__header">
                <h4 className="modal__title">{this.props.title}</h4>

                {this.props.isCloseButton ?
                    <Button onClick={() => this.handleModal()}>&times;</Button>
                    : ''}
            </header>
        ) : '';

        const isFooter = this.props.isFooter ? (
            <footer className="modal__footer">
                {this.props.isFooter}
            </footer>
        ) : '';

        const isBackgroundClass = this.props.isBackground
            ? 'modal__background'
            : 'modal__background modal__background--transparent';

        const isBackground = (<div
            role="presentation"
            className={isBackgroundClass}
            onClick={() => this.handleModal()}
            onKeyDown={this.handleModal}
        />);

        let modal = '';

        if (this.state.isOpen) {
            modal = (
                <div className="modal">
                    <div className="modal__box">
                        <div className="modal__content">
                            {isHeaderTitle}
                            <div className="modal__body">
                                {this.props.content}
                            </div>
                            {isFooter}
                        </div>
                    </div>
                    {isBackground}
                </div>);
        } else {
            modal = '';
        }

        return (
            <div>
                {modal}
            </div>
        );
    }
}

Modal.defaultProps = {
    title: '',
    content: '',
    isFooter: '',
    isBackground: true,
    isCloseButton: false,
    modal: false,
    modalClose: () => {},
};

Modal.propTypes = {
    title: PropTypes.string,
    content: PropTypes.any,
    isFooter: PropTypes.any,
    isBackground: PropTypes.bool,
    isCloseButton: PropTypes.bool,
    modal: PropTypes.bool,
    modalClose: PropTypes.func,
};

export default Modal;
`}
                                </PrismCode>
                            </ComponentToggleContent>
                        </ComponentButtonToggle>
                    </ContentComponent>
                </div>
            </div>
        );
    }
}

export default ModalComponent;
