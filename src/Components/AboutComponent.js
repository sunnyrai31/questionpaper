import { Fragment } from "react";
import { AboutMsg } from "../Data/aboutMessage";
const AboutComponent = () => {
  return (
    <div id="#aboutPage">
      {/* <span className="d-flex" style={{}}>
        <label style={{ fontFamily: "monospace", fontSize: "large" }}>
          {AboutMsg}
        </label>
      </span> */}
      <header>
        <h1>About InterviewViewPrep</h1>
        <hr />
      </header>

      <section>
        <h2>Welcome to InterviewViewPrep</h2>
        <p>
          Your go-to platform for mastering React concepts and JavaScript skills
          in a hands-on and interactive way! Our mission is to provide a dynamic
          learning experience, combining real-time code implementations,
          practical examples, and a curated set of UI standard interview
          questions to help you excel in your technical interviews.
        </p>
      </section>
      <hr />

      <section>
        <h3>What Sets Us Apart?</h3>
        <ul>
          <li>
            <strong>Live Code Examples:</strong> See React concepts come to life
            with our interactive code examples. Each concept is demonstrated in
            a live coding environment, allowing you to experiment and understand
            how it works in real-time.
          </li>
          <li>
            <strong>GitHub Integration:</strong> Explore GitHub implementations
            for every concept presented on the site. Access the source code,
            dive into detailed explanations, and enhance your understanding by
            studying real-world application scenarios.
          </li>
          <li>
            <strong>UI Standard Interview Questions:</strong> Prepare for
            technical interviews with our curated collection of UI standard
            interview questions. Practice solving problems related to front-end
            development and gain confidence in showcasing your skills during job
            interviews.
          </li>
          <li>
            <strong>Stay Updated:</strong> Our content is designed to stay
            current with the latest industry standards. As of 2024, we cover the
            most relevant and in-demand topics to ensure you are well-prepared
            for the challenges of the ever-evolving tech landscape.
          </li>
        </ul>
      </section>
      <hr />

      <section>
        <h3>How to Use InterviewViewPrep:</h3>
        <ol>
          <li>
            <strong>Explore React Concepts:</strong> Navigate through our
            organized sections covering essential React concepts. Each concept
            is explained, demonstrated, and accompanied by live code for
            hands-on learning.
          </li>
          <li>
            <strong>GitHub Integration:</strong> Take a deeper dive into each
            concept by exploring the GitHub repository. Access the full source
            code, contribute, and gain insights into best practices.
          </li>
          <li>
            <strong>UI Standard Interview Questions:</strong> Test your skills
            with our carefully selected UI standard interview questions. Use
            them as a benchmark to assess your proficiency and readiness for
            technical interviews.
          </li>
          <li>
            <strong>Stay Connected:</strong> Follow us on social media and
            subscribe to our newsletter to stay updated on the latest content,
            industry trends, and upcoming features.
          </li>
        </ol>
      </section>

      <section>
        <p>
          Whether you're a beginner looking to grasp the fundamentals or an
          experienced developer aiming to sharpen your skills, InterviewViewPrep
          is your comprehensive resource for React and JavaScript interview
          preparation. Let's code your success together!
        </p>
      </section>
      <hr />

      <footer>{/* <!-- Add your footer content here --> */}</footer>
    </div>
  );
};
export default AboutComponent;
