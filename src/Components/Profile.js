import me from '../images/me.PNG';
import About from './About';
import Interst from './Interst';
import Footer from './Footer';
import {AiOutlineMail,AiFillLinkedin} from "react-icons/ai";
const Profile = () => {
    return ( 
        <div className="profile">
            <img src={me} alt=""  className='me'/>
            <div className="content">
                <p className='name'>Biruk Anley</p>
                <p className='prof'>Front End Developer</p>
                <p className='em'>birukanley1991@gmail.com</p>
                <div className="buttons">
                    <div className="email">
                        <span><AiOutlineMail/></span><p className='idea'>Email</p><span></span>
                        
                        
                    </div>
                    <div className="linkedin">
                        <span><AiFillLinkedin/></span><p  className='idea'>Linkdin</p><span></span>
                        
                        
                    </div>
                </div>
                
                <About/>
                <Interst/>
                <Footer/>
                

            </div>
        </div>
     );
}
 
export default Profile;