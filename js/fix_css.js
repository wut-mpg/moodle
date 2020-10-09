function fix_links() {
	var content = document.getElementsByClassName('book_content');
	var links = content[0].getElementsByTagName('a');

	for (var i = 0; i < links.length; i++) {
	  if (links[i].title == "TeX") continue;
	  links[i].classList.add("text-info");
	  console.log(links[i]);
	}
}

function fix_imgs() {
	var content = document.getElementsByClassName('book_content');
	var imgs = content[0].getElementsByTagName('img');
}

fix_links();
