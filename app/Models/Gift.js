


export class Gift {
    constructor(data) {
        this.tag = data.tag;
        this.url = data.url || 'http://thiscatdoesnotexist.com';
        this.opened = data.opened || false;
        
    }
    get Template() {
        return /*HTML*/ `
        <div class="col-3 m-4">
        <img class="img-fluid" src="${this.url}">
        <h4>${this.tag}</h4>
      </div>`
    }
}