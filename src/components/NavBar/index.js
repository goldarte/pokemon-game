import cn from 'classnames'
import s from './style.module.css';
import { useLocation, Link } from 'react-router-dom'

const NavBar = ( {active=false, bgActive=false, onClickMenu} ) => {
    const location = useLocation();

    const handleClick = () => {
        onClickMenu && onClickMenu();
    }

    return (
        <nav className={cn(s.root, {[s.bgActive]: bgActive})}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <Link className={cn(s.menuButton, {[s.active]: active})} onClick={handleClick} to={location.pathname}>
                    <span />
                </Link>
            </div>
        </nav>
    )
}

export default NavBar;