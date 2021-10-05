$(document).ready( function()
 {
    // Inicializar la base de datos
    var config = {
        apiKey: "AIzaSyCnNjZuL6XJoA4Ed9yXOn26cdEhrJyXxnQ",
        authDomain: "dotronicdemo-4598f.firebaseapp.com",
        databaseURL: "https://dotronicdemo-4598f-default-rtdb.firebaseio.com",
        projectId: "dotronicdemo-4598f",
        storageBucket: "dotronicdemo-4598f.appspot.com",
        messagingSenderId: "224565645635"
    };
    firebase.initializeApp(config);

    var database = firebase.database();
    var referencia=database.ref("home");

    var value = false;
    var value2 = false;
    var value3 = false;
    var value4 = false;
    var value5 = false;
    var value6 = false;

    referencia.on("value", function(snapshot) {
        var estado1 = (snapshot.val().luces.luz_sala);
        var estado2 = (snapshot.val().luces.luz_sala2);
        var estado3 = (snapshot.val().luces.luz_sala3);
        var estado4 = (snapshot.val().luces.luz_sala_estar);
        var estado5 = (snapshot.val().luces.luz_sala_estar2);
        var estado6 = (snapshot.val().luces.luz_sala_estar3);

        value = estado1;
        value2 = estado2;
        value3 = estado3;
        value4 = estado4;
        value5 = estado5;
        value6 = estado6;

        console.log(estado1);
        console.log(estado2);
        console.log(estado3);
        console.log(estado4);
        console.log(estado5);
        console.log(estado6);
        

        if (estado1) {
            // algo si es true
             document.getElementById('luz1').checked = true;
          }else{
            // algo si es false
            document.getElementById('luz1').checked = false;
        }

        if (estado2) {
            document.getElementById('luz2').checked = true;
        }else{
            document.getElementById('luz2').checked = false;
        }

        if (estado3) {
            document.getElementById('luz3').checked = true;
        }else{
            document.getElementById('luz3').checked = false;
        }
        if (estado4) {
            document.getElementById('luz1SalaDeEstar').checked = true;
        }else{
            document.getElementById('luz1SalaDeEstar').cheked = false;
        }
        if (estado5) {
            document.getElementById('luz2SalaDeEstar').cheked = true;
        }else{
            document.getElementById('luz2SalaDeEstar').cheked = false;
        }
        if (estado6) {
            document.getElementById('luz3SalaDeEstar').cheked = true;
        }else {
            document.getElementById('luz3SalaDeEstar').cheked = false;
        }

    });

    var nombre = 'luces';
    
    $("#luz1").click(function(){
        value=!value;
        articulo = value;
        referencia.child(nombre).set({
        luz_sala: articulo,
        luz_sala2: value2,
        luz_sala3: value3,
        luz_sala_estar: value4,
        luz_sala_estar2: value5,
        luz_sala_estar3:value6
        });
    });

    var nombre = 'luces';
    
    $("#luz2").click(function(){
        value2=!value2;
        articulo = value2;  
        referencia.child(nombre).set({
        luz_sala2: articulo,
        luz_sala: value,
        luz_sala3: value3,
        luz_sala_estar: value4,
        luz_sala_estar2: value5,
        luz_sala_estar3:value6
        });
    });

    var nombre = 'luces';

    $("#luz3").click(function(){
        value3=!value3;
        articulo = value3;  
        referencia.child(nombre).set({
        luz_sala2: value2,
        luz_sala: value,
        luz_sala3: articulo,
        luz_sala_estar: value4,
        luz_sala_estar2: value5,
        luz_sala_estar3:value6
        });
    });

    var nombre = 'luces';
    $('#luz1SalaDeEstar').click(function(){
        value4=!value4;
        articulo = value4;
        referencia.child(nombre).set({
            luz_sala: value,
            luz_sala2: value2,
            luz_sala3: value3,
            luz_sala_estar: articulo,
            luz_sala_estar2: value5,
            luz_sala_estar3:value6
        });
    });


    var nombre = 'luces';
    $('#luz2SalaDeEstar').click(function(){
        value5=!value5;
        articulo = value5;
        referencia.child(nombre).set({
            luz_sala: value,
            luz_sala2: value2,
            luz_sala3: value3,
            luz_sala_estar: value4,
            luz_sala_estar2: articulo,
            luz_sala_estar3:value6
        });
    });

    var nombre = 'luces';
    $('#luz3SalaDeEstar').click(function(){
        value6=!value6;
        articulo = value6;
        referencia.child(nombre).set({
            luz_sala: value,
            luz_sala2: value2,
            luz_sala3: value3,
            luz_sala_estar: value4,
            luz_sala_estar2: value5,
            luz_sala_estar3: articulo
        });
    });

});

















