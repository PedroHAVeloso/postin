import { useState } from "react";
import UserPresenter from "../../presenter/user_presenter";
import { useNavigate } from "react-router-dom";
import UserRegisterModel from "../../data/models/user_register_model";

/**
 * `Formulário para cadastro de usuários.`
 */
export default function RegisterForm() {
  const [isRegisterError, setRegisterError] = useState(false);
  const onClickSetIsRegisterError = (isError: boolean) => {
    setRegisterError(isError);
  }

  const [email, setEmail] = useState('');
  const handleEmail = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    setEmail(target.value);
  }

  const [password, setPassword] = useState('');
  const handlePassword = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    setPassword(target.value);
  }

  const [username, setUsername] = useState('');
  const handleUsername = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    setUsername(target.value);
  }

  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate('/home')
  };

  const formSubmit = async (event: React.MouseEvent) => {
    event.preventDefault();

    if (email == "" || username == "" || password == "") {
      onClickSetIsRegisterError(true);
      return;
    }

    const userPresenter = new UserPresenter();
    const register = await userPresenter.register(new UserRegisterModel(email, password, username));

    if (register) {
      navigateToHome();
      return;
    }

    onClickSetIsRegisterError(true);
    return;
  }

  return <>
    <form
      className="flex flex-col w-full justify-center items-center gap-[30px] max-w-[500px] sm:p-[40px] rounded-[40px]"
    >
      <fieldset className="w-full flex items-center justify-center flex-col gap-[10px]">
        {
          isRegisterError ?
            <h1 className="sm:text-[1.2rem] text-red-900">⚠️ Informações <strong>incorretas</strong>.</h1>
            :
            <h1 className="sm:text-[1.2rem] text-gray-900">Cadastre-se <strong>Post</strong> in</h1>
        }

        <label htmlFor="username"
          className="flex flex-col gap-[6px] w-full max-w-[400px]">
          Nome de usuário
          <input
            type="text" name="username" id="username" placeholder="postin" required
            value={username}
            onChange={handleUsername}
            className="w-full h-[50px] p-[20px] border-gray-900 border-[3px] rounded-full bg-transparent"
          />
        </label>

        <label htmlFor="email"
          className="flex flex-col gap-[6px] w-full max-w-[400px]">
          E-mail
          <input
            type="email" name="email" id="email" placeholder="user@postin.com" required
            value={email}
            onChange={handleEmail}
            className="w-full h-[50px] p-[20px] border-gray-900 border-[3px] rounded-full bg-transparent"
          />
        </label>

        <label htmlFor="password"
          className="flex flex-col gap-[6px] w-full max-w-[400px]">
          Senha
          <input
            type="password" name="password" id="password" placeholder="************" required
            value={password}
            onChange={handlePassword}
            className="w-full h-[50px] p-[20px] border-gray-900 border-[3px] rounded-full bg-transparent"
          />
        </label>
      </fieldset>

      <button type="submit" onClick={formSubmit}
        className="bg-gray-900 max-w-[400px] w-full text-white h-[50px] rounded-full hover:bg-gray-800 transition">
        Cadastrar
      </button>
    </form>
  </>
}