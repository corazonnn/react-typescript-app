import { createContext, Dispatch, SetStateAction, ReactNode, useState } from 'react';
import { User } from "../types/api/user";
//ただの型指定
export type LoginUserContextType = {
  loginUser: User | null;
  setLoginUser: Dispatch<SetStateAction<User | null>>
}
//コンテキストの作成。初期値は空配列、LoginUserContext型
export const LoginUserContext = createContext<LoginUserContextType>({} as LoginUserContextType);

/**<LoginUserProvider>
 *   <Toolbar />
 * </LoginUserProvider>
 * みたいな感じで使うと予想
 */
export const LoginUserProvider = (props: { children: ReactNode }) => {
  const { children } = props
  const [loginUser, setLoginUser] = useState<User | null>(null)
  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  )
}
/*
context
dispatch
setstatement
provider

本来)<Toolbar theme="dark" />
context)<provider theme="dark">
          <Toolbar />
        </provider>
*/