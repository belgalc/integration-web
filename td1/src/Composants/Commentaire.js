import React from "react";

class Commentaire extends React.Component {
  render() {
    return (
      <div>
        <textarea
          id="monCommentaire"
          className="form-control"
          placeholder="Tapez un commentaire..."
        ></textarea>
        <small>120 Restants</small>
      </div>
    );
  }
}

export default Commentaire;
