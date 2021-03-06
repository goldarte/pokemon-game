import cn from 'classnames';
import s from './style.module.css';
import { Link } from 'react-router-dom'

const Menu = ( {active=false, onClickItem} ) => {

    const handleClick = () => {
        onClickItem && onClickItem();
    }

    const menuList = ['home', 'game', 'about', 'contact'];
    const menuItems = menuList.map((name) => {
        return (
            <li key={name}>
                <Link to={'/'+name} onClick={handleClick}>{name.toUpperCase()}</Link>
            </li>
        )
    }
);

    return (
        <div className={cn(s.menuContainer, {[s.active]: active === true, [s.deactive]: active === false})}>
            <div className={s.overlay}/>
            <div className={s.menuItems}>
                <ul>
                    {menuItems}
                </ul>
            </div>
        </div>
    )
}

export default Menu;