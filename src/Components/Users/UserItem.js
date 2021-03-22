import React from 'react'
import {Link} from 'react-router-dom'

const UserItem = ({login, avatar_url, html_url}) => {
    return (
      <div className='card text-center'>
        <img src={avatar_url} alt="" className='round-img' style={{width:'60px'}}/>
        <h3>{login}</h3>
        <div>
          <Link to={`/user/${login}`} className="btn btn-sm btn-dark my-1">More</Link>
        </div>
      </div>
    )
  }

export default UserItem
