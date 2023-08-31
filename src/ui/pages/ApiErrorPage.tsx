import PostinSvg from "../svgs/PostinSvg";

/**
 * `Caso não haja comunicação com a API, essa 
 * página deve ser exibida.`
 */
export default function ApiErrorPage() {
  return <>
    <main className="flex justify-center items-center h-full w-full bg-[url(/desktop_back.png)] bg-cover">
      <article className="p-[40px] m-[10px] flex flex-col h-fit w-fit gap-[20px] bg-gray-50 hover:bg-gray-100 items-center justify-center transition duration-500 rounded-[60px]">
        <PostinSvg className="w-full h-full max-w-[200px] md:max-w-[240px] fill-gray-900" />

        <section>
          <h1 className="text-[1.1rem] mb-[10px] font-bold text-center">Ops... 😅</h1>
          <p>Aparentemente, nosso sistema está fora do ar.</p>
          <p>Volte mais tarde e tente novamente.</p>
        </section>
      </article>
    </main>
  </>
}