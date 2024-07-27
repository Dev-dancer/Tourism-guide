document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const rating = document.getElementById('rating').value;
    const suggestions = document.getElementById('suggestions').value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    console.log('Rating:', rating);
    console.log('Suggestions:', suggestions);
    console.log('Email:', email);

    document.getElementById('feedback-form').style.display = 'none';
    document.getElementById('thank-you-message').style.display = 'block';
});
