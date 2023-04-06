"use client";

import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      alt="avatar"
      className="rounded-full"
      width="30"
      height="30"
      src="/images/placeholder.jpg"
    />
  );
};
export default Avatar;
