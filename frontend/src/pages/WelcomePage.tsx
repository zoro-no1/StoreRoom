import { Link } from "react-router-dom";

const WelcomePage = () => {
  const websiteName = "Branily"; // <<<--- REPLACE WITH YOUR WEBSITE NAME

  return (
    <div className="min-h-screen bg-gray-600 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-blue-950 rounded-xl shadow-lg p-8 sm:p-10 lg:p-12 text-center">
        {/* Header Section */}
        <header className="mb-10 pb-6 border-b border-gray-200">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-blue-600 mb-4 tracking-tight">
            Welcome to <span className="block sm:inline">{websiteName}!</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white italic">
            Your personal hub for effortlessly storing and managing all your
            links.
          </p>
        </header>

        {/* Introduction Section */}
        <section className="mb-12 text-lg sm:text-xl text-white max-w-3xl mx-auto">
          <p>
            Say goodbye to scattered bookmarks and forgotten URLs. With{" "}
            {websiteName}, you can quickly save, organize, and access your
            favorite web pages, articles, and resources all in one place.
          </p>
        </section>

        {/* Features Section */}
        <section className="mb-14">
          <h2 className="text-4xl font-bold text-blue-600 mb-10">
            Key Features:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature Item 1 */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-left shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-semibold text-blue-800 mb-3">
                <span role="img" aria-label="link" className="mr-2">
                  🔗
                </span>{" "}
                Store Links Instantly
              </h3>
              <p className="text-gray-700 text-base">
                Simply paste your URL and we'll save it for you, along with
                titles and descriptions.
              </p>
            </div>

            {/* Feature Item 2 */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-left shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-semibold text-blue-800 mb-3">
                <span role="img" aria-label="folders" className="mr-2">
                  🗂️
                </span>{" "}
                Effortless Organization
              </h3>
              <p className="text-gray-700 text-base">
                Categorize your links with customizable tags, folders, and notes
                to find them in a flash.
              </p>
            </div>

            {/* Feature Item 3 */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-left shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-semibold text-blue-800 mb-3">
                <span role="img" aria-label="lightning" className="mr-2">
                  ⚡
                </span>{" "}
                Quick Access
              </h3>
              <p className="text-gray-700 text-base">
                Your entire link library is just a click away, anytime,
                anywhere, from any device.
              </p>
            </div>

            {/* Feature Item 4 */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-left shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-semibold text-blue-800 mb-3">
                <span role="img" aria-label="sparkles" className="mr-2">
                  ✨
                </span>{" "}
                Intuitive Interface
              </h3>
              <p className="text-gray-700 text-base">
                A clean, modern, and simple design makes managing your links a
                breeze.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="mt-14 pt-10 border-t border-gray-200">
          <p className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-8">
            Ready to bring order to your online world?
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            
            <Link to={"/auth"}
             className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              Get Started Now!
            </Link>
            
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200 text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} {websiteName}. All rights
            reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default WelcomePage;
