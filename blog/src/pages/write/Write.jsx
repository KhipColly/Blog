import "./write.css"

export default function Write() {
  return (
    <div className="write">
      <img
      className="writeImg"
       src="https://images.unsplash.com/photo-1516414447565-b14be0adf13e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80" alt="" />
      <form className="writeform">
<div className="writeFormGroup">
  <label htmlForm="fileInput">
  <i className="writeIcon fas fa-plus-circle"></i>  
  </label>
  <input type="file"  id="fileInput" style={{display:"none"}}/>
  <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
</div>
 <div className="writeFormGroup">
   <textarea className="writeInput writeText" placeholder="Tell your story...." type="text" ></textarea>
 </div>
 <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
