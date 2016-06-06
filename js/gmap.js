    function initMap() {
          //var addressList = $.map($(".list-text"),function(element){return $(element).text()});

        //  console.log("addressList:");

         // console.log( addressList);
          //var Central = {lat: 22.2800, lng: 114.1588};
           var map = new google.maps.Map(document.getElementById('map'), {
      
             zoom: 14,
          });    
         
          geocodeAddress(map) ;
        
        }

         
// modified from sample code on https://google-developers.appspot.com/maps/documentation/javascript/examples/geocoding-simple    
function geocodeAddress(resultMap) {


        var geoList =[

         {"Central, Hong Kong":{ lat:22.2799907,lng:114.15879829999994}},
         {"The University of Hong Kong":{ "lat":22.2840507,"lng":114.13783910000006}},
         {"International Finance Center":{ "lat":22.285,"lng":114.15916700000002}},
         {"Lan Kwai Fong":{ "lat":22.2808027,"lng":114.15573599999993}},
         {"HIGH WEST":{ "lat":22.264364,"lng":114.13536099999999}},
         {"Sun Yat Sen Memorial Park":{ "lat":22.2902917,"lng":114.14430830000003}},
         {"WAN CHAI":{ "lat":22.276022,"lng":114.1751471}},
         {"Lung Fu SHAN":{ "lat":22.2793113,"lng":114.13650370000005}}

         ]
         
        
       // var geocoder = new google.maps.Geocoder();
         
           

        var addressList =  $.map($(".list-wrap:visible"),function(element){return $(element).text().trim()});
            console.log(addressList)
            
       
        addressList.forEach(function(address){

                 // geocoder.geocode({'address': address}, function(results, status) {

                 //          console.log('{"'+address +'":{ "lat":'+results[0].geometry.location.lat()+',"lng":'+results[0].geometry.location.lng()+'}}');
                         
                geoList.forEach(function(geo){

                         console.log(geo.hasOwnProperty(address));

                         if (geo.hasOwnProperty(address)) {
                                     
                                       console.log(geo[address].lat);
                                       console.log(geo[address].lng);
                                        // resultMap.setCenter(results[0].geometry.location);
                                        var marker = new google.maps.Marker({
                                          map: resultMap,
                                          position: {lat: geo[address].lat, lng:geo[address].lng  },
                                          title:address
                                        });

                                      var infowindow = new google.maps.InfoWindow({
                                        //content: contentString
                                      });

                                       marker.addListener('click', function() {
                                        infowindow.open(map, marker);
                                      });

                           // continue;

                          } else {
                           // alert('No geo result found');

                           }

                          

                    })// forEach geoList


                       
                 });

      // }

      // )

  
}
 
