export function renderPet(pet) {
    const li = document.createElement('li');

    // > Part C: set the image url, name, and bio on
    // the right elements below:
    const a = document.createElement('a');
    a.href = `/pet/?id=${pet.id}`;

    const img = document.createElement('img');
    img.src = pet.image_url;

    const h2 = document.createElement('h2');
    h2.textContent = pet.same;

    const p = document.createElement('p');
    p.textContent = pet.bio;

    a.append(img, h2, p);
    li.append(a);

    return li;
}
