import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state={
            tempValue:'',
            userEdit:{}

        }
    }
    
    showButton=()=>{
        if(this.props.showFormFlag === false){
            return <div className="btn btn-block btn-outline-info" onClick={()=>this.props.connectFlag()}>Add</div>
        }
        else{
            return <div className="btn btn-block btn-outline-secondary" onClick={()=>this.props.connectFlag()} >Close</div>
            }
    }

    isChange = (event) =>{
        this.setState({
            tempValue:event.target.value
        });
        this.props.gettextsearch(event.target.value);
    }
    isShowEditUser = () => {
        if(this.props.edituserflag === true){
            return <EditUser editUserObject={this.props.editUserObject} 
            getUserEditInfo={(user)=> {this.getUserEditInfo(user)}}
            changeEditUserFlag = {() => {this.props.changeEditUserFlag()}}/>
        }
    }
    getUserEditInfo = (user) => {
        this.setState({
            userEdit: user
        });
        this.props.getUserEditInfo(user);
    }
    render() {
        return (
            <div className="col-12">
                {this.isShowEditUser()}
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" style={{ width: '300px' }} onChange={(event)=>this.isChange(event)} className="form-control" placeholder="Nhập tên cần tìm" />
                        <div className="btn btn-info" onClick={(dl)=>this.props.gettextsearch(this.state.tempValue)}>Search</div>
                    </div>
                    <div className="btn-group1">
                        {this.showButton()}
                    </div>
                </div>
                <hr/>
            </div>
        );
    }
}

export default Search;