class List {
    constructor() {
        this._list = [];
        this.size = 0;
    }

    add(element) {
        this._list.push(element);
        this._list.sort((a, b) => a - b);
        this.size++;
    }

    remove(index) {
        if(index < 0 || index >= this.size){
            throw new Error('Invalid Position');
        }

        this._list.splice(index, 1);
        this.size--;
    }

    get(index){
        if(index < 0 || index >= this.size){
            throw new Error('Invalid Position');
        }
        return this._list[index];
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
