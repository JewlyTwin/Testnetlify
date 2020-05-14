import React, { Component } from "react";
import Factor from './Factor'
import axios from 'axios'
import Cookies from 'universal-cookie';
import DotLoader from "react-spinners/DotLoader"
import { css } from "@emotion/core";
import swal from 'sweetalert';
import moment from 'moment';

const override = css`
display: block;
margin: 0 auto;
border-color: red;
`;

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: {
        factor_Id: "",
        rating_factor: 0
      },
      second: {
        factor_Id: "",
        rating_factor: 0
      },
      third: {
        factor_Id: "",
        rating_factor: 0
      },
      fourth: {
        factor_Id: "",
        rating_factor: 0
      },
      fifth: {
        factor_Id: "",
        rating_factor: 0
      },
      sixth: {
        factor_Id: "",
        rating_factor: 0
      },
      seventh: {
        factor_Id: "",
        rating_factor: 0
      },
      eighth: {
        factor_Id: "",
        rating_factor: 0
      },
      service: [],
      factor: [],
      temp: [],
      factor_List: [],
      email: '',
      comment: '',
      loading: false,
      sec: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeemail = this.handleChangeemail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      comment: event.target.value
    });
  }

  handleChangeemail(event) {
    this.setState({
      email: event.target.value
    });
  }

  countTime() {
    const timecook = new Cookies().get('time');
    const time = new Date(timecook)
    const timenow = new Date()
    const sec = Math.floor((timenow - time) / 1000)
    this.setState({
      sec: sec
    })
  }

  componentWillMount() {
    const cookie = new Cookies().get('department');
    cookie.map((cookie) => this.state.service.push(cookie))
    if (this.state.service.includes("Doctor")) {
      this.state.temp.push("จุดลงทะเบียน")
      this.state.temp.push("จุดจ่ายยา")
      this.state.temp.push("แพทย์")
    }
    if (this.state.service.includes("Nurse")) {
      this.state.temp.push("จุดลงทะเบียน")
      this.state.temp.push("จุดจ่ายยา")
    }
    if (this.state.service.includes("Wound")) {
      this.state.temp.push("จุดลงทะเบียน")
      this.state.temp.push("จุดทำแผล")
    }
    if (this.state.service.includes("Mental")) {
      this.state.temp.push("จุดลงทะเบียน")
      this.state.temp.push("นักจิตวิทยา")
    }
    if (this.state.service.includes("Rest")) {
      this.state.temp.push("จุดลงทะเบียน")
      this.state.temp.push("สภาพแวดล้อม")
    }
    if (this.state.service.includes("Therapy")) {
      this.state.temp.push("จุดลงทะเบียน")
      this.state.temp.push("นักกายภาพบำบัด")
      this.state.temp.push("ผู้ช่วยนักกายภาพบำบัด")
    }
    const uniq = new Set(this.state.temp)
    this.state.factor.push(...uniq)
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    await this.countTime()
    this.setState({
      loading: true
    })

    if (this.state.first.rating_factor !== 0) {
      this.state.factor_List.push(this.state.first)
    }
    if (this.state.second.rating_factor !== 0) {
      this.state.factor_List.push(this.state.second)
    }
    if (this.state.third.rating_factor !== 0) {
      this.state.factor_List.push(this.state.third)
    }
    if (this.state.fourth.rating_factor !== 0) {
      this.state.factor_List.push(this.state.fourth)
    }
    if (this.state.fifth.rating_factor !== 0) {
      this.state.factor_List.push(this.state.fifth)
    }
    if (this.state.sixth.rating_factor !== 0) {
      this.state.factor_List.push(this.state.sixth)
    }
    if (this.state.seventh.rating_factor !== 0) {
      this.state.factor_List.push(this.state.seventh)
    }
    if (this.state.eighth.rating_factor !== 0) {
      this.state.factor_List.push(this.state.eighth)
    }

    await axios(
      {
        method: 'post',
        url: 'http://127.0.0.1:8000/api/rate',
        timeout: 10000,
        data: {
          rating: this.props.rating,
          comment: this.state.comment,
          email: this.state.email,
          rated_at: moment(new Date()).format('YYYY-MM-DD'),
          survey_Id: 1,
          timer: this.state.sec,
          factor_List: this.state.factor_List
        }
      })
      .then((response) => {
        console.log(response)
        this.setState({
          loading: false
        })
        window.location.href = "/success";
      })
      .catch((error) => {
        console.log(error)
        swal({
          title: "ไม่สามารถส่งแบบประเมินได้",
          text: "โปรลองอีกครั้งในภายหลัง\n"+error,
          icon: "error",
          button: "ปิด",
        });
        this.setState({
          loading: false
        })
      })
  }

  onConfirm = (factor) => {
    if (factor.type === "จุดลงทะเบียน") {
      this.setState({
        first: {
          rating_factor: factor.rating,
          factor_Id: 1
        }
      })
    }
    if (factor.type === "จุดจ่ายยา") {
      this.setState({
        second: {
          rating_factor: factor.rating,
          factor_Id: 2
        }
      })
    }
    if (factor.type === "แพทย์") {
      this.setState({
        third: {
          rating_factor: factor.rating,
          factor_Id: 3
        }
      })
    }
    if (factor.type === "จุดทำแผล") {
      this.setState({
        fourth: {
          rating_factor: factor.rating,
          factor_Id: 4
        }
      })
    }
    if (factor.type === "นักจิตวิทยา") {
      this.setState({
        fifth: {
          rating_factor: factor.rating,
          factor_Id: 5
        }
      })
    }
    if (factor.type === "สภาพแวดล้อม") {
      this.setState({
        sixth: {
          rating_factor: factor.rating,
          factor_Id: 6
        }
      })
    }
    if (factor.type === "นักกายภาพบำบัด") {
      this.setState({
        seventh: {
          rating_factor: factor.rating,
          factor_Id: 7
        }
      })
    }
    if (factor.type === "ผู้ช่วยนักกายภาพบำบัด") {
      this.setState({
        eighth: {
          rating_factor: factor.rating,
          factor_Id: 8
        }
      })
    }
  }

  goBack() {
    window.history.back();
  }

  render() {
    return (
      <div className="container">
        <div className="py-4 text-center">
          โปรดประเมินแผนกที่คุณได้ใช้บริการในวันนี้ <br />
          (ประเมินเฉพาะส่วนที่ได้รับบริการ)
        </div>
        {this.state.factor.map((factor, i) => {
          return (
            <Factor textdepart={factor} image={factor} confirm={this.onConfirm} type={factor} />
          )
        })}
        <form onSubmit={this.handleSubmit}>
          {this.props.rating === "1" ?
            <div className="my-4">

              แสดงความคิดเห็นเพิ่มเติม<span className="text-danger">*</span>
              <input type="text" className="form-control" value={this.state.comment} onChange={this.handleChange} required />

              <div className="mt-3">กรอกอีเมลล์ <br/><span style={{color: "grey"}}>(เพื่อให้ติดต่อกลับหรือเพื่อแจ้งผลการปรับปรุงตามข้อเสนอแนะ)</span></div>
              <input type="email" className="form-control" value={this.state.email} onChange={this.handleChangeemail} />
            </div>
            :
            <div className="my-4">
              แสดงความคิดเห็นเพิ่มเติม
              <input type="text" className="form-control" value={this.state.comment} onChange={this.handleChange} />
            </div>
          }

          <div className="float-right px-3 row pb-5">
            <div onClick={this.goBack} className="buttonback pl-4 pr-4 pt-2 pb-2">กลับ</div>

            {this.state.loading ?
              <button className="buttonnext pl-4 pr-4 pt-2 pb-2 ml-3" disabled>
                <DotLoader
                  css={override}
                  size={20}
                  color={"white"} />
              </button>
              :
              <div>
                <button className="buttonnext pl-4 pr-4 pt-2 pb-2 ml-3">
                  <span className="log">ส่งแบบประเมิน</span>
                </button>
              </div>
            }
          </div>
        </form>
      </div>


    );
  }

}

export default Body;
