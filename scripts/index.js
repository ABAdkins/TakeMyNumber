const testList = document.querySelector('.test');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');

const setupUI = (user) => {
  if(user){
    //account info
    const html = `
      <div>Logged in as ${user.email}</div>
    `;
    accountDetails.innerHTML = html; 
    //toggle menu elements
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
    testList.innerHTML = '<h5 class="center-align" >Signed in</h5>';
  }
  else {
    // clear account info
    accountDetails.innerHTML = '';
    //toggle menu elements
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
    testList.innerHTML = '<h5 class="center-align" >Signed out</h5>';
  }
}
 
//setup content
const setupContent = (user) => {
}

//setup materialize components
document.addEventListener('DOMContentLoaded', function() {
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  });