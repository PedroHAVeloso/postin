import { useState } from "react";
import PostinSvg from "./svgs/PostinSvg";
import { useNavigate } from "react-router-dom";

type HeaderNavbarComponentProps = {
  page?: string,
}

export default function HeaderNavbarComponent(props: HeaderNavbarComponentProps) {
  let [openDrawer, setOpenDrawer] = useState(false);

  const navigate = useNavigate();

  const navigateToMe = () => navigate('/me');

  return <>
    <header className="backdrop-blur-3xl fixed top-0 p-[10px] w-full flex items-center justify-center">
      <nav className="bg-gray-50 hover:bg-gray-100 transition w-full h-[50px] flex items-center justify-between rounded-full p-[10px] ps-[20px] pe-[20px] duration-500">
        <a className="flex gap-[10px] justify-center items-center" href="/home">
          <PostinSvg className="h-[30px] fill-gray-900" />
          <h1><strong>Post</strong> in</h1>
        </a>

        <div className="hidden md:flex m-auto left-60 right-60 items-center justify-center absolute">
          {props.page != null ? <p className="font-light">{props.page}</p> : null}
        </div>

        <button type="button" onClick={() => setOpenDrawer(!openDrawer)}>
          <img className="rounded-full w-[35px] h-[35px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiXNspavEPevYsqcUhundNhbcG39bnVuUrUw&usqp=CAU"
            alt="Picture"
          />
        </button>
      </nav>
    </header>

    <div className="backdrop-blur-3xl rounded-[30px] fixed p-[10px] right-0 top-0 mt-[70px] m-[10px]" style={{ display: openDrawer ? '' : 'none' }}>
      <menu className="bg-gray-50 items-end justify-center flex flex-col w-fit p-[10px] gap-[10px] rounded-[20px] hover:bg-gray-100 transition duration-500">

        <li className="w-full bg-gray-100 hover:bg-gray-200  rounded-[10px] flex justify-end items-center transition duration-500">
          <button type="button" onClick={() => setOpenDrawer(!openDrawer)} className="p-[10px] flex items-center gap-[20px] w-full justify-between">
            <p className="text-[1.2rem]">❌</p>
            Fechar
          </button>
        </li>

        <li className="w-full bg-gray-100 hover:bg-gray-200  rounded-[10px] flex justify-end items-center transition duration-500">
          <button type="button" onClick={navigateToMe} className="p-[10px] flex items-center gap-[20px] w-full justify-between">
            <p className="text-[1.2rem]">🫵</p>
            Seu perfil
          </button>
        </li>

        <li className="w-full bg-gray-100 hover:bg-gray-200 rounded-[10px] flex justify-end items-center transition duration-500">
          <button type="button" className="flex items-center p-[10px] gap-[20px] w-full justify-between">
            <p className="text-[1.2rem]">🔗</p>
            Configurações
          </button>
        </li>

        <li className="w-full bg-gray-100 hover:bg-gray-200 rounded-[10px] flex justify-end items-center transition duration-500">
          <button type="button" className="flex items-center text-red-900 font-bold p-[10px] gap-[20px] w-full justify-between">
            <p className="text-[1.2rem]">🏃‍♂️</p>
            Sair
          </button>
        </li>

      </menu>
    </div>
  </>
}