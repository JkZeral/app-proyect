import React from "react";
import Card from "./Card";
import image11 from "../../assets/imge11.jpg";
import 'bootstrap/dist/css/bootstrap.css';
const cards= [
  {
    id: 1,
    title: "My Contact",
    image: image11,
    url: "#",
    desc: "Mayber Poma Sirpa",
    
  },
  
];

function Contacts() {
  return (
    <div id="centering" className="container d-flex justify-content-center align-items-center ">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contacts;