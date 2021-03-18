import cn from 'classnames'
import s from './style.module.css';

const NavBar = ( {active=false, bgActive=false, onClickMenu} ) => {
    const handleClick = () => {
        onClickMenu && onClickMenu();
    }

    return (
        <nav className={cn(s.root, {[s.bgActive]: bgActive})}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <a className={cn(s.menuButton, {[s.active]: active})} onClick={handleClick} href="/#">
                    <span />
                </a>
            </div>
        </nav>
    )
}

export default NavBar;