import { appState } from "../AppState.js";
import { Gift } from "../Models/Gift.js";
import { giftServer } from "../Services/AxiosService.js"

class GiftsService {
    async getGifts() {
        
        const res = await giftServer.get('/api/gifts') 
        console.log(res.data[0]);
        appState.gifts = res.data.map(g => new Gift({tag: g.tag, url: g.url, opened: g.opened}))
        console.log(appState.gifts);
    }
    async addGifts(formData) {
            console.log(formData);
            const gift = new Gift(formData)
            console.log(gift);
            const res = await giftServer.post('/api/gifts', gift)
            appState.gifts = [gift, ...appState.gifts]
    }
}




export const giftsService = new GiftsService()