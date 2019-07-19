// 바이트 수 얻기
function getBytes(el) {
    var bytes = 0;
    for (var idx = 0; idx < el.val().length; idx++) {
        var oneChar = escape(el.val().charAt(idx));
        if ( oneChar.length == 1 ) {
            bytes ++;
        } else if (oneChar.indexOf("%u") != -1) {
            bytes += 2;
        } else if (oneChar.indexOf("%") != -1) {
            bytes ++;
        }
    }
    return bytes;
}

// 바이트 수로 문자열 자르기
function cutByLen(str, maxByte) {
    for(b=i=0;c=str.charCodeAt(i);) {
        b+=c>>7?2:1;
        if (b > maxByte)
            break;
        i++;
    
    }
    return str.substring(0,i);
}