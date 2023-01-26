
function nyamainKata(s){
    let keyword = "hackerrank"
    let poin = keyword.length
    for(let i = 0; i < keyword.length; i++){
        for(let j = 0; j < s.length; j++){
            if(keyword[i] == s[j]){
                console.log(keyword[i] + ' ' + s[j])
                poin -= 1
                i++
            }else{
                j++
            }
        }
    }
    if(poin == 0){
        return 'YES'
    }else{
        return 'NO'
    }
}

console.log(nyamainKata("hhhhhaaaaccccckkkkeeeeerrrrraaaaannnnnkkkkkk"))