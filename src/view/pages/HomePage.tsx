import PostinSvg from "../components/svgs/PostinSvg";

export default function HomePage() {
  return <main className="p-[10px]">
    <header>
      <nav className="bg-gray-50 w-full h-[50px] flex items-center rounded-full ps-[10px] pe-[10px]">
        <a className="flex gap-[10px] items-center" href="/">
          <PostinSvg className="h-[30px] fill-gray-900" />
          <h1 className="font-bold">Post in</h1>
        </a>
      </nav>
    </header>
    
  </main>
}