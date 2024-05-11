import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full float-start flex p-7 text-white">
      <div className="flex app">
        <div>
          <Image src="/logo.png" alt="Logo" width={200} height={50} />
        </div>
        <div className="flex-grow flex justify-end items-center ">
          <ul className="mx-auto">
            <li className="mx-3 cursor-pointer mt-[1px] text-xl font-semi transition-all hover:text-gray-200 inline-block">
              Cloud hosting
            </li>
            <li className="mx-3 cursor-pointer mt-[1px] text-xl font-semi transition-all hover:text-gray-200 inline-block">
              Domains
            </li>
            <li className="mx-3 cursor-pointer mt-[1px] text-xl font-semi transition-all hover:text-gray-200 inline-block">
              Linux host
            </li>
            <li className="mx-3 cursor-pointer mt-[1px] text-xl font-semi transition-all hover:text-gray-200 inline-block">
              WordPress hosting
            </li>
            <li className="mx-3 cursor-pointer mt-[1px] text-xl font-semi transition-all hover:text-gray-200 inline-block">
              Hybrid server
            </li>
            <li className="mx-3 cursor-pointer mt-[1px] text-xl font-semi transition-all hover:text-gray-200 inline-block">
              Cloud server
            </li>
          </ul>
          <span className="cursor-pointer bg-white py-1 px-3 text-[#01588A] rounded-[20px]  mr-6">
            Login
          </span>
          <span className="cursor-pointer bg-white py-1 px-3 text-[#01588A] rounded-[20px]  ">
            Sign up
          </span>
        </div>
      </div>
    </header>
  );
}
