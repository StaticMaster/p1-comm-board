import React from "react";
import "./Games.css";

const Games = () => {
  return (
    <div className="container">
      <div className="card">
        <img className="image" src="/src/images/callofdutywallpaper.jpeg" />
        <h3>Call of Duty</h3>
        <h4>Esports</h4>
        <a href="https://dotesports.com/call-of-duty/news/2024-call-of-duty-league-major-1-scores-schedule-results">
          <button>View News</button>
        </a>
      </div>
      <div className="card">
        <img className="image" src="/src/images/apexlegendswallpaper.jpg" />
        <h3>Apex Legends</h3>
        <h4>Esports</h4>
        <a href="https://dotesports.com/apex-legends/news/rostermania-in-session-all-apex-roster-changes-and-pros-lft-for-algs-year-4">
          <button>View News</button>
        </a>
      </div>
      <div className="card">
        <img
          className="image"
          src="/src/images/LOLwallpaper.jpeg"
        />
        <h3>League of Legends</h3>
        <h4>Esports</h4>
        <a href="https://dotesports.com/league-of-legends/news/karmine-corp-eliminated-from-lec-winter-split-after-nightmare-loss-streak">
          <button>View News</button>
        </a>
      </div>
      <div className="card">
        <img
          className="image"
          src="/src/images/overwatchwallpaper.jpeg"
        />
        <h3>Overwatch</h3>
        <h4>Esports</h4>
        <a href="https://thebirrialandia.com/menu/">
          <button>View News</button>
        </a>
      </div>
      <div className="card">
        <img
          className="image"
          src="/src/images/destiny2wallpaper.jpeg"
        />
        <h3>Destiny 2</h3>
        <h4>Esports</h4>
        <a href="https://dotesports.com/destiny/news/its-not-just-you-destiny-2s-togetherness-modifier-is-active-in-the-coil-despite-removal">
          <button>View News</button>
        </a>
      </div>
      <div className="card">
        <img
          className="image"
          src="/src/images/csgowallpaper.jpeg"
        />
        <h3>CSGO</h3>
        <h4>Esports</h4>
        <a href="https://dotesports.com/counter-strike/news/iem-katowice-2024-schedule-scores-teams-and-more">
          <button>View News</button>
        </a>
      </div>
      <div className="card">
        <img
          className="image"
          src="/src/images/valorantwallpaper.jpg"
        />
        <h3>Valorant</h3>
        <h4>Esports</h4>
        <a href="https://dotesports.com/valorant/news/disguised-valorant-joins-hands-with-bleed-esports-to-break-into-vct-pacific">
          <button>View News</button>
        </a>
      </div>
      <div className="card">
        <img className="image" src="/src/images/dotawallpaper.jpeg" />
        <h3>Dota 2</h3>
        <h4>Esports</h4>
        <a href="https://dotesports.com/dota-2/news/beastcoast-makes-return-to-sa-dota-2-but-theyve-got-big-shoes-to-fill">
          <button>View News</button>
        </a>
      </div>
      <div className="card">
        <img
          className="image"
          src="/src/images/fortnitewallpaper.jpg"
        />
        <h3>Fortnite</h3>
        <h4>Esports</h4>
        <a href="https://thebirrialandia.com/menu/">
          <button>View News</button>
        </a>
      </div>
      <div className="card">
        <img
          className="image"
          src="/src/images/pubgwallpaper.jpg"
        />
        <h3>PUBG</h3>
        <h4>Esports</h4>
        <a href="https://thebirrialandia.com/menu/">
          <button>View News</button>
        </a>
      </div>
    </div>
  );
};

export default Games;
