    function initMap() {
          var addressList = $.map($(".list-text"),function(element){return $(element).text()});

          console.log("addressList:");

          console.log( addressList);
          var Central = {lat: 22.2800, lng: 114.1588};
          var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 14,
            center: Central
          });

          var contentString = '<div id="content">'+
              '<div id="siteNotice">'+
              '</div>'+
              '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
              '<div id="bodyContent">'+
              '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
              'sandstone rock formation in the southern part of the '+
              'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
              'south west of the nearest large town, Alice Springs; 450&#160;km '+
              '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
              'features of the Uluru - Kata Tjuta National Park. Uluru is '+
              'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
              'Aboriginal people of the area. It has many springs, waterholes, '+
              'rock caves and ancient paintings. Uluru is listed as a World '+
              'Heritage Site.</p>'+
              '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
              'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
              '(last visited June 22, 2009).</p>'+
              '</div>'+
              '</div>';

          var infowindow = new google.maps.InfoWindow({
            content: contentString
          });

          var marker = new google.maps.Marker({
            position: Central,
            map: map,
            title: 'Central (Ayers Rock)'
          });

        
            var geocoder = new google.maps.Geocoder();
            geocodeAddress(geocoder, map,addressList);
        }
         

// modified from sample code on https://google-developers.appspot.com/maps/documentation/javascript/examples/geocoding-simple    
function geocodeAddress(geocoder, resultsMap,addressList) {

        addressList.forEach(function(address){

        geocoder.geocode({'address': address}, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
              map: resultsMap,
              position: results[0].geometry.location,
              title:address
            });

          var infowindow = new google.maps.InfoWindow({
            content: contentString
          });

           marker.addListener('click', function() {
            infowindow.open(map, marker);
          });


    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });



       })

  
}
 