import Navbar from "../components/Navbar";
import Post from "../components/Post";
import PostWall from "../components/PostWall";

/**
 * `Página do perfil do usuário atual logado.`
 */
export default function MePage() {
  return <>
    <Navbar page="@finnunter" />

    <main className="flex flex-col h-full">
      <article
        className="w-[calc(100%-20px)] mt-[70px] m-[10px] md:h-[calc(100%-80px)] flex flex-col md:flex-row justify-between gap-[10px]"
      >
        <section
          className="w-full md:w-[700px] lg:w-[600px] pt-[40px] pb-[40px] p-[20px] h-fit md:min-h-full bg-gray-50 rounded-[30px] items-center justify-center flex flex-col gap-[20px]"
        >
          <img
            className="rounded-full w-[200px] h-[200px] md:w-[300px] md:h-[300px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiXNspavEPevYsqcUhundNhbcG39bnVuUrUw&usqp=CAU"
            alt="Perfil"
          />

          <h1 className="font-bold text-[1.2rem]">@finnunter</h1>

          <ul className="rounded-[20px] min-h-[50px] border-[2px] border-gray-400 w-full bg-gray-50 flex justify-between items-center">
            <li className="w-full flex justify-center items-center hover:bg-gray-100 rounded-tl-[20px] rounded-bl-[20px] h-[50px] transition duration-500">
              <p><strong>🗂️ 213</strong> posts</p>
            </li>
            <hr className="bg-gray-400 w-[4px] h-[50px]" />
            <li className="w-full flex justify-center items-center hover:bg-gray-100 rounded-tr-[20px] rounded-br-[20px] h-[50px] transition duration-500">
              <p><strong>❤️ 1021</strong> favoritos</p>
            </li>
          </ul>

          <Post
            color="#FFFFFF"
            text="Olá, esse é um post fixado 😁, ele também tem, no máximo, 200 caracteres, o que achou? Vem pro Post in também! Uma rede social Unimar, dela para o mundo. Descubra novidades, expresse emoções."
            favorites={21}
            username="FinnUnter"
          />
        </section>

        <PostWall
          title="Seu mural 🧱"
          columnsBreakPoints={{ 0: 1, 600: 1, 1000: 2, 1300: 3, 1600: 4, 2000: 5 }}
          className="w-full bg-gray-50 rounded-[30px] p-[10px] overflow-auto gap-[10px] flex flex-col"
        />

      </article>
    </main>
  </>

}