import {action, observable} from "mobx";
let index = 0;

class ScoreStore {
  @observable scores = ["First", "Second"];

  @action addListItem(item) {
    this.list.push({
      name: item,
      items: [],
      index
    });
    index++
  }

  @action removeListItem(item) {
    this.list = this.list.filter((l) => {
      return l.index !== item.index
    })
  }

  @action addItem(item, name) {
    this.list.forEach((l) => {
      if (l.index === item.index) {
        l.items.push(name)
      }
    })
  }

}

export default new ScoreStore();