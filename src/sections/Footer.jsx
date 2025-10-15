import { useState } from "react";
import toast from "react-hot-toast";

const Footer = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("shallowaria@gmail.com");
    setHasCopied(true);
    toast.success("邮箱复制成功");
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="flex flex-wrap gap-5 justify-between items-center sm:px-10 px-5 pt-7 pb-3 border-t border-black">
      <div className="text-zinc-500">
        <p>&copy; 2025 Kayb. All rights reserved</p>
      </div>
      <div
        className="cursor-pointer flex justify-center items-center gap-2"
        onClick={handleCopy}
      >
        <img
          src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
          alt="copy"
          className="w-7 h-7"
        />
        <p className="lg:text-2xl md:text-xl font-medium">Contact Me</p>
      </div>
      <div className="flex gap-5">
        <a
          className="w-12 h-12 rounded-full  flex cursor-pointer justify-center items-center bg-white border border-white hover:scale-[1.2] transition-all ease duration-200"
          href="https://space.bilibili.com/7213886"
          target="_blank"
        >
          <img src="/assets/bilibili.svg" alt="bilibili" />
        </a>
        <a
          className="w-12 h-12 rounded-full  flex cursor-pointer justify-center items-center bg-white border border-white hover:scale-[1.2] transition-all ease duration-200"
          href="https://github.com/shallowaria"
          target="_blank"
        >
          <img src="/assets/github.svg" alt="github" />
        </a>
      </div>
    </section>
  );
};

export default Footer;
