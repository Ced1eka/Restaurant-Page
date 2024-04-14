import './style.css';
import Icon from './pepeloni.jpg';
function component() {


      const element = document.createElement("div");

      // Lodash, now imported by this script
      element.innerHTML = "hellow dingus";
      // element.innerHTML = myName("Dingus");

      const myIcon = new Image();
      myIcon.src = Icon;

      element.appendChild(myIcon);

      return element;
    }

    document.body.appendChild(component());