import { useReducer } from "react";
import { type SessionsState, type Session } from "./sessions-context";

type BookSessionAction = {
  type: "BOOK_SESSION";
  session: Session;
};

type CancelSessionAction = {
  type: "CANCEL_SESSION";
  sessionId: string;
};

type SessionsAction = BookSessionAction | CancelSessionAction;

function sessionsReducer(state: SessionsState, action: SessionsAction) {
  if (action.type === "BOOK_SESSION") {
    if (
      state.upcomingSessions.some((session) => session.id === action.session.id)
    ) {
      return state;
    }
    return {
      upcomingSessions: state.upcomingSessions.concat(action.session),
    };
  }

  if (action.type === "CANCEL_SESSION") {
    return {
      upcomingSessions: state.upcomingSessions.filter(
        (session) => session.id !== action.sessionId
      ),
    };
  }

  return {
    upcomingSessions: state.upcomingSessions,
  };
}

export default function useSessionsReducer() {
  const [sessionsState, dispatch] = useReducer(sessionsReducer, {
    upcomingSessions: [],
  });

  function bookSession(session: Session) {
    dispatch({ type: "BOOK_SESSION", session });
  }

  function cancelSession(sessionId: string) {
    dispatch({ type: "CANCEL_SESSION", sessionId });
  }

  return {
    sessionsState,
    bookSession,
    cancelSession,
  };
}
