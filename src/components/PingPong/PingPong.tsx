import './PingPong.scss'
import ball from '../../assets/Tech-icons/oie_transparent.png'
import { Link } from 'react-router-dom'

const PingPong = () => {
    return (
        <Link className='field' to='https://www.linkedin.com/company/freelance-fiends-flf/' target='_blank' rel='noreferrer'>
            <div className="ping"></div>
            <div className="pong"></div>
            <img src={ball} alt="" className='ball absolute'></img>
        </Link>
    )
}

export default PingPong;