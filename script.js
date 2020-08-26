// TODO: add code here
window.addEventListener('load', function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    .then(function(response){
      response.json()
    .then(function(json){
        console.log(json);
        json.sort(function(a, b){
            return a.hoursInSpace - b.hoursInSpace;
        });
        let container = document.getElementById('container');
        for(let i=0; i<json.length; i++){
            let isActive = json[i].active ? 'isActive':'notActive'
            container.insertAdjacentHTML('beforeend',`
                <div class="astronaut">
                    <div class="bio">
                        <h3 class="name">${json[i].firstName} ${json[i].lastName}</h3>
                        <ul class="stats">
                            <li class="hours">Hours in space: ${json[i].hoursInSpace}</li>
                            <li class="${isActive}">Active: ${json[i].active}</li>
                            <li class="skills">${json[i].skills.join(', ')}</li>
                        </ul>
                    </div>
                <img class="avatar" src="${json[i].picture}">
              </div>
              Total astronauts listed: ${json.length}`
            )
        }
    });
  });
  });
