import InputComponent from "../components/InputComponent";
import GoogleSvg from "../components/svgs/GoogleSvg";
import PostinSvg from "../components/svgs/PostinSvg";
import UnimarSvg from "../components/svgs/UnimarSvg";

export default function WelcomePage() {
  return <>
    <main
      className="flex w-full h-fit md:h-screen flex-col md:flex-row gap-[20px]">
      <article
        className="flex w-full gap-[20px] flex-col justify-center items-center p-[10px] pt-[80px] pb-[60px] bg-gray-50 hover:bg-gray-100 transition duration-500 rounded-[20px]">
        <PostinSvg
          className="fill-gray-900 h-[150px] w-[150px] sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[300px]" />
        <ul
          className="list-none sm:text-[1.2rem] text-gray-900">
          <li><h1>Moderno, fácil, rápido:</h1></li>
          <li><p><strong>Post in</strong>, uma rede social <em>Unimar</em>.</p></li>
        </ul>
        <a href="https://unimar.br/" className="absolute top-0 left-0 mt-[20px] ms-[20px] ">
          <UnimarSvg
            className="fill-gray-900 h-[30px]" />
        </a>
      </article>

      <article
        className="flex w-full flex-col gap-[20px] p-[20px] justify-center items-center bg-gray-50 hover:bg-gray-100 transition duration-500 rounded-[20px]">
        <form action="/" method="POST"
          className="flex flex-col w-full justify-center items-center gap-[30px] max-w-[500px] sm:p-[40px] rounded-[40px]">
          <fieldset className="w-full flex items-center justify-center flex-col gap-[10px]">
            <h1 className="text-[1.2rem] font-bold text-gray-900">Login</h1>
            <InputComponent id="name"
              type="text"
              label="Nome"
              placeholder="Nome de usuário"
              autoComplete="username" />
            <InputComponent id="password"
              type="password"
              label="Senha"
              placeholder="******"
              autoComplete="current-password" />
          </fieldset>
          <button type="submit" onClick={(event) => event.preventDefault()}
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
      </article>
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