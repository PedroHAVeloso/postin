import { useState } from "react";
import HeartSvg from "../svgs/HeartSvg";
import apiUrls from "../../data/datasources/api_urls";
import PostPresenter from "../../presenter/post_presenter";

type PostProps = {
  id: number,
  color: string,
  text: string,
  favorites: number,
  username: string,
  className?: string
}

/**
 * `Post padrão.`
 * 
 * Retorna um post padrão do site, com cor de fundo,
 * texto, usuário e favoritos. 
 */
export default function Post(props: PostProps) {
  const username = props.username.toLocaleLowerCase();

  const [isFavorite, setIsFavorite] = useState(false);
  const [favorites, setFavorites] = useState(props.favorites);

  const onClickFavoriteButton = () => {
    const postPresenter = new PostPresenter();

    if (isFavorite) {
      setFavorites(favorites - 1);
      setIsFavorite(false);
      postPresenter.unfavorite(props.id);
    } else {
      setFavorites(favorites + 1);
      setIsFavorite(true);
      postPresenter.favorite(props.id);
    }
  }

  return <>
    <article
      className={"p-[20px] rounded-[20px] flex flex-col gap-[10px] whitespace-pre-line " + props.className}
      style={{ backgroundColor: props.color }}
    >
      <p>{props.text}</p>

      <menu className="flex justify-between items-center">
        <li>
          <a href={"/profile/" + username} className="flex gap-[6px] items-center justify-between text-[0.95rem] font-light">
            <img
              className="rounded-full h-[30px] w-[30px]"
              src={apiUrls.default + 'public/pictures/' + username + '.png'}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = apiUrls.default + 'public/pictures/user.png';
              }}
            />
            @{username}
          </a>
        </li>

        <li>
          <button
            type="button"
            onClick={onClickFavoriteButton}
            className="flex gap-[6px] justify-center items-center"
          >
            <HeartSvg
              filled={isFavorite}
              className={isFavorite ? "fill-red-600 h-[20px]" : "fill-gray-900 h-[20px]"}
            />
            {favorites}
          </button>
        </li>
      </menu>

    </article >
  </>
}