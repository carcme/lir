import React, { useEffect } from "react";

const Error = () => {
  console.log("Error page");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="py-6 pt-20 bg-white lg:pt-28 lg:py-12">
        <div className="max-w-screen-lg px-4 mx-auto md:px-8">
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="overflow-hidden bg-gray-100 rounded-lg h-80 md:h-auto">
              <img
                src="https://img.freepik.com/premium-photo/broken-bottle-isolated-white-background_51524-17283.jpg?w=1060"
                loading="lazy"
                alt="Error loading page"
                aria-label="Error loading page"
                className="object-cover object-center w-full h-full"
              />
            </div>

            <div className="flex flex-col items-center justify-center sm:items-start md:py-24 lg:py-32">
              <p className="mb-4 text-sm font-semibold uppercase text-primaryGreen md:text-base">
                Error 404
              </p>
              <h1 className="mb-2 text-2xl font-bold text-center text-gray-800 sm:text-left md:text-3xl">
                Page not found
              </h1>

              <p className="mb-4 text-center text-gray-500 sm:text-left md:mb-8 md:text-lg">
                The page you’re looking for doesn’t exist.
              </p>

              <nav className="flex gap-4 sm:block sm:space-y-1 md:space-y-2">
                <div>
                  <a
                    href="/"
                    aria-label="Return to home"
                    className="inline-block text-sm transition duration-100 text-primaryGreen hover:text-primaryGreenLight active:text-primaryGreenLight md:text-base"
                  >
                    Go Back Home
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
