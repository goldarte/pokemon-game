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
                <p><button onClick={handleClick}>
                    Start Game
                </button></p>
            </div>
        </header>
    )
}

export default Header;