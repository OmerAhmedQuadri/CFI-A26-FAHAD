document.addEventListener('DOMContentLoaded', () => {
    const verifyForm = document.getElementById('verify-form');

    const axiosInstance = axios.create({
        baseURL: 'http://localhost:3000',
    });

    verifyForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        try {
            const response = await axiosInstance.get(`/api/auth/user/verify/email/${token}`);

            if (response.data.success) {
                alert(response.data.message);
                window.location.href = '../login';
            } else {
                alert('Verification failed: ' + response.data.message);
            }

        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred during verification: ' + (error.response?.data?.message || error.message));
        }
    });
})