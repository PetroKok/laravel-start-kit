import React from 'react'
import ReactDOM from 'react-dom'

export default class Modal extends React.Component{

    componentWillMount() {
        this.root = document.createElement('div');
        document.body.appendChild(this.root);
        console.log(this.props.data);
    }

    close(){
        document.body.removeChild(this.root);
    }

    render() {
        return ReactDOM.createPortal(
            <div className={`alert ${this.props.data.type === 'success' ? 'alert-success' : 'alert-danger'} alert-dismissible fade show modal-alert` } role="alert">
                {this.props.data.message}
                <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={this.close}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>,
            this.root
        );
    }
}