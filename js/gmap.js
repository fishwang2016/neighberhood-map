var markers;
function initMap(){


  console.log("initizalizing...")

      var myLatLng = { lat:22.2799907,lng:114.15879829999994};

      var map = new google.maps.Map(document.getElementById('map'), {
    
             zoom: 14,
             center: myLatLng

          });    

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

        var addressList =  $.map($(".list-wrap:visible"),function(element){return $(element).text().trim()});
            console.log(addressList);
            console.log($(".list-wrap:visible"));

        markers =[];

        geoList.forEach(function(geo){

            for (var key in geo){

                  var marker = new google.maps.Marker({
                         map: map,
                         position: {lat: geo[key].lat, lng:geo[key].lng  },
                                          title:key
                                        });
                   markers.push({geo:marker});

            }

 
        });
         
}

function markerFilter(){

   console.log("this is filter");

   console.log(markers);
}





 
