import { useEffect, useRef } from "react";
import useSessionsContext from "../store/useSessionsContext";
import Button from "./Button";
import Modal from "./Modal";
import { type DialogHandler } from "./Modal";
import UpcomingSession from "./UpcomingSession";

type UpcomingSessionsProps = {
  onClose: () => void;
};

function UpcomingSessions({ onClose }: UpcomingSessionsProps) {
  const modal = useRef<DialogHandler>(null);
  const sessionsCtx = useSessionsContext();

  /* LEARNING POINT
  - There are other, more intuitive code pattern to control modal but the objective of this
    code is to learn how to control modal via forwardRef and useImperativeHandle
  */
  useEffect(() => {
    if (modal.current) {
      modal.current.open();
    }
  }, []);

  function handleCancelSession(sessionId: string) {
    sessionsCtx.cancelSession(sessionId);
  }

  const hasSessions = sessionsCtx.upcomingSessions.length > 0;

  return (
    <Modal ref={modal} onClose={onClose}>
      <h2>Upcoming Sessions</h2>
      {hasSessions && (
        <ul>
          {sessionsCtx.upcomingSessions.map((session) => (
            <li key={session.id}>
              <UpcomingSession
                session={session}
                onCancel={() => handleCancelSession(session.id)}
              />
            </li>
          ))}
        </ul>
      )}
      {!hasSessions && <p>No upcoming sessions.</p>}
      <p className="actions">
        <Button textOnly={true} onClick={onClose}>
          Close
        </Button>
      </p>
    </Modal>
  );
}

export default UpcomingSessions;
