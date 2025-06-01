import { Footer, NavBar } from '@/components/organism'
import { Outlet } from 'react-router-dom'

const ContentWrapper = () => {
    return (
        <div className='flex flex-col'>
            <NavBar />
            <div className='grow-1'>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default ContentWrapper