export function Navibar() {
  return (
    <>
      <nav className="nav">
        <a href="/" className="site-title">
          {" "}
          Forside{" "}
        </a>
        <ul>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/Cart">Indkøbskurv</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
