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
          projectElement.classList.add('g-fb-col-12', 'g-fb-col-md-6', 'project','project_2');
          projectElement.innerHTML = `
          <div class="kaas" data-id="${index}"><a href="./detail_pagina/detail/index.html">
            <picture class="random-user__picture project_picture">
              <img src="http://establis.eu/${project.field_image}" alt="" />
            </picture>
            <div class="project_text">
              <span class="project__location">08 oktober 2019</span>
              <h1 class="project_header">${project.title}</h1>
              <span class="lees_meer">lees meer <i class="fa fa-long-arrow-right" aria-hidden="true"></i></span>
            </div>
            <div class="overview-item__hover"></div></a>
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
