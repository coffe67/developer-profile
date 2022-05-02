import logo from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom'
import {Home} from './layouts/Home';
import {Projects} from './layouts/Projects';
import { ProjectDetail } from './layouts/ProjectDetail';
import {Blog} from './layouts/Blog';
import {Post} from './layouts/Post';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="projects/" element={<Projects />}/>
      <Route path="projects/:slug" element={<ProjectDetail />}/>      
      <Route path="blog/" element={<Blog />} />
      <Route path="blog/:slug" element={<Post />}/>      
    </Routes>
  </div>
  );
}

export default App;
