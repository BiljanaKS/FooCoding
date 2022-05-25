async function getUsers() {
    let url = 'https://breakingbadapi.com/api/characters/';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderUsers() {
    let users = await getUsers();
    console.log(users);
    let html = '';
    users.forEach(user => {
        let htmlSegment = `<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="${user.img}" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back">
      <h1>${user.name}</h1> 
      <p>Alias: ${user.nickname}</p> 
      <p>Actor: ${user.portrayed}</p>
      <p>Birth: ${user.birthday}</p>
      <p>Status: ${user.status}</p>
    </div>
  </div>
</div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderUsers();