import projectOne from "../assets/project-1.JPG";
import projectTwo from "../assets/project-2.JPG";
import projectThree from "../assets/project-3.JPG";

const projects = {
  1: {
    title: "25 plus 5 Clock",
    image: projectOne,
    description: (
      <>
        <p>
          This project was about creating a 25 plus 5 clock web application. I was able to work on this project using HTML, CSS, JavaScript, TypeScript, along with advanced mordern technologies such as Vite. 
        </p>
      </>
    ),
    github: "https://github.com/MikeAwinda/25plus5_clock",
    demo: "https://25plus5cloc.netlify.app",
  },
  2: {
    title: "Random Quote Machine",
    image: projectTwo,
    description: (
      <>
        <p>
        This project was about creating a quote machine web application. I was able to work on this project using HTML, CSS, JavaScript, TypeScript, and Vite.
        </p>
      </>
    ),
    github: "https://github.com/MikeAwinda/Random_Quote_Machine",
    demo: "https://quotemachin.netlify.app",
  },
  3: {
    title: "Markdown Previewer",
    image: projectThree,
    description: (
      <>
        <p>
        This project was about creating a markdown previewer web application. I was able to work on this project using HTML, CSS, JavaScript, TypeScript, and Vite.
        </p>
      </>
    ),
    github: "https://github.com/MikeAwinda/Markdown_Previewer",
    demo: "https://mdpreviewr.netlify.app",
  },
};

export default projects;
