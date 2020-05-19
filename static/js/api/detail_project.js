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
        projectElement.classList.add( );
        projectElement.innerHTML = `
        <div class="container_detail_detail_project_content">
        <p>Befimmo plant een nieuw project, de Quatuor Building, om het huidige Noord Building gebouw dat afgebroken zou worden, te vervangen. Het nieuwe geheel (60.000 m²) zou bestaan uit vier autonome kantoorgebouwen die een architecturale eenheid vormen, in een ontwerp dat borg staat voor zeer grote flexibiliteit in de inrichting.<br>

        Met het ontwerp van het gebouw mikt Befimmo op een BREEAM Outstanding certificatie in de Designfase.</p>

        <div class="detail_blok">
        <h3 class="between_titles_project_detail">bouwplaats</h3>
        <p>${project.field_address}</p>
        </div>

        <div class="detail_blok">
        <h3 class="between_titles_project_detail">client</h3>
        <p>${project.client}</p>
        </div>

        <div class="detail_blok">
        <h3 class="between_titles_project_detail">architect</h3>
        <p>${project.field_architect}</p>
        </div>

        <div class="detail_blok">
        <h3 class="between_titles_project_detail">hoofdaannemer</h3>
        <p>${project.field_contractor}</p>
        </div>

        <div class="detail_blok">
        <h3 class="between_titles_project_detail">vloeroppervlakte</h3>
        <p>${project.field_surface}</p>
        </div>
        
        <div class="detail_blok">
        <h3 class="between_titles_project_detail">bouwtijd</h3>
        <p>${project.field_build_time}</p>
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
