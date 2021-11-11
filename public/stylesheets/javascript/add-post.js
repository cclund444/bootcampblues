// add-post front end javascript code will go in here
async function newFormHandler(event) {
    event.preventDefault();

    // these will change when the html is written out to match the inputs actuall names
    const title = document.querySelector('input[name="post-title"]').value;
    const body = document.querySelector('input[name="post-body"]').value;
    const category_id = document.querySelector('select[name="category"]').value

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            body,
            category_id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
}

//will change to match what the html form is called
document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);