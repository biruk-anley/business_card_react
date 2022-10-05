
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
    AiFillFacebook
  } from "react-icons/ai";

const Footer = () => {
    return ( 
        <div className="footer">
            <ul>
                <li><a href="http://twitter.com"><AiOutlineTwitter/></a></li>
                <li><a href="http://faceboook"><AiFillFacebook/> </a></li>
                <li><a href="http://instagram"><AiFillInstagram/></a></li>
                <li> <a href="http://github"><AiFillGithub/></a></li>
            </ul>
         
            
            
            
           

        </div>
     );
}
 
export default Footer;