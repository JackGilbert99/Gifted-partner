import { appState } from "../AppState.js"
import { giftsService } from "../Services/GiftsService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { setHTML } from "../Utils/Writer.js"

function _drawGifts() {
    let template = ''
    appState.gifts.forEach(g => template += g.Template)
    setHTML('giftBox', template)
    
}

export class GiftsController {
    constructor() {
        this.getGifts()
        _drawGifts()
        appState.on("gifts", _drawGifts)
    }
   async getGifts(){
    try {
        await giftsService.getGifts()
    } catch (error) {
        console.error('[No Present]', error)
    }
    }
    async addGifts(){
        try {
            window.event.preventDefault()
            const form = window.event.target
            let formData = getFormData(form)
            await giftsService.addGifts(formData)
        } catch (error) {
        console.error('[Error]', error)
        }
    }
}

