import GoogleSvg from "../svgs/GoogleSvg";
import PostinSvg from "../svgs/PostinSvg";
import UnimarSvg from "../svgs/UnimarSvg";
import LoginForm from "../components/LoginForm";
import Post from "../components/Post";
import { useState } from "react";
import RegisterForm from "../components/RegisterForm";

/**
 * `Página de boas-vindas.`
 * 
 * Só aparece caso não haja nenhum usuário logado.
 */
export default function WelcomePage() {
  return <>
    <main
      className="flex w-full h-fit md:h-screen flex-col md:flex-row gap-[20px]"
    >
      <section
        className="flex w-full gap-[40px] flex-col justify-center items-center p-[10px] pt-[60px] pb-[60px] bg-[url(/mobile_back.png)] bg-cover rounded-br-[20px] rounded-bl-[20px] md:rounded-none md:rounded-tr-[20px] md:rounded-br-[20px]"
      >
        <PostinSvg
          className="fill-gray-900 h-[150px] w-[150px] sm:h-[250px] sm:w-[250px] md:h-[300px] md:w-[300px]"
        />

        <Post
          id={1}
          color="#FFFFFF"
          text={'Moderno, fácil, rápido: \n Post in, uma rede social Unimar. 💙'}
          favorites={3125}
          username="postin"
          className="max-w-[350px] md:text-[1.1rem]"
        />
      </section>

      <section
        className="flex w-full flex-col gap-[20px] p-[20px] justify-center items-center bg-gray-50 hover:bg-gray-100 transition duration-500 rounded-[20px] md:rounded-none md:rounded-tl-[20px] md:rounded-bl-[20px]"
      >
        <LoginRegisterSection />
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
    </footer>
  </>
}

function LoginRegisterSection() {
  const [registerView, setRegisterView] = useState(false);
  const onClickRegisterView = () => {
    setRegisterView(!registerView);
  }

  if (registerView)
    return <>
      <RegisterForm />

      <p>Já possui uma conta?</p>

      <button type="button"
        onClick={onClickRegisterView}
        className="border-[3px] border-gray-900 text-gray-900 max-w-[400px] w-full h-[50px] rounded-full hover:bg-gray-200 transition">
        Entre
      </button>
    </>

  return <>
    <LoginForm />

    <p>Caso ainda não tenha uma conta:</p>

    <button type="button"
      onClick={onClickRegisterView}
      className="border-[3px] border-gray-900 text-gray-900 max-w-[400px] w-full h-[50px] rounded-full hover:bg-gray-200 transition">
      Cadastrar
    </button>

    <div
      className="flex justify-center items-center gap-[10px]">
      <p>Ou, entre com sua conta Google:</p>
      <GoogleSvg
        className="h-[40px] w-[40px]"
      />
    </div>
  </>
}