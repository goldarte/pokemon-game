import { useState } from 'react'
import Menu from '../Menu';
import NavBar from '../NavBar';

const MenuHeader = () => {
    const [isActive, setActive] = useState(false);

    const changeState = () => {
        setActive(prevState => !prevState)
    }

    return (
        <>
        <Menu active={isActive} />
        <NavBar active={isActive} onClickMenu={changeState} />
        </>
    )
}

export default MenuHeader;