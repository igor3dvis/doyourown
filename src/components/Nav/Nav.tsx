import React from 'react'
import s from './Nav.module.scss'
import {NavLink} from 'react-router-dom'


const Nav: React.FC = () => {

    return(
        <div className={s.navWrapper}>
          <NavLink to='/addnewword'>add new word</NavLink>
          <span className={s.menuDivider}>|</span>
          <NavLink to='/wordslist'>words list</NavLink>
          <span className={s.menuDivider}>|</span>
          <NavLink to=''>statistic</NavLink>
          <span className={s.menuDivider}>|</span>
          <NavLink to=''>users</NavLink> 
            
        </div>
    )

}

export default Nav

{/* <NavLink to={`/profile/${props.myId}`}>MyProfile</NavLink> */}