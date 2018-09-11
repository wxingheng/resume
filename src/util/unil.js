export function addBrowsePrefix (key, value) {
return  `     ${key}: ${value};
          moz-${key}: ${value};
       webkit-${key}: ${value};`                           
}

// export function addBrowsePrefix (key, value) {
//     return                              key + ':' + value + ';\
//        moz ' + setFirstCharToUpperCase(key) + ':' + value + ';\
//     webkit ' + setFirstCharToUpperCase(key) + ':' + value + ';';
//     }

// export function setFirstCharToUpperCase (str) {
//     str.replace(/^[a-zA-Z]{1}/i, function(){
//         return arguments[0].toLocaleUpperCase();
//     })
// }

