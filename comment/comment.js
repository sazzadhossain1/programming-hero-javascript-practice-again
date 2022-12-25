const postButton = document.querySelector(".post-button");

postButton.addEventListener("click", function () {
  const newComment = document.querySelector("#new-comment");
  const userComment = newComment.value;

  const commentDiv = document.querySelector(".comment-div");
  const createP = document.createElement("p");
  commentDiv.appendChild(createP);
  createP.innerText = userComment;

  newComment.value = "";
});
