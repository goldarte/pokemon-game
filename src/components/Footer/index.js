import s from './style.module.css';

const Footer = ({title, descr}) => {
    return (
        <footer>
            <div className={s.wrapper}>
                <h3>NOT MANY THANKS FOR VISITING</h3>
                <p>© 2021 #ReactMarathon.</p>
            </div>
        </footer>
    )
}

export default Footer;