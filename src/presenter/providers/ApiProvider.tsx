import { useState } from "react";
import { checkApi } from "../../data/datasources/api";

type ApiProviderProps = {
  children: React.ReactNode
  onError: React.ReactNode
}

/**
 * Verifica a conexão com a API. 
 * 
 * Caso não haja conexão, retorna o componente na `onError`.
 */
export default function ApiProvider(props: ApiProviderProps) {
  const [apiStatus, setApiStatus] = useState(true);

  const checkApiStatus = async () => {
    const status = await checkApi();

    if (status != true) {
      setApiStatus(false);
    }
  }

  checkApiStatus();

  if (apiStatus) {
    return props.children;
  }

  return props.onError;
}