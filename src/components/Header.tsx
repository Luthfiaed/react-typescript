import { useState } from "react";
import Button from "./Button";
import UpcomingSessions from "./UpcomingSessions";

function Header() {
  const [upcomingSessionsVisible, setUpcomingSessionsVisible] = useState(false);

  function showUpcomingSessions() {
    setUpcomingSessionsVisible(true);
  }

  function hideUpcomingSessions() {
    setUpcomingSessionsVisible(false);
  }

  return (
    <>
      {upcomingSessionsVisible && (
        <UpcomingSessions onClose={hideUpcomingSessions} />
      )}
      <header id="main-header">
        <h1>ReactMentoring</h1>
        <nav>
          <ul>
            <Button textOnly={true} to={"/"}>
              Our Mission
            </Button>
            <Button textOnly={true} to={"/sessions"}>
              Browse Sessions
            </Button>
            <Button textOnly={false} onClick={showUpcomingSessions}>
              Upcoming Sessions
            </Button>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
