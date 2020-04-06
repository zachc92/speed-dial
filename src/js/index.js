import { elements } from './views/base';
import List from './models/List';
import * as listView from './views/listView';

const state = {};
window.state = state;

// LIST CONTROLLER

const controlList = async () => {
    state.linkList = new List(state);
    
    try {
        await state.linkList.getResults();

        listView.renderList(state.linkList.result);
    } catch (err) {
        console.log(err);
    }
}

controlList();