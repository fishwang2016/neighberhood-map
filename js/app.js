function ModelView(){

            var self = this;


            self.filter = ko.observable()
            self.list_filter= ko.observable();

            self.locations = ko.observableArray([{placeName:"Center"},{placeName:"Timsa"},{placeName:"Mongko"},{placeName:"Shatian"}]);
            console.log(self.locations());
            self.me = ko.observable();

            self.filter = function(data){
            	console.log(data.me());

            }

          }

ko.applyBindings(new ModelView());


 // input change -> filter  on slected -> marker change