import { useState } from "react";
import getAllPosts from "../../controllers/posts";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import PostComponent from "../components/PostComponent";
import PostCreateFormComponent from "../components/PostCreateFormComponent";
import HeaderNavbarComponent from "../components/HeaderNavbarComponent";

export default function HomePage() {
  let items = getAllPosts();
  const [hiddenCreatePost, setHiddenCreatePost] = useState(false);

  return <main>
    <HeaderNavbarComponent />

    <ResponsiveMasonry
      columnsCountBreakPoints={{ 0: 1, 600: 2, 900: 3, 1200: 4, 1500: 5 }}
      className="p-[10px] rounded-[30px] bg-gray-50 m-[10px] mt-[70px]"
    >
      <Masonry gutter="10px" style={{ width: '100%' }}>
        {items.map((item) => {
          return (
            <PostComponent key={item.id} color={item.color} text={item.text} favorites={item.favorites} />
          )
        })}
      </Masonry>
    </ResponsiveMasonry>

    <div
      style={{ display: !hiddenCreatePost ? '' : 'none' }}
      className="backdrop-blur-3xl rounded-tl-[30px] fixed bottom-0 right-0 max-w-[150px] w-full p-[10px]">
      <button type="button" onClick={() => setHiddenCreatePost(!hiddenCreatePost)}
        className="bg-gray-900 font-bold w-full text-white h-[50px] rounded-full hover:bg-gray-800 transition">
        Postar
      </button>
    </div>

    <div style={{ display: !hiddenCreatePost ? 'none' : '' }}
      className="fixed bottom-0 w-full h-full max-h-[400px] max-w-[600px] p-[10px] backdrop-blur-3xl right-0 rounded-tl-[40px] rounded-tr-[40px]">
      <section className="bg-gray-50 h-full justify-between flex flex-col w-full p-[10px] gap-[20px] rounded-[30px]">
        <PostCreateFormComponent />
        <div className="flex gap-[10px] justify-center items-center">
          <button type="submit" form="formPost"
            className=" bg-gray-900 font-bold w-full text-white h-[50px] rounded-full hover:bg-gray-800 transition">
            Postar
          </button>
          <button type="button" onClick={() => setHiddenCreatePost(!hiddenCreatePost)}
            className="border-gray-900 border-[3px] font-bold w-[160px] text-gray-900 h-[50px] rounded-full hover:bg-gray-100 transition">
            Sair
          </button>
        </div>
      </section>
    </div>

  </main>
}