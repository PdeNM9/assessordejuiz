// auth.js
document.addEventListener('DOMContentLoaded', () => {
    const authForm = document.getElementById('auth-form');
    const loginForm = document.getElementById('login-form');
    const aiInterface = document.getElementById('ai-interface');

    authForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch('/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                // Login bem-sucedido
                loginForm.style.display = 'none';
                aiInterface.style.display = 'block';
                Toastify({
                    text: "Login realizado com sucesso!",
                    duration: 3000,
                    gravity: "top",
                    position: "right",
                    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
                }).showToast();
            } else {
                // Login falhou
                const errorData = await response.json();
                Toastify({
                    text: errorData.message || "Erro no login. Tente novamente.",
                    duration: 3000,
                    gravity: "top",
                    position: "right",
                    backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
                }).showToast();
            }
        } catch (error) {
            console.error('Erro na autenticação:', error);
            Toastify({
                text: "Erro na conexão. Tente novamente mais tarde.",
                duration: 3000,
                gravity: "top",
                position: "right",
                backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
            }).showToast();
        }
    });
});