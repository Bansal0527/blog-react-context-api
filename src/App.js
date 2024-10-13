import Header from "./components/Header";
import Blogs from "./components/Blogs";
import  Pagination  from "./components/Pagination";
import AppContextProvider, { AppContext } from "./context/AppContext";
import { useContext } from "react";
import { useEffect } from "react";
import "./App.css";
export default function App() {
  const {fetchBlogPosts} = useContext(AppContext);
  
  useEffect( () => {
    fetchBlogPosts();
  }, [])


  return (
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
      <Header></Header>
      <Blogs></Blogs>
      <Pagination></Pagination>
    </div>
  );
}
