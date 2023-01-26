		window.onload = function(){
			let processionBox1 = document.getElementById("processionBox1");//값을입력받는박스1
			let processionBox2 = document.getElementById("processionBox2");//값을입력받는 박스2
			let firstProcessionA=[];//첫번째 빈배열
			let secondProcessionA=[];//첫번째 빈배열
			let dividFirst=[];//첫번째 배열 나누기
			let dividSecond=[];//두번째 배열 나누기
			let plusResult=[];//더하기 결과
			let minusResult=[];//빼기 결과
			let multiResult=0;//곱하기 결과
			let multiRe=[];//곱셈 더한 값을 넣는배열
			let multiPlus=[];//곱셈 통배열 넣는 배열
			let resultProcession=document.getElementById("resultProcession");//결과 값 들어가는 곳
			let alertBoxline=document.getElementById("alertBoxline");//alertBox
			let alertText=document.getElementById("alertText");//alert 글 들어가는 곳
			let heat =document.getElementById("heat");//행
			let line = document.getElementById("line");//열
			//this를 클릭시 실행되는 function
			this.addEventListener('click',function(e){
					//alert창을 닫는 버튼
				if(e.target.id=="closeBox"){
					alertBoxline.style.display="none";
				}
				//행렬값을 입력하는 버튼
				if(e.target.id=="numberInput"){
					if(heat.value > 10){
						alertBoxline.style.display="block";
						alertText.innerHTML="10보다 작은 수를 입력해주세요";
						heat.value=0;//10보다 큰 수가 들어오면 0으로 초기화
							}
					if(line.value > 10){
						alertText.innerHTML="10보다  작은 수를 입력해주세요";
						line.value=0;//10보다 큰 수가 들어오면 0으로 초기화
							}
					processionBox1.innerHTML="";//input박스 첫번째 누적 값 초기화
					processionBox2.innerHTML="";//input박스 두번째 누적 값 초기화
					let i=0;
					while(i<heat.value){
						let j=0;
						while(j<line.value){
							processionBox1.innerHTML+='<input id="firstProcession'+i+""+j+'" class="inInputBox" type="Number" value="0"/>';//값을 입력받는 박스 A
							processionBox2.innerHTML+='<input id="secondProcession'+i+""+j+'"class="inInputBox" type="Number" value="0"/>';//값을 입력받는 박스 B
							j++;
								}
							processionBox1.innerHTML+="<br>";
							processionBox2.innerHTML+="<br>";
							i++;
							}
						}
	
				//더하기 버튼 클릭시 실행
				if(e.target.id=="plusC")
				{
					btnJ(1);
					dividFirst=[];
					dividSecond=[];
					resultProcession.innerHTML="";
					firstProcessionA=[];
					secondProcessionA=[];
				 	 i=0;
	                                 while(i<heat.value){
	                                          j=0;
        	                                  while(j<line.value){
                	                                 let  firstProcessionArray=document.getElementById("firstProcession"+i+""+j).value
                        	                         let  secondProcessionArray=document.getElementById("secondProcession"+i+""+j).value
							dividFirst.push(firstProcessionArray);
							dividSecond.push(secondProcessionArray);
                                                	  j++;
			                                          }
					 firstProcessionA.push(dividFirst);
					 secondProcessionA.push(dividSecond);
					 dividFirst=[];//첫번째 배열 누적 초기화
					 dividSecond=[];//두번째 배열 누적 초기화
                                          i++;
	                                  }
					i=0;
					while(i<firstProcessionA[0].length){
						j=0;
						while(j<firstProcessionA[i].length){
							plusResult.push(Number(firstProcessionA[i][j])+Number(secondProcessionA[i][j]));
							resultProcession.innerHTML+='<input class="resultBox" value="'+plusResult+'"readonly/>';
							plusResult=[];
							j++;
										}
					resultProcession.innerHTML+="<br>";
						i++;
									}
				}
			//빼기 버튼 누를시 실행
				if(e.target.id=="minusC")
				{	
					btnJ(2);
					resultProcession.innerHTML="";
					firstProcessionA=[];
					secondProcessionA=[];
					  i=0;
         	                         while(i<heat.value){
                                	          j=0;
                         	                 while(j<line.value){
                        	                    	let  firstProcessionArray=document.getElementById("firstProcession"+i+""+j).value
                 	                                let  secondProcessionArray=document.getElementById("secondProcession"+i+""+j).value
							dividFirst.push(firstProcessionArray);
							dividSecond.push(secondProcessionArray);
	                                                  j++;
                                        		  }
					 firstProcessionA.push(dividFirst);
					 secondProcessionA.push(dividSecond);
				  	 dividFirst=[];
				  	 dividSecond=[];
                                         i++;
                                		}
				
					i=0;
					while(i<firstProcessionA[0].length){
						j=0;
						while(j<firstProcessionA[i].length){
							minusResult.push(Number(firstProcessionA[i][j])-Number(secondProcessionA[i][j]));
							resultProcession.innerHTML+='<input class="resultBox" value="'+minusResult+'" readonly/>';
							minusResult=[];
							j++;
						}
					resultProcession.innerHTML+="<br>";
					multiResult=0;
					i++;
					}
			}
			//곱하기 버튼 누를시 실행	
				if(e.target.id=="multiC"){
					btnJ(3);
					firstProcessionA=[];
					secondProcessionA=[];
					resultProcession.innerHTML="";	
					if(heat.value!==line.value){
						alertBoxline.style.display="block";
						alertText.innerHTML="행과 열이 같아야 계산이 가능합니다";//heat.value와 line.value가 같지 않을시 
						processionBox1.innerHTML="";//초기화
						processionBox2.innerHTML="";//초기화
						resultProcession.innerHTML="";//초기화
						heat.value=0;//초기화
						line.value=0;//초기화
							}
				//곱하기가 실행되는 조건
				if(heat.value==line.value&&heat.value>0&&line.value>0){
					 i=0;
	                                 while(i<heat.value){
                   	                       j=0;
                        	                 while(j<line.value){
                                                	 let  firstProcessionArray=document.getElementById("firstProcession"+i+""+j).value
	                                                 let  secondProcessionArray=document.getElementById("secondProcession"+i+""+j).value
							dividFirst.push(firstProcessionArray);
							dividSecond.push(secondProcessionArray);
                                	                j++;
                                         		 }
					 	 firstProcessionA.push(dividFirst);
						 secondProcessionA.push(dividSecond);
						 dividFirst=[];//누적초기화
						 dividSecond=[];//누적초기화
                          		         i++;
				                 }
					i=0;
					while(i<firstProcessionA[0].length){
						j=0;
						while(j<firstProcessionA[i].length){
							let k=0;
							while(k<firstProcessionA[i].length){
								multiResult+=(firstProcessionA[i][k]*secondProcessionA[k][j]);		
									k++;
							}
							resultProcession.innerHTML+='<input class="resultBox" value="'+multiResult+'" readonly/>';
							multiResult=0;
							j++;
						}
					resultProcession.innerHTML+="<br>";	
						i++;
				}
				
			}
		}
			//reset 버튼 누를 시 실행
			if(e.target.id=="ResetC"){
				processionBox1.innerHTML="";
				processionBox2.innerHTML="";
				resultProcession.innerHTML="";
				heat.value=0;
				line.value=0;
				btnJ(4);
			}
			//random버튼 누를시 실행
			if(e.target.id=="RandomC"){
				btnJ(5);	
				resultProcession.innerHTML="";//결과값 초기화
  				i=0;
                                while(i<heat.value){
                                          j=0;
                                          while(j<line.value){
						  let randomArray=document.getElementById("firstProcession"+i+""+j);
						  let randomArray2=document.getElementById("secondProcession"+i+""+j);
						  randomArray.value=parseInt(Math.random()*100)-50;
						  randomArray2.value=parseInt(Math.random()*100)-50;
						j++;
						  }
					  i++;
					}
				}
			//버튼 누를 시 class 추가
			function btnJ(num){
				btns=document.getElementsByClassName('btn');//가져올 클래스명
				i=0;
				while(i<btns.length){
					btns[i].classList.remove('btnC');//선택되지않은 버튼 클래스 삭제
					i++;
			}
			btns[num-1].classList.add('btnC');//버튼에 클래스추가
		}
	});
}

