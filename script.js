$(document).ready(function(){

	function randomNumber(min, max) {
		return Math.floor(Math.random() * (1 + max - min) + min);
	}

	// setInterval function 
	//change the prices
	//use the random number generator 
	//if/else checking the value of the fruit object- price 
	//if under 50c --> 50c
	//else if over $9.99 --> $9.99
	//change price in the DOM <--- still need to do

	//fruit constructor
	var Fruit =function (name){
		this.name = name;
		this.price = randomNumber(0.5, 9.99); //how did it start at 10???
		this.totalPurchased = 0;
		this.totalSpent = 0;
		this.avgPrice = 0;
		
	};

	//call constructor and make 4 fruits
	var apple = new Fruit('apple');
	var orange = new Fruit('orange');
	var pear = new Fruit('pear');
	var banana = new Fruit('banana');

	document.getElementById('apple').innerHTML = apple.price;
	document.getElementById('orange').innerHTML = orange.price;
	document.getElementById('pear').innerHTML = pear.price;
	document.getElementById('banana').innerHTML = banana.price;


	setInterval(priceUpdate, 15000, apple);
	setInterval(priceUpdate, 15000, orange);
	setInterval(priceUpdate, 15000, pear);
	setInterval(priceUpdate, 15000, banana);


	function priceUpdate(fruit){
		var random = randomNumber(1, 10);
		// console.log(random);
		if(random < 6) {
			fruit.price += .5;
		} else {
			fruit.price -= .5;
		}

		if(fruit.price < .5) {
			fruit.price = .5;
		} else if(fruit.price > 9.99) {
			fruit.price = 9.99;
		}
		//console.log(fruit.price);
		document.getElementById(fruit.name).innerHTML = fruit.price;
	}
	
	//console.log(apple, orange, pear, banana);


	//store fruits in an array of objects
	var fruitArray = [];
	console.log(fruitArray);

	//append fruits to DOM

	// wallet: starting amount $100

	//event handler to listen for click
	//function-- subtract price from wallat
	//add fruit to per fruit inventory
	//add price to per fruit total
	var wallet = 100;
	document.getElementById('wallet').innerHTML = wallet;





 	var disableBtn = function(fruit) {
    	var $fruit = $('#' + fruit.name + 'Button');

    	//console.log($fruit);
    
    	$fruit.attr('class', 'hidden');
	}



	$('#appleButton').on('click', function() {
		if(wallet < apple.price) {
    		alert('Not enough money!');
    	} else {
		apple.totalPurchased ++;
		console.log('Apples baught ' + apple.totalPurchased);
		apple.totalSpent += apple.price;
		apple.avgPrice = averageFunction(apple);
		console.log('Average price for apples ' + apple.avgPrice);
		wallet -= apple.price;
		document.getElementById('wallet').innerHTML = wallet;
		console.log(apple);
		}
	});

	$('#orangeButton').on('click', function() {
		if(wallet < orange.price) {
    		alert('Not enough money!');
    	} else {
		orange.totalPurchased ++;
		console.log('Oranges baught ' + orange.totalPurchased);
		orange.totalSpent += orange.price;
		orange.avgPrice = averageFunction(orange);
		console.log('Average price for oranges ' + orange.avgPrice);
		wallet -= orange.price;
		document.getElementById('wallet').innerHTML = wallet;
		console.log(orange);
		}
	});

	$('#bananaButton').on('click', function() {
		if(wallet < banana.price) {
    		alert('Not enough money!');
    	} else {
		banana.totalPurchased ++;
		console.log('Bananas baught ' + banana.totalPurchased);
		banana.totalSpent += banana.price;
		banana.avgPrice = averageFunction(banana);
		console.log('Average price for Bananas ' + banana.avgPrice);
		wallet -= banana.price;
		document.getElementById('wallet').innerHTML = wallet;
		console.log(banana);
		}
	});

	$('#pearButton').on('click', function() {
		if(wallet < pear.price) {
    		alert('Not enough money!');
    	} else {
		pear.totalPurchased ++;
		console.log('pears baught ' + pear.totalPurchased);
		pear.totalSpent += pear.price;
		pear.avgPrice = averageFunction(pear);
		console.log('Average price for pears ' + pear.avgPrice);
		wallet -= pear.price;
		document.getElementById('wallet').innerHTML = wallet;
		console.log(pear);
		}
	});




	//function(fruit.total spent, fruit.number purchased) 
	//total amount spent per fruit/ total number purchase of each fruit
	function averageFunction(fruit) {
		return fruit.totalSpent / fruit.totalPurchased
	}

	//function to iterate through the user object
	//???

	// fruitArray.push(apple);


	// console.log(priceUpdate(fruitArray[0]));



});



















