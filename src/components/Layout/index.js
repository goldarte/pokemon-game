import s from './style.module.css';
import cn from 'classnames'

const Layout = ({title, urlBg, colorBg, children}) => {
    const styleRoot = {
        backgroundImage: `${ urlBg ? `url(${urlBg}` : `none`}`,
        backgroundColor: `${ colorBg ? colorBg : `red`}`
    }
    return (
        // <section className={s.root} style={{
        //     backgroundImage: `url(${urlBg})`,
        //     backgroundColor: `${colorBg}`
        // }}>
        <section className={s.root} style={styleRoot}>
            <div className={s.wrapper}>
                <article>
                    {
                        title && <div className={s.title}>
                            <h3>{title}</h3>
                            <span className={s.separator}></span>
                        </div>
                    }
                    {
                        children && <div className={cn(s.desc, s.full)}>
                            {children}
                        </div>
                    }
                </article>
            </div>
        </section>
    )
}

export default Layout;