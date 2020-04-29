import React, { Component } from 'react';
import './Interface.css';
// import Images from '../img/emoji_happy.png'
import Header from './Header.js'
import Body from './Body.js'
import Images from '../img/emoji_happy.png'
import Cookies from 'universal-cookie';

class HappyInterface extends Component {
    render() {
        const cookies = new Cookies();
        console.log(cookies.get('department'));
        return (
            <div>

                <Header Happy="พึงพอใจ" Images={Images}
                    style={{ 'background': '#A8DCD1' }}>
                </Header>
                
                <Body HappyQuestion="แผนกใดที่ทำให้คุณพึงพอใจในการใช้บริการในวันนี้"
                    ChoosemoreHappy="(เลือกได้มากกว่า 1 ข้อ)"
                    CommentHappy="แสดงความคิดเห็นเพิ่มเติม (ไม่บังคับ)"
                    rating="3">
                </Body>


            </div>
        );
    }
}

export default HappyInterface;

