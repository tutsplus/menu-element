// Example 1

// Download the Source Code
function downloadSource() {
	window.open(post.file, '_self');
}
// View the Demo
function viewDemo() {
	window.open(post.demo, '_blank');	
}
// Get the Blog Feed
function getFeed() {
  window.prompt('Feed Address:', post.feed);
}
// Send via Mail
function sendEmail() {
	var url  = document.URL;
	var body = 'Check this post: ' + url +'';
    window.location.href = 'mailto:?subject='+ document.title +'&body='+ body +'';
}


// Example 2
function rotateImage(deg) {
	document.getElementById('image').className = 'MyClass';
}