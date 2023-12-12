import React from "react";
import Card from "./Card";
import image1 from "../../assets/image1.jpg";
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
import 'bootstrap/dist/css/bootstrap.css';
const cards = [
  {
    id: 1,
    title: "AmaZon",
    image: image1,
    url: "https://www.amazon.com/?&tag=googleglobalp-20&ref=pd_sl_7nnedyywlk_e&adgrpid=159651196451&hvpone=&hvptwo=&hvadid=675114638556&hvpos=&hvnetw=g&hvrand=2579939660112122329&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=20084&hvtargid=kwd-10573980&hydadcr=2246_13649807",
    desc: "Inicialmente un mercado en linea, con el tiempo empezo a producir sus propios dispocitivos tecnologicos y a ofrecer servicios en la nube.",
  },
  {
    id: 2,
    title: "Microsoft",
    image: image2,
    url: "https://www.microsoft.com/es-bo/",
  },
  {
    id: 3,
    title: "Meta Plataforms",
    image: image3,
    url: "https://about.meta.com/ltam/",
  },
  
];

function Cards() {
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

export default Cards;