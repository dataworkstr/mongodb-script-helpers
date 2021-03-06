## MongoDB Script Helpers


## Documentation

* [Arrays](#arrays)
    * [array_pluck](#array_pluck)

* [Prototype](#prototype)
    * [Array.prototype.getUnique](#Array.prototype.getUnique)
    * [Array.prototype.stringToObjectId](#Array.prototype.stringToObjectId)

* [String](#string)
    * [string_slug](#string_slug)    
    
<a name="arrays"/>
## Arrays

<a name="array_pluck"/>
### array_pluck


```javascript
/**
	 * Pluck an array of values from an array.
	 *
	 * @param  array   $array
	 * @param  string  $value
	 * @return array
*/
function array_pluck($array, $value)
```

<a name="prototype"/>
## Prototype

<a name="Array.prototype.getUnique"/>
### Array.prototype.getUnique

```javascript
/**
	 * Removes duplicate values from an array.
	 *
	 * @return array
*/
Array.getUnique()
```

<a name="Array.prototype.stringToObjectId"/>
### Array.prototype.stringToObjectId

```javascript
/**
	 * MongoDB string to ObjectId
	 *
	 * @return array
*/
Array.stringToObjectId()
```

<a name="string"/>
## String

<a name="string_slug"/>
### string_slug


```javascript
/**
	 * The string_slug function generates a URL friendly "slug" from the given string:
       

	 *
	 * @param  string  value
	 * @param  string  separator
	 * @return string
*/
function string_slug(value,separator)
```

![Yellow Pages](https://s3-eu-west-1.amazonaws.com/yptr/media/2MeNgXPPX6dNBVAnv3nD.png)(https://yellowpages.com.tr/)
