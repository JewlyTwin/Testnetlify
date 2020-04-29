import React, { Component } from 'react';
import './Interface.css';
import Images from '../img/successful.png'

class successful extends Component {
    render() {
        return (
            <div>
                <div className="container pt-5">

                    <div className="text-center pt-5">
                        <div className="pt-2">
                            <img className="successfullimg pt-5" src={Images} alt="happy" />
                        </div>
                    </div>

                    <div className="thankyou text-center pt-5">
                        ขอบคุณสำหรับความคิดเห็น
                     </div>
                    <div className="thxcomment text-center pt-3">
                        ความคิดเห็นของคุณมีค่าเราจะนำทุกความคิดเห็น
                    <p> ของคุณ ไปปรับปรุงการให้บริการของเรา </p>
                    </div>

                </div>
            </div>
        );
    }
}

export default successful;
