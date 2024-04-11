import React , {useContext} from 'react'
import Usercontext from '../Context/UserContext'

function Profile() {
    const {user} = useContext(Usercontext)
  
    if(!user) return <div>Please login</div>

    return <div>Welcome {user.username}</div>
  
}

export default Profile
