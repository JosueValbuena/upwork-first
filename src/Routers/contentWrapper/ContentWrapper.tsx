import { Footer, NavBar } from '@/components/organism'
import { Outlet } from 'react-router-dom'

const ContentWrapper = () => {
    return (
        <div className='grid min-h-[100dvh] grid-rows-[auto_1fr_auto]'>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default ContentWrapper