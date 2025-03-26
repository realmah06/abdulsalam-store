function showPopup() {
            document.getElementById("popupForm").classList.add("active");
            document.getElementById("overlay").classList.add("active");
        }

        function closePopup() {
            document.getElementById("popupForm").classList.remove("active");
            document.getElementById("overlay").classList.remove("active");
        }
        
        
 document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();

    // Validation for empty fields
    if (username === '' || password === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'Username and Password are required!'
        });
        return; // Stop further execution
    }

    // Confirmation alert before login with preConfirm loader
    Swal.fire({
        icon: 'warning',
        title: 'Login to Dashboard?',
        showCancelButton: true,
        cancelButtonText: 'Discard',
        confirmButtonText: 'Login',
        allowOutsideClick: false,
        customClass: {
            confirmButton: 'confirm-swal-btn',
            cancelButton: 'cancel-swal-btn',
            title: "custom-swal-title",
        },
        preConfirm: () => {
            return new Promise((resolve) => {
                Swal.showLoading(); // Show SweetAlert's built-in loader
                setTimeout(() => {
                    if (username === 'maahdi' && password === 'm$muj$_06') {
                        resolve();
                        Swal.fire({
                            icon: 'success',
                            title: 'Congratulations',
                            text: 'Welcome back to ADMIN Dashboard',
                            timer: 5000,
                            customClass: {
                              confirmButton: 'confirm-swal-btn',
                              cancelButton: 'cancel-swal-btn',
                              title: "custom-swal-title",
                          },
                            showConfirmButton: true
                        }).then(() => {
                            window.location.href = 'dashboard.html'; // Redirect
                        });
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Login Failed!',
                            text: 'Invalid Username or Password.'
                        });
                    }
                }, 2000); // Simulate processing delay
            });
        }
    });
});
