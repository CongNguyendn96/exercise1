import React from "react";
import "./App.css";
import "./style.scss";
// import Header from "./components/contentheader/index.jsx";
function App() {
  return (
    <>
      <div className="">
        <div className="main">
          <div className="content">
            <div className="content-header">
              <div className="content-name">
                <h1>NGUYEN QUOC CONG</h1>
                <p>Frontend developer</p>
              </div>
              <div className="content-info">
                <div>
                  <p>
                    <b>Name</b>
                    <span>Nguyen Quoc Cong</span>
                  </p>
                  <p>
                    <b>Phone</b>
                    <span>+84 982506627</span>
                  </p>
                  <p>
                    <b>Address</b>
                    <span>Nguyen Quy Anh Street, Da Nang, Viet Nam</span>
                  </p>
                </div>
                <div>
                  <p>
                    <b>Birth</b>
                    <span>08/01/1996</span>
                  </p>
                  <p>
                    <b>Email</b>
                    <span>nqc0801@gmail.com</span>
                  </p>
                </div>
                <div>
                  <img
                    src="https://scontent.xx.fbcdn.net/v/t1.15752-9/292985369_1044011306502536_659908178805646805_n.jpg?stp=dst-jpg_s206x206&_nc_cat=104&ccb=1-7&_nc_sid=aee45a&_nc_ohc=r8iihT0yKKUAX-45HUp&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKsfTMMDVoV1NSwz6jydkrKeoGlYHaNvUJiuiVX4qVnRA&oe=62FD3EB7"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="content-wrap">
              <div className="content-overview">
                <div className="content-title">
                  <span>
                    <img
                      src="https://cv.fullstack.edu.vn/static/media/introduction.75e1a846b170a9a68509.png"
                      alt=""
                    />
                  </span>
                  <p>Overview</p>
                </div>
                <div className="content-knowledge">
                  <p>- Proficiency in HTML5, CSS3, JavaScript.</p>
                  <p>- Ability to learn and apply new technology quickly.</p>
                  <p>- Basic knowledge about ReactJs.</p>
                  <p>- Use Bootstrap and Jquery in my project regularly.</p>
                  <p>
                    - Knowing how to push the project on Github and how to use
                    nodeJs.
                  </p>
                  <p>- Current working location: Da Nang, Viet Nam.</p>
                </div>
              </div>
              <div className="content-education">
                <div className="content-heading">
                  <span>
                    <img
                      src="https://cv.fullstack.edu.vn/static/media/education.013bff4a006a70f6ac5d.png"
                      alt=""
                    />
                  </span>
                  <p>Education</p>
                </div>
                <div className="content-detail">
                  <p>
                    <b>2014 - 2018</b>
                  </p>
                  <div className="content-detail__more">
                    <p>
                      <b>Da Nang University of Economic</b>
                    </p>
                    <p>
                      <b>Major</b> - Hotel Management
                    </p>
                    <p>
                      <b>Level</b> - Good
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-experience">
              <div className="content-working">
                <div className="content-head">
                  <span>
                    <img
                      src="https://cv.fullstack.edu.vn/static/media/experience.2faba82cefa3affaa474.png"
                      alt=""
                    />
                  </span>
                  <p>Work experience</p>
                </div>
                <div className="content-workspace">
                  <div className="content-workspace__item">
                    <p>2019 - 2020</p>
                    <div>
                      <p>Sheraton Grand Resort Da Nang</p>
                      <p>Waiter</p>
                      <ul>
                        <li>Service the customer follow 5 stars standard.</li>
                        <li>Complete any task or request from my mananger.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="content-workspace__item">
                    <p>2020 - Present</p>
                    <div>
                      <p>NAL Solution</p>
                      <p>Fresher Frontend Developer</p>
                      <ul>
                        <li>Develop web module on given projects.</li>
                        <li>Programme outsourcing projects</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-project">
                <div className="content-begin">
                  <span>
                    <img
                      src="https://cv.fullstack.edu.vn/static/media/experience.2faba82cefa3affaa474.png"
                      alt=""
                    />
                  </span>
                  <p>Project</p>
                </div>
                <div className="content-name">
                  <div className="content-name__item">
                    <div>
                      <p> Web The Band -- 2021</p>
                      <p>Technology in use</p>
                      <ul>
                        <li>HTML5, CSS3, JavaScript, ReactJS.</li>
                        <li>PHP, SQL.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="content-name__item">
                    <div>
                      <p> Web Shoppee -- 2022</p>
                      <p>Technology in use</p>
                      <ul>
                        <li>HTML5, CSS3, JavaScript, ReactJS, Jquery.</li>
                        <li>Java, Python.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ability">
            <div className="ability-skill">
              <div className="ability-title">
                <span>
                  <img
                    src="https://cv.fullstack.edu.vn/static/media/skills.eb1c763574035ab0f77b.png"
                    alt=""
                  />
                </span>
                <p>Skills</p>
              </div>
              <div className="ability-languages">
                <div className="ability-main">
                  <p>Main</p>
                  <ul>
                    <li>HTML, CSS, JavaScript (ReactJS, React-Native, Lit)</li>
                    <li>PHP (Laravel, Symfony, Codeigniter, Yii)</li>
                    <li>RESTful API, GraphQL</li>
                    <li>
                      Server (Apache, Nginx, Redis, Memcached, Queue, Log,
                      Crontjob...), Rancher, K8S, Docker
                    </li>
                    <li>Node (ExpressJS), RESTful API, GraphQL</li>
                  </ul>
                </div>
                <div className="ability-other">
                  <p>Other</p>
                  <ul>
                    <li>Ruby (Ruby on Rails)</li>
                    <li>GIT, GITHUB</li>
                    <li>Python (selenium automation test, crawler)</li>
                    <li>Golang, .NET</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
