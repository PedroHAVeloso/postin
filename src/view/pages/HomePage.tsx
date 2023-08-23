import getAllPosts from "../../controllers/posts";
import PostinSvg from "../components/svgs/PostinSvg";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function HomePage() {
  let items = getAllPosts();
  return <main className="p-[10px] flex flex-col gap-[10px]">
    <header className="backdrop-blur-3xl fixed top-0 pt-[10px] w-[calc(100%-20px)] rounded-[25px]">
      <nav className="bg-gray-50 hover:bg-gray-100 transition w-full h-[50px] flex items-center justify-between rounded-[25px] ps-[10px] pe-[10px]">
        <a className="flex gap-[10px] items-center" href="/">
          <PostinSvg className="h-[30px] fill-gray-900" />
          <h1 className="font-bold">Post in</h1>
        </a>
      </nav>
    </header>
    <ResponsiveMasonry
      columnsCountBreakPoints={{ 0: 1, 600: 2, 900: 3, 1200: 4, 1500: 5 }}
      className="p-[10px] rounded-[20px] mt-[60px]"
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
  </main >
}