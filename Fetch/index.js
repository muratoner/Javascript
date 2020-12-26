
const handleAsJson = response => response.json();

const demo = document.getElementById("demo");

const items = []

const displayResponse = posts => {
    document.getElementById('list').innerText = ''
    for (const post of posts) {
        let li = document.createElement("li");
        li.innerText = post.title;
        document.getElementById('list').appendChild(li)
    }
    items.push(...posts)
}

function loadPosts() {
  const method = "GET";
  const headers = {
    "Content-type": "application/json",
  }

  return fetch("https://jsonplaceholder.typicode.com/posts", {method, headers})
    .then(handleAsJson)
    .then(displayResponse);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function addPost() {
    const method = "POST";
    const headers = {
        "Content-type": "application/json",
    }

    const id = getRandomInt(9999);

    const body = JSON.stringify({
        userId: id,
        id: id,
        title: `Test title ${id}`,
        body: 'Test body content'
    })

    return fetch("https://jsonplaceholder.typicode.com/posts", {method, headers, body})
        .then(handleAsJson)
        .then((post) => {
            items.unshift(post)
            displayResponse(items)
        });
}

loadPosts()