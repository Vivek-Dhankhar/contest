let p = fetch('https://kontests.net/api/v1/all')
p.then((value)=>{
    return value.json()
}).then((value)=>{
    ihtml = ''
    for(item in value){
        console.log(value[item])

        ihtml += ` <div class="card" style="width: 23rem;">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYSqyQLG47kbTCTb_vv4z5dK3YedZ-kJridw&usqp=CAU" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${value[item].name}</h5>
          <p class="card-text">Start Time : ${value[item].start_time} <br> End Time : ${value[item].end_time} </p>
          <a href="${value[item].url}" class="btn btn-primary">Visit Contest</a>
        </div>
      </div> `
    }
    container.innerHTML  = ihtml
})