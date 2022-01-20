import data from "../../data.json" assert { type: "json" };
import blogs from "../../blogs.json" assert {type: "json"};

let section = document.querySelector(".posts");

let i = 0;

data.forEach((project) => {
  let article = document.createElement("article");

  article.innerHTML = `           <header>
    <h2><a href=${project.appUri}>${project.name}<br />
        </a></h2>
</header>
<a href=${project.appUri} class="image fit"><img
        src=${project.imgsrc} alt=${project.alt} /></a>
<p>${project.description}</p>
<ul class="actions special">
    <li><a href=${project.appUri} class="button">Check it
            out</a></li>
</ul>
<a href=${project.githubrepo}>Click here to view source code</a>
`;

  article.value = i;
  i = i + 1;
  section.appendChild(article);
});

//Skills

const skills = [
  "Semantic HTML",
  "CSS",
  "JavaScript",
  "jQuery",
  "Bootstrap",
  "React.js",
  "Next.js",
  "Node.js",
  "Express",
  "Mongoose",
  "MongoDB",
  "Authentication with JWT",
  "Git & GitHub",
  "Writing Markdown",
  "Experience using Figma design files",
  "Excellent communicator",
  "Leadership",
];

let skillsList = document.querySelector("#skills-list");

let j = 0;

skills.forEach((skill) => {
  let listItem = document.createElement("li");

  listItem.innerHTML = skill;

  skillsList.value = j;
  j = j + 1;
  skillsList.appendChild(listItem);
});


/////////////Blogs////////////////////

let blogsList = document.querySelector("#blog-list");

let g = 0;

blogs.forEach((blog) => {

  let blogItem = document.createElement("li");

  blogItem.innerHTML = `<a href=${blog.blogurl}>${blog.blogname}</a>`;

blogItem.value = g;
  g = g + 1;
  blogsList.appendChild(blogItem);
});
