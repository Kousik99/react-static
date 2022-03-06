import React from 'react';

class FooterTabs extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onClick(e,this.props.footerdata.blogname);
  }

  render() {
    var image =null;
    if(this.props.footerdata.image != undefined){
      image = <img src={this.props.footerdata.image} className="FooterTabImg" alt="Quote for homepage" />
    }

    var additioinalclassname=null;
    if(this.props.footerdata.additionalclass != undefined){
      additioinalclassname = this.props.footerdata.additionalclass;
    }

    return (
      <div className={`FooterTabspane ${additioinalclassname}` } onClick={this.handleChange} >
        <span>{this.props.footerdata.title}</span> 
        {image}
      </div>
    );
  }
}

export default FooterTabs;




