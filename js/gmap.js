    function initMap() {
          //var addressList = $.map($(".list-text"),function(element){return $(element).text()});

        //  console.log("addressList:");

         // console.log( addressList);
          var Central = {lat: 22.2800, lng: 114.1588};
          var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 14,
            center: Central
          });    
         
        
            var geocoder = new google.maps.Geocoder();
            geocodeAddress(geocoder, map);
        }
         
// modified from sample code on https://google-developers.appspot.com/maps/documentation/javascript/examples/geocoding-simple    
function geocodeAddress(geocoder, resultsMap) {

        var addressList =  $.map($(".list-wrap:visible"),function(element){return $(element).text().trim()});
        console.log(addressList);

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
 