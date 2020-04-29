import React, { Component } from 'react'
import './Survey.css'
import happy from '../img/emoji_happy.png'
import neutral from '../img/emoji_neutral.png'
import bad from '../img/emoji_bad.png'
import hcu from '../img/HCU-bg2.png'
import './Interface.css'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Rating: "",
            Choose: false,
            rate:0
        };
        this.setChoose = this.setChoose.bind(this);
        this.sendNext = this.sendNext.bind(this);
    }

    setChoose = ( rating ) => {
        this.setState({
            Rating: rating,
            Choose: true
        });
    }

    goBack() {
        window.history.back();
    }

    sendNext() {
        this.props.history.push({
            pathname: `/${this.state.Rating}`,
        })
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
                <div className="pt-5 text-center">
                    <p className="text-center Asking">คุณรู้สึกอย่างไรกับ
                    <span className="redAsking"> ภาพรวม</span></p>
                    <p className="text-center Asking">ของการใช้บริการในวันนี้ ?</p>
                </div>
                <div className="container pt-4">
                    <div className="row">
                        <div className="col-4 pl-3 pr-1" 
                            style={ this.state.Rating !== 'bad' && this.state.Choose === true ? {opacity: 0.3} : {} }
                            onClick={() => this.setChoose("bad")}>
                            <div className="card badCard border-0">
                                <div className="text-center pt-4">
                                    <img src={bad} alt="bad" />
                                </div>
                                <div className="card-body text-center pl-1 pr-1">
                                    ไม่พึงพอใจ
                                </div>
                            </div>
                        </div>
                        <div className="col-4 pl-2 pr-2" 
                            style={ this.state.Rating !== 'neutral' && this.state.Choose === true ? {opacity: 0.3} : {} }
                            onClick={() => this.setChoose('neutral')}>
                            <div className="card neutralCard border-0">
                                <div className="text-center pt-4">
                                    <img className="survey_img" src={neutral} alt="neutural" />
                                </div>
                                <div className="card-body text-center pl-1 pr-1">
                                    ปานกลาง
                            </div>
                            </div>
                        </div>
                        <div className="col-4 pl-1 pr-3" 
                            style={ this.state.Rating !== 'happy' && this.state.Choose === true ? {opacity: 0.3} : {} }
                            onClick={() => this.setChoose('happy')}>
                            <div className="card happyCard border-0" >
                                <div className="text-center pt-4">
                                    <img className="survey_img" src={happy} alt="happyPage" />
                                </div>
                                <div className="card-body text-center pl-1 pr-1">
                                    พึงพอใจ
                             </div>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="float-right py-5 px-3">
                    <button onClick={this.goBack} className="buttonback pl-4 pr-4 pt-2 pb-2">กลับ</button>
                    <button
                    disabled={ this.state.Choose === true?false:true } 
                    onClick={this.sendNext} className="buttonnext pl-4 pr-4 pt-2 pb-2 ml-3">
                        ถัดไป
                    </button>
                </div>

            </div>

        );
    }
}

export default App;

