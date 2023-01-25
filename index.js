//creation d'un sprite
//fct de construction d'objet pour ne pas répéter toutes les étapes à chaque fois
function Sprite(filename, left, top) {
    //this correspont à l'objet/le sprite en cours de création

    //crée une balise img
    this._node = document.createElement("img");
    this._node.src = filename;
    this._node.style.position = "absolute";
    //on ajoute notre objet dans le body html
    document.body.appendChild(this._node);

    //on définit une propriété à l'objet
    // paramètres de création : l'objet auquel on ajoute la propriété, le nom de la propriété et ses 2 méthodes get et set
    //on accédera aux 2 méthodes créées (get et set) avec le nom de propriété "left"
    Object.defineProperty(this, "left", {
        get: function () {
            return this._left;
        },
        set: function (value) {
            this._left = value;
            this._node.style.left = this._left + "px";
        }
      });

    Object.defineProperty(this, "top", {
        get: function () {
            return this._top;
        },
        set: function (value) {
            this._top = value;
            this._node.style.top = this._top + "px";
        }
    });

    //on pourra controler le display de l'objet : l'afficher ou le cacher
    Object.defineProperty(this, "display", {
        get: function () {
            return this._node.style.display;
        },
        set: function (value) {
            this._node.style.display = value;
        }
    });

    //les valeurs des propriétés seront les valeurs passées en paramètre lors de la construction de l'objet
    this.left = left;
    this.top = top;
}