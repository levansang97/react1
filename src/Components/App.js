import './../App.css';
import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json';
import { v1 as uuidv1 } from 'uuid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      FormStatus: false,
      Data: [],
      searchText: '',
      edituserflag: false,
      editUserObject:{}
    }
  }
  
  componentWillMount() {
    //check localstorage
    if(localStorage.getItem('userData')===null){
      localStorage.setItem('userData', JSON.stringify(DataUser));
    }
    else{
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        Data:temp
      });
    }
  }
  
  
  changeStatus = () =>{
    this.setState({
      FormStatus: !this.state.FormStatus
    })
  }

  getTextSearch = (dl) =>{
    this.setState({
      searchText:dl
    })
  }
  getUserInfo = (name, tel, permission) => {
    var item ={};
        item.id = uuidv1();
        item.name = name;
        item.tel = tel;
        item.permission = permission;
    var items = this.state.Data;
    items.push(item);
    this.setState({
      Data:items
    })
    localStorage.setItem('userData', JSON.stringify(items));
  }

  changeEditUserFlag = () => {
    this.setState({
      edituserflag: !this.state.edituserflag
    })
  }
  editUser = (user) => {
    this.setState({
      editUserObject:user
    })
  }
  getUserEditInfo = (userinfo) => {
    this.state.Data.forEach((value, key) => {
      if(value.id === userinfo.id){
        value.name = userinfo.name;
        value.tel = userinfo.tel;
        value.permission = userinfo.permission;
      }
    })
    localStorage.setItem('userData', JSON.stringify(this.state.Data));
  }
  clickDelete = (id) => {
    var tempData = this.state.Data.filter(item => item.id !== id );
    this.setState({
      Data:tempData
    })
    localStorage.setItem('userData', JSON.stringify(tempData));
}
  render() {
    //localStorage.setItem('userData', JSON.stringify(DataUser));
    var resultSearch =[]
    this.state.Data.forEach((item)=>{
      if(item.name.indexOf(this.state.searchText)!== -1){
        resultSearch.push(item);
      }
    })
    return (
      <div>
        <Header/>
        <div className="searchForm">
          <div className="contaniner" style={{paddingLeft: '30px', paddingRight: '30px'}}>
            <div className="row">
            <Search edituserflag = {this.state.edituserflag} 
            gettextsearch={(dl)=> this.getTextSearch(dl)} 
            connectFlag={()=> this.changeStatus()} 
            showFormFlag={this.state.FormStatus}
            changeEditUserFlag = {() => {this.changeEditUserFlag()}}
            editUserObject={this.state.editUserObject}
            getUserEditInfo={(userinfo) => {this.getUserEditInfo(userinfo)}}/>
            <TableData clickDelete = {(id) => {this.clickDelete(id)}}
            edituser={(user)=>this.editUser(user)} datauserprops={resultSearch}
            changeEditUserFlag = {() => {this.changeEditUserFlag()}}/>
            <AddUser getuserinfo={(name, tel, permission) => this.getUserInfo(name, tel, permission)} showFormFlag={this.state.FormStatus}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

