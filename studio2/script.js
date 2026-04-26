let globalData;

async function getData(){
    const myData = await fetch('data/data.json');
    const data = await myData.json();

    globalData = data;
    document.querySelector('#picker').innerHTML = createSelectList(data);

}


//dropdown
function createSelectList(data){
    let html = '<option value="">select <3</option>';
    data.events.forEach(function (event, index) {
        html += `<option value ="${index}"> ${event.date}</option>`;
    });
    return html;
}

//listens to change when dropdown selected 
document.querySelector('#picker').addEventListener('change', function(){
    const newValue = this.value;
    updateInterface(newValue, globalData);
});

//updates page when dropdown is selected
function updateInterface(index, data){
    //console.log(value);
    if(index === "") return;

    const event = data.events[index];

    document.querySelector('.rightsidetext h1').textContent = event.title;
    document.querySelector('.rightsidetext p').textContent = event.description;

    document.querySelector('.rightsideimg img').src = event.image;
}

getData();