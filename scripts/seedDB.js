const mongoose = require("mongoose");
const db = require("../models");

// This file empties the providers collection and inserts the providers below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/providerdb"
);

const providerSeed = [
  {
    name: 'Joe Smith',
    specialty: 'General Psychiatry',
    url:'joehelpsyourmind.net',
    address: '5855 Bremo Rd, Apt 203 Henrico, VA 23226',
    insurance: 'Athem, Aetna, VA Premier, Medicare',
    phone: 8043356671,
    newPatient: true,
    date: new Date(Date.now())
  },
  {
    name: 'Shelby Jacobs',
    specialty: 'Family and Child Services',
    url:'sjacobs.com',
    address: '10200 Patterson Ave, Henrico, VA 23226',
    insurance: 'Athem, Aetna, Optima, VA Premier, Medicare',
    phone: 8041923344,
    newPatient: true,
    date: new Date(Date.now())
  },
  {
    name: 'Tanya Taylor',
    specialty: 'General Psychiatry',
    url:'tanyaishelpful.co.uk',
    address: '7933 Hull Street Rd, Midlothian, VA 23235',
    insurance: 'Athem, Aetna, VA Premier, Medicare',
    phone: 8045838554,
    newPatient: true,
    date: new Date(Date.now())
  },
  {
    name: 'Jonny Bordeaux',
    specialty: 'General Psychiatry',
    url:'commonwealthpsych.med',
    address: '1122 Libbie Ave, Henrico, VA 23226',
    insurance: 'Athem, Aetna, VA Premier, Medicare',
    phone: 8049876543,
    newPatient: true,
    date: new Date(Date.now())
  },
  {
    name: 'Bryce Sprongstone',
    specialty: 'Child Psychology',
    url:'someshrinksinrichmond.com',
    address: '8320 Meadowbridge Rd, Mechanicsville, VA 23112',
    insurance: 'Athem, Aetna, Optima, Tricare, VA Premier, Medicare',
    phone: 8048017366,
    newPatient: true,
    date: new Date(Date.now())
  },
  {
    name: 'Jacqueline Brown',
    specialty: 'Womens Psychiatry',
    url:'jackiepsych.com',
    address: '6777 Midlothian Tpke Richmond, VA 23225',
    insurance: 'Athem, Aetna, Magellan, VA Premier, Medicare, Medicaid',
    phone: 80448375644,
    newPatient: true,
    date: new Date(Date.now())
  },
  {
    name: 'Kate Miller',
    specialty: 'General Psychiatry',
    url:'everythingdoesntsuck.co',
    address: '1500 N 28th St Richmond, VA 23223',
    insurance: 'Athem, Aetna, VA Premier, Medicare, Medicaid',
    phone: 8043567343,
    newPatient: true,
    date: new Date(Date.now())
  },
  {
    name: 'Sandra Austin',
    specialty: 'General Psychiatry',
    url:'southsidehelp.com',
    address: '3201 E Southside Plz Richmond, VA 23224',
    insurance: 'Athem, Aetna, VA Premier, Medicare',
    phone: 8045463102,
    newPatient: true,
    date: new Date(Date.now())
  }
  
];

db.Provider
  .remove({})
  .then(() => db.Provider.collection.insertMany(providerSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
