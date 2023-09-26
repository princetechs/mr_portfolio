export default function NotFound() {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="px-4 text--700">
          <div className="flex items-center justify-center">
            <h1 className="text-6xl font-bold">404</h1>
          </div>
  
          <div className="py-6">
            <h2 className="text-3xl font-bold">Page Not Found</h2>
            <p className="text-xl">The page you are looking for could not be found.</p>
          </div>
  
          <a href="/" className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600">
            Go Back
          </a>
        </div>
      </div>
    )
  }