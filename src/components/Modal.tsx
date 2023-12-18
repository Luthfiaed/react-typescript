import { forwardRef, useRef, useImperativeHandle, type ReactNode } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
};

export type DialogHandler = {
  open: () => void;
};

/*
LEARNING POINT
- Using forwardRef and useImperativeHandle with TypeScript
*/
const Modal = forwardRef<DialogHandler, ModalProps>(function Modal(
  { children, onClose },
  ref
) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const portalElement = document.getElementById("modal-root") as HTMLDivElement;

  useImperativeHandle(ref, () => {
    return {
      open() {
        if (dialogRef.current) dialogRef.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialogRef} onClose={onClose} className="modal">
      {children}
    </dialog>,
    portalElement
  );
});

export default Modal;
