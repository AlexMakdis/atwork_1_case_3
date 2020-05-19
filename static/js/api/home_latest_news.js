(() => {
  const app = {
    initialize () {
      this.projectsData = null;
      this.cacheElements();
      this.loadProjects();
    },
    cacheElements () {
      this.projectsListElement = document.querySelector('.projects-list_5');
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
        const project = this.projectsData[0];
        projectElement = document.createElement('div');
        projectElement.classList.add();
        projectElement.innerHTML = `
        <img class="latest_news_pic" src="http://establis.eu/${project.field_image}" alt="">
        <span style="color: #d4092d;">08 oktober 2019</span>
        <h2>${project.title}</h2>
        <p>${project.field_content}</p>
        <span class="lees_meer"><a class="hover_red" href="./nieuws/detail_pagina/detail/index.html">lees meer <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></span>
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
