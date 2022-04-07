async function postBlog(e){
    e.preventDefault();
    try {
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
        }
        
        const response = await fetch('http://localhost:3000/', options);
        const { id, err } = await response.json();
        if(err) { 
            throw Error(err) 
        } else {
            window.location.hash = `/${id}`
        }
    } catch (err) {
        console.warn(err);
    }
}


// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const formData = new FormData(form);
//     const name = formData.get('name');
//     const title = formData.get('title');
//     const post = formData.get('post');
//     const blog = {
//         title,
//         name,
//         post
//     };
//     fetch(API_URL, {
//         method: 'POST',
//         body: JSON.stringify(blog),
//         headers: {
//             'content-type': 'application/json'
//         }})
//     })

// even listener we added but also tried the function shown above as the assignement did