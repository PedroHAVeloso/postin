import { useNavigate } from "react-router-dom";
import PostinSvg from "../svgs/PostinSvg";
import Cookies from "js-cookie";

/**
 * `Página para desconectar usuários.`
 */
export default function LogoffPage() {
  const navigate = useNavigate();

  Cookies.remove('auth-token');
  Cookies.remove('auth-username');
  Cookies.remove('auth-email');

  const navigateToIntro = () => {
    navigate('/');
  }

  setTimeout(
    navigateToIntro,
    2000,
  )

  return <>
    <main className="flex justify-center items-center h-full w-full bg-[url(/desktop_back.png)] bg-cover">
      <article className="p-[40px] m-[10px] flex flex-col max-w-[360px] h-fit w-fit gap-[20px] bg-gray-50 hover:bg-gray-100 items-center justify-center transition duration-500 rounded-[60px]">
        <PostinSvg className="w-full h-full max-w-[200px] md:max-w-[240px] fill-gray-900" />

        <section>
          <h1 className="text-[1.1rem] mb-[10px] font-bold text-center">Saindo... 😭</h1>
          <p>Aguarde um instante, estamos te desconectando.</p>
        </section>
      </article>
    </main>
  </>
}