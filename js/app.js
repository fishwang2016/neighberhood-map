 function ModelView(){

 	var self = this;

 	self.filter = ko.observable()
 	self.list_filter= ko.observable();

 	self.location = ko.observableArray([]);


 }


 // input change -> filter  on slected -> marker change