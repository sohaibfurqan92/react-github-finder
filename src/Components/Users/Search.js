import React, { useState,useContext } from 'react'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'

const Search = () => {
const githubContext = useContext(GithubContext);
const alertContext = useContext(AlertContext);

const {searchUsers,clearUsers, users} = githubContext;

  const [text,setText] = useState('');

  const onChange = (e)=>{
    setText(e.target.value);
  };

  const onSubmit = (e) =>{
    if(text===''){
      alertContext.setAlert('Please enter something','light');
    } else{
      searchUsers(text);
      setText('');
    }
    e.preventDefault();
  }

    return (
      <div>
        <form className="form" onSubmit={onSubmit}>
          <input type="text" name="text" placeholder='Search Users...'  value={text} onChange={onChange}/>
          <input type="submit" className="btn btn-block btn-dark" value='Search'/>
        </form>
        {users.length>0 ? <button className='btn btn-light btn-block' onClick={clearUsers}>Clear</button> : ''}
      </div>
    )
  
}

export default Search
