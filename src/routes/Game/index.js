import s from './style.module.css';
import { useHistory } from 'react-router-dom';

const GamePage = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/home');
    }

    return (
        <div className={s.root}>
            <header>This is Game Page!</header>
            <p>
                <button onClick={handleClick}>
                    Return to home
                </button>
            </p>
        </div>
    );
};

export default GamePage