import Header from './Header';
import Footerboxes from './Footerboxes';
import quoteImages from './Images/quote.jpg';

function Homepage(props) {
    return (
    <div>
        <Header onHeaderTabSelect={props.onHeaderTabSelect} />
        <img src={quoteImages} className="quoteimg" alt="Quote for homepage" />
        <Footerboxes onBlogSelect={props.onTabBlogSelect} />
    </div>
    );
  }
  
  export default Homepage;