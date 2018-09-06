/*-------------------------------------------------------------------------------
  Behance User
-------------------------------------------------------------------------------*/

// Define Variables
const userID = 'ayumitk';
const apiKey = '5AGtA6uAQot7srZlfWYtj1kZUXSuHx0S';
const perPage = 6;
const url = `https://www.behance.net/v2/users/${userID}/projects?callback=?&api_key=${apiKey}&per_page=${perPage}&callback=projectCallback`;
const session = 'behanceUserProject';


function projectList() {
  // Get json data
  const behanceData = JSON.parse(sessionStorage.getItem(session));

  let resultHTML = '';

  // Create projects list
  behanceData.forEach((project) => {
    let fieldList = '';
    project.fields.forEach((field) => {
      fieldList += `<span class="mr-1">${field}</span>`;
    });

    resultHTML += `
      <div class="col-md-4 mb-5">
        <div class="card shadow-sm">
          <a href="work.html?projectID=${project.id}">
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

  // Set all project contents to html
  document.querySelector('#behance-list').innerHTML = resultHTML;
}


// If sessionStorage has a json data, use it.
// If not, get data form Behance API and set it to sessionStorage.
// Behance limits the API by 150 requests per hour.
if (sessionStorage.getItem(session)) {
  projectList();
} else {
  // Create <script> tag
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
  document.querySelector('head').appendChild(script);

  // Callback function
  const projectCallback = (data) => {
    // Set data to sessionStorage
    const sessionData = JSON.stringify(data.projects);
    sessionStorage.setItem(session, sessionData);

    projectList();
  };

  // to use as a global function
  window.projectCallback = projectCallback;
}