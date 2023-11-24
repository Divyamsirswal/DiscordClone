export default function NavBar() {
  return (
    <div>
      <nav className="nav">
            <div>
                <input type="text" placeholder="Search" />
                <button type = "submit">Search</button>
            </div>
            <div className = "navbutton">
                <button>FUN</button>
                <button>TECH</button>
                <button>ROMCOM</button>
            </div>
      </nav>
    </div>
  );
}
