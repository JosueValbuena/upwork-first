import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-background-primary-customized">
            <h1 className="text-6xl font-bold text-purple-500 mb-4">¡Oops!</h1>
            <p className="text-xl text-gray-700 mb-8">This page does not exist.</p>
            <Link to="/" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline">
                Go back home
            </Link>
        </div>
    )
}

export default NotFoundPage