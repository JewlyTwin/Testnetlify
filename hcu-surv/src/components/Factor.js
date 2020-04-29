import React, { Component } from "react";
import HappyEmo from '../img/emoji_happy.png'
import NeutralEmo from '../img/emoji_neutral.png'
import BadEmo from '../img/emoji_bad.png'

class Body extends Component {

  constructor(props) {
    super(props);
    this.state = {
      comment: 'This is comment',
      rateat: 0,
      order: {
        rating: 0,
        type: ""
      }
    };
    this.onConfirmClick = this.onConfirmClick.bind(this);
  }

  onConfirmClick = async (event) => {
    event.preventDefault()
    if (this.state.order.rating === event.target.value){
      await this.setState({
        order: {
          rating: 0,
          type: this.props.type
        }
      })
      this.props.confirm(this.state.order)
    }else{
      await this.setState({
        order: {
          rating: event.target.value,
          type: this.props.type
        }
      })
      this.props.confirm(this.state.order)
    }
    
  }

  render() {
    return (
      <div>
        <div className="col-12 row m-0 pt-3 p-0">
          <div className="col-4 text-center justify-content-center align-self-center p-0">
            <img src={`/Factor/${this.props.image}.png`} alt=""/>
          </div>
          <div className="col-8 row pr-0">
            <div className="col-4 text-center justify-content-center align-self-center" 
            style={ this.state.order.rating !== '1' ? {opacity: 0.3} : {} }
            >
              <label className="m-0" value="1"> 
                <img src={BadEmo} width="40px" alt=""/>
                <input id="1" className="hide" type="radio" name="rating" value="1"  onClick={this.onConfirmClick}></input>
              </label>
            </div>
            <div className="col-4 text-center justify-content-center align-self-center"
            style={ this.state.order.rating !== '2' ? {opacity: 0.3} : {} }
            >
              <label className="m-0" value="2"> 
                <img src={NeutralEmo} width="40px" alt=""/>
                <input id="2" className="hide" type="radio" name="rating" value="2"  onClick={this.onConfirmClick}/>
              </label>
            </div>
            <div className="col-4 text-center justify-content-center align-self-center"
            style={ this.state.order.rating !== '3' ? {opacity: 0.3} : {} }
            >
              <label className="m-0" value="3"> 
                <img src={HappyEmo} width="40px" alt=""/>
                <input id="3" className="hide" type="radio" name="rating" value="3"  onClick={this.onConfirmClick}/>
              </label>
            </div>
          </div>
          <div className="col-12 row m-0 p-0" >
            <div className="col-4 text-center justify-content-center align-self-center p-0 pt-1">
              {this.props.textdepart}
            </div>
          </div>
          </div>
      </div>
      
    );
  }
}
export default Body;
