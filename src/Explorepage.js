import Header from './Header';
import FooterTabs from './FooterTabs';

import trekkerImage from './Images/trekker.jpg';

function Explorepage(props) {
    const  explore1 = {
        title: "A Trek to Patalsu",
        blogname: "Patalsu",
        image: require('./Images/trekker.jpg'),
        additionalclass: "exploretab"
    }
    const  explore2 = {
        title: "Coming up soon!!",
        blogname: "None",
        additionalclass: "exploretab"
    }
    return (
        <div>
            <Header onHeaderTabSelect={props.onHeaderTabSelect} />
            <img src={trekkerImage} className="explore-bgimg" alt="Animated trekker" />
            <div className="explorepane" >
             <FooterTabs footerdata={explore1} onClick={props.onTabBlogSelect} />
             <FooterTabs footerdata={explore2} onClick={props.onTabBlogSelect} />

             <FooterTabs footerdata={explore2} onClick={props.onTabBlogSelect} />
             <FooterTabs footerdata={explore2} onClick={props.onTabBlogSelect} />
            </div>

        </div>
    );
  
    }
    
    export default Explorepage;