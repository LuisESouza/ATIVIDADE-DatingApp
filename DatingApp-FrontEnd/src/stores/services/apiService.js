import axios from 'axios';
import { useAuthStore } from '@/stores/authStore.js';

class apiService {
    constructor() {
        const authStore = useAuthStore();
        this.token = authStore.token;
    }

    async apiPost(url, data) {
        try {
            const headers = { 'x-auth-token': this.token };
            const response = await axios.post(url, data, { headers });
            return response.data;
        } catch (error) {
            console.error('Error POST:', error);
            throw error;
        }
    }

    async apiGet(url) {
        try {
            console.log(`GET request to URL: ${url}`);
            const response = await axios.get(url, {
                headers: { 'x-auth-token': this.token }
            });
            return response.data;
        } catch (error) {
            console.error('Error GET:', error);
            throw error;
        }
    }

    async apiPut(url, data) {
        try {
            const response = await axios.put(url, data, {
                headers: { 'x-auth-token': this.token }
            });
            return response.data;
        } catch (error) {
            console.error('Error PUT:', error);
            throw error;
        }
    }
}

export default apiService;