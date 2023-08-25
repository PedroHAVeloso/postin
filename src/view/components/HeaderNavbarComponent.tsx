import PostinSvg from "./svgs/PostinSvg";

export default function HeaderNavbarComponent() {
  return <header className="backdrop-blur-3xl fixed top-0 p-[10px] w-full flex items-center justify-center">
    <nav className="bg-gray-50 hover:bg-gray-100 transition w-full h-[50px] flex items-center justify-between rounded-full p-[10px] ps-[20px] pe-[20px]">
      <a className="flex gap-[10px] items-center" href="/home">
        <PostinSvg className="h-[30px] fill-gray-900" />
        <h1 className="font-bold">Post in</h1>
      </a>
      <a href="/me">
        <img className="w-[35px] h-[35px] rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiXNspavEPevYsqcUhundNhbcG39bnVuUrUw&usqp=CAU" alt="" />
      </a>
    </nav>
  </header>
}