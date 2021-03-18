import s from './style.module.css';

const Header = ({title="Default title", children, man, moon}) => {
    return (
        <header className={s.root}>
            <div className={s.forest}></div>
            {man && <div className={s.silhouette}></div>}
            {moon && <div className={s.moon}></div>}
            <div className={s.container}>
                <h1>{title}</h1>
                {children}
            </div>
        </header>
    )
}

export default Header;