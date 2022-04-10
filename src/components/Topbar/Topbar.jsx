import './topbar.scss';

function Topbar() {
  return (
    <div class = "navbar">
        <div className = "nav-icon">
            <h3>Rohith Nambiar</h3>
        </div>
        <div className = "nav-links">
            <ul>
                <li><a href = "#" class = "link">ABOUT</a></li>
                <li><a href = "#" class = "link">PROJECTS</a></li>
                <li><a href = "#" class = "link">CONTACT</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Topbar