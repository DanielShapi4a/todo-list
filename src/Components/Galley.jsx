import React,{useState} from "react";
import "./Gallery.css";

function Gallery() {

    const content = ["First","Second","Third","Forth","Fifth","Sixth","Seventh"]

    const [focusedContent, setFocusedContent] = useState(null);

    function closeModal() {
        setFocusedContent(null);
    }

    function setFocus(position)
    {
        setFocusedContent(position);
    }

    return (
        <div className="gallery-container">
          <ol className="gallery">
            {content.map((position, index) => (
              <li key={index}>
                <span className="number" onClick={() => setFocus(position)}>
                  {position}
                </span>
              </li>
            ))}
          </ol>
          {focusedContent && (
            <div className="modal-overlay">
              <div className="modal">
                <span>{focusedContent}</span>
                <button className="close-modal" onClick={() => closeModal()}>
                  Close modal
                </button>
              </div>
            </div>
          )}
        </div>
      );
}

export default Gallery;