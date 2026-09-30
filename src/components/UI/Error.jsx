import { createPortal } from "react-dom";
import Button from "./Button";
import "./Error.css";

const Error = (props) => {
    const backdropRoot = document.getElementById("backdrop-root");
    const overlayRoot = document.getElementById("overlay-root");

    return (
        <>
            {backdropRoot && createPortal(
                <div className="error-backdrop" onClick={props.onConfirm} />,
                backdropRoot
            )}
            {overlayRoot && createPortal(
                <section className="error-modal" role="alertdialog" aria-modal="true" aria-labelledby="error-title">
                    <header className="error-modal__header">
                        <h2 id="error-title">{props.title}</h2>
                    </header>
                    <div className="error-modal__content">
                        <p>{props.message}</p>
                    </div>
                    <footer className="error-modal__actions">
                        <Button onClick={props.onConfirm}>Okay</Button>
                    </footer>
                </section>,
                overlayRoot
            )}
        </>
    );
};

export default Error;