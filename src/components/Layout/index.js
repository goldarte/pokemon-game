import s from './style.module.css';

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
                    <div className={s.title}>
                    {
                        title && (
                            <>
                            <h3>{title}</h3>
                            <span className={s.separator}></span>
                            </>
                        )
                    }
                    </div>
                    <div className={s.desc.full}>
                    {
                        children && (<>{children}</>)
                    }
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Layout;