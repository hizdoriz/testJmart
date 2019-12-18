function test2(){
    var letters = "abc";
    var arr = []
    var arr1 = []
    var arr2 = []
    var arr3 = []
    var arr4 = []
    var textchk = ''
    for(var i =0; i < letters.length; i++){
        arr.push(letters[i])
        arr1.push(arr[i])
    }

    for (var i = 0; i < arr1.length ; i++){
        for(var x = 0; x < arr.length ; x++){
            arr2.push(arr1[i]+arr[x])
        }
    }

    for (var i = 0; i < arr2.length ; i++){
        for(var x = 0; x < arr.length ; x++){
            arr3.push(arr2[i]+arr[x]);
        }
    }

    for (var i = 0; i < arr2.length ; i++){
        for(var x = 0; x < arr.length ; x++){
            arr3.push(arr2[i]+arr[x]);
        }
    }
    for(var i = 0; i < arr3.length ; i++){
        textchk = ''
        for(var x = 0; x < arr.length ; x++){
            if( x == 0 ){
                var text = arr3[i]
                var valchk = arr[x]
                var chk = text.replace(/a/g,'')
                if(chk.length == 2){
                    textchk = chk
                }
            }
            
            if(x == 1 && textchk.length == 2){
                var chk = textchk.replace(/b/g,'')
                if(chk.length == 1){
                    if(!arr4.includes(arr3[i]))
                    arr4.push(arr3[i])
                }
            }
            if(x == 2 && textchk.length == 2){
                var chk = textchk.replace(/c/g,'')
                if(chk.length == 1){
                    if(!arr4.includes(arr3[i]))
                    arr4.push(arr3[i])
                }
            }
        }
    }
    return arr4
}
    
