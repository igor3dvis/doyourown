import React from 'react'
import s from './Header.module.scss'
import Nav from '../Nav/Nav'


const Header: React.FC = () => {

    return(
        <div className={s.headerWrapper}>
            <h2 className={s.logoTitle}>DoYourOwn</h2>
           
            <Nav />
        </div>
    )

}

export default Header