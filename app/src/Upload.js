import React, {Component} from 'react';
import FileBase64 from "react-file-base64";
import {Button, Form, FormGroup, Label, FormText} from "reactstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';

class Upload extends Component {
    state = {
        confirmation : "",
        isLoading : "",
        files: ""
    }

    async handleSubmit(event) {
        event.preventDefault();
        this.setState({confirmation: "Uploading..."});
    }

    async getFiles(files) {
        this.setState({
            isLoading : "Extracting Data...",
            files: files
        });
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
                        <div className="form-group files color">
                            <FileBase64 multiple={true}
                            onDone={this.getFiles.bind(this)}>
                            </FileBase64>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Upload;
