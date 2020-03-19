//! INIT  GITHUB
const github = new GitHub();
const ui = new UI();

//Search Input
const searchUser = document.getElementById('searchUser');
//Search input event listener
searchUser.addEventListener('keyup', (e) => {
  //get input text
  const userText = e.target.value;
  if (userText !== '') {
    //make http call
    github.getUser(userText).then((data) => {
      if (data.profile.message === 'Not Found') {
        //show alert
        ui.showAlert('User Not found', 'alert alert-danger ');
      } else {
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    //clear
    ui.clearProfile();
  }
});
