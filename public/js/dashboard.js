// add a new post
const addPost = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#new-post-title').value.trim();
    const content = document.querySelector('#new-post').value.trim();

    if(content.length < 2 || title.length < 2) {
        alert('Please enter a complete title and post content');
        return;
    };

    const response = await fetch('/api/dashboard', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' }
      });
      
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Post could not be added, please try again');
      }
    }

document.querySelector('#new-post-form').addEventListener('submit', addPost);

  


// update a post
const updatePost = async (event) => {
    event.preventDefault();

    const postId = event.target.dataset.id;
    const content = event.target.parentNode.children[0].textContent;

    // content.contentEditable = true;
        
    const response = await fetch(`/api/dashboard/${postId}`, {
         method: 'PUT',
         body: JSON.stringify({ content }),
         headers: { 'Content-Type': 'application/json' }
       });
      
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Post could not be updated, please try again');
      }
    }

document.querySelectorAll('.post-update').forEach(function(btn) {
    btn.addEventListener('click', updatePost)
});


// delete a post

const deletePost = async (event) => {
    event.preventDefault();

    const postId = event.target.dataset.id
        
    const response = await fetch(`/api/dashboard/${postId}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Post could not be deleted, please try again');
      }
    }

document.querySelectorAll('.post-delete').forEach(function(btn) {
    btn.addEventListener('click', deletePost)
    });