import React from "react";
import './index.css';

const Profile = ()=>{
 return (<>
 <div style={{ position:'relative', border:'1px solid transparent', marginTop:'15px', width:'100%' }}>
    <img src="https://i.pinimg.com/280x280_RS/14/c5/25/14c525ed5acff88249193cd22584a6c9.jpg" className="bs-profile-template1-dp" />
    <div style={{ paddingTop:'65px', borderRadius:'10px', border:'1px solid #ccc', marginTop:'80px', width:'100%', height:'300px' }}>
        <div align="center" style={{ fontSize:'18px' }}><b>Adithya Kankipati</b></div>
        <div align="center" className="opacity-50" style={{ fontSize:'13px' }}><b>UI /UX Designer</b></div>
    </div>
 </div>
 </>);
};

export default Profile;