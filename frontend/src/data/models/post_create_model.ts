export default class PostCreateModel{
  constructor(text: string, username: string, color: string) {
    this.text = text;
    this.username = username;
    this.color = color;
   }
  
  text: string;
  username: string;
  color: string;
}