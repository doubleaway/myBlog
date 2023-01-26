window.onload= function(){
			let processionBox1= document.getElementById("processionBox1");//값을입력받는박스1
			let processionBox2= document.getElementById("processionBox2");//값을입력받는 박스2
			let firstProcessionA= [];//첫번째 빈배열
			let secondProcessionA= [];//첫번째 빈배열
			let firstProcessionArray= [];//첫번째 빈배열
			let secondProcessionArray= [];//첫번째 빈배열
			let dividFirst= [];//첫번째 배열 나누기
			let dividSecond= [];//두번째 배열 나누기
			let plusResult= [];//더하기 결과
			let minusResult= [];//빼기 결과
			let multiResult= 0;//곱하기 결과
			let multiRe= [];//곱셈 더한 값을 넣는배열
			let multiPlus= [];//곱셈 통배열 넣는 배열
			let resultProcession= document.getElementById("resultProcession");//결과 값 들어가는 곳
			let alertBoxline= document.getElementById("alertBoxline");//alertBox
			let alertText= document.getElementById("alertText");//alert 글 들어가는 곳
			let heat1= document.getElementById("heat");//행
			let line1= document.getElementById("line");//열
			let heat2= document.getElementById("heat2");//행
			let line2= document.getElementById("line2");//열
			const blankArray=[];
			const alertBox=['10보다 작은 수를 입력해주세요.','행과 열이 같아야 계산이 가능합니다.'];
			//reset 함수
			function resetFunc(){
				dividFirst= [];
				dividSecond= [];
				secondProcessionA= [];
				resultProcession.innerHTML= "";
			}
			//value값 받아오는 함수
			
			function valueBox(){
				//초기화
				resetFunc();
				firstProcessionA= [];
				secondProcessionA= [];
				i= 0;
         	                while(i<heat.value){
                               		j= 0;
					//value값 받기
                         	        while(j<line.value){
                        	         	let  firstProcessionArray= document.getElementById("firstProcession"+i+""+j).value
                 	                        let  secondProcessionArray= document.getElementById("secondProcession"+i+""+j).value
						dividFirst.push(firstProcessionArray);
						dividSecond.push(secondProcessionArray);
	                                        j++;
                                        	 }
					//value값 박스에 넣기
					firstProcessionA.push(dividFirst);
					secondProcessionA.push(dividSecond);
					dividFirst= [];
					dividSecond= [];
                	                i++;
                                	}
				}
				//값을 받는 input을 만드는 객체
				
				function inputVal(boxName,heat,line,arrayBox,divBox,inputValId,resultInput){
					this.arrayBox=arrayBox;
					this.divBox=divBox;
					this.boxName=boxName;
					this.heat=heat;
					this.line=line;
					this.inputValId=inputValId;
					this.resultInput=resultInput;
					this.inputValFunc=function(){
						if(this.heat.value > 10 || this.line.value > 10){
						blankArray[0].atConFunc();
						this.heat.value= 0;//10보다 큰 수가 들어오면 0으로 초기화
						this.line.value= 0;//10보다 큰 수가 들어오면 0으로 초기화
						}
					this.boxName.innerHTML= "";//input박스 첫번째 누적 값 초기화
					 i=0;
					while(i<(this.heat).value){
						j=0;	
						while(j<(this.line).value){
							//값을 입력받는 박스 A
							this.boxName.innerHTML+= '<input id="'+this.inputValId+i+""+j+'" class="inInputBox" type="Number" value="0"/>';
							//값을 입력받는 박스 B
							j++;
							}
							this.boxName.innerHTML+= "<br>";
							i++;
						}
				//초기화
				resetFunc();
				this.arrayBox= [];
				i= 0;
         	                while(i<this.heat.value){
                               		j= 0;
					//value값 받기
                         	        while(j<this.line.value){
                        	         	this.arrayBox= document.getElementById(this.inputValId+i+""+j).value
						this.divBox.push(this.arrayBox);
	                                        j++;
                                        	 }
					//value값 박스에 넣기
					this.resultInput.push(this.divBox);
					this.divBox= [];
                	                i++;
                                		}
					}
				}
				//alert창 객체
				function alertFunc(atContent){
					this.atContent=atContent;
					this.atConFunc=function(){
						alertText.innerHTML=this.atContent;
						alertBoxline.style.display= "block";
					}
				}
				alertBox.forEach(function(value,index){
					blankArray.push(new alertFunc(value));

				});
				console.log(blankArray);
				//결과값 객체
				function objectFunc(result){
					this.result=result;
					this.resultFunc=function(){
						resultProcession.innerHTML+= '<input class="resultBox" value="'+this.result+'" readonly/>';
					}
				}
			//this를 클릭시 실행되는 function
			this.addEventListener('click',function(e){
				//alert창을 닫는 버튼
				if(e.target.id== "closeBox"){
					alertBoxline.style.display="none";
				}
				//행렬값을 입력하는 버튼
				if(e.target.id== "numberInput"){
					let inputHeat=new inputVal(processionBox1,heat1,line1,firstProcessionArray,dividFirst,'firstProcession',firstProcessionA );
					inputHeat.inputValFunc();
					let inputHeat2=new inputVal(processionBox2,heat2,line2,secondProcessionArray,dividSecond,'secondProcession',secondProcessionA );
					inputHeat2.inputValFunc();
				//더하기 버튼 클릭시 실행
				if(e.target.id=="plusC")
				{
					btnJ(1);
					inputHeat.inputValFunc();
					inputHeat2.inputValFunc();
					i= 0;
					while(i<firstProcessionA[0].length){
						j=0;
						while(j<firstProcessionA[i].length){
							plusResult.push(Number(firstProcessionA[i][j])+Number(secondProcessionA[i][j]));
							let resultPlus=new objectFunc(plusResult);
							resultPlus.resultFunc();
							plusResult= [];
							j++;
							}
						resultProcession.innerHTML+= "<br>";
						i++;
					}
				}
				//빼기 버튼 누를시 실행
				if(e.target.id=="minusC")
				{	
					btnJ(2);
					i= 0;
					while(i<firstProcessionA[0].length){
						j= 0;
						while(j<firstProcessionA[i].length){
							minusResult.push(Number(firstProcessionA[i][j])-Number(secondProcessionA[i][j]));
							let resultMinus=new objectFunc(minusResult);
							resultMinus.resultFunc();
							minusResult= [];
							j++;
						}
					resultProcession.innerHTML+= "<br>";
					multiResult= 0;
					i++;
					}
				}
				//곱하기 버튼 누를시 실행	
				if(e.target.id== "multiC"){
					if(heat.value!== line.value){
						blankArray[1].atConFunc();
						resetFunc();
						heat.value= 0;//초기화
						line.value= 0;//초기화
							} 
					i= 0;
					while(i<firstProcessionA[0].length){
						j= 0;
						while(j<firstProcessionA[i].length){
							let k= 0;
							while(k<firstProcessionA[i].length){
								multiResult+= (firstProcessionA[i][k]*secondProcessionA[k][j]);		
									k++;
							}
							let resultMulti=new objectFunc(multiResult);
							resultMulti.resultFunc();
							multiResult= 0;
							j++;
						}
					resultProcession.innerHTML+= "<br>";	
						i++;
					}
				}
				//reset 버튼 누를 시 실행
				if(e.target.id== "ResetC"){
					resetFunc();
					processionBox1.innerHTML= "";
					processionBox2.innerHTML= "";
					heat.value= 0;
					line.value= 0;
					btnJ(4);
				}
				//random버튼 누를시 실행
				if(e.target.id== "RandomC"){
					btnJ(5);	
					resultProcession.innerHTML= "";//결과값 초기화
  					i= 0;
	                               	 while(i<heat.value){
         	                                 j= 0;
                	                          while(j<line.value){
							 const randomArray= document.getElementById("firstProcession"+i+""+j);
							 const randomArray2= document.getElementById("secondProcession"+i+""+j);
							 randomArray.value=parseInt(Math.random()*100)-50;
							 randomArray2.value=parseInt(Math.random()*100)-50;
						 	 j++;
						 	 }
						  i++;
					}
				}
				//버튼 누를 시 class 추가
				function btnJ(num){
					btns= document.getElementsByClassName('btn');//가져올 클래스명
					i= 0;
					while(i<btns.length){
						btns[i].classList.remove('btnC');//선택되지않은 버튼 클래스 삭제
						i++;
				}
				btns[num-1].classList.add('btnC');//버튼에 클래스추가
			}
		});
}
