import React from 'react'
import Project from '../components/Project'

const Portfolio = () => {
  return (
    <div>
      <section className="projects-section">
  <h2 className="projects-header">Projects</h2>
  <div className="grid-container">
    <div className="project-container">
      <a href="https://villettec.github.io/M6C-Weather_Dashboard/" target="_blank">
        <img src="../../images/weather-pic.png" alt="Weather Application Screenshot" className="capture" />
      </a>
      <div className="project-description">
        <h3>Weather Dashboard</h3>
        <p>In this application, a user searches a city and both the current and 5 day forecast
          information is displayed by calling an API for data.</p>
      </div>
    </div>
    <div className="project-container">
      <a href="https://villettec.github.io/M3C-Password_Generator/" target="_blank">
        <img src="../../images/pwgen-pic.png" alt="Password Generator Screenshot" className="capture" />
      </a>
      <div className="project-description">
        <h3>Password Generator</h3>
        <p>Via prompts, a user chooses whether to include symbols, numbers, or letters in a generated
          password of their choice of length.</p>
      </div>
    </div>
    <div className="project-container">
      <a href="https://villettec.github.io/M4C-Code_Quiz/" target="_blank">
        <img src="../../images/codequiz-pic.png" alt="Coding Quiz Application Screenshot" className="capture" />
      </a>
      <div className="project-description">
        <h3>Coding Quiz</h3>
        <p>This application is a timed quiz displaying array questions and answers. Ordered high scores
          and saved initials are featured at the end.</p>
      </div>
    </div>
    <div className="project-container">
      <a href="https://villettec.github.io/M5C-Work_Day_Scheduler/" target="_blank">
        <img src="../../images/workday-pic.png" alt="Workday Schedular Screenshot" className="capture" />
      </a>
      <div className="project-description">
        <h3>Workday Scheduler</h3>
        <p>In this day planner, moments and jquery are used to show events of the past, present, and
          future which the user can enter and erase.</p>
      </div>
    </div>
    <div className="project-container">
      <a href="https://villettec.github.io/M1C-Horiseon_Refactor/" target="_blank">
        <img src="../../images/horiseon-pic.png" alt="Horiseon Webpage Screenshot" className="capture" />
      </a>
      <div className="project-description">
        <h3>Horiseon Refactor</h3>
        <p>This was an exercise in code refactoring to make the code apply to accessibility standards
          and SEO optimization </p>
      </div>
    </div>
    <div className="project-container">
      <a href="https://villettec.github.io/To_Do_List/" target="_blank">
        <img src="../../images/todolist-pic.png" alt="To Do List Application Screenshot" className="capture" />
      </a>
      <div className="project-description">
        <h3>To Do List Maker</h3>
        <p>This To Do List application allows a user to input tasks and mark them as completed which
          strikes them out or later deletes them. Tasks can be filtered by completion.</p>
      </div>
    </div>
    <div className="project-container">
      <a href="https://drive.google.com/file/d/1xEc5dGCMxg9jQJAEgl2gr7tFUggt9csY/view" target="_blank">
        <img src="../../images/readme-generator.png" alt="Readme Generator Screenshot" className="capture" />
      </a>
      <div className="project-description">
        <h3>README Generator</h3>
        <p>This is a node application which prompts the user with input questions and generates a
          README. A walkthrough video is above. See the <a href="https://github.com/villettec/M9C-Readme_Generator">repo</a>.</p>
      </div>
    </div>
    <div className="project-container">
      <a href="https://drive.google.com/file/d/1KmxmDwexHAd3-ArprAiwq4150nN4-XlP/view" target="_blank">
        <img src="../../images/team-generator.png" alt="Team Generator Screenshot" className="capture" />
      </a>
      <div className="project-description">
        <h3>Team Generator</h3>
        <p>This node application prompts the user with questions about employees and generates a HTML
          and CSS page. A walkthrough video is above. See the <a href="https://github.com/villettec/M10C-Team_Profile_Generator">repo</a>.</p>
      </div>
    </div>
    <div className="project-container">
      <a href="https://notetaker1919.herokuapp.com/" target="_blank">
        <img src="../../images/notetaker.png" alt="Notetaker App Screenshot" className="capture" />
      </a>
      <div className="project-description">
        <h3>Note Taker</h3>
        <p>This full stack express application allows the user to write and save notes which uses the express server to write and retrieve them from a database file.</p>
      </div>
    </div>
    <div className="project-container">
      <a href="https://drive.google.com/file/d/1KTWOEwyQQSdrUgAcKb-xXisQM5x822gi/view" target="_blank">
        <img src="../../images/employee-tracker.png" alt="Employee Tracker Screenshot" className="capture" />
      </a>
      <div className="project-description">
        <h3>Employee Tracker</h3>
        <p>This is a MySQl application that allows users to update the database via node prompts. The repo can be seen <a href="https://github.com/villettec/M12C-Employee_Tracker">here</a>. A walkthrough video is above.</p>
      </div>
    </div>
    <div className="project-container">
      <a href="https://drive.google.com/file/d/18J5KsgklGl5sVr95FuhWW2x5DYE5weUv/view" target="_blank">
        <img src="../../images/ecommerce-backend-pic.png" alt="Placeholder Image" className="capture" />
      </a>
      <div className="project-description">
        <h3>E-Commerce Site Back-End</h3>
        <p>An Express.js API is configured to use Sequelize to interact with a MySQL database. The repo can be seen <a href="https://github.com/villettec/M13C-E-commerce_Back_End">here</a>. A walkthrough video is above.</p><p />
      </div>
    </div>
    <div className="project-container">
      <a href="https://tech-blog-001.herokuapp.com/" target="_blank">
        <img src="../../images/tech-blog-pic.png" alt="Placeholder Image" className="capture" />
      </a>
      <div className="project-description">
        <h3>Tech Blog</h3>
        <p>This full-stack website allows a user to login and post new blog posts or comment on them.</p>
      </div>
    </div>
    <div className="project-container">
      <a href="https://gator-tracker-app.herokuapp.com/" target="_blank">
        <img src="../..images/gator-tracker-pic.png" alt="Placeholder Image" className="capture" />
      </a>
      <div className="project-description">
        <h3>Gator Tracker</h3>
        <p>This collaborative full-stack project allows users to post local neighborhood alligator sightings in the southeast United States.</p>
      </div>
    </div>
    <div className="project-container">
      <a href="project-url-goes-here" target="_blank">
        <img src="../../images/placeholder.png" alt="Placeholder Image" className="capture" />
      </a>
      <div className="project-description">
        <h3>Project</h3>
        <p>Coming Soon . . .</p>
      </div>
    </div>
    <div className="project-container">
      <a href="project-url-goes-here" target="_blank">
        <img src="../../images/placeholder.png" alt="Placeholder Image" className="capture" />
      </a>
      <div className="project-description">
        <h3>Project</h3>
        <p>Coming Soon . . .</p>
      </div>
    </div>
  </div>
</section>



    </div>
  )
}

export default Portfolio