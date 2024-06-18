import "./css/App.css";

interface igFollowCardprops {
  userName: string;
  name: string;
  isFollowing: boolean;
  handleCLick: () => void;
}

function IgFollowCard({
  userName,
  name,
  isFollowing,
  handleCLick,
}: igFollowCardprops) {
  const buttonClassName = isFollowing
    ? "ig-followbutton is-following"
    : "ig-followbutton";

  return (
    <article className="ig-followcard">
      <header className="ig-followcard-header">
        <img
          className="picuser"
          src={`https://unavatar.io/${userName}`}
          alt=""
        />
        <div className="ig-profileuser">
          <h1 className="ig-username">{userName}</h1>
          <p className="ig-name">{name}</p>
        </div>
      </header>
      <aside className="ig-follow">
        <button className={buttonClassName} onClick={handleCLick}>
          {isFollowing ? "siguiendo" : "seguir"}
        </button>
      </aside>
    </article>
  );
}

export default IgFollowCard;
