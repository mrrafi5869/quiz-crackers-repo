import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import Errorpage from "../ErrorPage/Errorpage";
import Main from "../Layout/Main";
import Statistics from "../Statistics/Statistics";
import Topics from "../Topics/Topics";

const router = createBrowserRouter([
    {
      path: '/',
      errorElement: <Errorpage></Errorpage>,
      element: <Main></Main>,
      children: [
        {
          path: '/topics',
          loader:() => fetch('https://openapi.programming-hero.com/api/quiz'),
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