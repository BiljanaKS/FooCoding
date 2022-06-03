'use strict';

{
  const someObject = {
    "data": [
      {
        "name": "Title: Harry Potter: The chamber of Secrets",
        "attributes": {
          "language": "Language: English",
          "author": "Author: J.K Rowling",
          "image": '<img src="./img/harry.jpg" width="300" height="300"/>',
        },
      },
      {
        "name": "Title: Dune",
        "attributes": {
          "language": "Language: English",
          "author": "Author: Frank Herbert",
          "image": '<img src="./img/dune.jpg" width="300" height="300"/>',
        }
      },
      {
        "name": "Title: The Brain",
        "attributes": {
          "language": "Language: English",
          "author": "Author: David Eagleman",
          "image": '<img src="./img/brain.jpg" width="300" height="300"/>',
        }
      },
      {
        "name": "Title: The Fall",
        "attributes": {
          "language": "Language: English",
          "author": "Author: Albert Camus",
          "image": '<img src="./img/fall.jpg" width="300" height="300"/>',
        }
      },
      {
        "name": "Title: Sherlock Holmes",
        "attributes": {
          "language": "Language: English",
          "author": "Author: Arthur Conan Doyle",
          "image": '<img src="./img/sherlock.jpg" width="300" height="300"/>',
        }
      },
      {
        "name": "Title: To Kill A Mockingbird",
        "attributes": {
          "language": "Language: English",
          "author": "Author: Harper Lee",
          "image": '<img src="./img/bird.jpg" width="300" height="300"/>',
        }
      },
      {
        "name": "Title: 1984",
        "attributes": {
          "language": "Language: English",
          "author": "Author: George Orwell",
          "image": '<img src="./img/1984.jpg" width="300" height="300"/>',
        }
      },
      {
        "name": "Title: Lolita",
        "attributes": {
          "language": "Language: English",
          "author": "Author: Vladimir Nabokov",
          "image": '<img src="./img/lolita.jpg" width="300" height="300"/>',
        }
      },
      {
        "name": "Title: Beloved",
        "attributes": {
          "language": "Language: English",
          "author": "Author: Toni Morrison",
          "image": '<img src="./img/beloved.jpg" width="300" height="300"/>',
        }
      },
      {
        "name": "Title: Invisible Man",
        "attributes": {
          "language": "Language: English",
          "author": "Author: Ralph Ellison",
          "image": '<img src="./img/invisible.jpg" width="300" height="300"/>',
        }
      },
    ]
  }

  let div_tag = document.createElement("div");

  document.body.appendChild(div_tag);

  let ul_tag = document.createElement("ul");

  div_tag.appendChild(ul_tag);

  //////////////////

  for (let i = 0; i < 10; i++) {

    var li = document.createElement("li");
    li.innerHTML = someObject.data[i].attributes.image;
    ul_tag.appendChild(li);

    var ul3 = document.createElement("ul");
    ul3.innerHTML = someObject.data[i].name;
    li.appendChild(ul3)

    var ul1 = document.createElement("ul");
    ul1.innerHTML = someObject.data[i].attributes.author;
    li.appendChild(ul1);

    var ul2 = document.createElement("ul");
    ul2.innerHTML = someObject.data[i].attributes.language;
    li.appendChild(ul2);
  }

}