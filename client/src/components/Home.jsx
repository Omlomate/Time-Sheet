import React from "react";
import HomeHeader from "./HomeHeader";

import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-header-container">
        <HomeHeader />
      </div>
      <h1 className="home-main-heading">IT Employee Dos and Don'ts</h1>
      <p className="home-main-para">
        Boost productivity and maintain a positive work environment with these
        essential IT employee guidelines.
      </p>
      <div className="home-content">
        <h1 className="home-content-heading">Dos</h1>
        {/* <h2>Communicate effectively with team and stakeholders</h2> */}
        <ul className="ul-container">
          <div className="li-container">
            <li className="li-container-heading">Clear Communication</li>
            <li className="li-container-para">
              Communicate with your team and stakeholders in a clear, concise,
              and professional manner. Use active listening skills to understand
              their needs and respond accordingly.
            </li>
          </div>
          <div className="li-container">
            <li className="li-container-heading">Collaboration</li>
            <li className="li-container-para">
              Foster a collaborative environment by encouraging open dialogue,
              sharing information, and involving team members in decision-making
              processes. This will help build trust and align everyone towards
              common goals.
            </li>
          </div>
          <div className="li-container">
            <li className="li-container-heading">Transparency</li>
            <li className="li-container-para">
              Maintain transparency by regularly providing updates, addressing
              concerns, and setting realistic expectations. This will help
              manage stakeholder expectations and ensure everyone is on the same
              page.
            </li>
          </div>
          <div className="li-container">
            <li className="li-container-heading">Empathy</li>
            <li className="li-container-para">
              Demonstrate empathy by actively listening, understanding different
              perspectives, and tailoring your communication style to the needs
              of your audience. This will help build stronger relationships and
              facilitate more effective interactions.
            </li>
          </div>
          <div className="li-container">
            <li className="li-container-heading">
              Continuously learn and improve skills
            </li>
            <li className="li-container-para">
              Stay Curious Embrace a growth mindset by constantly seeking out
              new knowledge, technologies, and best practices in your field.
              This will keep your skills sharp and make you an invaluable asset
              to the team.
            </li>
            <li className="li-container-para">
              Seek Feedback Actively solicit feedback from colleagues, managers,
              and mentors. Use this input to identify areas for improvement and
              develop an action plan to enhance your capabilities.
            </li>
          </div>
        </ul>
      </div>
      <div className="home-content">
        <h1 className="home-content-heading">Don'ts</h1>
        <ul className="ul-container">
          <div className="li-container">
            <li className="li-container-heading">Respect Deadlines</li>
            <li className="li-container-para">
              Ignoring deadlines or failing to deliver on commitments undermines
              trust and can jeopardize important projects. Effective time
              management and clear communication are key to meeting obligations.
            </li>
          </div>
          <div className="li-container">
            <li className="li-container-heading">Prioritize Commitments</li>
            <li className="li-container-para">
              Letting down your team or stakeholders by not following through on
              promises can damage working relationships and morale. Ensure you
              only take on tasks you can realistically complete.
            </li>
          </div>
          <div className="li-container">
            <li className="li-container-heading">Communicate Proactively</li>
            <li className="li-container-para">
              If you anticipate missing a deadline, communicate openly and
              transparently. Provide updates, propose solutions, and take
              responsibility. Avoiding issues will only make the situation
              worse.
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Home;
