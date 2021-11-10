async function categoryLinkHandler(event) {
    event.preventDefault();

    const response = await fetch(`/categories/${id}`, {
        method: 'GET',
        include: {
            model: Post,
            attributes: ['title'],
            where: {
                category_id: req.params.category_id
            }
        },
        
        headers: { 'Content-Type': 'application/json'}
    });

    if (response.ok) {
        document.location.replace('/single-category');
        console.log('here is the response:' + response)
    } else {
        alert(response.statusText)
    }
}

document.querySelector('#cat-link').addEventListener('click', categoryLinkHandler);