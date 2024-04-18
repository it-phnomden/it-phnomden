import React from "react";
import comingSoon from "../../assets/coming-soon.png";
import Logo from "../Logo";

const GameStore = () => {
  return (
    <div className="mt-24 flex flex-col items-center">
      <img
        src={comingSoon}
        alt="html.png"
        className="sm:h-56 h-48 object-contain"
      />
    </div>
  );
};

export default GameStore;
