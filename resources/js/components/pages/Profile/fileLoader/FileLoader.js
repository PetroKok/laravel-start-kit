import React from 'react';

export default class FileLoader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            files: []
        };

    }

    getFiles(e) {
        this.setState({files: Array.from(e.target.files)});
    }

    uploadFiles() {
        let files = this.state.files;

        console.log(files);
    }


    render() {
        return (
            <div>

                <div className="container">
                    <div className="row">

                        <div className="col-md-12">
                            <form method="post" action="#" id="#">

                                <div className="form-group files color">
                                    <label>Upload Your File </label>
                                    <input type="file" name="files[]" className="form-control" multiple={true}
                                           onChange={e => this.getFiles(e)}/>
                                </div>

                            </form>


                        </div>
                    </div>
                </div>

            </div>
        );
    }
}