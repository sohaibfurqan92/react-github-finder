import React, { useEffect, useContext } from 'react'
import {Link} from 'react-router-dom'
import Spinner from '../Layout/Spinner';
import Repos from '../Repos/Repos'
import GithubContext from '../../context/github/githubContext'

const User = (props) =>{
  const githubContext = useContext(GithubContext);

  const {getUser,user,loading, getUserRepos} = githubContext;
  useEffect(()=>{
    getUser(props.match.params.login);
    getUserRepos(props.match.params.login);
    //eslint-disable-next-line
  },[]);
  
    const {name,login,html_url, company, blog, location, hireable, bio, public_repos, public_gists, followers, following,avatar_url} = user

    

    if(loading){
      return <Spinner/>
    }

    return (
      <div>
        <Link to="/" className="btn btn-light">Back to Search</Link>
      Hireable : {hireable ? <i className='fas fa-check text-success'></i> : <i className='fas fa-times-circle text-danger'></i> }

      <div className="card grid-2">
        <div className='all-center'>
          <img src={avatar_url} alt="" className='round-img' style={{width:'150px'}}/>
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          <h3>Bio</h3>
          <p>{bio}</p>
          <a href={html_url} className='btn btn-dark my-1'>Visit Github Profile</a>
          <p><strong>Username: </strong>{login}</p>
          <p><strong>Company: </strong>{company}</p>
          <p><strong>Website: </strong>{blog}</p>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">Public Repos: {public_repos}</div>
        <div className="badge badge-dark">Public Gists: {public_gists}</div>
      </div>
      <Repos userRepos={githubContext.repos}/>
      </div>
      
    )
  
}

export default User
