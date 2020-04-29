import React, { Component } from 'react';
import './Interface.css';
// import Images from '../img/emoji_happy.png'
import Header from './Header.js'
import Body from './Body.js'
import Images from '../img/emoji_neutral.png'

class NeutralInterface extends Component {
    render() {    
        return (
            <div>
        
                <Header Neutral="ปานกลาง" Images={Images} 
                        style={{ 'background': '#FDE388' }}>
                </Header>
                
                <Body NeutralQuestion="แผนกใดที่ต้องปรับปรุงเพิ่มจึงจะทำให้คุณพึงพอใจ" 
                      ChoosemoreNeutral="(เลือกได้มากกว่า 1 ข้อ)"
                      CommentNeutral="แสดงความคิดเห็นเพิ่มเติม (ไม่บังคับ)"
                      rating="2">
                </Body>

            </div>
        );
    }
}

export default NeutralInterface;

