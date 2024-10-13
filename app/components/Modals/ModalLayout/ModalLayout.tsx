import { ReactNode } from "react";
import "./ModalLayout.scss";

interface ModalProps {
  children: ReactNode;
  onModalSave?: () => void;
  onModalClose: () => void;
  classes?: string | "";
}

export const ModalLayout = ({
  children,
  onModalSave,
  onModalClose,
  classes,
}: ModalProps) => {
  return (
    <>
      <div className={`modal-container ${classes}`}>
        <div className="modal-card">
          <button className="modal-close-btn" onClick={() => onModalClose()}>
            <span className="material-symbols-outlined">close</span>
          </button>
          {children}
        </div>
        {onModalSave && <button onClick={onModalClose}>Save</button>}
        <div
          className="full-overlay"
          onClick={() => onModalClose()}
          onKeyDown={() => onModalClose()}
          tabIndex={0}
          role="button"
        ></div>
      </div>
    </>
  );
};
