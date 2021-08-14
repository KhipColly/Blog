import "./single.css"
import Sidebar from "../../Component/sidebar/Sidebar"
import SinglePost from "../../Component/singlePost/SinglePost"
export default function Single() {
  return (
    <div className="single">
      <SinglePost/>
      <Sidebar/>
    </div>
  );
}
