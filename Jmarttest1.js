function(){
    var ans = {}
    var test = ['VMRCO', 'VORCM', 'MCRTOX', 'ZXTAC', 'XZATC', 'XMTCOR', 'OXVS', 'AZTXC', 'VXOS', 'RZAT', 'MRCOTX', 'SVXO', 'TRAZ', 'ZTAR', 'MVOCR']
    var charchk = '';
    var z = 0
    var tt = 0;
    for(var i = 0; i < test.length;i++){
        var chk = test[i]

        for(var x = i+1; x < test.length; x++){
            charchk = ''
            charchk = test[x]
            for(var y = 0; y < chk.length; y++){
                
                
                charchk = charchk.replace(chk[y],'')
                // console.log(chk[y].length+':'+charchk.length);   
            }
            if(charchk == ''){
                if(tt == 0 ){
                    ans['ans'+i] = []
                    ans['ans'+i].push(chk)
                    tt++;
                }
                ans['ans'+i].push(test[x])
                
            }
        }
        if(ans.hasOwnProperty('ans'+i)){
            if(ans['ans'+i].length == 2)
            delete ans['ans'+i];
        }

        tt = 0;
    }

    return ans
}
    
