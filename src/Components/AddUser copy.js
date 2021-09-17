import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Updatestatus: false
        }
    }
    showAddButton = () => {
        if (this.state.Updatestatus === false) {
            return <div className="btn btn-block btn-outline-info" onClick={() => this.changeStatus()}>Add</div>;
        }
        else {
            return <div className="btn btn-block btn-outline-secondary" onClick={() => this.changeStatus()}>Close</div>;
        }
    }

    changeStatus = () => {
        this.setState({
            Updatestatus: !this.state.Updatestatus
        });
    }

    showForm = () => {
        if (this.state.Updatestatus === true) {
            return (
                <div className="card border-dark mb-3 mt-2">
                    <div className="card-header text-center">Thêm mới User</div>
                    <div className="card-body text-dark">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Tên đăng nhập" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Số điện thoại" />
                        </div>
                        <div className="form-group">
                            <select className="form-select" aria-label="Default select example">
                                <option selected value={1}>Phân quyền hệ thống</option>
                                <option value={1}>Admin</option>
                                <option value={2}>Moderator</option>
                                <option value={3}>Normal</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <div className="btn btn-block btn-primary" >Thêm mới</div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="col-3">
                <div className="card text-left">
                    {this.showAddButton()}
                    {this.showForm()}
                </div>
            </div>

        );
    }
}

export default AddUser;