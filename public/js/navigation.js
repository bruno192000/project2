const homeFormHandler = (event) => {
    // Stop the browser from submitting the form
    window.location.replace("/");
};
      
  // Listens for Home button to be selected
  document
    .querySelector('#home-button')
    .addEventListener('click', homeFormHandler);


const dashboardFormHandler = (event) => {
    // Stop the browser from submitting the form
    window.location.replace("/dashboard");
};
        
    // Listens for Home button to be selected
    document
    .querySelector('#dashboard-button')
    .addEventListener('click', dashboardFormHandler);


    // Action taken when Logout button is selected
// const logout = async () => {
//     const response = await fetch('/api/users/logout', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//     });
  
//     // If successfully logged out, redirect user to the login page
//     if (response.ok) {
//       document.location.replace('/login');
//     } else {
//       alert(response.statusText);
//     }
//   };
  
//   // Listens for user to select Logout
//     document.querySelector('#logout')
//     .addEventListener('click', logout);
  