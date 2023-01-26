			window.onload=function(){

			var yearBox=document.getElementById("yearBox");
			var inmovieCon=document.getElementById("inmovieCon");
			var graduGraph=document.getElementById("graduGraph");
			var docElem = document.documentElement,
					scrollPos,
					docHeight;
					docHeight = Math.max(docElem.offseHeight,docElem.scrollHeight);
					if(docHeight != 0){
						offset = docHeight / 5;
					}
			
			this.addEventListener('scroll',function(e){
				scrollPos = docElem.scrollTop;
				console.log(scrollPos);
				//console.log(scrollPos);
				if(scrollPos>360){
				yearBox.style.width="350px";
				graduGraph.style.opacity='1';
				inmovieCon.style.transform='scale(1)';
				
				}
				else{
				}
				
			});
				let videoBox=document.getElementById("videoBox");
				let videoCon=document.getElementById("videoCon");
			this.addEventListener('click',function(e){
				switch(e.target.id){
					case "tra1":videoBox.style.display="block";
						videoCon.innerHTML='<iframe width="100%" height="100%" src="https://www.youtube.com/embed/-iwb6fNf2J8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';		
						break;
						case "tra2":videoBox.style.display="block";
						videoCon.innerHTML='<iframe width="100%" height="100%" src="https://www.youtube.com/embed/zTrMZEmQ8Zk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
						break;
					case "tra3":videoBox.style.display="block";
						videoCon.innerHTML='<iframe width="100%" height="100%" src="https://www.youtube.com/embed/PDVv0IMBZRg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';		
						break;
					case "tra4":videoBox.style.display="block";
						videoCon.innerHTML='<iframe width="100%" height="100%" src="https://www.youtube.com/embed/30KHxOv_Q2k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';		
						break;
					default: videoBox.style.display="none"; 
						videoCon.innerHTML='';		
						break;
				}
			});
}
