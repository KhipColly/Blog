import "./ppost.css"

export default function Ppost() {
  return (
    <div className="ppost">
     <img
     className="ppostImg" 
      src="https://images.unsplash.com/photo-1494319827402-c4b839aed26b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="" />
   <div className="ppostInfo">
     <div className="ppostCats">
       <span className="ppostCat">Politics</span>
       <span className="ppostCat">Entertainment</span>
     </div>
     <span className="ppostTitle">
       Lorem ipsum dolor sit amet consectetur, adipisicing elit. </span>
       <hr/>
       <span className="ppostDate">30 minutes ago</span>
   </div>
   <p className="ppostDesc">
     Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Ratione esse excepturi rem itaque quo,
      aliquid eos, ex explicabo natus quas
       voluptate facilis fuga porro asperiores
        velit facere omnis a ad!</p>
    </div>
  )
}
