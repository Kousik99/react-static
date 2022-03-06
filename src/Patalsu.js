import trekkerImage from './Images/trekker.jpg';

function Patalsu(props) {

    return (
        <div>
            <div className="blog-title">
              <span>Patalsu peak trek</span>
            </div>
            <div className="blog-text">
              <span>
              Located in the close proximity of the picturesque Kullu Valley, this soaring peak makes for a great hiking destination and is likewise one of the most favourite hiking destinations within the location.It is one of the largest widely well-known treks in Himachal Pradesh. Though reasonably challenging, the Patalsu Peak trek is ideal for extremely suited beginners. The trek pushes you via some steep inclines, narrow ridges and moraines, certain, but the backdrop of the engulfing snowy peaks make each minute of exertion well worth it! Its moderate degree gradients entice herds of trekkers into its snowy folds, with guarantees of 360-diploma perspectives of nature at its satisfactory. It additionally offers you the push of a summit climb!
              </span>
            </div>
            <img src={trekkerImage} className="blog-img" alt="Animated trekker" />
            <div className='blog-img-text'>
              Patalsu peak trek as seen from image
            </div>
            <div className="blog-text">
              <span>
              Located in the close proximity of the picturesque Kullu Valley, this soaring peak makes for a great hiking destination and is likewise one of the most favourite hiking destinations within the location.It is one of the largest widely well-known treks in Himachal Pradesh. Though reasonably challenging, the Patalsu Peak trek is ideal for extremely suited beginners. The trek pushes you via some steep inclines, narrow ridges and moraines, certain, but the backdrop of the engulfing snowy peaks make each minute of exertion well worth it! Its moderate degree gradients entice herds of trekkers into its snowy folds, with guarantees of 360-diploma perspectives of nature at its satisfactory. It additionally offers you the push of a summit climb!
              </span>
            </div>
        </div>
    );
  
}
    
export default Patalsu;