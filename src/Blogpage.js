import Patalsu from './Patalsu';


function Blogpage(props) {
    var blog;
    if (props.blogdetails === "Patalsu"){
        blog = < Patalsu />
    }
    return (
    <div className="blogpage">
        {blog}
    </div>
    );
  }
  
  export default Blogpage;