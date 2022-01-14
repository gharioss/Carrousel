var arrayOfImages = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg", "images/image4.jpg", "images/image5.jpg", "images/image6.jpg", "images/image7.jpg", "images/image8.jpg", "images/image9.jpeg"]
let x = 0
let y = 0
document.getElementById('counted').textContent = (x+1) + " / " + arrayOfImages.length
document.getElementById('counted2').textContent = (y+1) + " / " + arrayOfImages.length
function switchImage() {
	y += 1
	if (y == arrayOfImages.length) {
		y = 0
	}
	document.getElementById('image_to_switch').src= arrayOfImages[y]
	document.getElementById('counted2').textContent = (y+1) + " / " + arrayOfImages.length
}
setInterval(switchImage, 1000);

document.getElementById('next').addEventListener('click', function() {
	x += 1
	if (x == arrayOfImages.length) {
		x = 0
	}
	document.getElementById('image_to_click').src= arrayOfImages[x]
	document.getElementById('counted').textContent = (x+1) + " / " + arrayOfImages.length
})

document.getElementById('previous').addEventListener('click', function() {
	x -= 1
	if (x == -1) {
		x = arrayOfImages.length-1
	}
	document.getElementById('image_to_click').src= arrayOfImages[x]
	document.getElementById('counted').textContent = (x+1) + " / " + arrayOfImages.length
})