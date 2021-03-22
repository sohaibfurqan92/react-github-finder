import React,{useContext} from 'react'
import Spinner from '../Layout/Spinner';
import UserItem from './UserItem';
import GithubContext from '../../context/github/githubContext'


const Users = () =>{

  const githubContext = useContext(GithubContext);

  const {loading, users} = githubContext
  
  if(loading){
    return(<Spinner/>)
  } else{
    return (
      <div style={userStyle}>
        {users.map(user=>(
          <UserItem key={user.id} login={user.login} avatar_url={user.avatar_url} html_url={user.html_url}/>
        ))}
      </div>
    );
  }
}

const userStyle ={
  display:'grid',
  gridTemplateColumns: 'repeat(3,1fr)',
  gridGap:'1rem'
};

export default Users;
