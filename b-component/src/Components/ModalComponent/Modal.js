import React from 'react';
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
                {/* <Button appearance="primary" onClick={() => this.handleModal()}>Open Modal</Button> */}
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
