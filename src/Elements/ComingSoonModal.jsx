import React from "react";
import ReactModal from "react-modal";


const ComingSoonModal = (props) => {
  return (
    <div>
      <ReactModal
        isOpen={props.isOpen}
        shouldCloseOnOverlayClick={true}
        style={{
          overlay: {
            backgroundColor: "rgba(212, 195, 195, 0.329)",
          },
          content: {
            color: "orange",
            height: "400px",
            width: "600px",
            left: "30vw",
            top: "20vh",
            textAlign: "center",
            backgroundColor: "#D84F57",
            border: "none",
            borderRadius: "5px",
          },
        }}
      >
        <img
          src="https://www.webinsight.in/wp-content/uploads/2021/09/IMG_20210820_091858-1024x512.jpg"
          alt="coming soon"
          style={{ width: "100%", borderRadius: "5px" }}
          height = "290px"
        />
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            width: "100px",
            height: "35px",
            border: "none",
            borderRadius: "5px",
            marginTop: "30px",
            cursor: "pointer",
          }}
          onClick={() => props.setIsOpen(false)}
        >
          Close
        </button>
      </ReactModal>
    </div>
  );
};

export default ComingSoonModal;
