import React, { Component } from 'react';
import './Interface.css';
import Header from './Header.js'
import Body from './Body.js'
import Images from '../img/emoji_bad.png'

class BadInterface extends Component {
    render() {    
        return (
            <div>
        
                <Header Bad="ไม่พึงพอใจ" Images={Images} 
                        style={{ 'background': '#FFB79C'}}>
                </Header>

                <Body   BadQuestion="แผนกใดที่ทำให้คุณไม่พึงพอใจในการใช้บริการในวันนี้" 
                        ChoosemoreBad="(เลือกได้มากกว่า 1 ข้อ)"
                        CommentBad="แสดงความคิดเห็นเพิ่มเติม"
                        rating="1">
                        
                </Body>


            </div>
           



        );
    }
}

export default BadInterface;
