import './App.css'
import {Routes, Route} from 'react-router-dom';
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import ProjectsPage from "./pages/projects/main";
import ProjectsHome from "./pages/projects";
import ProjectPage from "./pages/projects/project-page";

function App() {
    return (
        <Routes>
            <Route index element={<HomePage/>}/>
            <Route path={'about'} element={<AboutPage/>}/>
            <Route path={'projects'} element={<ProjectsHome/>}>
                <Route index element={<ProjectsPage/>}/>
                <Route path={':project'} element={<ProjectPage/>}/>
            </Route>
            <Route path={'contact'} element={<ContactPage/>}/>
        </Routes>
    );
}

export default App;
