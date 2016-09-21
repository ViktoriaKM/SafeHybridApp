var Bridge = {};

Bridge.login = function(state){

     //build json string

     var message = {method:"login", state:state}

     prompt("bridge_key", JSON.stringify(message));

}


Bridge.callBack = function(result){

     if(result.success){

          alert("login success");

     }

}


function login(){

        Bridge.login(0);

        //simulate some login operations (link to different html-page eg. with window.open("url"))
        window.open("watchlist.html");

        window.setTimeout(

                function(){

            Bridge.login(1);}, 3000);

    }