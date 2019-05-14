import React from 'react';
import axios from "../../../common/axios";
import api_urls from "../../../helpers/api_urls";
import ListFiles from "./ListFiles";
import {Loader} from "../../../common/Loader";
import _ from 'lodash';
import ModalLoader from "../../../common/ModalLoader";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export default class FileLoader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            files: null,
            items: null,
            processing: false,
            btn: false
        };
        this.deleteFile = this.deleteFile.bind(this);
    }

    deleteFile(file) {
        this.setState({processing: true});
        axios().delete(api_urls.FILE_DELETE_ID + file.id)
            .then(res => {
                _.remove(this.state.items, {
                    id: file.id
                });
                this.setState({processing: false});
                NotificationManager.success('Success message', res.data.message, 5000);
            })
            .catch(err => console.log(err))
    }

    componentDidMount() {
        axios().post(api_urls.FILES)
            .then(res => {
                this.setState({items: res.data})
            })
            .catch(err => console.log(err))
    }

    getFiles(e) {
        this.setState({files: Array.from(e.target.files)});
    }

    uploadFiles(e) {
        e.preventDefault();
        let files = this.state.files;
        if (files.length !== 0) {
            this.setState({processing: true, btn: true});
            let data = new FormData();
            files.map((file, key) => {
                data.append('files[]', file);
            });
            axios().post(api_urls.FILES_UPLOAD, data)
                .then(res => {
                    if (res.data.files.length >= 1) {
                        let items = res.data.files;
                        this.setState({items: _.unionBy(items, this.state.items, "id")});
                        this.setState({btn: "Store files", processing: false, files: null});
                        NotificationManager.success('Success message', 'Uploaded files', 5000);
                    } else {
                        NotificationManager.error('Error message', 'HERE IS NOT FILES IN RESPONSE!', 5000);
                    }
                })
                .catch(err => console.log(err));
            e.target.value = null;
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <form method="post" action="#" id="#">
                                <div className="form-group files color">
                                    <label htmlFor="store" className="add-files" id="fileFather">
                                        <i className="fas fa-plus"/>
                                    </label>
                                    {this.state.files && (
                                        <label htmlFor="store" className="add-files" id="fileFather"
                                               onClick={e => this.uploadFiles(e)}>
                                            {this.state.btn
                                                && (<i className="fas fa-upload"/>)
                                                || (<i className="fas fa-spinner"/>)
                                            }
                                        </label>
                                    )}
                                    <input type="file" name="files[]" id="store" className="form-control-file"
                                           multiple={true}
                                           onChange={e => this.getFiles(e)} style={{display: 'none'}}/>


                                </div>
                            </form>
                        </div>
                    </div>
                    {this.state.processing && <ModalLoader/>}
                    {this.state.items && <ListFiles files={this.state.items} delete={this.deleteFile}/> || <Loader/>}
                </div>
                <NotificationContainer/>

            </div>
        );
    }
}