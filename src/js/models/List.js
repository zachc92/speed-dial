import axios from 'axios';

export default class List {
    async getResults() {
        try {
            const res = await axios('../link-list.json');
            this.result = res.data.links
        } catch(err) {
            console.log(err)
        }
    }
}