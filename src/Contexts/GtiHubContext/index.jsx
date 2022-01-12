import React,{createContext, useState, useEffect, useContext} from "react";
import {Githubapi} from '../../Services/GithubApi'

const GitHubContext = createContext();

export function ContextGitHub({ children }){
  const [user, setUser] = useState([]);
  const [repos, setRepos] = useState([]);
  useEffect(
    ()=>{
      async function getGithub(){
        await Githubapi.get('/Icaro8').then(response => setUser(response.data))
        await Githubapi.get('Icaro8/repos').then(response => setRepos(response.data))
        
      }
      getGithub()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  ,[])

  return(
    <GitHubContext.Provider value={{user,repos}}>
      {children}
    </GitHubContext.Provider>
  )
}

export const useContextGithub = () => {
  const contextProvider = useContext(GitHubContext);
  const {user ,repos} = contextProvider

  return {user , repos}
}