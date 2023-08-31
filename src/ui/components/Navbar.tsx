import { useState } from "react";
import PostinSvg from "../svgs/PostinSvg";
import { useNavigate } from "react-router-dom";
import apiUrls from "../../data/datasources/api";
import Cookies from "js-cookie";

type NavbarProps = {
  page?: string,
}

/**
 * `Navbar padrão do site.`
 * 
 * Se localiza no canto superior da tela, pode receber
 * uma `string` [page], um texto que fica no centro da
 * Navbar e representa a página atual.
 * 
 * Possui um botão com a foto do usuário no canto lateral 
 * direito, que, ao apertado, exibe um menu flutuante com
 * opções. 
 */
export default function Navbar(props: NavbarProps) {
  const username = Cookies.get('auth-username');

  const [openFloatingMenu, setOpenFloatingMenu] = useState(false);
  const onClickOpenCloseFloatingMenu = () => {
    setOpenFloatingMenu(!openFloatingMenu)
  }

  const navigate = useNavigate();

  const navigateToMe = () => {
    navigate('/me')
  };

  const navigateToHome = () => {
    navigate('/home');
  }

  const navigateToLogoff = () => {
    navigate('/logoff');
  }

  const navigateToConfig = () => {
    navigate('/config');
  }

  return <>
    {/* Navbar */}
    <nav className="backdrop-blur-3xl fixed top-0 p-[10px] w-full flex items-center justify-center">
      <menu className="bg-gray-50 hover:bg-gray-100 transition w-full h-[50px] flex items-center justify-between rounded-full p-[10px] ps-[20px] pe-[20px] duration-500">
        <li className="flex">
          <a className="flex gap-[10px] justify-center items-center" href="/home">
            <PostinSvg className="h-[30px] fill-gray-900" />
            <div><strong>Post</strong> in</div>
          </a>
        </li>

        {
          props.page != null ?
            <li className="hidden md:flex m-auto left-60 right-60 items-center justify-center absolute">
              <p className="font-light">{props.page}</p>
            </li>
            :
            null
        }

        <li className="flex">
          <button type="button" onClick={onClickOpenCloseFloatingMenu}>
            <img className="rounded-full w-[35px] h-[35px]"
              src={apiUrls.default + 'public/pictures/' + username + '.png'}
              alt="Picture"
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = apiUrls.default + 'public/pictures/user.png';
              }}
            />
          </button>
        </li>
      </menu>
    </nav>
    {/* / Navbar */}

    {/* Floating Options Menu */}
    <div
      className="backdrop-blur-3xl rounded-bl-[30px] rounded-br-[30px] fixed p-[10px] right-0 top-0 mt-[70px] z-50"
      style={{ display: openFloatingMenu ? '' : 'none' }}
    >
      <menu
        className="bg-gray-50 items-end justify-center flex flex-col w-fit p-[10px] gap-[10px] rounded-[20px] hover:bg-gray-100 transition duration-500"
      >
        <li className="w-full bg-gray-100 hover:bg-gray-200  rounded-[10px] flex justify-end items-center transition duration-500">
          <button
            type="button"
            onClick={onClickOpenCloseFloatingMenu}
            className="p-[10px] flex items-center gap-[20px] w-full justify-between"
          >
            <p className="text-[1.2rem]">🔒</p>
            Fechar
          </button>
        </li>

        <li className="w-full bg-gray-100 hover:bg-gray-200  rounded-[10px] flex justify-end items-center transition duration-500">
          <button
            type="button"
            onClick={navigateToHome}
            className="p-[10px] flex items-center gap-[20px] w-full justify-between"
          >
            <p className="text-[1.2rem]">🏠</p>
            Início
          </button>
        </li>

        <li className="w-full bg-gray-100 hover:bg-gray-200  rounded-[10px] flex justify-end items-center transition duration-500">
          <button
            type="button"
            onClick={navigateToMe}
            className="p-[10px] flex items-center gap-[20px] w-full justify-between"
          >
            <p className="text-[1.2rem]">😁</p>
            Seu perfil
          </button>
        </li>

        <li className="w-full bg-gray-100 hover:bg-gray-200 rounded-[10px] flex justify-end items-center transition duration-500">
          <button
            type="button"
            onClick={navigateToConfig}
            className="flex items-center p-[10px] gap-[20px] w-full justify-between"
          >
            <p className="text-[1.2rem]">🔗</p>
            Configurações
          </button>
        </li>

        <li className="w-full bg-gray-100 hover:bg-red-100 rounded-[10px] flex justify-end items-center transition duration-500">
          <button
            type="button"
            onClick={navigateToLogoff}
            className="flex items-center text-red-900  p-[10px] gap-[20px] w-full justify-between"
          >
            <p className="text-[1.2rem]">😭</p>
            Sair
          </button>
        </li>
      </menu>
    </div>
    {/* / Floating Options Menu */}
  </>
}