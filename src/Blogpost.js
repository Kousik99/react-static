import Header from './Header';
import Blogpage from './Blogpage';
import trekkerImage from './Images/trekker.jpg';


function Blogpost(props) {
    return (
    <div>
        <Header onHeaderTabSelect={props.onHeaderTabSelect} />
        <img src={trekkerImage} className="blog-bgimg" alt="Animated trekker" />
        <Blogpage blogdetails={props.blogdetails} />
    </div>
    );
  }
  
  export default Blogpost;