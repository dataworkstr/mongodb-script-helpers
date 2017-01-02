//! mongodb-script-helpers
//! version : 1.1
//! authors : Engin Kartal contributors
//! license : MIT
//! https://yellowpages.com.tr


//#### ARRAY ### \\

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


//#### STRING ### \\

/**
 * string_slug
 * value string
 * separator string default -
 * return new string slug
 */
function string_slug(value,separator="-"){

// Convert all dashes/underscores into separator
    var flip = separator == '-' ? '_' : '-';
    value=value.toLowerCase().trim();
    value = value.replace(flip, separator);

// Remove all characters that are not the separator, letters, numbers, or whitespace.
    value = value.toLowerCase().replace(new RegExp('[^a-z0-9' + separator + '\\s]', 'g'), '');

// Replace all separator characters and whitespace by a single separator
    value = value.replace(new RegExp('[' + separator + '\\s]+', 'g'), separator);

    value= value.replace(new RegExp('^[' + separator + '\\s]+|[' + separator + '\\s]+$', 'g'),'');

    return value;
}

