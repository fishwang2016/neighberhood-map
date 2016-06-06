/*

* This is a Udacity Front End Nano Degree Project
* Author: Zhenyu Wang
* 2016.06.05

*/


function ModelView(){

            var self = this;
            self.list_filter= ko.observable();
            self.textReceived = ko.observable();
            self.locations = ko.observableArray([{placeName:"Central, Hong Kong",show:ko.observable(true)},
            	 {placeName:"The University of Hong Kong",show:ko.observable(true)},
                   {placeName:"Lan Kwai Fong",show:ko.observable(true)},
            	 {placeName:"Sun Yat Sen Memorial Park", show:ko.observable(true)},
                   {placeName:"International Finance Center", show:ko.observable(true)},
                   {placeName:"Victoria Peak", show:ko.observable(true)},
                   {placeName:"HIGH WEST", show:ko.observable(true)},
                   {placeName:"WAN CHAI", show:ko.observable(true)},
                   {placeName:"Lung Fu SHAN", show:ko.observable(true)}

                   ]);

            self.filter = function(data){

            	//console.log(data.textReceived());
            	var pattern = data.textReceived();
            	re = new  RegExp( pattern ,"i") ;
            	self.locations().forEach(function(location){
            		//console.log(location.placeName.match(re)===null);
            		if (location.placeName.match(re)===null){
            			 location.show(false);// not  location.show = ko.observable(true
                          
            		}else{
                              // This is updating instance value.
            			location.show(true);// not  location.show = ko.observable(true)                   
            		}

            		});
            	};

            }



ko.applyBindings(new ModelView());


 // input change -> filter  on slected -> marker change