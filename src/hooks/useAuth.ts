import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import { User } from "../types/api/user";
import { useMessage } from "./useMessage";
import { useLoginUser } from "./useLoginUser";
//カスタムフック
export const useAuth = () => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const { showMessage } = useMessage();
  　//useLoginUser()ではuseContextからvalue内の{loginUser, setLoginUser}を取得している。そのうちのsetLoginUserをげっとしているのが上の文
  const { setLoginUser } = useLoginUser();//useLoginUserにはsetUserが含まれていないのになぜuseLoginUserにしたのか？LoginUserProviderではだめなのか
  
  const login = useCallback((id: string) => {
    setLoading(true);
    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (res.data) {
          setLoginUser(res.data)
          showMessage({ title: "ログインしました", status: "success" });
          history.push("/home");
        } else {
          showMessage({ title: "ユーザが見つかりません", status: "error" });
          setLoading(false);
        }
      })
      .catch(() => {
        showMessage({ title: "ログインできません", status: "error" });
        setLoading(false);
      });
  }, []);
  return { login, loading };
};
