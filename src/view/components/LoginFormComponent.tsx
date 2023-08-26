import { useState } from "react";
import InputComponent from "./InputComponent";

export default function LoginFormComponent() {
  let [email, setEmail] = useState('');
  function handleEmail(event: React.ChangeEvent) {
    const target = event.target as HTMLInputElement;
    setEmail(target.value);
  }

  let [password, setPassword] = useState('');
  function handlePassword(event: React.ChangeEvent) {
    const target = event.target as HTMLInputElement;
    setPassword(target.value);
  }

  function formSubmit() {
    
  }

  return <form onSubmit={formSubmit}
    className="flex flex-col w-full justify-center items-center gap-[30px] max-w-[500px] sm:p-[40px] rounded-[40px]">
    <fieldset className="w-full flex items-center justify-center flex-col gap-[10px]">
      <h1 className="sm:text-[1.2rem] text-gray-900">Entre no <strong>Post</strong> in</h1>
      <InputComponent id="email"
        type="email"
        label="E-mail"
        placeholder="usuario@email.com"
        value={email}
        name="name"
        onChange={handleEmail}
        autoComplete="email" />
      <InputComponent id="password"
        type="password"
        label="Senha"
        placeholder="******"
        value={password}
        name="password"
        onChange={handlePassword}
        autoComplete="current-password" />
    </fieldset>
    <button type="submit"
      className="bg-gray-900 max-w-[400px] w-full text-white h-[50px] rounded-full hover:bg-gray-800 transition">
      Entrar
    </button>
  </form>
}