import { useCookies } from "react-cookie";
import LocalStorage from "./local_storage";

export default class CookieData implements LocalStorage {
  public get(name: string): any {
    const [cookie] = useCookies([name])
    return cookie;
  }

  public set(name: string, value: any): void {
    const [, _setCookie,] = useCookies([name]);

    _setCookie(name, value);
  }

  public remove(name: string): void {
    const [, , _removeCookie] = useCookies();

    _removeCookie(name);
  }
}
