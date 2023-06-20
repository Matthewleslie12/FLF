import './PingPong.scss'
import ball from '../../assets/Tech-icons/oie_transparent.png'
import { Link } from 'react-router-dom'

const PingPong = () => {
    return (
        <div className="field">
            <div className="ping"></div>
            <div className="pong"></div>
            <Link to='https://www.linkedin.com/company/freelance-fiends-flf/' target='_blank' rel='noreferrer'>
                <img src={ball} alt="" className='ball absolute'></img>
            </Link>
        </div>
    )
}

export default PingPong;