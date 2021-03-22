import {useReducer} from 'react';
import GithubContext from '../github/githubContext'
import githubReducer from '../github/githubReducer'
import {SEARCH_USERS,GET_USER,GET_REPOS,SET_LOADING,CLEAR_USERS} from '../types'
import axios from 'axios'

const GithubState = (props) =>{
  const initialState ={
    user:{},
    users:[],
    repos:[],
    loading:false
  }

  const [state, dispatch] = useReducer(githubReducer, initialState);

    // Actions
    // Search Users
    const searchUsers= async(text)=>{
        setLoading();
  
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);
        
        
        dispatch({
          type: SEARCH_USERS,
        payload: res.data.items
      })
        
    };
    

    // Get User
   const getUser = async(username) =>{
    setLoading();
      const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);
      
      dispatch({
        type:GET_USER,
        payload:res.data
      });
  }


    // Get Repos
    const getUserRepos = async(username) =>{
      setLoading();
  
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);
    
        // setRepos(res.data);
        dispatch({
          type:GET_REPOS,
          payload:res.data
        })
    }

    // Clear User
    const clearUsers = () =>{
      dispatch({
        type:CLEAR_USERS
      })
    };

    // Set Loading
    const setLoading = () => dispatch({type:SET_LOADING});

  return <GithubContext.Provider value={{
    user:state.user,
    users:state.users,
    repos:state.repos,
    loading: state.loading,
    searchUsers,
    setLoading,
    getUser,
    clearUsers,
    getUserRepos
  }}>
    {props.children}
  </GithubContext.Provider>
};

export default GithubState;
