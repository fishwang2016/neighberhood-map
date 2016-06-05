function ModelView(){

            var self = this;


            self.list_filter= ko.observable();
            self.textReceived = ko.observable();
            self.locations = ko.observableArray([{placeName:"Center",show:ko.observable(true)},
            	 {placeName:"Timsa",show:ko.observable(false)},{placeName:"Mongko",show:ko.observable(true)},
            	 {placeName:"Shatian", show:ko.observable(false)}]);

            self.filter = function(data){

            	console.log(data.textReceived());
            	var pattern = data.textReceived();
            	re = new  RegExp( pattern ,"i") ;
            	self.locations().forEach(function(location){

            		location.show(ko.observable(true));// not  location.show = ko.observable(true)

            		});
            	console.log(self.locations());
            	};

            }

          

ko.applyBindings(new ModelView());


 // input change -> filter  on slected -> marker change