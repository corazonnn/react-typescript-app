import { createFalse } from 'typescript';
import { Home } from '../components/pages/Home';
import { Page404 } from '../components/pages/Page404';
import { UserManagement } from '../components/pages/UserManagement';
import { Setting } from '../components/Setting';

//  /home配下のルーティングを作る
export const homeRoutes =[
  //exactは指定したpathと完全一致かどうか
  {
    path:"/",
    exact:true,
    children: <Home />
  },
  {
    path:"/user_management",
    exact:false,
    children: <UserManagement />
  },
  {
    path:"/setting",
    exact:false,
    children: <Setting />
  },
  {
    path:"*",
    exact:true,
    children: <Page404 />
  },
]