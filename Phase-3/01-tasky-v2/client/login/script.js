document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const errorDiv = document.getElementById('error');

    const axiosInstance = axios.create({
        baseURL: 'http://localhost:3000',
    });

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(loginForm);
        const data = Object.fromEntries(formData.entries());
        const { email, password } = data;

        try {
            const response = await axiosInstance.post('/api/users/login', data);

            if (response.data.success && response.data.data?.token) {
                const token = response.data.data.token;
                localStorage.setItem('authToken', token);
                
                window.location.href = '../dashboard';
                errorDiv.classList.add('hidden');
                console.log(response.data.success);
            } else {
                // errorDiv.textContent =  'Login failed';
                errorDiv.classList.remove('hidden');
                console.log(response.data.message);
            }

        } catch (error) {
            console.error('Error:', error);
            errorDiv.textContent = error.response?.data?.message || 'An error occurred during login';
            errorDiv.classList.remove('hidden');

        }
    });

})