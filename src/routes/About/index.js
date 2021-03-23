import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';

const AboutPage = () => {
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

export default AboutPage;