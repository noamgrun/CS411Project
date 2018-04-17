import React from 'react';
import  { Link } from 'react-router-dom';
import ProfileArea from './profile/ProfileArea.js';

const Profile = () => {

    return (
        <div>
            <ProfileArea />
            <div className="fixed-action-btn">
                <Link to="/posts/new" className="btn-floating btn-large green">
                    <i className="material-icons">add</i>
                    </Link>
            </div>
        </div>
    )

};

export default Profile;
