function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  tmplat = document.getElementById("lat").value;
  tmplon = document.getElementById("lon").value;
  var result = false;
  var blat = false;
  var blon = false;
  if(tmplat<-90 || tmplat>90){

    document.getElementById("error-lat").innerText = " must be a valid Latitude (-90 to 90)"
  }else{
    document.getElementById("error-lat").innerText = ""
    blat = true;
  }

  if(tmplon<-180 || tmplon>180){
    document.getElementById("error-lon").innerText = " must be a valid Longitude (-180 to 180)"
  }else{
    document.getElementById("error-lon").innerText = ""
    blon = true;
  }

  if(blat===true && blon===true){
    result = true;
  }

  console.log('TODO - validate the longitude, latitude values before submitting');
  return result;
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
