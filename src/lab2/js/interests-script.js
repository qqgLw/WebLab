function displayListOfIntereses(...args){
    document.write(`<ul>`);
    for (var i = 0; i < args.length; i++) {	
		document.write(`<li><a class="alt-href" href="${args[i]['anchor']}">${args[i]['title']}</a></li>`);
	}
    document.write(`</ul>`);
}
