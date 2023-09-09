import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import PostComponent from "./Post";
import PostPresenter from "../../presenter/post_presenter";
import { useState } from "react";

type PostWallProps = {
  className?: string;
  title?: string;
  username?: string;
  columnsBreakPoints: { [key: number]: number }
}

/**
 * `Mural de posts.`
 * 
 * Retorna o mural inicial de posts do site.
 * 
 * Se fornecido um usuário, retorna apenas o mural
 * de posts daquele usuário.
 * 
 * Deve ser definido as propriedades de tamanhos para quebra
 * das colunas do mural.
 * 
 * Pode receber um título que será exibido no topo do mural.
 */
export default function PostWall(props: PostWallProps) {
  const postPresenter = new PostPresenter();

  const [posts, setPosts] = useState<Array<{
    id: number;
    text: string;
    favorites: number;
    color: string;
    username: string;
  }> | false>(false);

  const getPosts = async () => {
    if (props.username != undefined) {
      setPosts(await postPresenter.getUserPosts(props.username));
    } else {
      setPosts(await postPresenter.getAllPosts());
    }
  }

  if (posts == false) {
    getPosts();
  }

  return <>
    <section className={props.className}>
      {
        props.title != null ?
          <h1 className="text-center text-[1.2rem]">{props.title}</h1>
          :
          null
      }

      {
        posts == false
          ?
          <div className="text-center font-bold text-[2rem] text-gray-700 flex h-full w-full items-center justify-center">
            <h1>
              Carregando...
            </h1>
          </div>
          :
          <ResponsiveMasonry columnsCountBreakPoints={props.columnsBreakPoints}>
            <Masonry gutter="10px" style={{ width: '100%' }}>
              {posts.map((item) => {
                return (
                  <PostComponent
                    key={item.id}
                    id={item.id}
                    color={item.color}
                    text={item.text}
                    favorites={item.favorites}
                    username={item.username}
                  />
                );
              })}
            </Masonry>
          </ResponsiveMasonry>
      }

    </section>
  </>
}
