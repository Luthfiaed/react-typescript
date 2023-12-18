import { SESSIONS } from "../dummy-sessions.ts";
import Button from "../components/Button.tsx";

export default function SessionsPage() {
  return (
    <main id="sessions-page">
      <header>
        <h2>Available mentoring sessions</h2>
        <p>
          From an one-on-one introduction to React's basics all the way up to a
          deep dive into state mechanics - we got just the right session for
          you!
        </p>
      </header>
      <section id="content">
        <div id="sessions-list">
          {SESSIONS.map((session) => (
            <div key={session.id} className="session-item">
              <img src={session.image} />
              <div className="session-data">
                <h3>{session.title}</h3>
                <p>{session.summary}</p>
                <div className="actions">
                  <Button textOnly={false} to={`/sessions/${session.id}`}>
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
