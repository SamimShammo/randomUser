const getUser = () => {
    fetch('https://randomuser.me/api/?results=100')
        .then(res => res.json())
        .then(data => myData(data))
}
getUser();
const myData = data => {
    console.log(data.results[0].location);

    const result = data.results;
    const container = document.getElementById('user')
    result.forEach(result => {
        const div = document.createElement('div')
        div.classList.add('userName')
        div.innerHTML = `<h1> ${result.location.city}</h1> <h2>${result.registered.age}</h2><h2>${result.location.coordinates.latitude}</h2><h2 >${result.phone}</h2> <h2>${result.dob.date}</h2> <img src="${result.picture.medium}" alt=""</img>`
        container.appendChild(div)
    });
    // const result = data.results[0]
    // console.log(result.location.city)

}