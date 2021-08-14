import Header from "../../Component/header/Header"
import Post from "../../Component/posts/Post";
import Sidebar from "../../Component/sidebar/Sidebar";
import "./home.css"

export default function Home() {
  return (
    <>
    <Header/>
    <div className="home">
      <Post />
      <Sidebar />
      </div>
    </>
  );
}
