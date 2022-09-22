import React from 'react'
import { ThemeContext, UserContext } from '../contexts'

export const withTheme = (WrapperComponent)=>{
    return function(props){
      return (
        <ThemeContext.Consumer>
          {([theme, setTheme])=><WrapperComponent theme={theme} setTheme={setTheme}/>}
        </ThemeContext.Consumer>
    
      )
    }
  }