(() => {
  const app = {
    initialize () {
      this.projectsData = null;
      this.cacheElements();
      this.loadProjects();
    },
    cacheElements () {
      this.projectsListElement = document.querySelector('.projects-list');
    },
    async loadProjects () {
      // eslint-disable-next-line no-undef
      Ajax.fetchJsonByHandlers(`https://establis.herokuapp.com/api/news`,
        (data) => {
          console.log(data);
          this.projects = data;
          this.generateUIForProjects();
        },
        (error) => {
          console.log(error);
        });
    },
    generateUIForProjects () {
      if (this.projects !== null && this.projectsListElement !== null) {
        // console.log(this.projectsData);
        let projectElement = null;
        const project = this.projects[Math.floor(Math.random()*this.projects.length)];
        projectElement = document.createElement('div');
        projectElement.classList.add();
        projectElement.innerHTML = `
        <div class="g-fb-col-12 detail_detail_news">
        <div class="header_team_container">
                        <span style="color: #d4092d;">08 oktober 2019</span>
                        <h1>${project.title}</h1>
                        <div class="team_line project_line"></div>
        </div>
        <img src="http://establis.eu/${project.field_image}" alt="">  
        <p>${project.field_content}</p>
        <div class="rrssb rrssb-bs-default" style="font-size: 13.72px; padding-right: 54.39%;">
        <ul class="rrssb-buttons"><li class="rrssb-facebook" style="width: 136.031px; max-width: 33.33%;">
        <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.establis.eu%2Fnl%2Fnieuws%2Fnieuws%2Fgreen-solutions-awards-2019" class="popup">
          <span class="rrssb-icon"><i class="fab fa-facebook-square"></i></span>
          <span class="rrssb-text">facebook</span>
        </a>
        </li><li class="rrssb-twitter" style="width: 136.031px; max-width: 33.33%;">
        <a href="https://twitter.com/intent/tweet?text=Green%20Solutions%20Awards%202019&amp;url=https%3A%2F%2Fwww.establis.eu%2Fnl%2Fnieuws%2Fnieuws%2Fgreen-solutions-awards-2019" class="popup">
          <span class="rrssb-icon"><i class="fab fa-twitter"></i></span>
          <span class="rrssb-text">twitter</span>
        </a>
         </li><li class="rrssb-linkedin" style="width: 136.031px; max-width: 33.33%;">
        <a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fwww.establis.eu%2Fnl%2Fnieuws%2Fnieuws%2Fgreen-solutions-awards-2019&amp;title=Green%20Solutions%20Awards%202019" class="popup">
          <span class="rrssb-icon"><i class="fab fa-linkedin-in"></i></span>
          <span class="rrssb-text">linkedin</span>
        </a>
        </li></ul>
        </div>
        </div>
        
        `;
        this.projectsListElement.append(projectElement);
      }
    },
    // ${ this.trasformTagsToHtml(project.tags)}
    // trasformTagsToHtml (tags) {
    //   return htmlStr;
    // }
  };
  app.initialize();
})();
