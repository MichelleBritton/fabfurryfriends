import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../components/Avatar';

const Profile = (props) => {
    const {profile, imageSize=55} = props;
    // Also need to access the data within the profile object so we'll destructure variables from it
    const {id, image, owner} = profile;

    return (
        <div className='my-3 d-flex align-items-center'>
            <div>
                <Link className="align-self-center" to={`/profiles/${id}`}>
                    <Avatar src={image} height={imageSize} />
                </Link>
            </div>
            <div className='mx-2'>
                <strong>{owner}</strong>
            </div>           
        </div>
    );
};

export default Profile;