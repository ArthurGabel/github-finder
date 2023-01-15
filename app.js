const ui = new Ui;

const interval = setInterval(() => {
  if(window.github) {
    clearInterval(interval)
    const github = new window.github;
    createListener(github);
  }
}, 50)


const createListener = (github) => {
  const searchUser = document.getElementById('searchUser');

  searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value

    if(userText !== '' ) {
      github.getUser(userText)
        .then(user => {
          ui.sowProfile(user.profile); 
          ui.showRepos(user.repos);
        })
    } else {
      ui.clearProfile()
    }
  });
}

// user => {ui.sowProfile(user.data)}