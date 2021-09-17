import React, { Component } from 'react';
import TableDataRow from './TableDataRow.js';

class TableData extends Component {
    clickDelete = (id) => {
        this.props.clickDelete(id)
    }
    mappingDataUser = () =>
        this.props.datauserprops.map((value,key)=>(
            <TableDataRow clickDelete = {(id) => {this.clickDelete(id)}}
            clickedituser={(user)=>this.props.edituser(value)} key={key} username={value.name} stt={key+1} id={value.id} tel={value.tel} permission={value.permission} 
            changeEditUserFlag = {() => {this.props.changeEditUserFlag()}}/>
        ))
    render() {
        return (
            <div className="col">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Họ &amp; Tên</th>
                            <th>Số điện thoại</th>
                            <th>Quyền</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mappingDataUser()}
                    </tbody>
                </table>
            </div>

        );
    }
}

export default TableData;