import fetchJsonp from 'fetch-jsonp';

/*-------------------------------------------------------------------------------
  Behance
-------------------------------------------------------------------------------*/
const userID = 'ayumitk';
const apiKey = '5AGtA6uAQot7srZlfWYtj1kZUXSuHx0S';
const perPage = 6;

const url = `https://api.behance.net/v2/users/${userID}/projects?client_id=${apiKey}&per_page=${perPage}`;

const session = 'behanceProject';

// Create projects list
function projectList(data) {
  let resultHTML = '';

  data.forEach((project) => {
    const fieldList = project.fields.map(field => `<span class="mr-1">${field}</span>`);

    resultHTML += `
      <div class="col-md-4 mb-5">
        <div class="card shadow-sm">
          <a href="#project-${project.id}">
            <div class="card-image"><img class="card-img-top" src="${project.covers[404]}" alt=""></div>
            <div class="card-body">
              <p class="card-text">${project.name}</p>
              <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted field-list">${fieldList}</small>
              </div>
            </div>
          </a>
        </div>
      </div>`;
  });

  // Set all project list to html
  document.querySelector('#behance-projects').innerHTML = resultHTML;
}


// If sessionStorage has a json data, use it.
// If not, get data form Behance API and set it to sessionStorage.
// Behance limits the API by 150 requests per hour.
const storageData = sessionStorage.getItem(session);
if (storageData) {
  projectList(JSON.parse(storageData));
} else {
  // Fetch jsonp data
  fetchJsonp(url, {
    jsonpCallback: 'callback',
  })
    .then(response => response.json()).then((json) => {
      // Insert data to session storage
      sessionStorage.setItem(session, JSON.stringify(json.projects));

      //  Create project list
      projectList(json.projects);
    }).catch((ex) => {
      document.querySelector('#behance-projects').innerHTML = `<small>Parsing failed : ${ex}</small>`;
    });
}
