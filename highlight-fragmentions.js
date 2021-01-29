function fragmention() {
	var loc = location.href;
	var locIndex = loc.indexOf("##");

	if (locIndex !== -1) {
		var hash = loc.substring(locIndex+2).toLowerCase();
		while (hash.indexOf('+') != -1) {
			hash = hash.replace("+", " ");
		}
	}
	
	var pTags = document.getElementsByTagName("p");
	
	for (var p = 0; p < pTags.length; p++) {
		var pContent = pTags[p].innerHTML.toLowerCase();
		
		if (pContent.indexOf(hash) !== -1) {
			pTags[p].setAttribute("fragmention", "");
    		pTags[p].scrollIntoView();
        	break;
  	  	}
	}
}