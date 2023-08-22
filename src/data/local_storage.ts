export default interface LocalStorage {
  get(name: string): any;
  set(name: string, value: any): void;
  remove(name: string): void;
}