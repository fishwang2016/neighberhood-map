/*
* This file initialize the map ,markers and marker filter
* 
*
*/
var markers; // initialize a global markers array to store markers for future use in function
var blue_icon_url ="gmarkers/blue_MarkerO.png"
var red_icon_url= "gmarkers/red_MarkerO.png"

/* initialize map*/
function initMap(){

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

        markers =[];

        geoList.forEach(function(geo){

            for (var key in geo){

                  var marker = new google.maps.Marker({
                         map: map,
                         title: key,
                         icon: red_icon_url,

                         position: {lat: geo[key].lat, lng:geo[key].lng  }
                                        });
                   markers.push({marker});

            }
        });
         
}
/*Marker filter*/

function markerFilter(){

   var addressList =  $.map($(".list-wrap:visible"),function(element){return $(element).text().trim()});
  
   for (var i =0 ;i < markers.length; i++){
        //console.log(markers[i].marker.title);
        console.log(markers[i].marker.icon);
       if($.inArray(markers[i].marker.title, addressList) !== -1){
          markers[i].marker.setVisible(true);
          //markers[i].marker.icon = blue_icon_url;
       }else{     
          markers[i].marker.setVisible(false);
       }

   };

   }

  /*Mouse Over Marker change colors*/ 
  $(".list-wrap").mouseover(function(){ 
     
      var itemText = ($(this).text().trim());// get content from selected element
      for (var i =0 ;i < markers.length; i++){

           if(markers[i].marker.title===itemText) {
             
              markers[i].marker.setVisible(false);

              markers[i].marker.icon = blue_icon_url;

              markers[i].marker.setVisible(true);
           }
       }

    })

/*Mouse Out*/
 $(".list-wrap").mouseout(function(){ 
 
      var itemText = ($(this).text().trim());// get content from selected element 
       
      for (var i =0 ;i < markers.length; i++){

          if(markers[i].marker.title===itemText) {
             
              markers[i].marker.setVisible(false);

              markers[i].marker.icon = red_icon_url;

              markers[i].marker.setVisible(true);

              }
            }

 });







 
