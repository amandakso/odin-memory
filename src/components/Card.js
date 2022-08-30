import deer from "./imgs/deer.jpg";
import elephant from "./imgs/elephant.jpg";
import flamingo from "./imgs/flamingo.jpg";
import frog from "./imgs/frog.jpg";
import giantpanda from "./imgs/giantpanda.jpg";
import giraffe from "./imgs/giraffe.jpg";
import leopard from "./imgs/leopard.jpg";
import lion from "./imgs/lion.jpg";
import penguin from "./imgs/penguin.jpg";
import redpanda from "./imgs/redpanda.jpg";
import rhino from "./imgs/rhino.jpg";
import sandpiper from "./imgs/sandpiper.jpg";
import seaotter from "./imgs/seaotter.jpg";
import swan from "./imgs/swan.jpg";
import wolf from "./imgs/wolf.jpg";
import zebra from "./imgs/zebra.jpg";

const Card = (props) => {
    let photo = props.id;
    let url = null;
    let animal= null;
    switch(photo) {
        case "0":
            url = deer;
            animal= "Cervidae";
            break;
        case "1":
            url = elephant;
            animal="Loxodonta africana";
            break;
        case "2":
            url = flamingo;
            animal="Phoenicopterus ruber";
            break;
        case "3":
            url = frog;
            animal="Agalychnis callidryas";
            break;
        case "4":
            url = giantpanda;
            animal="Ailuropoda melanoleuca";
            break;
        case "5":
            url = giraffe;
            animal="Giraffa camelopardalis";
            break;
        case "6":
            url = leopard;
            animal="Panthera pardus";
            break;
        case "7":
            url = lion;
            animal="Panthera leo";
            break;
        case "8":
            url = penguin;
            animal="Aptenodytes forsteri";
            break;
        case "9":
            url = redpanda;
            animal="Ailurus fulgens";
            break;
        case "10":
            url = rhino;
            animal="Ceratotherium simum";
            break;
        case "11":
            url = sandpiper;
            animal="Scolopacidae";
            break;
        case "12": 
            url = seaotter;
            animal="Enhydra lutris";
            break;
        case "13":
            url = swan;
            animal="Cygnus buccinator";
            break;
        case "14":
            url = wolf;
            animal="Canis lupus";
            break;
        case "15":
            url = zebra;
            animal="Equus quagga";
            break;
        default:
            url = giantpanda;
            animal="Ailuropoda melanoleuca";
    }

    return (
        <div className="card">
            <img onClick={props.onClick} id={photo} key={photo}className="animal" src={url} alt=""></img>
            <p>{animal}</p>
        </div>
    );
}

export default Card;