import s from './style.module.css';

const Header = ({title="Default title", children, onClickButton}) => {
    const handleClick = () => {
        console.log('####: HEADER');
        onClickButton && onClickButton('game');
    }
    return (
        <header className={s.root}>
            <div className={s.forest}></div>
            <div className={s.container}>
                <h1>{title}</h1>
                {children}
                <button onClick={handleClick}>
                    Start Game
                </button>
            </div>
        </header>
    )
}

export default Header;