import s from './style.module.css'
import MenuHeader from '../../components/MenuHeader'

const GamePage = ( {onChangePage} ) => {
    const handleClick = () => {
        onChangePage && onChangePage('home');
    }

    return (
        <>
            <MenuHeader bgActive />
            <div className={s.root}>
                <header>This is Game Page!</header>
                <p>
                    <button onClick={handleClick}>
                        Return to home
                    </button>
                </p>
            </div>
        </>
    );
};

export default GamePage