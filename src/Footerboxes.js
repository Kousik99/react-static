import FooterTabs from './FooterTabs';

function Footerboxes(props) {
  const  footer1 = {
    title: "A Trek to Patalsu",
    blogname: "Patalsu",
    image: require('./Images/trekker.jpg')
}
const  footer2 = {
    title: "Coming up soon!!",
    blogname: "None"
}
  return (
      <div className="footerpane" >
        <FooterTabs footerdata={footer1} onClick={props.onBlogSelect} />
        <FooterTabs footerdata={footer2} onClick={props.onBlogSelect} />
        <FooterTabs footerdata={footer2} onClick={props.onBlogSelect} />

      </div>
  );
  }
  
  export default Footerboxes;