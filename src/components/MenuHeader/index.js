import { useState } from 'react'
import Menu from '../Menu';
import NavBar from '../NavBar';

const MenuHeader = ( {bgActive} ) => {
    const [isActive, setActive] = useState(null);

    const changeState = () => {
        setActive(prevState => !prevState)
    }

    return (
        <>
        <Menu active={isActive} />
        <NavBar active={isActive} bgActive={bgActive} onClickMenu={changeState} />
        </>
    )
}

export default MenuHeader;