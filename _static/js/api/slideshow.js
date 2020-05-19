(() => {
  const app = {
    initialize () {
      this.projectsData = null;
      this.cacheElements();
      this.loadProjects();
    },
    cacheElements () {
      this.projectsListElement = document.querySelector('.carousel-slide');
    },
    async loadProjects () {
      // eslint-disable-next-line no-undef
      Ajax.fetchJsonByHandlers(`${location.origin}/case_3/_static/json/slideshow.json`,
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
          projectElement = document.createElement('img');
          projectElement.classList.add('');
          projectElement.innerHTML = `
                        <img src="${location.origin}${project.picture}" alt="">

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
