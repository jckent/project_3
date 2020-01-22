var axios = require('axios');
var mongoose = require('mongoose');
var db = mongoose.connection;

mongoose.connect('mongodb://localhost:27017/providerdb', {useNewUrlParser: true}), function (err){
 
   if (err) throw err;

   console.log('Successfully connected');
 
};

axios.get(providerdb)
  .then(function (response) {
    onSuccess(response)
  })
  .catch(function (error) {
    console.log(error);
  });
  var providerSchema = mongoose.Schema({
    name: String,
    specialty: String,
    url: String,
    address: String,
    insurances: String,
    phone: Number,
    newPatient: true
});
var Data = mongoose.model('Data', providerSchema);

function onSuccess(response) {
    var array = response;
  //  var arraytobe = response;
  var arrayLength = Object.keys(array).length 
    console.log(arrayLength)
   for(var i = 0; i <= arrayLength; i++) {
      var name = array.data[i].name;
      var spec = array.data[i].specialty;
      var url = array.data[i].html_url;
      var add = array.data[i].address;
      var ins = array.data[i].insurances;
      var phone = array.data[i].phone;
      var newPatient = array.data[i].new;
      console.log( name + " " + desc + " " + url);

      assignDataValue(name, desc, url)

    }
}

function assignDataValue(name, spec, url, add, ins, phone, newPatient) {

   var upData = new Data()
      upData.name = name;
      upData.specialty = spec;
      upData.url = url;
      upData.add = add;
      upData.ins = ins;
      upData.phone = phone;
      upData.newPatient = newPatient;

      upData.save();
}