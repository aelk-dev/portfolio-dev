import avatar from "../../../assets/avatar.png";

const HeroImage = () => {
  return (
    <div className="flex justify-center md:justify-end">
      <img
        src={avatar}
        alt="Aya profile"
        className="
        w-[320px] h-80
        sm:w-95 sm:h-95
        md:w-112.5 md:h-112.5
        lg:w-130 lg:h-130
        object-cover
        rounded-3xl
        shadow-2xl
        hover:scale-105 transition duration-300
        "
      />
    </div>
  );
};

export default HeroImage;