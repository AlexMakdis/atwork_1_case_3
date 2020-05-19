(() => {
  const app = {
    initialize () {
      this.projectsData = null;
      this.cacheElements();
      this.loadProjects();
    },
    cacheElements () {
      this.projectsListElement = document.querySelector('.projects-list_2');
    },
    async loadProjects () {
      // eslint-disable-next-line no-undef
      Ajax.fetchJsonByHandlers(`https://establis.herokuapp.com/api/projects`,
        (data) => {
          // console.log(data);
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
        projectElement.classList.add('g-fb-row');
        projectElement.innerHTML = `
        <div class="container_detail_detail_project_content g-fb-col-12 g-fb-col-md-6 no_padding">
        <img class="detail_project_zoom" src="http://establis.eu/${project.field_image}" alt="">
        </div>
        <div class="container_detail_detail_project_content g-fb-col-12 g-fb-col-md-6 no_padding">
        <img class="detail_project_zoom" src="http://establis.eu/${project.field_gallery_images}" alt="">
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
