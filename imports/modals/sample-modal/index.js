import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import { closeSampleModal } from './actions';

class SampleModal extends Component {
    close = () => {
        this.props.dispatch(closeSampleModal());
    }

    process = () => {
        alert('You click OK!');
        this.props.dispatch(closeSampleModal());
    }

    render = () => {
        const { isOpen } = this.props.modalSample;

        return (
            <Modal
                visible={isOpen}
                onCancel={this.close}
                onOk={this.process}
                >
                <p>Content of sample modal.</p>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        modalSample: state.modalSample
    };
}

export default connect(mapStateToProps)(SampleModal);