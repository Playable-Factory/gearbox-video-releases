mergeInto(LibraryManager.library, {
    GetQueryParam: function(paramId) {
        var urlParams = new URLSearchParams(location.search);
        var param = urlParams.get(Pointer_stringify(paramId));
        if(param == null) param = "";
        
        var bufferSize = lengthBytesUTF8(param) + 1;
        var buffer = _malloc(bufferSize);
        stringToUTF8(param, buffer, bufferSize);
        return buffer;
    },
    
    
    Start: function() {
        window.__start();
    },
    
    OnGameStart: function() {
        window.__onGameStart();
    },
    
    Update: function(level) {
        window.__update(level);
    },
    
    Output: function(value) {
	console.log(Pointer_stringify(value));
    },

    PutReplay: function(input) {
        var urlParams = new URLSearchParams(location.search);
        var record = urlParams.get("record");
        var token = urlParams.get("token");
        var _input = Pointer_stringify(inpust);

        var params = JSON.parse(_input);
        params.record = record;

        fetch('http://localhost:5000/api/call', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
               
          },
          body: JSON.stringify({
            action: "putReplay",
            token: token,
            params: params
          })
        }).then(function(){ parent.postMessage("game-saved", "*"); });
        
    },

    GetReplay: function() {
        var states = window._states;


        var bufferSize = lengthBytesUTF8(states) + 1;
        var buffer = _malloc(bufferSize);
        stringToUTF8(states, buffer, bufferSize);
        return buffer;
    }
});
