export default function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://cdn.pixabay.com/photo/2014/02/01/17/28/apple-256261_960_720.jpg"
          alt=""
        />
      </div>
      <div className="texts">
        <h2>Keeping the Doctor Away</h2>
        <p className="info">
          <a className="author"> Leo Jiang</a>
          <time>2024-11-29 18:05</time>
        </p>
        <p className="summary">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
        </p>
      </div>
    </div>
  );
}
