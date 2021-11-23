import React from "react";
import Icone from "./Icone";

class Pictogramme extends React.Component {
  changerMessage() {
    const messageBox = document.getElementById("message");
    const commentaire = document.getElementById("monCommentaire").value;
   // messageBox.innerHTML = 'Premier défi réussi!';
    messageBox.innerHTML = commentaire;
  }

  render() {
    return (
      <div>
        {/* Inclut le sous-composant LikeIcon à l'intérieur du composant Like*/}
        <Icone />
        <hr />
        <div>
          <button type="button" className="btn no-outline btn-secondary">
            <i
              className="fa fa-thumbs-o-up fa-4 align-middle"
              aria-hidden="true"
            ></i>
            &nbsp;
            <span onClick={this.changerMessage} className="align-middle">
              J'aime
            </span>
          </button>
        </div>
      </div>
    );
  }
}

export default Pictogramme;
