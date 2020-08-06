import React, {Component} from 'react';
import FileBase64 from "react-file-base64";
import {Button, Form, FormGroup, Label, FormText} from "reactstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';

class Upload extends Component {
    state = {
        confirmation : ""
    }

    async handleSubmit(event) {
        event.preventDefault();
        this.setState({confirmation: "Uploading..."});
    }


    render() {
        const processing="Processing document...";
        return(
            <div className="row">
                <div className="col-6 offset-3">
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <h3 className="text-danger">{processing}</h3>
                            <h6>Upload Your Invoice</h6>
                            <FormText color="muted">PNG or JPG</FormText>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Upload;
