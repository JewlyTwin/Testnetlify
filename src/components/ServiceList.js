import React, { Component } from 'react'
import './Survey.css'
import doctor from '../img/department/doctor.png'
import mental from '../img/department/mental.png'
import nurse from '../img/department/nurse.png'
import rest from '../img/department/rest.png'
import therapy from '../img/department/therapy.png'
import wound from '../img/department/wound.png'
import hcu from '../img/HCU-bg2.png'
import './Interface.css';
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Doctor: false,
      Nurse: false,
      Wound: false,
      Mental: false,
      Rest: false,
      Therapy: false,
      service:[]
    };

    this.handleChangeDoctor = this.handleChangeDoctor.bind(this);
    this.handleChangeNurse = this.handleChangeNurse.bind(this);
    this.handleChangeWound = this.handleChangeWound.bind(this);
    this.handleChangeMental = this.handleChangeMental.bind(this);
    this.handleChangeRest = this.handleChangeRest.bind(this);
    this.handleChangeTherapy = this.handleChangeTherapy.bind(this);
    this.setCookie = this.setCookie.bind(this);
  }

  setCookie() {
    const cookies = new Cookies();
    var data = [];
    if (this.state.Doctor === true) {
      data.push("Doctor");
    }
    if (this.state.Nurse === true) {
      data.push("Nurse");
    }
    if (this.state.Wound === true) {
      data.push("Wound");
    }
    if (this.state.Mental === true) {
      data.push("Mental");
    }
    if (this.state.Rest === true) {
      data.push("Rest");
    }
    if (this.state.Therapy === true) {
      data.push("Therapy");
    }

    cookies.set('department', data, { path: '/' , maxAge: 3600},);
    cookies.set('time', new Date(), { path: '/' , maxAge: 3600},);
  }

  componentWillMount() {
    const cookie = new Cookies().get('department');
    if(cookie != null){
      cookie.map((cookie)=> this.state.service.push(cookie))
    }
    if(this.state.service.includes("Doctor")){
      this.handleChangeDoctor()
    }
    if(this.state.service.includes("Nurse")){
      this.handleChangeNurse()
    }
    if(this.state.service.includes("Wound")){
      this.handleChangeWound()
    }
    if(this.state.service.includes("Mental")){
      this.handleChangeMental()
    }
    if(this.state.service.includes("Rest")){
      this.handleChangeRest()
    }
    if(this.state.service.includes("Therapy")){
      this.handleChangeTherapy()
    }
  }

  handleChangeDoctor() {
    this.setState({
      Doctor: !this.state.Doctor,
    });
  }

  handleChangeNurse() {
    this.setState({
      Nurse: !this.state.Nurse,
    });
  }

  handleChangeWound() {
    this.setState({
      Wound: !this.state.Wound,
    });
  }

  handleChangeMental() {
    this.setState({
      Mental: !this.state.Mental,
    });
  }

  handleChangeRest() {
    this.setState({
      Rest: !this.state.Rest,
    });
  }

  handleChangeTherapy() {
    this.setState({
      Therapy: !this.state.Therapy,
    });
  }

  render() {

    return (
      <div>

        <img className="headerbg" src={hcu} alt="hrc" />
        <div className="headerHome">
          <div className="headerText pl-3">
            <h3>ระบบประเมิน</h3>
            <h4>กลุ่มงานบริการสุขภาพและอนามัย</h4>
          </div>
        </div>

        <div className="chooseTopic pt-4 text-center" >
          <div>โปรดเลือกรูปแบบการใช้บริการที่ได้รับในวันนี้</div>
          <div>(สามารถเลือกได้มากกว่า 1 บริการ)</div>
        </div>

        <div className="container mt-3 mb-2">
          <div className="col-12 row radius m-0 py-2" onClick={this.handleChangeDoctor} 
            style={this.state.Doctor ? {backgroundColor: "#3AA4AD", color: "white"} : {backgroundColor: "#DFDFDF"}}>
            <div className="col-3 text-center">
              <img src={doctor} alt=""/>
            </div>
            <div className="col-9 justify-content-center align-self-center">
              <span>ตรวจรักษาโดยแพทย์</span>
            </div>
          </div>
        </div>

        <div className="container mt-3 mb-2">
          <div className="col-12 row radius m-0 py-2" onClick={this.handleChangeNurse} 
            style={this.state.Nurse ? {backgroundColor: "#3AA4AD", color: "white"} : {backgroundColor: "#DFDFDF"}}>
            <div className="col-3 text-center">
            <img src={nurse} alt=""/>
            </div>
            <div className="col-9 justify-content-center align-self-center">
              <span>ตรวจรักษาโดยพยาบาลวิชาชีพ</span>
            </div>
          </div>
        </div>

        <div className="container mt-3 mb-2">
          <div className="col-12 row radius m-0 py-2" onClick={this.handleChangeWound} 
            style={this.state.Wound ? {backgroundColor: "#3AA4AD", color: "white"} : {backgroundColor: "#DFDFDF"}}>
            <div className="col-3 text-center">
              <img src={wound} alt=""/>
            </div>
            <div className="col-9 justify-content-center align-self-center">
              <span>บริการทำแผล</span>
            </div>
          </div>
        </div>

        <div className="container mt-3 mb-2">
          <div className="col-12 row radius m-0 py-2" onClick={this.handleChangeMental} 
            style={this.state.Mental ? {backgroundColor: "#3AA4AD", color: "white"} : {backgroundColor: "#DFDFDF"}}>
            <div className="col-3 text-center">
              <img src={mental} alt=""/>
            </div>
            <div className="col-9 justify-content-center align-self-center">
              <span>รับคำปรึกษาโดยนักจิตวิทยา</span>
            </div>
          </div>
        </div>

        <div className="container mt-3 mb-2">
          <div className="col-12 row radius m-0 py-2" onClick={this.handleChangeRest} 
            style={this.state.Rest ? {backgroundColor: "#3AA4AD", color: "white"} : {backgroundColor: "#DFDFDF"}}>
            <div className="col-3 text-center">
            <img src={rest} alt=""/>
            </div>
            <div className="col-9 justify-content-center align-self-center">
              <span>นอนพักสังเกตอาการ</span>
            </div>
          </div>
        </div>

        <div className="container mt-3 mb-2">
          <div className="col-12 row radius m-0 py-2" onClick={this.handleChangeTherapy} 
            style={this.state.Therapy ? {backgroundColor: "#3AA4AD", color: "white"} : {backgroundColor: "#DFDFDF"}}>
            <div className="col-3 text-center">
              <img src={therapy} alt=""/>
            </div>
            <div className="col-9 justify-content-center align-self-center">
              <span>กายภาพบำบัด</span>
            </div>
          </div>
        </div>

        <div className="text-right py-4 pr-4">
          <Link to={{ pathname: "/survey" }}>
            <button disabled={ this.state.Doctor || this.state.Nurse || this.state.Mental 
              || this.state.Rest || this.state.Therapy || this.state.Wound   
              === true ? false : true } 
              onClick={this.setCookie} className="buttonsubmit pt-2 pb-2 px-4">
              ถัดไป
            </button>
          </Link>
        </div>
        
      </div>

    );
  }
}

export default App;
