import Tabs from './Tabs';

function Header(props) {


  return (
    <div className="headerpane" >
      <Tabs title="Home" onClick={props.onHeaderTabSelect} />
      <Tabs title="Explore" onClick={props.onHeaderTabSelect} />
    </div>
  );
}
  
  export default Header;