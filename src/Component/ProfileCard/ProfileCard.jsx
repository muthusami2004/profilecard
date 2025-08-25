import './ProfileCard.css';
import Name from '/src/Component/Name/Name.jsx';

const Profilecard = () => {
    return (
        <div className='card'>
            <h1>Profile Card</h1>
             <img 
                src="/muthu.jpeg" 
                alt="Profile Avatar" 
                className="avatar"
            />
            <Name firstName="Muthusami" lastName="Boominathan"/>
            <h2>Age 22</h2>
            <h3>Location Tiruvannamalai</h3>
            <h3>Address</h3>
        </div>
    );
}

export default Profilecard;