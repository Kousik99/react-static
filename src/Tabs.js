function Tabs(props) {
  return (
    <div className="Tabspane" >
      <span onClick={ (event) => props.onClick(event, props.title) }>{props.title}</span>
    </div>
  );

  }
  
  export default Tabs;