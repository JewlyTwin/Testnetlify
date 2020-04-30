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

        <div className="required col-12 row pt-4 px-0 m-0">
          <div className="col-10">
            <label for="checkbox">
              <img src={doctor} alt=""/>
              <span className="pl-3">ตรวจรักษาโดยแพทย์</span>
            </label>
          </div>
          <div className="col-2 check_box text-center ">
            <input type="checkbox" id="checkbox" className="check_box" value={"Doctor"} onChange={this.handleChangeDoctor}
            defaultChecked={this.state.Doctor}
            />
            <label for="checkbox"></label>
          </div>
        </div>

        <div className="required col-12 row pt-3 px-0 m-0">
          <div className="col-10">
            <label for="checkbox2">
              <img src={nurse} alt=""/>
              <span className="pl-3">ตรวจรักษาโดยพยาบาลวิชาชีพ</span>
            </label>
          </div>
          <div className="col-2 check_box text-center" >
            <input type="checkbox" id="checkbox2" className="check_box" value={"Nurse"} onChange={this.handleChangeNurse}
            defaultChecked={this.state.Nurse}
            />
            <label for="checkbox2"></label>
          </div>
        </div>

        <div className="required col-12 row pt-3 px-0 m-0">
          <div className="col-10">
            <label for="checkbox3">
              <img src={wound} alt=""/>
              <span className="pl-3">บริการทำแผล</span>
            </label>
          </div>
          <div className="col-2 check_box text-center">
            <input type="checkbox" id="checkbox3" className="check_box" value={"Wound"} onChange={this.handleChangeWound}
            defaultChecked={this.state.Wound}
            />
            <label for="checkbox3"></label>
          </div>
        </div>

        <div className="required col-12 row pt-3 px-0 m-0">
          <div className="col-10">
            <label for="checkbox4">
              <img src={mental} alt=""/>
              <span className="pl-3">รับคำปรึกษาโดยนักจิตวิทยา</span>
            </label>
          </div>
          <div className="col-2 check_box text-center">
            <input type="checkbox" id="checkbox4" className="check_box" value={"Mental"} onChange={this.handleChangeMental}
            defaultChecked={this.state.Mental}
            />
            <label for="checkbox4"></label>
          </div>
        </div>

        <div className="required col-12 row pt-3 px-0 m-0">
          <div className="col-10">
            <label for="checkbox5">
              <img src={rest} alt=""/>
              <span className="pl-3">นอนพักสังเกตอาการ</span>
            </label>
          </div>
          <div className="col-2 check_box text-center">
            <input type="checkbox" id="checkbox5" className="check_box" value={"Rest"} onChange={this.handleChangeRest}
            defaultChecked={this.state.Rest}
            />
            <label for="checkbox5"></label>
          </div>
        </div>

        <div className="required col-12 row pt-3 px-0 m-0">
          <div className="col-10">
            <label for="checkbox6">
              <img src={therapy} alt=""/>
              <span className="pl-3">กายภาพบำบัด</span>
            </label>
          </div>
          <div className="col-2 check_box text-center">
            <input type="checkbox" id="checkbox6" className="check_box" value={"Therapy"} onChange={this.handleChangeTherapy} 
            defaultChecked={this.state.Therapy}/>
            <label for="checkbox6"></label>
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
