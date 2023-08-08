
const NotFound = () => {
  return (
    <div className="fixed top-0 left-0 right-0 flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-4xl font-semibold mb-4">Oops! Page Not Found</h1>
        <p className="text-gray-600">
          The page you are looking for might have been removed or is temporarily
          unavailable.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
