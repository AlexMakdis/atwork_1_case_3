(() => {
  const app = {
    initialize() {
      this.projectsData = null;
      this.cacheElements();
      this.loadProjects();
    },
    cacheElements() {
      this.projectsListElement = document.querySelector('.projects-list');
    },
    async loadProjects() {
      // eslint-disable-next-line no-undef
      Ajax.fetchJsonByHandlers(`https://establis.herokuapp.com/api/team`,
        (data) => {
          // console.log(data);
          this.projectsData = data;
          this.generateUIForProjects();
        },
        (error) => {
          console.log(error);
        });
    },
    generateUIForProjects() {
      if (this.projectsData !== null && this.projectsListElement !== null) {
        // console.log(this.projectsData);
        let projectElement = null;
        this.projectsData.forEach((project, index) => {
          projectElement = document.createElement('div');
          projectElement.classList.add('project', 'g-fb-col-12', 'g-fb-col-sm-6', 'g-fb-col-md-4', 'g-fb-col-lg-3', 'g-fb-col-xl-2');
          projectElement.innerHTML = `
          <div class="project" data-id="${index}">
          <picture class="random-user__picture">
              <img class="hover_image" src="http://establis.eu/${project.field_hover_image}" alt="" />
            </picture>
            <picture class="random-user__picture picture_hover">
              <img class="front_image" src="http://establis.eu/${project.field_image}" alt="" />
              <h1 class="project__title">${project.title}</h1>
            </picture>
            
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