window.onload=function(){
	let inmainPage = document.getElementById("inmainPage");
	let movieBox=document.getElementById("movieBox");
	let mvBox=document.getElementById("mvBox");
	//첫시작 바뀌는 텍스트 두번째
	$('#introTxt2').fadeOut();
	//별클릭시 위치로 이동하는  객체
	this.addEventListener('click',function(e){
		function starObj(starId,starColor){
			this.starId=starId;
			this.starColor=starColor;
			this.starFunc=function(){
				location.replace(this.starId);
				$(this.starColor).css("color","#f24d9b").delay(300);
			}
		}
		let i=1;
		while(i<5){
			$("#bar"+i).css("color","#fff48f");
			i++;
		}
		let starCh1=new starObj('#mainPage','#bar1');
		let starCh2=new starObj('#eventPage','#bar2');
		let starCh3=new starObj('#trailler','#bar3');
		let starCh4=new starObj('#sinopsis','#bar4');
		switch(e.target.id){
			case 'bar1':starCh1.starFunc();break;
			case 'bar2':starCh2.starFunc();break;
			case 'bar3':starCh3.starFunc();break;
			case 'bar4':starCh4.starFunc();break;
			default:$('menuBar li').css("color","#fff48f");
			//alert("ok");
		}
		//예고편 버튼 클릭시
		if(e.target.id=="movieBtn"){
			movieBox.style.display="block";
			mvBox.innerHTML=' <iframe width="100%" height="100%" src="https://www.youtube.com/embed/-iwb6fNf2J8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
		}
		//예고편 닫기버튼 클릭시
		if(e.target.id=="mvClose"){
			movieBox.style.display="none";
			mvBox.setAttribute('innerHTML','');
		}
	});	
			let yearBox=document.getElementById("yearBox");
			let graduGraph=document.getElementById("graduGraph");
			//문서 전체 길이 구하기
			var docElem = document.documentElement,
					scrollPos,
					docHeight;
					//브라우저마다 다른 길이 구하기위해
			docHeight = Math.max(docElem.offseHeight,docElem.scrollHeight);
			//스크롤시 벌어지는 이벤트
			this.addEventListener('scroll',function(e){
				scrollPos = docElem.scrollTop;
				console.log(scrollPos);
				if(scrollPos>200){
					$('#introTxt').css({'opacity':0,'filter':'alpha(opacity=0)'}).delay(500);
					inmainPage.style.opacity=1;
				}
				//메인페이지 두번째 글자 나타나게 하기
				if(scrollPos>450){
					$('#introTxt2').fadeIn(1000);
				}
				//리셋젬들의 모습으로 변하게하기
				if(scrollPos>6000){
					let pearlImg=document.getElementById("pearlImg");
					let amuthistImg=document.getElementById("amuthistImg");
					let garnetImg=document.getElementById("garnetImg");
					let spinelImg=document.getElementById("spinelImg");
					pearlImg.setAttribute('src','eventPage/img/pearl2.png');
					amuthistImg.setAttribute("src","eventPage/img/amethyst2.png");
					garnetImg.setAttribute("src","eventPage/img/garnet2.png");
					spinelImg.setAttribute("src","eventPage/img/spinel2.png");
				}
				if(scrollPos<6000){
					pearlImg.setAttribute('src','eventPage/img/pearl.png');
					amuthistImg.setAttribute("src","eventPage/img/amuthist.png");
					garnetImg.setAttribute("src","eventPage/img/garnet.png");
					spinelImg.setAttribute("src","eventPage/img/spinel.png");
				}
				//줄거리 애니메이션
				let summary=document.getElementById("summary");
				if(scrollPos>2000){
					summary.className ='summaryCh';
				}
			});
		
			let inmovieCon=document.getElementById("inmovieCon");
			let popWrap=document.getElementById("popWrap");
			//클릭시 버튼 이벤트
			this.addEventListener('click',function(e){
				//영화정보
				if(e.target.id=="movieInfo"){
				popWrap.style.display="block";
				}
				else{
				}
				
			});
			let videoBox=document.getElementById("videoBox");
			let videoCon=document.getElementById("videoCon");
			let steelCon=document.getElementById("steelCon");
			let increaseN=0;
			//버튼 누를시 이미지 변하게 만들기 -객체
			function imgA(imgChange)
			{	
				this.imgChange = function(){
					steelCon.setAttribute("src",imgChange);
				}
			}
			let imgB = new imgA("eventPage/img/steel1.jpg");
			let imgC = new imgA("eventPage/img/steel2.jpg");
			let imgD = new imgA("eventPage/img/steel3.jpg");
			let imgE = new imgA("eventPage/img/steel4.jpg");
			let imgF = new imgA("eventPage/img/steel5.jpg");
			this.addEventListener('click',function(e){
				if(e.target.id=="leftBtn"||e.target.id=="rightBtn"){
					if(e.target.id=="leftBtn"){increaseN--;}
					if(e.target.id=="rightBtn"){increaseN++;}
					if(increaseN<0){increaseN=5;}
					if(increaseN>5){increaseN=0;}
				}
				switch(increaseN){
					case 0:imgB.imgChange();break;
					case 1:imgC.imgChange();break;
					case 2:imgD.imgChange();break;
					case 3:imgE.imgChange();break;
					case 4:imgF.imgChange();break;
				}
				//동영상클릭 시  스위치문
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
					case "closeBtn":popWrap.style.display="none";
					default: videoBox.style.display="none";
						videoCon.innerHTML='';
						break;
					
				}
			});
			//마우스 올릴시 실행
			this.addEventListener("mouseover",function(e){
				   let pearlImg=document.getElementById("pearlImg");
                                          let amuthistImg=document.getElementById("amuthistImg");
                                          let garnetImg=document.getElementById("garnetImg");
                                          let spinelImg=document.getElementById("spinelImg");

				switch(e.target.id){
					case "pearlImg":pearlImg.setAttribute("src","eventPage/img/pearlOver.png");
						break;
					case "amuthistImg":amuthistImg.setAttribute("src","eventPage/img/amuthistOver.png");
						break;
					case "garnetImg":garnetImg.setAttribute("src","eventPage/img/garnetOver.png");
						break;
					case "spinelImg":spinelImg.setAttribute("src","eventPage/img/spinelOver.png");
						break;
				}
			});
			//마우스 나갔을때 실행
			this.addEventListener("mouseout",function(e){
				
					  let pearlImg=document.getElementById("pearlImg");
                                         let amuthistImg=document.getElementById("amuthistImg");
                                           let garnetImg=document.getElementById("garnetImg");
                                           let spinelImg=document.getElementById("spinelImg");
			    switch(e.target.id){
                                         case "pearlImg":pearlImg.setAttribute("src","eventPage/img/pearl2.png");
                                                 break;
                                         case "amuthistImg":amuthistImg.setAttribute("src","eventPage/img/amethyst2.png");
                                                 break;
                                         case "garnetImg":garnetImg.setAttribute("src","eventPage/img/garnet2.png");
                                                 break;
                                         case "spinelImg":spinelImg.setAttribute("src","eventPage/img/spinel2.png");
                                                 break;
                                 }
});
}
