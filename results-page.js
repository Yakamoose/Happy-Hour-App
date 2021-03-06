const YELP_URL = "https://api.yelp.com/v3/businesses/";
const YELP_API_KEY = "IubXj0FpEeTn8_hgYoR2TJsFvrfFC_bj3wsetjKzdRsVQtfTH6Fx8koPxn1MOWP7qhcTwuwtqeg2NqIAaE12YvRSFi8KUM5icnb7rBQpN_Snsonrlo_Cu7nIz9t4WnYx";

      function initMap() {


        //assign json destinations object to this file

/*        var destination = [];
        $.getJSON('destinations.json')
          .done(function(data) {
            destination = data;
            console.log(destination);
            console.log('testing in get json');
          })


  const destination = require('./destinations');
  console.log('here comes destination');
  console.log(destination);
*/



      var destinations = [
        {
        name: 'Brick + Mortar',
        address: '2435 Main St., Santa Monica, CA 90405',
        type: 'American',
        happyHours: [{
          day: [1,2, 3, 4, 5],
          hhStart: 12,
          hhEnd: 18,
          deals: 'Drinks & Food',
        }],
        deals: '',
        hhEnd: '',
        distance: '',
        driveTime: '',
        phone: '',
        rating: '',
        image: '',
        yelpId: 'brick-mortar-santa-monica',
        hhMenuLink: 'http://www.brickandmortar-brg.com/happyhour',
        },

        {
        name: 'Enterprise Fish Co.',
        address: '174 Kinney St, Santa Monica, CA 90405',
        type: 'Seafood',
        happyHours: [{
          day: [1,2, 3, 4, 5],
          hhStart: 16,
          hhEnd: 19,
          deals: 'Drinks & Food',
        },
        {
          day: [5, 6],
          hhStart: 21,
          hhEnd: 23,
          deals: 'Drinks & Food',
        }],
        deals: '',
        hhEnd: '',
        distance: '',
        driveTime: '',
        phone: '',
        rating: '',
        image: '',
        yelpId: 'enterprise-fish-santa-monica',
        hhMenuLink: 'https://www.enterprisefishcosantamonica.com/happy-hour',
        },

        {
        name: 'Hama Sushi',
        address: '213 Windward Ave, Venice, CA 90291',
        type: 'Sushi',
        happyHours: [{
          day: [0, 1, 2, 3, 4, 5, 6],
          hhStart: 16,
          hhEnd: 19,
          deals: 'Drinks & Food',
        }],
        deals: '',
        hhEnd: '',
        distance: '',
        driveTime: '',
        phone: '',
        rating: '',
        image: '',
        yelpId: 'hama-sushi-venice',
        hhMenuLink: 'http://www.theveniceconcierge.com/wp-content/uploads/2015/02/Screen-Shot-2015-02-28-at-5.26.05-PM.png',
        },

        {
        name: 'Hayden',
        address: '8820 Washington Blvd, Culver City, CA 90232',
        type: 'Cafe, Wine Bar, Waffles',
        happyHours: [{
          day: [0, 1, 2, 3, 4, 5, 6],
          hhStart: 17,
          hhEnd: 19,
          deals: 'Drinks & Food',
        }],
        deals: '',
        hhEnd: '',
        distance: '',
        driveTime: '',
        phone: '',
        rating: '',
        image: '',
        yelpId: 'hayden-culver-city',
        hhMenuLink: 'https://www.hayden.la/',
        },

        {
        name: 'Little Ruby',
        address: '109 Santa Monica Blvd, Santa Monica, CA 90401',
        type: 'Australian, Burgers',
        happyHours: [{
          day: [1, 2, 3, 4, 5],
          hhStart: 16,
          hhEnd: 18.5,
          deals: 'Drinks & Food',
        }],
        deals: '',
        hhEnd: '',
        distance: '',
        driveTime: '',
        phone: '',
        rating: '',
        image: '',
        yelpId: 'little-ruby-santa-monica-2',
        hhMenuLink: 'https://patch.com/california/santamonica/new-happy-hour-launches-little-ruby-santa-monica',
        },


        {
        name: 'The Lobster',
        address: '1602 Ocean Ave, Santa Monica, CA 90401',
        type: 'Seafood',
        happyHours: [{
          day: [1, 2, 3, 4, 5],
          hhStart: 16.5,
          hhEnd: 18.5,
          deals: 'Drinks & Food',
        }],
        deals: '',
        hhEnd: '',
        distance: '',
        driveTime: '',
        phone: '',
        rating: '',
        image: '',
        yelpId: 'the-lobster-santa-monica',
        hhMenuLink: 'http://thelobster.com/happy-hour-menu/',
        },

        {
        name: 'Lunetta All Day',
        address: '2420 Pico Blvd, Santa Monica, CA 90405',
        type: 'American',
        happyHours: [{
          day: [1, 2, 3, 4, 5],
          hhStart: 16,
          hhEnd: 18,
          deals: 'Drinks & Food',
        }],
        deals: '',
        hhEnd: '',
        distance: '',
        driveTime: '',
        phone: '',
        rating: '',
        image: '',
        yelpId: 'lunetta-all-day-santa-monica',
        hhMenuLink: 'https://www.lunettasm.com/all-day#allday-menu',
        },


        {
        name: 'Michaels',
        address: '1147 3rd St, Santa Monica, CA 90403',
        type: 'American, Bar',
        happyHours: [{
          day: [1, 2, 3, 4, 5, 6],
          hhStart: 17,
          hhEnd: 22.5,
          deals: 'Drinks & Food',
        }],
        deals: '',
        hhEnd: '',
        distance: '',
        driveTime: '',
        phone: '',
        rating: '',
        image: '',
        yelpId: 'michaels-santa-monica-2',
        hhMenuLink: 'http://www.michaelssantamonica.com/',
        },

        {
        name: 'Sushi Roku',
        address: '1401 Ocean Ave, Santa Monica, CA 90401',
        type: 'Sushi',
        happyHours: [{
          day: [1, 2, 3, 4, 5, 6],
          hhStart: 17,
          hhEnd: 18.5,
          deals: 'Drinks & Food',
        }],
        deals: '',
        hhEnd: '',
        distance: '',
        driveTime: '',
        phone: '',
        rating: '',
        image: '',
        yelpId: 'sushi-roku-santa-monica',
        hhMenuLink: 'http://www.innovativedining.com/download/SRSM_bar-menu-HH_11.20.17.pdf',
        },

        {
        name: 'Tallulas',
        address: '118 Entrada Dr, Santa Monica, CA 90402',
        type: 'Mexican',
        happyHours: [{
          day: [1, 2, 3, 4, 5],
          hhStart: 16,
          hhEnd: 18,
          deals: 'Drinks & Food',
        }],
        deals: '',
        hhEnd: '',
        distance: '',
        driveTime: '',
        phone: '',
        rating: '',
        image: '',
        yelpId: 'tallulas-santa-monica',
        hhMenuLink: 'http://www.tallulasrestaurant.com/wp-content/uploads/2018/01/Happy-Hour-1.25.18.pdf',
        },

        {
        name: 'Canal Club',
        address: '2025 Pacific Ave, Venice, CA 90291',
        type: 'Sushi',
        happyHours: [{
          day: [0, 1, 2, 3, 4, 5, 6],
          hhStart: 17,
          hhEnd: 19,
          deals: 'Drinks & Food',
        }],
        deals: '',
        hhEnd: '',
        distance: '',
        driveTime: '',
        phone: '',
        rating: '',
        image: '',
        yelpId: 'canal-club-venice-2',
        hhMenuLink: 'http://www.canalclubvenice.com/new-page/',
        },

        {
        name: 'Venice Whaler',
        address: '10 Washington Blvd, Venice, CA 90292',
        type: 'American',
        happyHours: [{
          day: [1, 2, 3, 4],
          hhStart: 15,
          hhEnd: 18,
          deals: 'Drinks & Food',
        },
        {
          day: [1, 2, 3, 4],
          hhStart: 22,
          hhEnd: 24,
          deals: 'Drinks & Food',
        }],
        deals: '',
        hhEnd: '',
        distance: '',
        driveTime: '',
        phone: '',
        rating: '',
        image: '',
        yelpId: 'the-venice-whaler-venice',
        hhMenuLink: 'https://www.venicewhaler.com/happy-hour',
        },

        {
        name: 'Sunny Spot',
        address: '822 Washington Blvd, Venice, CA 90292',
        type: 'American',
        happyHours: [{
          day: [1, 2, 3, 4, 5],
          hhStart: 15.5,
          hhEnd: 18.5,
          deals: 'Drinks & Food',
        },
        {
          day: [5, 6],
          hhStart: 23,
          hhEnd: 24,
          deals: 'Drinks & Food',
        }],
        deals: '',
        hhEnd: '',
        distance: '',
        driveTime: '',
        phone: '',
        rating: '',
        image: '',
        yelpId: 'sunny-spot-venice-2',
        hhMenuLink: 'http://www.sunnyspotvenice.com/menus/',
        },

        {
        name: 'Wabi Sabi',
        address: '1635 Abbot Kinney Blvd, Venice, CA 90291',
        type: 'Sushi',
        happyHours: [{
          day: [0, 1, 2, 3, 4, 5, 6],
          hhStart: 17.5,
          hhEnd: 18.5,
          deals: 'Drinks & Food',
        }],
        deals: '',
        hhEnd: '',
        distance: '',
        driveTime: '',
        phone: '',
        rating: '',
        image: '',
        yelpId: 'wabi-sabi-sushi-and-solana-venice',
        hhMenuLink: '',
        },

        {
        name: 'Baja Cantina',
        address: '311 Washington Blvd, Marina Del Rey, CA 90292',
        type: 'Mexican',
        happyHours: [{
          day: [1, 2, 3, 4, 5],
          hhStart: 15,
          hhEnd: 18.5,
          deals: 'Drinks & Food',
        },
        {
          day: [1, 2, 3, 4, 5],
          hhStart: 22,
          hhEnd: 24,
          deals: 'Drinks & Food',
        }],
        deals: '',
        hhEnd: '',
        distance: '',
        driveTime: '',
        phone: '',
        rating: '',
        image: '',
        yelpId: 'baja-cantina-marina-del-rey',
        hhMenuLink: 'http://www.bajacantina.com/weekly-food-specials/',
        },

        {
        name: 'Venice Beach Wines',
        address: '529 Rose Ave, Venice, CA 90291',
        type: 'Wine Bar',
        happyHours: [{
          day: [1, 2, 3, 4, 5],
          hhStart: 15,
          hhEnd: 18,
          deals: 'Drinks & Food',
        }],
        deals: '',
        hhEnd: '',
        distance: '',
        driveTime: '',
        phone: '',
        rating: '',
        image: '',
        yelpId: 'venice-beach-wines-venice',
        hhMenuLink: 'http://venicebeachwines.com/dinner-menu-1/',
        },

        {
        name: 'The Firehouse',
        address: '213 Rose Ave, Venice, CA 90291',
        type: 'American',
        happyHours: [{
          day: [1, 2, 3, 4, 5],
          hhStart: 15,
          hhEnd: 18,
          deals: 'Drinks & Food',
        }],
        deals: '',
        hhEnd: '',
        distance: '',
        driveTime: '',
        phone: '',
        rating: '',
        image: '',
        yelpId: 'the-firehouse-venice',
        hhMenuLink: 'https://www.firehouseoldsac.com/menus/happy-hour/',
        },

        {
        name: 'The Anchor',
        address: '235 Main St, Venice, CA 90291',
        type: 'American/Seafood',
        happyHours: [{
          day: [2, 3, 4, 5],
          hhStart: 15,
          hhEnd: 18,
          deals: 'Drinks & Food',
        }],
        deals: '',
        hhEnd: '',
        distance: '',
        driveTime: '',
        phone: '',
        rating: '',
        image: '',
        yelpId: 'the-anchor-venice',
        hhMenuLink: 'http://theanchorvenice.squarespace.com/happy-hour-menu-fall-2015/',
        }];





        var bounds = new google.maps.LatLngBounds;
        var markersArray = [];

        var lat = localStorage.getItem('lat');
        var long = localStorage.getItem('long');
        var userAddress = localStorage.getItem('address');

        if(lat === null) {
          var origin = userAddress;
        }
        else {
          var origin = lat +','+ long;
        }

        var locations = [];
        for (let i = 0; i < destinations.length; i++) {
          locations.push(destinations[i].address);
        }



        var destinationIcon = 'https://chart.googleapis.com/chart?' +
            'chst=d_map_pin_letter&chld=D|FF0000|000000';
        var originIcon = 'https://chart.googleapis.com/chart?' +
            'chst=d_map_pin_letter&chld=O|FFFF00|000000';
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 34.0448583, lng: -118.4484367},
          zoom: 10
        });
        var geocoder = new google.maps.Geocoder;

        var service = new google.maps.DistanceMatrixService;
        service.getDistanceMatrix({
          origins: [origin],
          destinations: locations,
          travelMode: 'DRIVING',
          drivingOptions: {
            departureTime: new Date(Date.now() + 2000),
            trafficModel: 'bestguess',
          },
          unitSystem: google.maps.UnitSystem.IMPERIAL,
          avoidHighways: false,
          avoidTolls: false
        }, function(response, status) {
          if (status !== 'OK') {
            alert('Error was: ' + status);
          }

					else {
            var originList = response.originAddresses;
            var destinationList = response.destinationAddresses;


            var outputDiv = document.getElementById('output');
            outputDiv.innerHTML = '';
            deleteMarkers(markersArray);

            var showGeocodedAddressOnMap = function(asDestination) {
              var icon = asDestination ? destinationIcon : originIcon;
              return function(results, status) {
                //console.log(status);
                if (status === 'OK') {
                  //console.log('result location');
                  //console.log(results[0].geometry.location);
                  map.fitBounds(bounds.extend(results[0].geometry.location));
                  markersArray.push(new google.maps.Marker({
                    map: map,
                    position: results[0].geometry.location,
                    icon: icon
                  //  title:
                  }));
                } else {
                  alert('Geocode was not successful due to: ' + status);
                }
              };
            };

            var results = response.rows[0].elements;
            //Add Origin/userLocation to the map
            geocoder.geocode({'address': originList[0]},
              showGeocodedAddressOnMap(false));
              outputDiv.innerHTML += originList[0] + '<br>';

          }

              for (var j = 0; j < results.length; j++) {
                destinations[j].distance = results[j].distance.text;
                destinations[j].driveTime = results[j].duration_in_traffic.text;
              };


            for (let i = 0; i < destinations.length; i++) {
              destinations[i].distance = destinations[i].distance.replace(" mi", "");
            }

            //sort destinations by distance
            destinations.sort(function(a,b) {
              if(a.distance < b.distance) {
                return -1;
              }
              if(a.distance > b.distance) {
                return 1
              }
              return 0;
            })

            console.log('destinations');
            console.log(destinations);


            //create final object that has bars that have HH currently
            let d = new Date();

            let day = d.getDay();
            let hour = d.getHours();
            let minutes = d.getMinutes()/60;

            let currentTime = hour + minutes;
            //let currentTime = 16.5;

            let openNowResults = [];

            destinations.forEach(function(destination) {
              destination.happyHours.forEach(function(happyHour) {
                happyHour.day.forEach(function(d) {
                  if(day === d) {
                    if(happyHour.hhStart < currentTime && currentTime < happyHour.hhEnd) {
                      destination.deals = happyHour.deals;
                      destination.hhEnd = convertTime(`${happyHour.hhEnd}`);
                      openNowResults.push(destination);

                    }
                  };
                })
              })
            });


            //Show openNowResults on map
            function sendToMap() {
              for (var j = 0; j < openNowResults.length; j++) {

                 geocoder.geocode({'address': openNowResults[j].address},
                 showGeocodedAddressOnMap(true));
              };
            }
            //setTimeout(sendToMap, 1000);
            sendToMap();

            console.log('open now');
            console.log(openNowResults);


            const finalResults = getYelpAtts(openNowResults);

            console.log('final results');
            console.log(finalResults);

            //Temporary display of results and some attributes
            outputDiv.innerHTML += finalResults.length + " results showing. <br>";
            for( let j = 0; j < finalResults.length; j++) {
                outputDiv.innerHTML += '<br>Name: '+ finalResults[j].name + '<br>Address: ' + finalResults[j].address +
                '<br>' + finalResults[j].distance + ' mi: Driving will take ' +
                finalResults[j].driveTime + '<br>' + 'Happy Hour ends at ' + finalResults[j].hhEnd+ '<br>';
            }
        });
      }

      function getYelpAtts(openNowResults) {
        //const yelpAtts = GET src="https://api.yelp.com/v3/businesses/the-anchor-venice";
        //console.log(yelpAtts);
        //$.ajax()
        const URL = YELP_URL+openNowResults[0].yelpId;
        console.log(URL);

        const atts = [];
        $.getJSON('URL')
          .done(function(data) {
            atts = data;
            console.log('testing yelp api');
            console.log(atts);
          })



        return openNowResults;
      }


      function convertTime(time) {
        time = time.split('.'); // convert to array

        // fetch
        var hours = Number(time[0]);
        var minutes = (Number(time[1])*6);

        // calculate
        var timeValue;

        if (hours > 0 && hours <= 12)
        {
          timeValue= "" + hours;
        } else if (hours > 12)
        {
          timeValue= "" + (hours - 12);
        }
        else if (hours == 0)
        {
          timeValue= "12";
        }

        if(isNaN(minutes)){
          timeValue += ":00";
        } else {
          timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
        }
        timeValue += (hours >= 12) ? " P.M." : " A.M.";  // get AM/PM

        return timeValue;
      }


      function deleteMarkers(markersArray) {
        for (var i = 0; i < markersArray.length; i++) {
          markersArray[i].setMap(null);
        }
        markersArray = [];
      }

      //function to restart search
      //clear local storage

      function watchSubmit() {
        $('.restart-btn').submit(event => {
          event.preventDefault();
          localStorage.removeItem('lat');
          localStorage.removeItem('long');
          localStorage.removeItem('address');
          window.location = 'index.html';
        });
      }

      $(watchSubmit);
