import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import Main from "../Layout/Main";
import Statistics from "../Statistics/Statistics";
import Topics from "../Topics/Topics";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/topics',
          element: <Topics></Topics>
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    }
    
  ])

  export default router;