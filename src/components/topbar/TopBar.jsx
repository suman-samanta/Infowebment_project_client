import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import './topbar.css';

const TopBar=()=>{

    const {user,dispatch}=useContext(Context);
    const PF="http://localhost:5000/images/"

    const handleLogout=()=>{
        dispatch({type:"LOGOUT"})
    }
    return (
        <>
            <div className="top">
                <div className="topleft">
                    <i className="topIcon fa-brands fa-facebook-square"></i>
                    <i className="topIcon fa-brands fa-instagram-square"></i>
                    <i className="topIcon fa-brands fa-pinterest-square"></i>
                    <i className="topIcon fa-brands fa-twitter-square"></i>   
                    
                </div>
                <div className="topcenter">
                    <ul className="topList">
                        <li className="topListItem">
                           <Link className="link" to="/"> HOME</Link>
                        </li>
                        {/* <li className="topListItem"> 
                           <Link className="link" to="/about">ABOUT US</Link>
                        </li> */}
                        {/* <li className="topListItem"> 
                           <Link className="link" to="/contact">CONTACT US</Link>
                        </li> */}
                        <li className="topListItem">  
                           <Link className="link" to="/upload">Upload a video</Link>
                        </li>
                        <li className="topListItem" onClick={handleLogout}>
                            {user && "LOGOUT"}
                        </li>
                    </ul>
                </div>
                <div className="topright">

                
                 {
                     user ? ( 

                        <img className="topImg" src={PF + user.profilePic} alt="" />

                        /* <Link to="/setting">
                            
                            <img className="topImg" src={PF + user.profilePic} alt="" />
                            
                        </Link> */
                     ):(
                         <ul className="topList">
                            <li className="topListItem">
                                <Link className="link" to="/login"> LOGIN</Link>
                            </li>
                            <li className="topListItem">
                                <Link className="link" to="/register"> REGISTER</Link>
                            </li>
                         </ul>
                     )
                 }
                    
                    <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
        </>
    );
}

export default TopBar;