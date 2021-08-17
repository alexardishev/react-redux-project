export default class RestoService {


    async getResource() {
        const res = await fetch('http://localhost:3000/menu');

        if(!res.ok) {
            throw new Error(`Could not fetch` + `, received ${res.status}`);
        }
        return await res.json();
    }
    async getMenuItems () {
        return await this.getResource();
    }
    
    
}