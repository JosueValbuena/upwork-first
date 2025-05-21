import { Footer, NavBar } from '@/components/organism'
import { Outlet } from 'react-router-dom'

const ContentWrapper = () => {
    return (
        <div className=''>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default ContentWrapper