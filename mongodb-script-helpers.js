//! moment.js
//! version : 1.0s
//! authors : Engin Kartal contributors
//! license : MIT
//! https://yellowpages.com.tr


/**
 * The array_pluck function will pluck a list of the given key / value pairs from the array
 * array_pluck(array,value) returns a new array values
 */
function array_pluck(array, value) {
    var values = [];
    array.forEach(function (d) {
        d[value].forEach(function (c) {
            if (values.indexOf(c) === -1) {
                values.push(c);
            }
        });

    });

    return values;
}

/**
 * Removes duplicate values from an array
 */
Array.prototype.getUnique = function () {
    var u = {}, a = [];
    for (var i = 0, l = this.length; i < l; ++i) {
        if (u.hasOwnProperty(this[i])) {
            continue;
        }
        a.push(this[i]);
        u[this[i]] = 1;
    }
    return a;
}

/**
 * stringToObjectId()
 *
 */
Array.prototype.stringToObjectId = function(){
    var u = {}, a = [];
    for(var i = 0, l = this.length; i < l; ++i){
        a.push("ObjectId('"+this[i]+"')");
    }
    return a;
}