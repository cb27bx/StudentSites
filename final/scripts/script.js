document.getElementById("bigImage").setAttribute('src','images/Hg.jpg');

function swapImage(imageNumber){
	if(imageNumber === 0){
		document.getElementById("bigImage").setAttribute('src','images/Hg.jpg');
	}
	else if(imageNumber === 1){
		document.getElementById("bigImage").setAttribute('src','images/bags.jpg');
	}
	else if(imageNumber === 2){
		document.getElementById("bigImage").setAttribute('src','images/Mp.jpg');
	}
	else if(imageNumber === 3){
		document.getElementById("bigImage").setAttribute('src','images/ring.jpg');
	}
	else if(imageNumber === 4){
		document.getElementById("bigImage").setAttribute('src','images/shoes.jpg');
	}
	else if(imageNumber === 5){
		document.getElementById("bigImage").setAttribute('src','images/wraps.jpg');
	}
	else if(imageNumber === 6){
		document.getElementById("bigImage").setAttribute('src','images/sullivan-vs-corbett.jpg');
	}
}