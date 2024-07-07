import './error.css';
import error from '../images/404.jpg';
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate()
    return (
        <div className='error'>
            <img src={error} alt="404 Ghost" className='ghost' />
            <h1 className='errorHeading'>Opps! You've ended up in a haunted <br />corner of our website. </h1>
            <p className='errorPara'>Don't worry, just follow the ghost and it will lead you back to safety. </p>
            <button className='errorButton' onClick={() => navigate('/')}>Go Back Home</button>
        </div>
    )
}

export default Error;