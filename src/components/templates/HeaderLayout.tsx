import { memo, ReactNode, VFC } from "react";
import { Header } from "../organisms/layout/Header";

//header画面はログイン後の画面に必須. (/home配下)
type Props = {
  children: ReactNode; //タグで囲ったものを受け取れるようになる
  //実際childrenにはコンポーネントが入ってくる
}

export const HeaderLayout: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  )
});