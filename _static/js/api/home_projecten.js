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
      Ajax.fetchJsonByHandlers(`https://establis.herokuapp.com/api/projects?langcode=nl`,
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
        const project = this.projectsData[8];
        projectElement = document.createElement('div');
        projectElement.classList.add();
        projectElement.innerHTML = `
        <div class="kaas" data-id="${0}">
          <picture class="random-user__picture project_picture">
            <img src="http://establis.eu/${project.field_image}" alt="" />
          </picture>
          <div class="project_text">
            <span class="project__location">${project.field_city}</span>
            <h1 class="project_header">${project.title}</h1>
            <span class="lees_meer"><a class="hover_red" href="./projecten/detail_pagina/detail/index.html">lees meer <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></span>
          </div>
          <div class="overview-item__hover"></div>
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
