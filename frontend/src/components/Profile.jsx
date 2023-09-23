import { useState } from 'react';

function Profile({user}) {
    return(
        <h1>{user.username}</h1>
    )
}

export default Profile