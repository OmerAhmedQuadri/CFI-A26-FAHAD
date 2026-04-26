document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
    const errorDiv = document.getElementById('error');

    const axiosInstance = axios.create({
        baseURL: 'http://localhost:3000',
    });

    registerForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(registerForm);
        const data = Object.fromEntries(formData.entries());
        const { fullname, phone, email, password } = data;

        try {
            const response = await axiosInstance.post('/api/users/register', data);

            if (response.data.success) {
                // alert('Registration successful! Please login.');
                window.location.href = '../login';
                errorDiv.classList.add('hidden');
                console.log(response.data.success);
            } else {
                // errorDiv.textContent =  'Registration failed';
                errorDiv.classList.remove('hidden');
                console.log(response.data.message);
            }

        } catch (error) {
            console.error('Error:', error);
            errorDiv.textContent = error.response?.data?.message || 'An error occurred during registration';
            errorDiv.classList.remove('hidden');

        }
    });

})