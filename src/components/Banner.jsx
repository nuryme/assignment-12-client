const Banner = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="https://i.pinimg.com/736x/1a/f6/b1/1af6b16c7ce599b100d50fd61c9e9eb3.jpg"
            alt=""
            className="object-cover w-full h-full rounded-[100px]"
          />
        </div>
        <div className="flex flex-col justify-center p-6 text-center lg:text-left w-[700px]">
          <h1 className="font-bold leading-24 sm:text-4xl lg:text-6xl">
          Where <span className="text-primary">Hearts</span> Meet, Stories Begin"
            
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
          Discover meaningful connections and start your journey toward a lifetime of love.
            <br className="hidden md:inline lg:hidden" />
            Our trusted matrimony platform brings together individuals seeking genuine, lasting relationships in a safe and welcoming space.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="#"
              className="primaryBtn"
            >
              Login
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="secondaryBtn"
            >
              Log out
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
