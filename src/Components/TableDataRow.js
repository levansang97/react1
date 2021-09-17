import React, { Component } from 'react';

class TableDataRow extends Component {
    showPermission = () =>{
        if(this.props.permission===1){
            return "Admin";
        }
        else if(this.props.permission === 2){
            return "Moderator";
        }
        else{
            return "Normal User";
        }
    }
    clickEdit=() => {
        this.props.clickedituser();
        this.props.changeEditUserFlag();
    }
    clickDelete = (id) => {
        this.props.clickDelete(id);
    }
    render() {
        return (
            <tr>
                <td>{this.props.stt}</td>
                <td>{this.props.username}</td>
                <td>{this.props.tel}</td>
                <td>{this.showPermission()}</td>
                <td>
                    <div className="btn-group">
                        <div className="btn btn-warning edit" onClick={()=>this.clickEdit()}><i className="fa fa-edit">Edit</i></div>
                        <div className="btn btn-danger delete" onClick={() => {this.clickDelete(this.props.id)}}><i className="fa fa-delete">Delete</i></div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;