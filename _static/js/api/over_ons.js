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
      Ajax.fetchJsonByHandlers(`${location.origin}/_static/json/over_ons.json`,
        (data) => {
          // console.log(data);
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
          projectElement.innerHTML = `
          <div class="g-fb-col-12 g-fb-col-md-4 over_ons_dienst">
                        <img src="${location.origin}${project.picture}" alt="">
                        <h2>${project.title}</h2>
                        <p>${project.description}</p>
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
