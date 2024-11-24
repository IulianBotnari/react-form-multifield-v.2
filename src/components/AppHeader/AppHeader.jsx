import Style from './AppHeader.module.css'

export default function Appheader() {

    return (
        <>
            <h1 className={Style.h1}>Il mio blog</h1>

            <input type="search" className={`form-control ${Style.input}`} placeholder='Search...' ></input>
        </>

    )

}