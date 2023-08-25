import { useState } from "react";
import HeartSvg from "./svgs/HeartSvg";

type PostComponentProps = {
  color: string,
  text: string,
  favorites: number,
  className?: string
}

export default function PostComponent(props: PostComponentProps) {
  let [isFavorite, setIsFavorite] = useState(false);
  let [favorites, setFavorite] = useState(props.favorites);

  function onClickFavoriteButton() {
    setIsFavorite(!isFavorite);

    if (isFavorite) {
      setFavorite(favorites - 1);
    } else {
      setFavorite(favorites + 1);
    }
  }

  return <article className={props.className + " p-[20px] rounded-[20px] flex flex-col gap-[10px]"} style={{ backgroundColor: props.color }
  }>
    <p>{props.text}</p>
    <div className="flex justify-between items-center">
      <a href="/">
        <img className="w-[30px] h-[30px] rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiXNspavEPevYsqcUhundNhbcG39bnVuUrUw&usqp=CAU" alt="" />
      </a>
      <button type="button" onClick={() => onClickFavoriteButton()} className="flex gap-[6px] justify-center items-center">
        <HeartSvg filled={isFavorite} className="fill-gray-900 h-[20px]" />
        <p>{favorites}</p>
      </button>
    </div>
  </article >
}