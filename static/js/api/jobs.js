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
      Ajax.fetchJsonByHandlers(`${location.origin}/_static/json/werken_bij_ons.json`,
        (data) => {
          // console.log(data["0"]);
          this.projectsData = data;
          this.generateUIForProjects();
        },
        (error) => {
          console.log(error);
        });
    },
    generateUIForProjects () {
      if (this.projectsData !== null && this.projectsListElement !== null) {
        // console.log(this.projectsData);
        let projectElement = null;
        this.projectsData.forEach((project, index) => {
          projectElement = document.createElement('div');
          projectElement.classList.add('jobs');
          projectElement.innerHTML = `
          <div class="project g-fb-row" data-id="${index}">
            <div class= "g-fb-col-12 g-fb-col-md-6 jobs_content_text ">
            <h2 class="jobs_title">${project.title}</h2>
            <div class="team_line"></div>
            <p class="jobs_text">${project.description}</p>
            <p class="solliciteer_nu">Solliciteer nu! <a href="mailto:jobs@establis.eu">jobs@establis.eu</a></p>
            </div>
            <div class= "g-fb-col-12 g-fb-col-md-6 jobs_content_pictures >
            <picture class="jobs_picture">
              <img class="jobs_image" src="${location.origin}${project.picture}" alt="" />
            </picture>
            </div>
          </div>
          `;
          this.projectsListElement.append(projectElement);
        });
      }
    }
    // ${ this.trasformTagsToHtml(project.tags)}
    // trasformTagsToHtml (tags) {
    //   return htmlStr;
    // }
  };
  app.initialize();
})();
