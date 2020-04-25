let userForm = document.getElementById('user-form');
userForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let formData = new FormData(userForm);
    let user = {
        'name': formData.get('username'),
        'phone': formData.get('phone-number'),
    };
    localStorage.setItem('user', JSON.stringify((name)));
    window.document.location.href = 'thankYou.html';
});