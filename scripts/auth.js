// listen for auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
        db.collection('test').onSnapshot(snapshot => {
            setupContent(snapshot.docs);
            setupUI(user);
        }, err => console.log(err.message));
    } else {
        setupUI();
        setupContent([]);
    }
});

//signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const email = signupForm ['signup-email'].value;
    const password = signupForm ['signup-password'].value;
    
    //sign users up to firebase
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        //close the signup modal & reset form
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();
        signupForm.querySelector('.error').innerHTML = '';
    }).catch(err =>{
        signupForm.querySelector('.error').innerHTML = err.message;
    });
});
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
  });

//login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //get user info
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    //log user in 
    auth.signInWithEmailAndPassword(email, password).then(cred => {
        // close the signup modal & login form
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset();
        loginForm.querySelector('.error').innerHTML = '';
    }).catch(err =>{
        loginForm.querySelector('.error').innerHTML = err.message;
    });
});