const NotFoundPage = () => {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="text-center">
                    <h1 className="text-9xl font-bold text-gray-800">404</h1>
                    <p className="text-2xl mt-4 text-gray-600">Oops! Page not found.</p>
                    <p className="text-lg mt-2 text-gray-500">The page you're looking for doesn't exist.</p>
                    <a href="/" className="mt-8 inline-block bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600">
                        Go Back Home
                    </a>
                </div>
            </div>
        </>
    )
}
export default NotFoundPage