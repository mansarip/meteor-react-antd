import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'antd';
import { openSampleModal } from '../../modals/sample-modal/actions';

class ComponentTitle extends Component {
    openModal = () => {
        this.props.dispatch(openSampleModal());
    }

    render = () => {
        return (
            <div>
                <p>Sample component</p>
                <div>
                    <Button type="primary" onClick={this.openModal}>Open Sample Modal</Button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
}

export default connect(mapStateToProps)(ComponentTitle);