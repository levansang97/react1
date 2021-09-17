import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:"",
            name:"",
            tel:"",
            permission:""
        }
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
        var item ={};
        item.id = this.state.id;
        item.name = this.state.name;
        item.tel = this.state.tel;
        item.permission = this.state.permission;
    }
    
    checkStatus = () => {
        if (this.props.showFormFlag === true) {
            return (
                <div className="col">
                    <div className="card border-dark mb-3 mt-2">
                        <div className="card-header text-center">Thêm mới User</div>
                        <div className="card-body text-dark">
                            <form>
                                <div className="form-group">
                                    <input type="text" name = "name" className="form-control" onChange={(event) => {this.isChange(event)}} placeholder="Tên đăng nhập" />
                                </div>
                                <div className="form-group">
                                    <input type="text" name = "tel" className="form-control" onChange={(event) => {this.isChange(event)}} placeholder="Số điện thoại" />
                                </div>
                                <div className="form-group">
                                    <select className="form-select" name = "permission" onChange={(event) => {this.isChange(event)}} aria-label="Default select example">
                                        <option value>Phân quyền hệ thống</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Moderator</option>
                                        <option value={3}>Normal User</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input type="reset" className="btn btn-block btn-primary" onClick = {(name, tel, permission) => this.props.getuserinfo(this.state.name, this.state.tel, this.state.permission)} value="Thêm mới" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="card text-left">
                {this.checkStatus()}
            </div>


        );
    }
}

export default AddUser;