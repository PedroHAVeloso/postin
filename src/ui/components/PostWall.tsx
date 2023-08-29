import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import PostComponent from "./Post";
import getAllPosts from "../../controllers/posts";

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
  const posts = getAllPosts();

  return <>
    <section className={props.className}>

      {
        props.title != null ?
          <h1 className="text-center text-[1.2rem]">{props.title}</h1>
          :
          null
      }

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
                username="FinnUnter"
              />
            );
          })}
        </Masonry>
      </ResponsiveMasonry>

    </section>
  </>
}