import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'
import ProjectPage from './pages/ProjectPage'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='projects' element={<ProjectsPage/>}/>
        <Route path='about' element={<AboutPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
        <Route path='projects/:id' element={<ProjectPage/>}/>
      </Route>
    )
  );

  return <RouterProvider router={router}/>
}

export default App