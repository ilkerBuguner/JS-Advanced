(function solve() {
    String.prototype.ensureStart = function(str) {
        if(!this.startsWith(str)) {
            return str + this;
        }

        return this.toString();
    }

    String.prototype.ensureEnd = function(str) {
        if(!this.endsWith(str)) {
            return this + str;
        }

        return this.toString();
    }

    String.prototype.isEmpty = function() {
        if(this.length === 0) {
            return true;
        }

        return false;
    }

    String.prototype.truncate = function(index) {
        if(index <= 3) return '.'.repeat(index);
        if(this.length <= index) return this.toString();
        let spaceIndex = this.substring(0, index - 1).lastIndexOf(' ');
        if(spaceIndex >= 0) {
            return this.substring(0, spaceIndex) + '...';
        } else {
            return this.substring(0, num - 3) + '...';
        }
    }

    String.format = function(string, ...params) {
        params.forEach((el, i) => {
            string = string.replace(`{${i}}`, el)
        });

        return string;
    }
})()