"use client";
import Link from "next/link";

const Chat = ({ projectTitle = "this project" }) => {
  const subject = encodeURIComponent(`Let's collaborate on "${projectTitle}"`);
  const targetHref = `/?subject=${subject}#contact`;

  return (
    <div className="mx-auto px-[10px] pt-[40px] pb-[15px] rounded-bl-[15px] rounded-br-[15px] bg-[#2C2C2C] inline-block h-[100px]">
      <Link href={targetHref}>
        <img src="message.png" alt="Chat" className="cursor-pointer" />
      </Link>
    </div>
  );
};

export default Chat;
