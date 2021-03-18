import { useHistory } from 'react-router-dom';
import Header from '../../components/Header'

const ContactPage = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/home');
    }

    return (
        <div>
            <Header title='Arthur Golubtsov @goldarte'>
                <button onClick={handleClick}>
                    Return to home
                </button>
            </Header>
        </div>
    );
};

export default ContactPage