import { useState } from "react";
import getAllPosts from "../../controllers/posts";
import BellSvg from "../components/svgs/BellSvg";
import MenuSvg from "../components/svgs/MenuSvg";
import PostinSvg from "../components/svgs/PostinSvg";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function HomePage() {
  let items = getAllPosts();
  const [hiddenCreatePost, setHiddenCreatePost] = useState(false);

  return <main className="flex flex-col gap-[10px]">
    <header className="backdrop-blur-3xl fixed top-0 p-[10px] w-full flex items-center justify-center">
      <nav className="bg-gray-50 hover:bg-gray-100 transition w-full h-fit flex items-center justify-between rounded-full p-[10px] ps-[20px] pe-[20px]">
        <a className="flex gap-[10px] items-center" href="/">
          <PostinSvg className="h-[30px] fill-gray-900" />
          <h1 className="font-bold">Post in</h1>
        </a>
        <div className="flex justify-center items-center gap-[10px]">
          {/* <a href="" className="rounded-full flex justify-center items-center h-[30px] w-[30px] bg-gray-50 border-[2px] border-gray-900">
            <MenuSvg className="fill-gray-900 h-[20px] rounded-full" />
          </a> */}
          {/* <a href="/" className="rounded-full flex justify-center items-center h-[30px] w-[30px] bg-gray-50">
            <BellSvg className="fill-gray-900 h-[22px] rounded-full" />
          </a> */}
          <a href="/">
            <img className="w-[35px] h-[35px] rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiXNspavEPevYsqcUhundNhbcG39bnVuUrUw&usqp=CAU" alt="" />
          </a>
        </div>
      </nav>
    </header>
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 0: 1, 600: 2, 900: 3, 1200: 4, 1500: 5 }}
      className="p-[10px] rounded-[20px] mt-[70px]"
    >
      <Masonry gutter="10px" style={{ width: '100%' }}>
        {items.map((item) => {
          return (
            <article key={item.id} className="p-[20px] rounded-[20px] flex flex-col" style={{ backgroundColor: item.color }} >
              <p>{item.text}</p>
            </article>
          )
        })}
      </Masonry>
    </ResponsiveMasonry>
    <div
      style={{ display: !hiddenCreatePost ? '' : 'none' }}
      className="backdrop-blur-3xl rounded-tl-[30px] fixed bottom-0 right-0 max-w-[150px] w-full p-[10px]">
      <button type="submit" onClick={() => setHiddenCreatePost(!hiddenCreatePost)}
        className="bg-gray-900 font-bold w-full text-white h-[50px] rounded-full hover:bg-gray-800 transition">
        Postar
      </button>
    </div>
    <div style={{ display: hiddenCreatePost ? '' : 'none' }}
      className="fixed bottom-0 w-full h-[400px] max-w-[600px] p-[10px] backdrop-blur-3xl right-0 rounded-[40px]">
      <article className="bg-gray-50 h-full w-full rounded-[30px]">
      </article>
    </div>
  </main>
}