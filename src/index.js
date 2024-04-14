function component() {
      const element = document.createElement("div");

      // Lodash, now imported by this script
      element.innerHTML = "hellow dingus";
      // element.innerHTML = myName("Dingus");

      return element;
    }

    document.body.appendChild(component());