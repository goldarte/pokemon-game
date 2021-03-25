import { useHistory } from 'react-router-dom';
import Header from '../../../../components/Header';

const FinishPage = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/home');
    }

    return (
        <div>
            <Header title='This is About page!'>
                <button onClick={handleClick}>
                    Return to home
                </button>
            </Header>
        </div>
    );
};

export default FinishPage;