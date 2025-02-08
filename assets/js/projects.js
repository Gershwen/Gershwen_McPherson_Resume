
async function fetchData() {
  try {
    // Fetch projects data
    const dataResponse = await fetch("../../data.json");
    const data = await dataResponse.json();

    // Fetch blogs data
    const blogsResponse = await fetch("../../blogs.json");
    const blogs = await blogsResponse.json();

    // Render content
    renderProjects(data);
    renderSkills();
    renderBlogs(blogs);
  } catch (error) {
    console.error("Error loading JSON files:", error);
  }
}

fetchData();

// Function to render projects
function renderProjects(data) {
  let section = document.querySelector(".posts");
  if (!section) return;

  data.forEach((project) => {
    let article = document.createElement("article");

    article.innerHTML = `
      <header>
        <h2><a href="${project.appUri}">${project.name}<br /></a></h2>
      </header>
      <a href="${project.appUri}" class="image fit">
        <img src="${project.imgsrc}" alt="${project.alt}" />
      </a>
      <p>${project.description}</p>
      <ul class="actions special">
        <li><a href="${project.appUri}" class="button">Check it out</a></li>
      </ul>
      <a href="${project.githubrepo}">Click here to view source code</a>
    `;
    section.appendChild(article);
  });
}

// Function to render skills
function renderSkills() {
  const skills = [
    "GraphQl with Apollo",
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
  if (!skillsList) return;

  skills.forEach((skill) => {
    let listItem = document.createElement("li");
    listItem.textContent = skill;
    skillsList.appendChild(listItem);
  });
}

// Function to render blogs
function renderBlogs(blogs) {
  let blogsList = document.querySelector("#blog-list");
  if (!blogsList) return;

  blogs.forEach((blog) => {
    let blogItem = document.createElement("li");
    blogItem.innerHTML = `<a href="${blog.blogurl}">${blog.blogname}</a>`;
    blogsList.appendChild(blogItem);
  });
}
