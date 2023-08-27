import { useState } from "react";
import GoogleSvg from "../components/svgs/GoogleSvg";
import PostinSvg from "../components/svgs/PostinSvg";
import UnimarSvg from "../components/svgs/UnimarSvg";
import HeartSvg from "../components/svgs/HeartSvg";
import LoginFormComponent from "../components/LoginFormComponent";

export default function WelcomePage() {
  let [isFavorite, setIsFavorite] = useState(false);
  let [favorites, setFavorite] = useState(4021);

  function onClickFavoriteButton() {
    setIsFavorite(!isFavorite);

    if (isFavorite) {
      setFavorite(favorites - 1);
    } else {
      setFavorite(favorites + 1);
    }
  }

  return <>
    <main
      className="flex w-full h-fit md:h-screen flex-col md:flex-row gap-[20px]">

      <section
        className="flex w-full gap-[40px] flex-col justify-center items-center p-[10px] pt-[60px] pb-[60px] bg-[url(/back.png)] bg-cover rounded-br-[20px] rounded-bl-[20px] md:rounded-none md:rounded-tr-[20px] md:rounded-br-[20px]">
        <PostinSvg
          className="fill-gray-900 h-[150px] w-[150px] sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[300px]" />

        {/* Post: */}
        <article className="p-[20px] rounded-[20px] flex flex-col gap-[10px] bg-white">
          <p className="sm:text-[1.1rem]">Moderno, fácil, rápido:<br /><strong>Post</strong> in, uma rede social <em>Unimar</em>.</p>
          <div className="flex justify-between items-center">
            <a href="/" className="rounded-full flex items-center justify-center gap-[6px] bg-white p-[5px]">
              <PostinSvg className="fill-gray-900 h-[25px] w-[25px]" />
              <p className="text-[0.95rem] font-light">@Postin</p>
            </a>
            <button type="button" className="flex gap-[6px] justify-center items-center" onClick={() => onClickFavoriteButton()}>
              <HeartSvg filled={isFavorite} className="fill-gray-900 h-[20px]" />
              <p>{favorites}</p>
            </button>
          </div>
        </article>

      </section>

      <section
        className="flex w-full flex-col gap-[20px] p-[20px] justify-center items-center bg-gray-50 hover:bg-gray-100 transition duration-500 rounded-[20px] md:rounded-none md:rounded-tl-[20px] md:rounded-bl-[20px]">

        <LoginFormComponent />

        <p>Caso ainda não tenha uma conta:</p>
        <button type="button"
          className="border-[3px] border-gray-900 text-gray-900 max-w-[400px] w-full h-[50px] rounded-full hover:bg-gray-200 transition">
          Cadastrar
        </button>
        <div
          className="flex justify-center items-center gap-[10px]">
          <p>Ou, entre com sua conta Google:</p>
          <GoogleSvg
            className="h-[40px] w-[40px]" />
        </div>
      </section>
    </main>

    <footer className="h-[60px] mt-[20px] gap-[20px] flex hover:bg-gray-100 justify-center sm:justify-end p-[10px] items-center rounded-[20px] transition w-full bg-gray-50">
      <a href="https://unimar.br/">
        <UnimarSvg className="fill-gray-900 h-[25px]" />
      </a>
      <a href="/" className="flex gap-[6px] items-center">
        <PostinSvg className="h-[30px] fill-gray-900 " />
        <h1 className="font-bold"><strong>Post</strong> in</h1>
      </a>
      <a href="/">
        <h1><strong>GNU</strong> | 2023</h1>
      </a>
    </footer>
  </>
}