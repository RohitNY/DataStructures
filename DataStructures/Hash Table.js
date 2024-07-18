class HashTable{
    constructor(size=53){
        this.keyMap = new Array(size);
    }

    _hash(key) {
        const prime_key = 31;
        let total =0;
        for(let i=0;i<Math.min(key.length, 100); i++){
           let ch= key.charCodeAt(i)-96;
            total = Math.abs(total* prime_key + ch) % this.keyMap.length
        }
        return total;
    }

    set(key, value) {
        const hash = this._hash(key);
        console.log(hash);
        this.keyMap[hash] = this.keyMap[hash] || [];
        this.keyMap[hash].push([key, value]);
    }

    get(key) {
        const hash = this._hash(key);
      return  (this.keyMap[hash]??[]).find(val => val[0] === key);
    }

    keys() {
        return this.keyMap.reduce((result, val) =>{
            if(!val) return result;
            result.push(...val.map(v => v[0]));
            return result;
        },[]);
    }

    values() {
        return this.keyMap.reduce((result, val) =>{
            if(!val) return result;
            result.add(...val.map(v => v[1]));
            return result;
        }, new Set());
    }
}

let ht = new HashTable();
ht.set("hello world", "goodbye!!");
ht.set("dog", "love dogs!!");
ht.set("cats", "love cats!!");
ht.set("here we go", "cya!!");
ht.set("hello", "goodbye!!");
ht.set("hi", "goodbye!!");
