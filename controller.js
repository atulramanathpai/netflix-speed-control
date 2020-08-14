function displaySnackbar(snackbar, playbackRate)
{
  snackbar.textContent = newPlaybackRate + "x";
  snackbar.className = "show";

  setTimeout( function() {
    snackbar.className = "";
  }, 2000 );
}

function getSnackbar()
{
  /* inject snackbar component if not present */
  if(null === document.getElementById("snackbar"))
  {
    snackbarDiv = document.createElement('div');
    snackbarDiv.setAttribute("id", "snackbar");

    document.body.appendChild(snackbarDiv);
  }

  return document.getElementById("snackbar");
}

function setPlaybackRate(multiplier) {
  newPlaybackRate = document.querySelector("video").playbackRate * multiplier;

  if(newPlaybackRate >= 0.25 && newPlaybackRate <= 16) {
    document.querySelector("video").playbackRate = newPlaybackRate;
  }

  displaySnackbar(getSnackbar(), newPlaybackRate);
};

function updatePlaybackRate(e) {
	if (e.shiftKey && e.key == '>') {
		setPlaybackRate(2.0); /* twice current speed */
	}
  if (e.shiftKey && e.key == '<') {
		setPlaybackRate(0.5); /* halve current speed */
	}
}

if (window == top) {
  window.addEventListener('keyup', updatePlaybackRate, false);
}
