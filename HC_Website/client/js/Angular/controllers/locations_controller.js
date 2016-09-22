happy_cup.controller('locations_controller', function($scope){

	// var current_position;
	// var options = {
 //                enableHighAccuracy: true
 //            };
	// navigator.geolocation.getCurrentPosition(function(pos) {
 //                $scope.position = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
 //                current_position = $scope.position;
 //            }, 
 //            function(error) {                    
 //                alert('Unable to get location: ' + error.message);
 //            }, options);

	// $scope.current_position = current_position;


	var locations = [{
				'name': 'Arbor Lodge',
				'type': 'New Seasons Market',
				'address': '6400 N Interstate Ave. Portland, OR 97217',
				'number': 5034674777,
				'url': 'https://www.newseasonsmarket.com/our-stores/arborlodge/'
			},
			{
				'name': 'Cedar Hills',
				'type': 'New Seasons Market',
				'address': '3495 SW Cedar Hills Blvd. Beaverton, OR 97005',
				'number': 5036414181,
				'url': 'https://www.newseasonsmarket.com/our-stores/cedarhills/'
			},
			{
				'name': 'Concordia',
				'type': 'New Seasons Market',
				'address': '5320 NE 33rd Ave. Portland, OR 97211',
				'number': 5032883838,
				'url': 'https://www.newseasonsmarket.com/our-stores/concordia/'
			},
			{
				'name': 'Fisher\'s Landing',
				'type': 'New Seasons Market',
				'address': '2100B SE 164th Ave. Vancouver, WA 98683',
				'number': 3607605005,
				'url': 'https://www.newseasonsmarket.com/our-stores/fisherslanding/'
			},
			{
				'name': 'Happy Valley',
				'type': 'New Seasons Market',
				'address': '15861 SE Happy Valley, Happy Valley, OR 97086',
				'number': 5035589214,
				'url': 'https://www.newseasonsmarket.com/our-stores/happyvalley/'
			},
			{
				'name': 'Hawthorne',
				'type': 'New Seasons Market',
				'address': '4034 SE Hawthorne Blvd. Portland, OR 97214',
				'number': 5032364800,
				'url': 'https://www.newseasonsmarket.com/our-stores/hawthorne/'
			},
			{
				'name': 'Mountain Park',
				'type': 'New Seasons Market',
				'address': '3 SW Monroe Parkway Lake Oswego, OR 97035',
				'number': 5034961155,
				'url': 'https://www.newseasonsmarket.com/our-stores/mountainpark/'
			},
			{
				'name': 'Orenco Station',
				'type': 'New Seasons Market',
				'address': '1453 NE 61st Ave. Hillsboro, OR 97124',
				'number': 5036486968,
				'url': 'https://www.newseasonsmarket.com/our-stores/orencostation/'
			},
			{
				'name': 'Progress Ridge',
				'type': 'New Seasons Market',
				'address': '14805 SW Barrows Road, Suite 103 Beaverton, OR 97007',
				'number': 5035976777,
				'url': 'https://www.newseasonsmarket.com/our-stores/progressridge/'
			},
			{
				'name': 'Raleigh Hills',
				'type': 'New Seasons Market',
				'address': '7300 SW Beaverton Hillsdale Hwy. Portland, OR 97225',
				'number': 5032926838,
				'url': 'https://www.newseasonsmarket.com/our-stores/raleighhills/'
			},
			{
				'name': 'Sellwood',
				'type': 'New Seasons Market',
				'address': '1214 SE Tacoma St. Portland, OR 97202',
				'number': 5032304949,
				'url': 'https://www.newseasonsmarket.com/our-stores/sellwood/'
			},
			{
				'name': 'Seven Corners',
				'type': 'New Seasons Market',
				'address': '1954 SE Division St. Portland, OR',
				'number': 5034452888,
				'url': 'https://www.newseasonsmarket.com/our-stores/sevencorners/'
			},
			{
				'name': 'Slabtown',
				'type': 'New Seasons Market',
				'address': '2170 NW Raleigh St, Portland, OR 97210',
				'number': 5032247522,
				'url': 'https://www.newseasonsmarket.com/our-stores/slabtown/'
			},
			{
				'name': 'Woodstock',
				'type': 'New Seasons Market',
				'address': '4500 SE Woodstock Blvd, Portland, OR 97206',
				'number': 5037719663,
				'url': 'https://www.newseasonsmarket.com/our-stores/woodstock/'
			},
			{
				'name': 'Laurelhurst',
				'type': 'Whole Foods Market',
				'address': '2825 East Burnside St. Portland, Oregon',
				'number': 5032326601,
				'url': 'http://www.wholefoodsmarket.com/stores/laurelhurst'
			},
			{
				'name': 'Pearl',
				'type': 'Whole Foods Market',
				'address': '1210 NW Couch St Portland, Oregon',
				'number': 5035254343,
				'url': 'http://www.wholefoodsmarket.com/stores/pearl'
			},
			{
				'name': 'Hollywood',
				'type': 'Whole Foods Market',
				'address': '4301 NE Sandy Blvd Portland, Oregon',
				'number': 5032842644,
				'url': 'http://www.wholefoodsmarket.com/stores/sandy'
			},
			{
				'name': 'Fremont',
				'type': 'Whole Foods Market',
				'address': '3535 NE 15th Ave. Portland, Oregon',
				'number': 5032883414,
				'url': 'http://www.wholefoodsmarket.com/stores/fremont'
			},
			{
				'name': 'Bridgeport',
				'type': 'Whole Foods Market',
				'address': '7380 SW Bridgeport Rd. Tigard, Oregon',
				'number': 5036396500,
				'url': 'http://www.wholefoodsmarket.com/stores/tigard'
			},
			{
				'name': 'Mill Plain',
				'type': 'Whole Foods Market',
				'address': '815 Southeast 160th Avenue Vancouver, Washington',
				'number': 3602534082,
				'url': 'http://www.wholefoodsmarket.com/stores/millplain'
			},
			{
				'name': 'Greenway',
				'type': 'Whole Foods Market',
				'address': '12220 SW Scholls Ferry Rd, Tigard, OR 97223',
				'number': 9713717000,
				'url': 'http://www.wholefoodsmarket.com/stores/greenway'
			},
			{
				'name': 'Belmont',
				'type': 'Zupan\'s Markets',
				'address': '3301 SE Belmont Portland, OR 97214',
				'number': 5032393720,
				'url': 'http://www.zupans.com/locations/store.php?l=belmont'
			},
			{
				'name': 'Burnside',
				'type': 'Zupan\'s Markets',
				'address': '2340 W Burnside Portland, OR 97210',
				'number': 5034971088,
				'url': 'http://www.zupans.com/locations/store.php?l=burnside'
			},
			{
				'name': 'Lake Grove',
				'type': 'Zupan\'s Markets',
				'address': '16380 Boones Ferry Rd. Lake Oswego, OR 97035',
				'number': 5032104190,
				'url': 'http://www.zupans.com/locations/store.php?l=lake_grove'
			},
			{
				'name': 'Macadam',
				'type': 'Zupan\'s Markets',
				'address': '7221 SW Macadam Ave. Portland, OR 97219',
				'number': 5032445666,
				'url': 'http://www.zupans.com/locations/store.php?l=macadam'
			},
			{
				'name': 'Stadium',
				'type': 'Fred Meyer',
				'address': '100 NW 20th Portland, Oregon 97209',
				'number': 5032732004,
				'url': 'https://www.fredmeyer.com/storeHours?store=70100360'
			},
			{
				'name': 'Hawthorne',
				'type': 'Fred Meyer',
				'address': '3805 SE Hawthorne Portland, Oregon 97214',
				'number': 5038723300,
				'url': 'https://www.fredmeyer.com/storeHours?store=70100135'
			},
			{
				'name': 'Hollywood',
				'type': 'Fred Meyer',
				'address': '3030 NE Weidler Portland, Oregon 97232',
				'number': 5032801300,
				'url': 'https://www.fredmeyer.com/storeHours?store=70100600'
			},
			{
				'name': 'Glisan',
				'type': 'Fred Meyer',
				'address': '6615 NE Glisan St, Portland, OR 97213',
				'number': 5037976940,
				'url': 'https://www.fredmeyer.com/storeHours?store=70100125'
			},
			{
				'name': 'Burlingame',
				'type': 'Fred Meyer',
				'address': '7555 SW Barbur Blvd, Portland, OR 97219',
				'number': 5034523000,
				'url': 'https://www.fredmeyer.com/storeHours?store=70100040'
			},
			{
				'name': 'Raleigh Hills',
				'type': 'Fred Meyer',
				'address': '7700 SW Bvrtn Hillsdale Hwy, Portland, OR 97225',
				'number': 5032920731,
				'url': 'https://www.fredmeyer.com/storeHours?store=70100285'
			},
			{
				'name': 'Otto\'s Sausage Kitchen',
				'type': 'Markets & Co-ops',
				'address': '4138 SE Woodstock Blvd. Portland, OR 97202',
				'number': 5037716714,
				'url': 'http://www.ottossausage.com/'
			},
			{
				'name': 'Portland Fruit & Produce',
				'type': 'Markets & Co-ops',
				'address': '8040 SE Foster Rd. Portland, OR 97005',
				'number': 5037770072,
				'url': 'http://portlandfruitwest.com/pfp/'
			},
			{
				'name': 'Portland Fruit West',
				'type': 'Markets & Co-ops',
				'address': '10205 SW Beaverton Hillsdale Hwy Beaverton, OR 97005',
				'number': 5035743000,
				'url': 'http://portlandfruitwest.com/'
			},
			{
				'name': 'Food Fight!',
				'type': 'Markets & Co-ops',
				'address': '1217 SE Stark Portland, OR 97214',
				'number': 5032333910,
				'url': 'http://www.foodfightgrocery.com/'
			},
			{
				'name': 'Food Front Co-op: Hillsdale',
				'type': 'Markets & Co-ops',
				'address': '6344 SW Capitol Highway, Hillsdale Shopping Center Portland, OR 97239',
				'number': 5035466559,
				'url': 'http://foodfront.coop/'
			},
			{
				'name': 'Food Front Co-op: Northwest',
				'type': 'Markets & Co-ops',
				'address': '2375 NW Thurman St. Portland, OR 97210',
				'number': 5032225658,
				'url': 'http://foodfront.coop/'
			},
			{
				'name': 'Market of Choice: West Linn',
				'type': 'Markets & Co-ops',
				'address': '5639 Hood Street West Linn, OR 97068',
				'number': 5035942901,
				'url': 'http://www.marketofchoice.com/events/venue/west-linn'
			},
			{
				'name': 'Neighbors Market',
				'type': 'Markets & Co-ops',
				'address': '1707 Main Street Vancouver, WA 98660 360.448.6120',
				'number': 3604486120,
				'url': 'http://neighborsmarkets.com/'
			},
			{
				'name': 'Alberta St. Co-op',
				'type': 'Markets & Co-ops',
				'address': '1500 SE Alberta st. Portland, OR 97211',
				'number': 5032874333,
				'url': 'http://alberta.coop/'
			},
			{
				'name': 'Beaumont Market',
				'type': 'Markets & Co-ops',
				'address': '4130 NE Fremont St. Portland, OR 97212',
				'number': 5032843032,
			}, 
			{
				'name': 'Chuck\’s Produce',
				'type': 'Markets & Co-ops',
				'address': '13215 SE Mill Plain Blvd Vancouver, WA 98684',
				'number': 3605972700,
				'url': 'http://chucksproduce.com/'
			},
			{
				'name': 'Happy Cup Coffee Shop',
				'type': 'Other',
				'address': '446 NE Killingsworth Portland, Oregon',
			},
			{
				'name': 'Delta Cafe',
				'type': 'Other',
				'address': '4607 SE Woodstock Portland, Oregon 97206',
				'number': 5037713101,
				'url': 'http://www.deltacafepdx.com/'
			},
			{
				'name': 'C Bar',
				'type': 'Other',
				'address': '2880 SE Gladstone St. Portland, Oregon 97202',
				'number': 5032308808,
				'url': 'http://cbarportland.com/'
			}];
	
	$scope.locations = locations;

});