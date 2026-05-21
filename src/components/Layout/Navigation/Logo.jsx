import logo from "../../../assets/icons8-hibiscus-64.png";

const Logo = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-3">
      <a href="#home" className="flex items-center space-x-3 group">
        {" "}
        <div
          className="
          w-14 h-14 rounded-xl 
          bg-white/20 backdrop-blur-md 
          flex items-center justify-center 
          transition-all group-hover:rotate-12 
          group-hover:scale-110
          "
        >
          <img
            src={logo}
            alt="logo"
            className="
            h-12 w-12 object-contain 
            transition-transform duration-300 
            group-hover:rotate-12 group-hover:scale-110
            "
          />
        </div>
        <span
          className="
          text-2xl font-bold bg-linear-to-r 
          from-black to-blue-800 
          bg-clip-text text-transparent
          "
        >
          FolioDev<span className="text-orange-600">.</span>
        </span>
      </a>
    </div>
  );
};

export default Logo;
