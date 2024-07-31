import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "Medecins management academic App ",
    image: projectOne,
    description: (
      <>
        <p>
        Key features of the application include:
        <ul>
          <li>User Interfaces: Developed with React.js, these interfaces are intuitive and user-friendly, enhancing the user experience for resident doctors and administrative staff.</li>
          <li>Database Management: Laravel provides robust database solutions that ensure secure and efficient storage and retrieval of resident doctors' data.</li>
          <li>Real-Time Data Processing: Mechanisms for real-time tracking of academic progress, training schedules, and other essential metrics.</li>
        </ul>



        </p>
      </>
    ),
    github: "https://github.com",
    demo: "https://netlify.com",
  },
  2: {
    title: "Supplier and bills management",
    image: projectTwo,
    description: (
      <>
        <p>
        Embark on a journey of seamless electronic invoice management and optimized supplier relationship dynamics with our innovative Electronic Invoice Signature Application and Supplier Management system. Our meticulously crafted solution is designed to revolutionize your invoicing process and elevate your supplier interactions to new heights
        </p>
      </>
    ),
    github: "https://github.com",
    demo: "https://netlify.com",
  },
  3: {
    title: "MoroccoWeather app",
    image: projectThree,
    description: (
      <>
        <p>
        Real-Time Temperature Updates for Regions in Morocco" is a sophisticated application engineered to provide instantaneous temperature updates for diverse regions across Morocco. The project encompasses a comprehensive system for capturing temperature data through various sensors strategically positioned throughout the country. This data is seamlessly integrated into the application's interface, offering users immediate access to current temperature readings for their desired locations.
        </p>
      </>
    ),
    github: "https://github.com",
    demo: "https://netlify.com",
  },
};

export default projects;
