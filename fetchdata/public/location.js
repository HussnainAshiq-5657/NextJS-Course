console.log('Loading the Current Position');

function geolocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = 'GeoLocation is not accessible on Chrome Browser.';
  }
}
function showPosition(position) {
  console.log(position);
}

geolocation();
