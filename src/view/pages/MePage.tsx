import HeaderNavbarComponent from "../components/HeaderNavbarComponent";

export default function MePage() {
  return <main className="flex flex-col h-full">
    <HeaderNavbarComponent />

    <article className="w-[calc(100%-20px)] mt-[70px] m-[10px] h-full flex justify-between gap-[10px]">
      <section className="w-[45%] bg-gray-50 rounded-[20px]"></section>
      <section className="w-[55%] bg-gray-50 rounded-[20px]"></section>
    </article>
  </main>
}