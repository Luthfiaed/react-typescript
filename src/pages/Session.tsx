import { useParams } from "react-router-dom";
import { useState } from "react";
import { SESSIONS } from "../dummy-sessions.ts";
import Button from "../components/Button.tsx";
import BookSession from "../components/BookSession.tsx";

export default function SessionPage() {
  const params = useParams<{ id: string }>();

  const sessionId = params.id;
  const loadedSession = SESSIONS.find((session) => session.id === sessionId);

  const [bookSessionsVisible, setBookSessionsVisible] = useState(false);

  function showBookSessions() {
    setBookSessionsVisible(true);
  }

  function hideBookSessions() {
    setBookSessionsVisible(false);
  }

  if (!loadedSession) {
    return (
      <main id="session-page">
        <p>No session found!</p>
      </main>
    );
  }

  return (
    <>
      {bookSessionsVisible && (
        <BookSession sessionData={loadedSession} onClose={hideBookSessions} />
      )}
      <main id="session-page">
        <article>
          <header>
            <img src={loadedSession.image} alt={loadedSession.title} />
            <div>
              <h2>{loadedSession.title}</h2>
              <time dateTime={new Date(loadedSession.date).toISOString()}>
                {new Date(loadedSession.date).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </time>
              <p>
                <Button textOnly={false} onClick={showBookSessions}>
                  Book Session
                </Button>
              </p>
            </div>
          </header>
          <p id="content">{loadedSession.description}</p>
        </article>
      </main>
    </>
  );
}
