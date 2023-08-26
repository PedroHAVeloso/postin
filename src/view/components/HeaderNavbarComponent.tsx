import ProfilePictureComponent from "./ProfilePictureComponent";
import PostinSvg from "./svgs/PostinSvg";

type HeaderNavbarComponentProps = {
  page?: string,
}

export default function HeaderNavbarComponent(props: HeaderNavbarComponentProps) {
  return <header className="backdrop-blur-3xl fixed top-0 p-[10px] w-full flex items-center justify-center">
    <nav className="bg-gray-50 hover:bg-gray-100 transition w-full h-[50px] flex items-center justify-between rounded-full p-[10px] ps-[20px] pe-[20px]">
      <a className="flex gap-[10px] justify-center items-center" href="/home">
        <PostinSvg className="h-[30px] fill-gray-900" />
        <h1><strong>Post</strong> in</h1>
      </a>

      <div className="hidden md:flex m-auto left-60 right-60 items-center justify-center absolute">
        {props.page != null ? <p className="font-light">{props.page}</p > : null}
      </div>

      <ProfilePictureComponent
        href="/me"
        size={35}
        pictureUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiXNspavEPevYsqcUhundNhbcG39bnVuUrUw&usqp=CAU" />
    </nav>
  </header>
}