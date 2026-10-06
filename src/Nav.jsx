function Nav() {
  let githubUrl = "https://github.com/mattwainwright-dev"
  return (
    <nav>
     <ul>
       <li><strong>Matthew Wainwright</strong></li>
     </ul>
     <ul>
       <li><a href={githubUrl}>GitHub</a></li>
     </ul>
    </nav>
  )  
}

export default Nav