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
    ComponentsTabs,
    TabPanel }
    from '../common/ComponentsTabs';

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
                        <ComponentsTabs>
                            <TabPanel label="Used jsx">
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
}
`}
                                </PrismCode>
                            </TabPanel>
                            <TabPanel label="Modal jsx">
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
                            </TabPanel>
                            <TabPanel label="CSS Code">
                                <PrismCode component="pre" className="language-css">
                                    {`.modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
}
.modal__background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    visibility: hidden;
    opacity: 0;
    transition:visibility 0.3s ease, opacity 0.3s ease;
}
.modal__background--transparent {
    background-color: transparent;
}
.modal-open .modal__background {
    visibility:visible;
    opacity:1;
    transition-delay:0s;
}
.modal__box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 550px;
    z-index: 1;
}
.modal__content {
    background-color: #fff;
    position: relative;
    margin-top: 30px;
    transition:all 0.6s ease;
    visibility: hidden;
    opacity: 0;
}
.modal-open .modal__content {
    margin-top: 0;
    visibility:visible;
    opacity:1;
    transition-delay:0s;
}
.modal__header,
.modal__body,
.modal__footer {
    padding: 15px;
}
.modal__header {
    border-bottom: solid 1px #f4f4f4;
    position: relative;
}
.modal__footer {
    border-top: solid 1px #f4f4f4;
}
.modal__footer p {
    margin: 0;
}
.modal__title {
    margin: 0;
    font-weight: 300;
    font-size: 24px;
}
.modal__header .button,
.modal__header button {
    position: absolute;
    right: 9px;
    top: 16px;
    margin: 0;
    font-size: 40px;
    padding: 0;
    line-height: 0.8;
    background-color: transparent;
    border: none;
    color: #448aff;
}
.modal__header .button:hover,
.modal__header button:hover,
.modal__header .button:focus,
.modal__header button:focus {
    color: #424242;
}
`}
                                </PrismCode>
                            </TabPanel>
                        </ComponentsTabs>
                    </ContentComponent>
                </div>
            </div>
        );
    }
}

export default ModalComponent;
