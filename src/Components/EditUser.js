import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.editUserObject.id,
            name: this.props.editUserObject.name,
            tel: this.props.editUserObject.tel,
            permission: this.props.editUserObject.permission
        }
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
    }
    saveUser = () => {
        var userinfo ={};
        userinfo.id = this.state.id;
        userinfo.name = this.state.name;
        userinfo.tel = this.state.tel;
        userinfo.permission = this.state.permission;
        this.props.getUserEditInfo(userinfo);
        this.props.changeEditUserFlag();
    }
    render() {
        console.log(this.state);
        return (
            <div className="col">
                    <div className="card text-white bg-warning mb-3 mt-2">
                        <div className="card-header text-center">Edit User</div>
                        <div className="card-body text-dark">
                            <form>
                                <div className="form-group">
                                    <input onChange = {(event) => {this.isChange(event)}}
                                    defaultValue={this.props.editUserObject.name} type="text" name = "name" className="form-control"  placeholder="Tên đăng nhập" />
                                </div>
                                <div className="form-group">
                                    <input onChange = {(event) => {this.isChange(event)}}
                                    defaultValue={this.props.editUserObject.tel} type="text" name = "tel" className="form-control"  placeholder="Số điện thoại" />
                                </div>
                                <div className="form-group">
                                    <select onChange = {(event) => {this.isChange(event)}}
                                    defaultValue={this.props.editUserObject.permission} className="form-select" name = "permission"  aria-label="Default select example">
                                        <option >Phân quyền hệ thống</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Moderator</option>
                                        <option value={3}>Normal User</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="button" className="btn btn-block btn-danger" onClick = {() => {this.saveUser()}} value="Save" />
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
        );
    }
}

export default EditUser;