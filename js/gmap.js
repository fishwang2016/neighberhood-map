/*
 * This file initialize the map ,markers and marker filter
 * 
 *
 */
var markers; // initialize a global markers array to store markers for future use in function
var blue_icon_url = "gmarkers/blue_MarkerO.png";
var red_icon_url = "gmarkers/red_MarkerO.png";

"use strict";

/* initialize map*/
function initMap() {

    var myLatLng = {
        lat: 22.2799907,
        lng: 114.15879829999994
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: myLatLng

    });

    var geoList = [

        {
            "Central, Hong Kong": {
                lat: 22.2799907,
                lng: 114.15879829999994
            }
        }, {
            "The University of Hong Kong": {
                "lat": 22.2840507,
                "lng": 114.13783910000006
            }
        }, {
            "International Finance Center": {
                "lat": 22.285,
                "lng": 114.15916700000002
            }
        }, {
            "Lan Kwai Fong": {
                "lat": 22.2808027,
                "lng": 114.15573599999993
            }
        }, {
            "HIGH WEST": {
                "lat": 22.264364,
                "lng": 114.13536099999999
            }
        }, {
            "Sun Yat Sen Memorial Park": {
                "lat": 22.2902917,
                "lng": 114.14430830000003
            }
        }, {
            "WAN CHAI": {
                "lat": 22.276022,
                "lng": 114.1751471
            }
        }, {
            "Lung Fu SHAN": {
                "lat": 22.2793113,
                "lng": 114.13650370000005
            }
        }

    ];


    markers = [];

    var infowindow = new google.maps.InfoWindow({
       content: "Hello , Im info.",
       maxWidth:250
    });


    geoList.forEach(function(geo) {

        for (var key in geo) {

            var marker = new google.maps.Marker({
                map: map,
                title: key,
                icon: red_icon_url,
                animation: google.maps.Animation.DROP,
 
                position: {
                    lat: geo[key].lat,
                    lng: geo[key].lng
                }
            });

            markers.push({marker});

              /* function, Marker bouncing animation*/

            marker.addListener('click', function () {
                bounceAnimation(marker);
            
             });

        } // for in end

    }); // forEach end

    /* list item on click*/


   $(".list-wrap").click(function() {

    var itemText = ($(this).text().trim());
    console.log(itemText);
     // get content from selected element

    //console.log(infowindow.content);// debug
    for (var i = 0; i < markers.length; i++) {

        if (markers[i].marker.title === itemText) {

            bounceAnimation(markers[i].marker)

        } // bounce

    }
});// list item on click

   /*get data*/


   function getData(marker){
    // wikipedia appi example
    console.log("trying to get data ...")

     var url = "https://en.wikipedia.org/w/api.php?action=opensearch&limit=1&format=json";
     
     var c = $.ajax({ 
        data:"search="+marker.title,
        url: url,
        async: false,
        dataType:'jsonp',
        success: function(data){

            console.log("get data!!!")
            console.log(data);
            console.log(typeof data);   
         
            var title = "<h2>"+data[1]+"</h2>";
            var description = "<p>"+data[2]+"</p><br><hr>"
            var link  = '<a href="'+data[3]+'">Source from Wikipedia</a>'
            var content = title+description+link;

            openinfoWindow(marker,content);
              },//success
         error:function(){

             openinfoWindow(marker,"No data available for this place yet,please check later.");
             setTimeout(function(){infowindow.close()},5000);

         }
        });// end of ajax



   }



   function bounceAnimation(marker){
        
            marker.setAnimation(google.maps.Animation.BOUNCE); // google.maps is a global object
            setTimeout(function() {
                    marker.setAnimation(null);
     
                }, 1500);

            getData(marker);

   }

   /*o open infoWindow*/

   function openinfoWindow(marker,content){
     
        console.log(content);

        infowindow.setContent(content);

        infowindow.open(map, marker);
        setTimeout(function(){infowindow.close()},15000);
     

     }


} // intiMap


/*Marker filter*/

function markerFilter() {

    var addressList = $.map($(".list-wrap:visible"), function(element) {
        return $(element).text().trim();
    });

    for (var i = 0; i < markers.length; i++) {
        //console.log(markers[i].marker.title);
        if ($.inArray(markers[i].marker.title, addressList) !== -1) {
            markers[i].marker.setVisible(true);
            //markers[i].marker.icon = blue_icon_url;
        } else {
            markers[i].marker.setVisible(false);
        }

    }

}

/*Mouse Over Marker change colors*/
$(".list-wrap").mouseover(function() {

    var itemText = ($(this).text().trim()); // get content from selected element
    for (var i = 0; i < markers.length; i++) {

        if (markers[i].marker.title === itemText) {

              changeMarker(markers[i].marker, blue_icon_url);
        }
    }

});

/*List items on Mouse Out*/
$(".list-wrap").mouseout(function() {

    var itemText = ($(this).text().trim()); // get content from selected element 

    for (var i = 0; i < markers.length; i++) {

        if (markers[i].marker.title === itemText) {
            changeMarker(markers[i].marker, red_icon_url);
           
        }
    }
});

/* change marker style*/

 function changeMarker(marker, url){

         marker.setVisible(false);

         marker.icon = url;

         marker.setVisible(true);

 }

