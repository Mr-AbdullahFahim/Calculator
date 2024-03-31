const screen = document.getElementById('screen');
const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const zero = document.getElementById('0');
const addition = document.getElementById('addition');
const substraction = document.getElementById('substraction');
const multiplication = document.getElementById('multiplication');
const division = document.getElementById('division');
const equals = document.getElementById('equals');
const ac = document.getElementById('AC');
const dot = document.getElementById('dot');
let x=0;
let y=0;
let z=1;
let sign = [];
let counter=0;
let key=true;
let clrKey=false;
let signKey=true;
let equalKey=false;
let dotKey=false;

function add(a,b){
	return Math.round((a+b)*10000)/10000;
}

function sub(a,b){
	return Math.round((a-b)*10000)/10000;
}

function mul(a,b){
	return Math.round((a*b)*10000)/10000;
}

function div(a,b){
	return Math.round((a/b)*10000)/10000;
}

function calculate(thisId){
	if(thisId=='AC' || (clrKey && thisId==0)){
		counter=0;
		screen.innerText='';
		x=0;
		y=0;
		z=1;
		sign=[];
		clrKey=false;
		dotKey=false;
		equalKey=false;
		signKey=true;
	}
	else if(thisId=='equals'){
		if(counter>0 & equalKey){
			signKey=true;
			console.log(counter);
			clrKey=true;
			if(sign[counter-1]=='addition'){
				x=add(x,y);
				screen.innerText=x;
				y=0;
			}
			else if(sign[counter-1]=='substraction'){
				x=sub(x,y);
				screen.innerText=x;
				y=0;
			}
			else if(sign[counter-1]=='multiplication'){
				x=mul(x,y);
				screen.innerText=x;
				y=0;
			}
			else{
				x=div(x,y);
				screen.innerText=x;
				y=0;
			}
			counter=0;
			sign=[];
			equalKey=false;
			dotKey=false;
			z=1;
		}
		else{
			screen.innerText=screen.innerText.replace('+','');
			screen.innerText=screen.innerText.replace('-','');
			screen.innerText=screen.innerText.replace('/','');
			screen.innerText=screen.innerText.replace('x','');
			y=0;
			sign=[];
			counter=0;
			equalKey=false;
			signKey=true;
			clrKey=true;
			dotKey=false;
			z=1;
		}
	}
	else if(thisId=='addition' || thisId=='substraction' || thisId=='multiplication' || thisId=='division'){
		console.log(thisId);
		console.log('signKey: '+signKey);
		dotKey=false;
		z=1;
		clrKey=false;
		if(signKey){
			counter+=1;
			sign.push(thisId);
		}
		else{
			sign[sign.length-1]=thisId;
		}
		console.log(sign);
		addSign(thisId);
		if(counter>1 & equalKey){
			equalKey=false;
			signKey=true;
			if(sign[counter-2]=='addition'){
				x=add(x,y);
				screen.innerText=x;
				addSign(sign[counter-1]);
				y=0;
			}
			else if(sign[counter-2]=='substraction'){
				x=sub(x,y);
				screen.innerText=x;
				addSign(sign[counter-1]);
				y=0;
			}
			else if(sign[counter-2]=='multiplication'){
				x=mul(x,y);
				screen.innerText=x;
				addSign(sign[counter-1]);
				y=0;
			}
			else{
				x=div(x,y);
				screen.innerText=x;
				addSign(sign[counter-1]);
				y=0;
			}
		}
	}
	else{
		if(counter==0){
			if(thisId>=0 & thisId<=9){
				if(dotKey){
					z*=10;
					screen.innerText+=thisId;
					let i=thisId/z;
					x+=i;
					console.log(x);
				}
				else{
					x=(x*10)+parseInt(thisId);
					screen.innerText+=thisId;
					console.log(x);
				}
			}
			else if(thisId=='dot' & !dotKey){
				screen.innerText+='.';
				dotKey=true;
			}
		}
		else{
			equalKey=true;
			signKey=true;
			if(thisId>=0 & thisId<=9){
				if(dotKey){
					z*=10;
					screen.innerText+=thisId;
					let i=thisId/z;
					y+=i;
					console.log(y);
				}
				else{
					y=(y*10)+parseInt(thisId);
					screen.innerText+=thisId;
					console.log(y);
				}
			}
			else if(thisId=='dot' & !dotKey){
				screen.innerText+='.';
				dotKey=true;
			}
		}
	}
}



function addSign(thisId){
	console.log('sign key1: '+signKey);
	if(!signKey){
		screen.innerText=screen.innerText.slice(0,-1);
	}
	if(thisId=='addition'){
		screen.innerText+='+';
	}
	else if(thisId=='substraction'){
		screen.innerText+='-';
	}
	else if(thisId=='multiplication'){
		screen.innerText+='x';
	}
	else{
		screen.innerText+='/';
	}
	signKey=false;
}


document.addEventListener('keypress', shortCut);

function shortCut(event){
	console.log(event.which);
	if(event.which==48 & key){
		calculate(zero.id);
	}
	else if(event.which===49 & key){
		key=false;
		calculate(one.id);
	}
	else if(event.which===50 & key){
		key=false;
		calculate(two.id);
	}
	else if(event.which===51 & key){
		key=false;
		calculate(three.id);
	}
	else if(event.which===52 & key){
		key=false;
		calculate(four.id);
	}
	else if(event.which===53 & key){
		key=false;
		calculate(five.id);
	}
	else if(event.which===54 & key){
		key=false;
		calculate(six.id);
	}
	else if(event.which===55 & key){
		key=false;
		calculate(seven.id);
	}
	else if(event.which===56 & key){
		key=false;
		calculate(eight.id);
	}
	else if(event.which===57 & key){
		key=false;
		calculate(nine.id);
	}
	else if(event.which===43 & key){
		key=false;
		calculate(addition.id);
	}
	else if(event.which===45 & key){
		key=false;
		calculate(substraction.id);
	}
	else if(event.which===42 & key){
		key=false;
		calculate(multiplication.id);
	}
	else if(event.which===47 & key){
		key=false;
		calculate(division.id);
	}
	else if(event.which===13 & key){
		key=false;
		calculate(equals.id);
	}
	else if(event.which===46 & key){
		key=false;
		calculate(dot.id);
	}
	key=true;
}

let change=true;
function darkChange(){
	if(change){
		change=false;
		document.getElementById('darkChange').classList.remove('change');
		document.getElementById('body').classList.add('body1');
		screen.classList.add('screen1');
		for(let i=0;i<10;i++){
			document.getElementById(`${i}`).classList.add('buttons1');
		}
		dot.classList.add('buttons1');
		addition.classList.add('buttons1');
		substraction.classList.add('buttons1');
		multiplication.classList.add('buttons1');
		division.classList.add('buttons1');
		equals.classList.add('buttons1');
		ac.classList.add('buttons1');
		document.getElementById('circleToggle').classList.add('circleToggle1');
	}
	else{
		change=true;
		document.getElementById('darkChange').classList.add('change');
		document.getElementById('body').classList.remove('body1');
		document.getElementById('body').classList.add('body2');
		screen.classList.remove('screen1');
		for(let i=0;i<10;i++){
			document.getElementById(`${i}`).classList.remove('buttons1');
		}
		dot.classList.remove('buttons1');
		addition.classList.remove('buttons1');
		substraction.classList.remove('buttons1');
		multiplication.classList.remove('buttons1');
		division.classList.remove('buttons1');
		equals.classList.remove('buttons1');
		ac.classList.remove('buttons1');
		document.getElementById('circleToggle').classList.remove('circleToggle1');
	}
}