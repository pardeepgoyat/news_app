var Input = document.getElementById("input")

Input.addEventListener("keypress",e=>{
	if (e.key=="Enter"){
		reload()
	}
})

function reload(){
	var text = "technology sports education"
	if (Input.value != ""){
		text = Input.value
	}
	console.log(text)
	fetch(`https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=${text.trim().replace(" ","%20")}&pageNumber=1&pageSize=30&autoCorrect=true&safeSearch=false&withThumbnails=true&fromPublishedDate=null&toPublishedDate=null`, {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "af93dfbf1fmsh11afdd00a127d49p1fee0fjsneaa96fe41718",
			"x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com"
		}
	})
	.then(response => response.json())
	.then(data => {
		data = data.value
	
		var div1 = document.getElementById("primary")
		var div2 = document.getElementById("secondary")
		var div3 = document.getElementById("tertiary")

		div1.innerHTML=""
		div2.innerHTML=""
		div3.innerHTML=""
	
		var i=0
	
		data.forEach(value => {
	
			if (i%3 == 0){
	
				div1.innerHTML+= `
	
				<div class="card mb-3">
					<img src="${value.image.url}" class="card-img-top" alt="">
					<div class="card-body">
						<h5 class="card-title">${value.title}</h5>
						<p class="card-text">${value.description}</p>
						<a href="${value.url}" class="btn btn-primary">Read More</a>
					</div>
				</div>`
			}
	
			else if (i%3 == 1){
	
				div2.innerHTML+= `
	
				<div class="card mb-3">
					<img src="${value.image.url}" class="card-img-top" alt="">
					<div class="card-body">
						<h5 class="card-title">${value.title}</h5>
						<p class="card-text">${value.description}</p>
						<a href="${value.url}" class="btn btn-primary">Read More</a>
					</div>
				</div>`
			}
	
			else {
	
				div3.innerHTML+= `
	
				<div class="card mb-3">
					<img src="${value.image.url}" class="card-img-top" alt="">
					<div class="card-body">
						<h5 class="card-title">${value.title}</h5>
						<p class="card-text">${value.description}</p>
						<a href="${value.url}" class="btn btn-primary">Read More</a>
					</div>
				</div>`
			}
	
			i++
			
		});
	})
	.catch(err => {
		console.error(err);
	});
}

reload()