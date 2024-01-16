import config from "../config/config";

const authService = {
    register: async (newCredentials) => {
        try {
            const response = await fetch(`${config.API_URL}/auth/register`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newCredentials),
            });
            const data = await response.json();
            return data; 
        }
        catch (error) {
            console.log(`Error registering user: ${error}`);
            return { error: error };
        }
    }
}

export default authService;