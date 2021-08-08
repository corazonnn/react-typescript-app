import { useContext } from "react";
import {
  LoginUserContext,
  LoginUserContextType,
} from "../providers/LoginUserProvider";
//カスタムフックとは要するに関数.毎度コンポーネントの中でuseContextを呼び出すのはめんどくさいからここで定義している
//カスタムフックでcontextを呼び出すフック
export const useLoginUser = (): LoginUserContextType =>
  useContext(LoginUserContext);//value={{ loginUser, setLoginUser }}を受け取ってる
  //数あるContextの中からuse(ABC)で指定されたコンテキストの今の値をとってくるカスタムフック
