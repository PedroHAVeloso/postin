import GoogleSvg from "../components/svgs/GoogleSvg";
import PostinSvg from "../components/svgs/PostinSvg";
import UnimarSvg from "../components/svgs/UnimarSvg";

export default function WelcomePage() {
  return <main
    className="flex w-full h-full flex-col md:flex-row gap-[20px] p-[20px]">
    <article
      className="flex w-full gap-[20px] flex-col justify-center items-center p-[40px] bg-gray-50 hover:bg-gray-100 transition duration-500 rounded-[20px]">
      <PostinSvg
        className="fill-gray-900 h-[150px] w-[150px] sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[300px]" />
      <ul
        className="list-none sm:text-[1.2rem] text-gray-900">
        <li><h1>Moderno, fácil, rápido:</h1></li>
        <li><p><strong>Post in</strong>, uma rede social <em>Unimar</em>.</p></li>
      </ul>
      <a href="https://unimar.br/" className="absolute top-0 left-0 mt-[40px] ms-[30px] ">
        <UnimarSvg
          className="fill-gray-900 h-[30px]" />
      </a>
    </article>

    <article
      className="flex w-full flex-col gap-[20px] p-[20px] justify-center items-center bg-gray-50 hover:bg-gray-100 transition duration-500 rounded-[20px]">
      <form action=""
        className="flex flex-col w-full justify-center items-center gap-[30px] max-w-[500px] sm:p-[40px] bg-gray-50 rounded-[40px]">
        <fieldset className="w-full flex items-center justify-center flex-col gap-[10px]">
          <h1 className="sm:text-[1.2rem] font-bold text-gray-900">Entre com sua conta</h1>
          <label htmlFor="name"
            className="flex flex-col gap-[6px] w-full max-w-[400px]">
            Nome
            <input type="text" name="name" id="name" placeholder="Nome de usuário" autoComplete="username"
              className="w-full h-[50px] p-[20px] border-gray-900 border-[3px] rounded-full bg-transparent" />
          </label>
          <label htmlFor="password"
            className="flex flex-col gap-[6px] w-full max-w-[400px]">
            Senha
            <input type="password" name="password" id="password" placeholder="******" autoComplete="current-password"
              className="w-full h-[50px] p-[20px] border-gray-900 border-[3px] rounded-full bg-transparent" />
          </label>
        </fieldset>
        <button type="submit"
          className="bg-gray-900 max-w-[400px] w-full text-white h-[50px] rounded-full hover:bg-gray-800 transition">
          Entrar
        </button>
      </form>

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
    </article >
  </main >
}