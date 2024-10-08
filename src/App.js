import {Routes,Route } from "react-router-dom";
import About from "./componenets/About";
import Footer from "./componenets/Footer";
import Header from "./componenets/Header";
import Home from "./componenets/Home";
import Missing from "./componenets/Missing";
import Nav from "./componenets/Nav";
import NewPost from "./componenets/NewPost";
import PostPage from "./componenets/PostPage";
import EditPost from "./componenets/EditPost";
import { DataProvider } from './context/DataContext';

function App() {

  return (
    <div className="App">

      <DataProvider>
        <Header title="Social Media"/>
        <Nav />

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/post">
            <Route index element={ <NewPost/>}/>
            <Route path=":id" element={<PostPage/>} />
          </Route>
          <Route path="/edit/:id" element={<EditPost/>}/>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>

         <Footer />

      </DataProvider>
    </div>
  );
}

export default App;
