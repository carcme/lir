import React from "react";

const BentoOverlay = ({ text, select }) => {
  return (
    <div>
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent transition-all duration-500 to-black/70 md:group-hover:scale-[1.02]"
        onClick={() => select(text.id)}
      />
      <div
        className="overflow-hidden absolute bottom-2 left-2 justify-start w-full text-white sm:bottom-3 sm:left-3"
        onClick={() => select(text.id)}
      >
        <h2 className="pr-5 text-2xl font-bold leading-tight truncate text-white/70">
          {text.name}
        </h2>
        <p className="block pr-10 truncate text-white/70">{text.desc[0]}</p>
      </div>
    </div>
  );
};

export default BentoOverlay;
