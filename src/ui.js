class UI {
  constructor() {
    this.post = document.querySelector("#posts");
    this.titleInput = document.querySelector("#title");
    this.bodyInput = document.querySelector("#body");
    this.postsInput = document.querySelector(".post-submit");
    this.forState = "add";
    this.editState = document.querySelector("#edit");
    this.postBtn = document.querySelector(".post-submit");
    this.editBtn = document.querySelector(".edit-submit");
    this.cancelBtn = document.querySelector(".cancel-submit");
    this.currentId = null;
  }

  showPosts(posts) {
    let output = "";

    posts.forEach((post) => {
      output += `
      <div class="card mb-3">
        <div class="card-body">
          <h4 class="card-title">${post.title}</h4>
          <p class="card-text">${post.body}</p>
          <a href="#" class="edit card-link" data-id="${post.id}">
            <i class="fa fa-pencil"></i>
          </a>

          <a href="#" class="delete card-link" data-id="${post.id}">
            <i class="fa fa-remove"></i>
          </a>
        </div>
      </div>
      `;
    });

    this.post.innerHTML = output;
  }

  showAlert(message, className) {
    this.clearAlert();

    const div = document.createElement("div");

    div.className = className;

    div.appendChild(document.createTextNode(message));

    const container = document.querySelector(".postsContainer");

    const posts = document.querySelector("#posts");

    container.insertBefore(div, posts);

    setTimeout(() => {
      this.clearAlert();
    }, 2000);
  }

  getCurrentId() {
    return this.currentId;
  }

  cancelCurrentId() {
    this.currentId = null;
  }

  edit() {
    this.editState.style.display = "flex";
    this.postBtn.style.display = "none";
  }

  cancelEdit() {
    this.titleInput.value = "";
    this.bodyInput.value = "";
    this.editState.style.display = "none";
    this.postBtn.style.display = "flex";
    this.cancelCurrentId();
  }

  editPost(currentPost, id) {
    this.currentId = id;
    this.edit();
    this.titleInput.value = currentPost.title;
    this.bodyInput.value = currentPost.body;
  }

  clearAlert() {
    const currentAlert = document.querySelector(".alert");

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  clearFields() {
    this.titleInput.value = "";
    this.bodyInput.value = "";
    this.cancelCurrentId();
  }
}

export const ui = new UI();
