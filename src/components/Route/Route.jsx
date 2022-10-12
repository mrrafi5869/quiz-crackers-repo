import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import Errorpage from "../ErrorPage/Errorpage";
import Main from "../Layout/Main";
import Quiz from "../Quizs/Quizs";
import Statistics from "../Statistics/Statistics";
// import Topic from "../Topic/Topic";
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
        },
        {
          path: 'quiz/:id',
          loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
          element: <Quiz></Quiz>
        }
      ]
    }
    
  ])

  export default router;