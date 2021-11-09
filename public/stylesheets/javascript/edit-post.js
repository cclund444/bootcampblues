// edit-post front end javascript code will go in here
async function editFormHandler(event) {
    event.preventDefault();

    // selectors will change to match our html
    const title = document.querySelector('input[name="post-title"]').value.trim();
    const body = document.querySelector('input[name="post-body"]').value.trim();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title,
            body
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
}

// selector will change to match our html
document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);