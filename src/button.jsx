import './button.css'
import Email from './assets/email.png'
import Linkedin from './assets/linkedin.png'
export default function button () {
    return (
        <div className='btnHolder'>
            <button className="btn1">
                <img src={Email} />
                Email
            </button>
            <button className='btn2'>
                <img src={Linkedin} />
                Email
            </button>
        </div>
    )
}