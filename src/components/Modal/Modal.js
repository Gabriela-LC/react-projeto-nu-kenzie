import "./Modal.css"
function Modal({setShowModal}){

    return(
        <div className="containerModal">
            <div className="modalBox">
                   <h2>Preencha todos os campos</h2>
                   <button onClick={() => setShowModal(false)} className="closeButton">X</button>
            </div>
        </div>
    )

}

export default Modal