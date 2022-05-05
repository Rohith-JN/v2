import './topbar.scss';

function Topbar() {
  return (
    <div class = "navbar">
        <div class="menu">
          <div class="label">Navbar</div>
          <div class="spacer"></div>
          <div class="item"><span><a href = "#About" class = "link">ABOUT</a></span></div>
          <div class="item"><span><a href = "#Projects" class = "link">PROJECTS</a></span></div>
          <div class="item"><span><a href = "#Contact" class = "link">CONTACT</a></span></div>
        </div>
    </div>
  )
}

export default Topbar