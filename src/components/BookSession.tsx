import { useEffect, useRef, type FormEvent } from "react";
import Modal, { DialogHandler } from "./Modal";
import Button from "./Button";
import useSessionsContext from "../store/useSessionsContext";
import { Session } from "../store/sessions-context";
import Input from "./Input";

type BookSessionsProps = {
  onClose: () => void;
  sessionData: Session;
};

function BookSession({ onClose, sessionData }: BookSessionsProps) {
  const modal = useRef<DialogHandler>(null);
  const sessionsCtx = useSessionsContext();

  /*
  LEARNING POINT
  - Check ./UpcomingSessions.tsx
  */
  useEffect(() => {
    if (modal.current) modal.current.open();
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formDataRaw = new FormData(event.currentTarget);
    const dataObject = Object.fromEntries(formDataRaw);
    console.log(dataObject);
    sessionsCtx.bookSession(sessionData);
    onClose();
  }

  return (
    <Modal ref={modal} onClose={onClose}>
      <h2>Book Session</h2>
      <form onSubmit={handleSubmit}>
        <Input required label="Your Name" type="text" id="name" name="name" />
        <Input
          required
          label="Your Email"
          type="email"
          id="email"
          name="email"
        />
        <p className="actions">
          <Button type="button" textOnly={true} onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" textOnly={false}>
            Book Session
          </Button>
        </p>
      </form>
    </Modal>
  );
}

export default BookSession;
