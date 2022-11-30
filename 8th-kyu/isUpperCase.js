String.prototype.isUpperCase = function() {
    console.log(this)
    return this.valueOf() === this.toUpperCase()
    }