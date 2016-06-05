function ModelView(){

            var self = this;
            console.log("init");

            self.filter = ko.observable()
            self.list_filter= ko.observable();

            self.locations = ko.observableArray([{placeName:"Center"},{placeName:"Timsa"},{placeName:"Mongko"},{placeName:"Shatian"}]);
            console.log(self.locations);

          }

ko.applyBindings(new ModelView());


 // input change -> filter  on slected -> marker change