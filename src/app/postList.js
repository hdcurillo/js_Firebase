const postList = document.querySelector('.posts')

export const setupPosts = (data) => {
    if(data.length){
        let html = ''

        // Recorrer laos posts
        data.forEach(doc => {
            const post = doc.data()
            //console.log(post);
            const li = `
                <li class="list-group-item list-group-item-action list-group-item-dark">
                    <h5>${post.title}</h5>
                    <p>${post.content}</p>
                </li>
            `
            // Añadir a todo a variable html 
            html += li
        });

        postList.innerHTML = html
        //console.log(postList);
    }else {
        postList.innerHTML = '<h3>Inicie Sesion para ver las publicaciones</h3>'
    }
}