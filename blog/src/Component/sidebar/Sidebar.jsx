import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
      <span className="sidebarTitle">ABOUT ME</span>
      <img src="https://images.unsplash.com/photo-1552508744-1696d4464960?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="" />
     <p>
       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae repudiandae
        libero in labore asperiores corporis quas, ratione enim? Impedit
         suscipit reprehenderit id! Voluptatibus facilis assumenda aspernatur dolor fugit cum aut.
     </p>
     </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">CATEGORIES</span>
       <ul className="sidebarlist">
           <li className="sidebarlistitem">Education</li>
           <li className="sidebarlistitem">Sporting</li>
           <li className="sidebarlistitem">Entertainment</li>
           <li className="sidebarlistitem">Music</li>
           <li className="sidebarlistitem">Politics</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarsocial">
          <i className="sidebarIcon fab fa-twitter"></i>
          <i className="sidebarIcon fab fa-facebook-f"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
}



