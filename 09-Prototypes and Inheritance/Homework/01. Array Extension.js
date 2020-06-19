(() => {
    Array.prototype.last = function() {
        console.log(this)
        return this[this.length - 1];
    };

    Array.prototype.skip = function(n) {
        let resultArr = [];
        for (let i = n; i < this.length; i++) {
                resultArr.push(this[i]);
        }

        return resultArr;
    };

    Array.prototype.take = function(n) {
        let resultArr = [];
        for (let i = 0; i < n; i++) {
                resultArr.push(this[i]);
        }

        return resultArr;
    };

    Array.prototype.sum = function() {
        return this.reduce((acc, curr) => acc + curr, 0);
    };

    Array.prototype.average = function() {
        return this.sum() / this.length;
    };
})()