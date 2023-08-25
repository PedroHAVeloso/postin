import { useState } from "react";

export default function PostCreateFormComponent() {
  let [postColor, setPostColor] = useState("");

  return <form action="/home" className="h-full pt-[10px] flex flex-col gap-[20px] items-center" id="formPost">
    <h1><em>Cole</em> o seu <strong>post</strong> no mural. 😁</h1>
    <div className="flex h-full w-full gap-[10px]">
      <textarea required maxLength={200} name="post" id="post" placeholder="Escreva aqui seu post." style={{ backgroundColor: postColor }} className="resize-none w-full h-full rounded-[20px] p-[20px]"></textarea>
      <fieldset className="flex flex-col h-full justify-between">
        <input required onClick={() => setPostColor("#FFFFFF")} type="radio" name="postColor" id="postColor" value="#FFFFFF" className="h-[30px] w-[30px] bg-[#FFFFFF] appearance-none rounded-full checked:border-[2px] checked:border-gray-900" />
        <input required onClick={() => setPostColor("#FFE9F6")} type="radio" name="postColor" id="postColor" value="#FFE9F6" className="h-[30px] w-[30px] bg-[#FFE9F6] appearance-none rounded-full checked:border-[2px] checked:border-gray-900" />
        <input required onClick={() => setPostColor("#FBE3FF")} type="radio" name="postColor" id="postColor" value="#FBE3FF" className="h-[30px] w-[30px] bg-[#FBE3FF] appearance-none rounded-full checked:border-[2px] checked:border-gray-900" />
        <input required onClick={() => setPostColor("#FFC6C9")} type="radio" name="postColor" id="postColor" value="#FFC6C9" className="h-[30px] w-[30px] bg-[#FFC6C9] appearance-none rounded-full checked:border-[2px] checked:border-gray-900" />
        <input required onClick={() => setPostColor("#E3EEFF")} type="radio" name="postColor" id="postColor" value="#E3EEFF" className="h-[30px] w-[30px] bg-[#E3EEFF] appearance-none rounded-full checked:border-[2px] checked:border-gray-900" />
        <input required onClick={() => setPostColor("#FCF8A8")} type="radio" name="postColor" id="postColor" value="#FCF8A8" className="h-[30px] w-[30px] bg-[#FCF8A8] appearance-none rounded-full checked:border-[2px] checked:border-gray-900" />
        <input required onClick={() => setPostColor("#D4FF9E")} type="radio" name="postColor" id="postColor" value="#D4FF9E" className="h-[30px] w-[30px] bg-[#D4FF9E] appearance-none rounded-full checked:border-[2px] checked:border-gray-900" />
      </fieldset>
    </div>
  </form>
}