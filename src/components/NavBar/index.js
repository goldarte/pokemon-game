import cn from 'classnames'
import s from './style.module.css';

const NavBar = ( {active=false, onClickMenu} ) => {
    const handleClick = () => {
        onClickMenu && onClickMenu();
    }

    return (
        <nav className={s.root}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <a className={cn(s.menuButton, {[s.active]: active})} onClick={handleClick}>
                    <span />
                </a>
            </div>
        </nav>
    )
}

export default NavBar;