import Navbar from "../components/Navbar";
import PostWall from "../components/PostWall";
import CreatePost from "../components/CreatePost";

/**
 * `Página inicial do site.`
 */
export default function HomePage() {

  return <>
    <Navbar />

    <main className="h-fit flex p-[10px] flex-col">
      <PostWall
        className="mt-[70px] h-full rounded-[30px] bg-gray-50 p-[10px]"
        columnsBreakPoints={{ 0: 1, 600: 2, 900: 3, 1200: 4, 1500: 5 }}
      />

      <CreatePost />
    </main>
  </>
}