import { useState } from "react";

export default function PostCreateFormComponent() {
  let [postColor, setPostColor] = useState("#FBE3FF");

  return <form action="/" className="h-full p-[10px] flex flex-col gap-[20px]" id="formPost">
    <h1>Cole o seu <em>post</em> no mural. 😁</h1>
    <div className="flex h-full w-full gap-[10px]">
      <textarea name="post" id="post" placeholder="Escreva aqui seu post." className="resize-none w-full h-full bg-gray-100 rounded-[20px] p-[20px]"></textarea>
      <fieldset className="flex flex-col h-full justify-between">
        <input onClick={() => setPostColor("#FFE9F6")} type="radio" name="postColor" id="postColor" value="#FFE9F6" className="h-[30px] w-[30px] bg-[#FFE9F6] appearance-none rounded-full checked:border-[2px] checked:border-gray-900" />
        <input type="radio" name="postColor" id="postColor" value="#FBE3FF" className="h-[30px] w-[30px] bg-[#FBE3FF] appearance-none rounded-full checked:border-[2px] checked:border-gray-900" />
        <input type="radio" name="postColor" id="postColor" value="#FFC6C9" className="h-[30px] w-[30px] bg-[#FFC6C9] appearance-none rounded-full checked:border-[2px] checked:border-gray-900" />
        <input type="radio" name="postColor" id="postColor" value="#E3EEFF" className="h-[30px] w-[30px] bg-[#E3EEFF] appearance-none rounded-full checked:border-[2px] checked:border-gray-900" />
        <input type="radio" name="postColor" id="postColor" value="#FCF8A8" className="h-[30px] w-[30px] bg-[#FCF8A8] appearance-none rounded-full checked:border-[2px] checked:border-gray-900" />
        <input type="radio" name="postColor" id="postColor" value="#D4FF9E" className="h-[30px] w-[30px] bg-[#D4FF9E] appearance-none rounded-full checked:border-[2px] checked:border-gray-900" />
      </fieldset>
    </div>
  </form>
}