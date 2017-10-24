/* FRONTEND */
//Page chargée
$(document).ready(function() {
    let program = new Program(null)
    
    //Active les tooltips
    $('body').tooltip({
        selector: '.location'
    });

    //Clique sur le lieu
    $('.location').click(function() {
        var myLatlng = {lat: program.city.latitude, lng: program.city.longitude}

        var map = new WeatherMap(document.getElementById('map'), {
            zoom: 8,
            center: myLatlng
        });

        //Clique sur la map
        google.maps.event.addListener(map, 'click', function(data){
            console.log(data);
        });

        program.ShowMap();
    });

});