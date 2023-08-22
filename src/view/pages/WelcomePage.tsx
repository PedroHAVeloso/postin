import logo from '/logo.svg';

export default function WelcomePage() {
  return <main className="flex w-full h-full flex-col md:flex-row">
    <article className="flex w-full h-full gap-[20px] flex-col justify-center items-center">
      <img src={logo} alt="Logo" className="w-[200px]" />
      <ul className="list-none">
        <li>
          <h1 className="text-[1.2rem]">Postin, uma rede <strong>minimalista</strong> e <strong>simples</strong>.</h1>
        </li>
        <li>
          <h2 className="text-[1.2rem]"><em>Cole suas ideias no mural.</em></h2>
        </li>
      </ul>
    </article>
    <article
      className="flex w-full h-full flex-col gap-[10px] justify-center items-center">
      <button type="button"
        className="border-[3px] border-black max-w-[300px] w-full h-[50px] rounded-full hover:bg-gray-100">
        Entrar
      </button>
      <button type="button"
        className="bg-black text-white max-w-[300px] w-full h-[50px] rounded-full hover:bg-gray-900">
        Cadastrar
      </button>
    </article>
  </main>
}