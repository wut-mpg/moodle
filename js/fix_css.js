function fix_links(parent_name = "book_content") {
	var content = document.getElementsByClassName(parent_name);
	var links = content[0].getElementsByTagName('a');

	for (var i = 0; i < links.length; i++) {
	  if (links[i].title == "TeX") continue;
	  links[i].classList.add("text-info");
	  console.log(links[i]);
	}
}

function fix_links_id(parent_name = "book_content") {
	var content = document.getElementById(parent_name);
	var links = content.getElementsByTagName('a');

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
