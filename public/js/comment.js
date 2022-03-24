const comment = async (event) => {
    event.preventDefault();

    const postId = document.getElementById('post-title').dataset.id;
    const newComment = document.querySelector('.comment-field').value.trim();

    console.log({ postId, newComment })

    if(newComment.length < 2) {
        alert('Please enter a comment before submitting');
        return;
    };

    const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({ newComment, postId }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.reload();
      } else {
        alert('Please try resubmitting your comment');
      }
}

document.getElementById('comment-form').addEventListener('submit', comment);