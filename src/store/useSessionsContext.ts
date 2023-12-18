import { useContext } from "react";
import { SessionsContext } from "./sessions-context";

/*
LEARNING POINT
- Using custom hook as useContext wrapper to type guard against possible null value
*/

export default function useSessionsContext() {
  const sessionsContext = useContext(SessionsContext);

  if (sessionsContext === null)
    throw new Error("Sessions Context is uninitialized");

  return sessionsContext;
}
