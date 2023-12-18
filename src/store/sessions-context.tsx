import { createContext, type ReactNode } from "react";
import useSessionsReducer from "./sessions-reducer";

export type Session = {
  id: string;
  title: string;
  summary: string;
  date: string;
};

export type SessionsState = {
  upcomingSessions: Session[];
};

type SessionsContextMethod = {
  bookSession: (session: Session) => void;
  cancelSession: (sessionId: string) => void;
};

type SessionsContextValue = SessionsState & SessionsContextMethod;

type SessionsContextProviderProps = {
  children: ReactNode;
};

/*
LEARNING POINT
- Implement React context + reducer with TypeScript
*/
export const SessionsContext = createContext<SessionsContextValue | null>(null);

export default function SessionsContextProvider({
  children,
}: SessionsContextProviderProps) {
  const { sessionsState, bookSession, cancelSession } = useSessionsReducer();

  const ctx: SessionsContextValue = {
    upcomingSessions: sessionsState.upcomingSessions,
    cancelSession,
    bookSession,
  };

  return (
    <SessionsContext.Provider value={ctx}>{children}</SessionsContext.Provider>
  );
}
