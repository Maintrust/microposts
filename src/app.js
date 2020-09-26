import { http } from "./http";
import { ui } from "./ui";

document.addEventListener("DOMContentLoaded", getPosts);

document.querySelector("#posts").addEventListener("click", removePost);

document.querySelector("#posts").addEventListener("click", editState);

document.querySelector(".edit-submit").addEventListener("click", submitEdit);
document.querySelector(".cancel-submit").addEventListener("click", cancelEdit);

document.querySelector(".post-submit").addEventListener("click", submitPost);
async function getPosts() {
  // http
  //   .get("http://localhost:3000/posts")
  //   .then((data) => console.log(data))
  //   .catch((err) => console.log(err));
  const posts = await http.get("http://localhost:3000/posts");
  ui.showPosts(posts);
}

function submitPost() {
  const title = document.querySelector("#title").value;
  const body = document.querySelector("#body").value;
  if (!title || !body) {
    alert("All the fields must be filled");
  } else {
    const data = {
      title,
      body,
    };

    // Create Post
    http
      .post(`http://localhost:3000/posts/`, data)
      .then((data) => {
        ui.showAlert("Post added", "alert alert-success");
        ui.clearFields();
        getPosts();
      })
      .catch((err) => console.log(err));
  }
}

async function removePost(e) {
  if (e.target.parentElement.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      const id = e.target.parentElement.dataset.id;
      await http.delete(`http://localhost:3000/posts/${id}`);
      ui.showAlert("Post deleted", "alert alert-danger");
      getPosts();
    }
  }
}

async function editState(e) {
  if (e.target.parentElement.classList.contains("edit")) {
    const id = e.target.parentElement.dataset.id;
    const currentPost = await http.get(`http://localhost:3000/posts/${id}`);
    console.log(currentPost);
    ui.editPost(currentPost, id);
  }
}

function submitEdit() {
  const title = document.querySelector("#title").value;
  const body = document.querySelector("#body").value;
  if (!title || !body) {
    alert("All the fields must be filled");
  } else {
    const id = ui.getCurrentId();
    const data = {
      title,
      body,
    };

    http
      .put(`http://localhost:3000/posts/${id}`, data)
      .then((data) => {
        ui.showAlert("Post editted", "alert alert-warning");
        ui.cancelEdit();
        getPosts();
      })
      .catch((err) => console.log(err));
  }
}

function cancelEdit() {
  ui.cancelEdit();
}
