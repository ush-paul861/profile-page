import React from "react";
import './profile.css'
import CTabs from'./tabs.js';
const Profile =()=>{
    return(
    <div className="background">
        <div className="col-md-5 border-right">
            <div className="p-5 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="t font">Profile Settings</h4>
                </div>
                <div ><CTabs/></div>
                
            </div>
        </div>
    </div>     
    );
};

export default Profile; 