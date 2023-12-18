import { type Session as SessionDataType } from "../store/sessions-context";
import Button from "./Button";

type UpcomingSessionProps = {
  session: SessionDataType;
  onCancel: () => void;
};

function UpcomingSession({ session, onCancel }: UpcomingSessionProps) {
  return (
    <div className="upcoming-session">
      <h3>{session.title}</h3>
      <p>{session.summary}</p>
      <Button textOnly={true} onClick={onCancel}></Button>
    </div>
  );
}

export default UpcomingSession;
