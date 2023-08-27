import { useState } from "react";
import HeartSvg from "./svgs/HeartSvg";
import ProfilePictureComponent from "./ProfilePictureComponent";

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
      <div className="flex justify-between items-center gap-[6px]">
        <ProfilePictureComponent
          href="/home"
          size={30}
          pictureUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiXNspavEPevYsqcUhundNhbcG39bnVuUrUw&usqp=CAU">
          <p className="text-[0.95rem] font-light">@FinnUnter</p>
        </ProfilePictureComponent>
      </div>


      <button type="button" onClick={() => onClickFavoriteButton()} className="flex gap-[6px] justify-center items-center">
        <HeartSvg filled={isFavorite} className={isFavorite ? "fill-red-600 h-[20px]" : "fill-gray-900 h-[20px]"} />
        {/* <p className="text-[1.4rem]">
          {isFavorite ? '❤️' : '🤍'}
        </p> */}
        <p>{favorites}</p>
      </button>
    </div>
  </article >
}