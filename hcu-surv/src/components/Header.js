import React, { Component } from 'react';
import './Interface.css';



class Header extends Component {
    render() {
        return (
            <div>

                <div className="header" style={this.props.style}>

                    <div className="all text-center pt-5">
                        <div className="topic">
                            <div className="image">
                                <img class="surveyimg mr-3" src={this.props.Images} alt="happy" />

                                <span>{this.props.Happy}</span>
                                <span>{this.props.Neutral}</span>
                                <span>{this.props.Bad}</span>
                                {/* <button className="button ml-4" onClick={() => window.location.assign("/")}>เปลี่ยน</button> */}


                            </div>
                        </div>
                    </div>

                </div>

            </div >
        );
    }
}

export default Header;

