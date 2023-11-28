import { useNavigate } from "react-router-dom";
import PostinSvg from "../svgs/PostinSvg";

/**
 * `Página exibida em caso de erros no site.`
 */
export default function ErrorPage() {
  const navigate = useNavigate();

  const navigateToIntro = () => {
    navigate('/');
  }

  return <>
    <main className="flex justify-center items-center h-full w-full bg-[url(/desktop_back.png)] bg-cover">
      <article className="p-[40px] m-[10px] flex flex-col h-fit w-fit gap-[20px] bg-gray-50 hover:bg-gray-100 items-center justify-center transition duration-500 rounded-[60px]">
        <PostinSvg className="w-full h-full max-w-[200px] md:max-w-[240px] fill-gray-900" />

        <section>
          <h1 className="text-[1.1rem] mb-[10px] font-bold text-center">Ops... 🤭</h1>
          <p>Aparentemente, ocorreu um erro.</p>
          <p>Volte para a página inicial e tente novamente.</p>
        </section>

        <button type="submit" onClick={navigateToIntro}
          className="bg-gray-900 max-w-[400px] w-full text-white h-[50px] rounded-full hover:bg-gray-800 transition">
          Voltar
        </button>
      </article>
    </main>
  </>
}