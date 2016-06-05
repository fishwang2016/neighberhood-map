function ModelView(){

            var self = this;


            self.list_filter= ko.observable();
            self.textReceived = ko.observable();
            self.locations = ko.observableArray([{placeName:"Center",display:ko.observable(true)},
            	 {placeName:"Timsa",display:ko.observable(true)},{placeName:"Mongko",display:ko.observable(true)},
            	 {placeName:"Shatian", display:ko.observable(false)}]);

            self.filter = function(data){

            	console.log(data.textReceived());
            	var pattern = data.textReceived();
            	re = new  RegExp( pattern ,"i") ;
            	self.locations().forEach(function(location){

            		if (location.placeName.match(re)){
            			console.log(re);
            			console.log(location);
            		    return false;
            		}
            	});

            }

          }

ko.applyBindings(new ModelView());


 // input change -> filter  on slected -> marker change