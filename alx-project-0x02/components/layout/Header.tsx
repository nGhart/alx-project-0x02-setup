import React from "react";
import Button from "../common/Button";
import Image from "next/image";

const Header = () => {
  const imagePath = "/images/Case Minimalistic.png";
  return (
    <div className="bg-primary text-white flex justify-center items-center gap-4 p-8 h-8 hover:bg-red-500 cursor-pointer border-amber-900 rounded-full">
      <Image
        src={imagePath}
        alt="A minimalistic case design"
        width={24}
        height={24}
        priority
      />
      <p>Overseas trip? Get the latest information on travel guides</p>
      <Button bgColor="bg-secondary rounded-full" textColor="text-white">
        More info
      </Button>
    </div>
  );
};

export default Header;
