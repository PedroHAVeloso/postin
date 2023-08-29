import { useState } from "react";
import PostPresenter from "../../presenter/post_presenter";
import PostCreateModel from "../../data/models/post_create_model";
import { useNavigate } from "react-router-dom";

/** 
 * `Formulário para a criação de um post.`
 * 
 * Seu estado inicial é um botão que, ao ser clicado,
 * exibe o formulário para a criação de um post.
 * 
 * Sua posição é no canto direito inferior da tela.
 */
export default function CreatePost() {
  const [postColor, setPostColor] = useState("");
  const [hiddenCreatePost, setHiddenCreatePost] = useState(false);

  const navigate = useNavigate();
  const refreshPage = () => {
    navigate(0);
  }

  const [postText, setPostText] = useState("");
  const handlePostText = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    setPostText(target.value);
  }

  const onClickHiddenCreatePost = () => {
    setHiddenCreatePost(!hiddenCreatePost);
  }

  const onClickInputColor = (color: string) => {
    setPostColor(color);
  }

  const formSubmit = async (event: React.MouseEvent) => {
    event.preventDefault();
    const postPresenter = new PostPresenter();
    const create = await postPresenter.create(new PostCreateModel(
      postText,
      '',
      postColor,
    ));

    if (create) {
      refreshPage();
      return;
    }

    return;
  }

  return <>
    {/* Hidden Create Post Button */}
    <div
      style={{ display: !hiddenCreatePost ? '' : 'none' }}
      className="backdrop-blur-3xl rounded-tl-[30px] fixed bottom-0 right-0 max-w-[150px] w-full p-[10px]"
    >
      <button
        type="button"
        onClick={onClickHiddenCreatePost}
        className="bg-gray-900 font-bold w-full text-white h-[50px] rounded-full hover:bg-gray-800 transition duration-500"
      >
        Postar
      </button>
    </div>
    {/* / Hidden Create Post Button */}

    {/* Create Post */}
    <div
      style={{ display: !hiddenCreatePost ? 'none' : '' }}
      className="fixed bottom-0 w-full h-full max-h-[400px] max-w-[600px] p-[10px] backdrop-blur-3xl right-0 rounded-tl-[40px] rounded-tr-[40px]"
    >

      <section className="bg-gray-50 h-full justify-between flex flex-col w-full p-[10px] gap-[20px] rounded-[30px]">
        <h1 className="mt-[10px] text-center"><em>Cole</em> o seu <strong>post</strong> no mural. 😁</h1>

        {/* Form */}
        <form
          action="/home"
          className="h-full flex w-full gap-[20px] items-center"
          id="formPost"
        >
          <textarea
            required maxLength={200} name="post" id="post"
            placeholder="Escreva aqui seu post."
            style={{ backgroundColor: postColor }}
            value={postText}
            onChange={handlePostText}
            className="resize-none w-full h-full rounded-[20px] p-[20px]"
          />

          <fieldset className="flex flex-col h-full justify-between">
            <input
              onClick={() => onClickInputColor("#FFFFFF")}
              type="radio" name="postColor" id="postColor" value="#FFFFFF" required
              className="h-[30px] w-[30px] bg-[#FFFFFF] appearance-none rounded-full checked:border-[2px] checked:border-gray-900"
            />
            <input
              onClick={() => onClickInputColor("#FFE9F6")}
              type="radio" name="postColor" id="postColor" value="#FFE9F6" required
              className="h-[30px] w-[30px] bg-[#FFE9F6] appearance-none rounded-full checked:border-[2px] checked:border-gray-900"
            />
            <input
              onClick={() => onClickInputColor("#FBE3FF")}
              type="radio" name="postColor" id="postColor" value="#FBE3FF" required
              className="h-[30px] w-[30px] bg-[#FBE3FF] appearance-none rounded-full checked:border-[2px] checked:border-gray-900"
            />
            <input
              onClick={() => onClickInputColor("#FFC6C9")}
              type="radio" name="postColor" id="postColor" value="#FFC6C9" required
              className="h-[30px] w-[30px] bg-[#FFC6C9] appearance-none rounded-full checked:border-[2px] checked:border-gray-900"
            />
            <input
              onClick={() => onClickInputColor("#E3EEFF")}
              type="radio" name="postColor" id="postColor" value="#E3EEFF" required
              className="h-[30px] w-[30px] bg-[#E3EEFF] appearance-none rounded-full checked:border-[2px] checked:border-gray-900"
            />
            <input
              onClick={() => onClickInputColor("#FCF8A8")}
              type="radio" name="postColor" id="postColor" value="#FCF8A8" required
              className="h-[30px] w-[30px] bg-[#FCF8A8] appearance-none rounded-full checked:border-[2px] checked:border-gray-900"
            />
            <input
              onClick={() => onClickInputColor("#D4FF9E")}
              type="radio" name="postColor" id="postColor" value="#D4FF9E" required
              className="h-[30px] w-[30px] bg-[#D4FF9E] appearance-none rounded-full checked:border-[2px] checked:border-gray-900"
            />
          </fieldset>
        </form>
        {/* / Form */}

        <menu className="flex gap-[10px] justify-center items-center">
          <li className="w-full h-fit flex">
            <button type="submit" form="formPost" onClick={formSubmit}
              className=" bg-gray-900 font-bold w-full text-white h-[50px] rounded-full hover:bg-gray-800 duration-500 transition">
              Postar
            </button>
          </li>

          <li className="w-[160px] h-fit flex">
            <button type="button" onClick={onClickHiddenCreatePost}
              className="border-gray-900 border-[3px] font-bold w-full text-gray-900 h-[50px] rounded-full hover:bg-gray-100 duration-500 transition">
              Sair
            </button>
          </li>
        </menu>
      </section>

    </div>
    {/* / Create Post */}
  </>

}