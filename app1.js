let navigation = document.getElementById("navigation"), // определяем блок навигации в переменную
 	headerHeight = document.getElementById("header").scrollHeight; // получаем высоту блока header


window.addEventListener('scroll', function () { 
	const scrollPosition = window.scrollY; // определяем положение скролла
	console.log(headerHeight);
	if(scrollPosition > headerHeight){ // когда значение положения скролла станет больше высоты блока header закрепляем navbar  
		navigation.classList.add("navigation_fixed");
	}else{ // когда возвращаемся на верх убираем фиксированную позицию у navbar
		navigation.classList.remove("navigation_fixed");
	}

  });