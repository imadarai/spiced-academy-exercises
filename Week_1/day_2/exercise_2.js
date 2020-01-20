var a = {
    Berlin: 'Germany',
    Paris: 'France',
    'New York': 'USA'
};

var b = {};

for (var city in a){

    var country = a[city];

    b[country] = city;
}

console.log(b);
