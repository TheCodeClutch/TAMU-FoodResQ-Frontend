fetch('https://tamuhack21.herokuapp.com/utility/user/profile', {
    method: 'POST',
    headers: {
        'Authorization': localStorage.getItem('token'),
        'content-type': 'application/json'
    },
    body: JSON.stringify({})
})
.then(res => res.json())
.then(res => {
    let content = ``
    res.message.forEach((ele, index) => {
        content = content + `
        <div
            style="border: 2px solid transparent; border-radius: 10px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">

            <div class="row" style="margin-top:30px;">
                <div class="col-lg-2"></div>
                <div class="col-lg-8">
                    <div class="row" style="text-align: center;">
                        <div class="col-6">${ele[0].DATE}</div>
                        <div class="col-6">${ele[0].TIME_OPEN} to ${ele[0].TIME_CLOSE}</div>
                    </div>
                </div>
                <div class="col-2"></div>
            </div>
            <div class="row" style="margin-top:30px;">
                <div class="col-lg-2"></div>
                <div class="col-lg-8">
                    <ul type="none" style="text-align: center;">`



            ele[0].FOOD.forEach(e => {
                content = content + `<li>${e.NAME} - ${e.WEIGHT} kg</li>`
            })

  
               content = content +      `</ul>
                </div>
                <div class="col-2"></div>
            </div>


            <div class="row text-center" style="margin-top: 50px;">
                <div class="col-12" style="padding-bottom:30px;">
                    <h5>Did the restaurant accept your request?</h5>
                </div>
                <div class="col-lg-2"></div>
                <div class="col-lg-8">
                    <div class="row" style="margin-bottom: 50px;">
                        <div class="col-6">
                            <button id="userprofile-yes">Yes</button>
                        </div>
                        <div class="col-6">
                            <button id="userprofile-no">No</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>`
    })
    document.getElementById('post-container').innerHTML = content
})
.catch(err => {
    console.log(err)
})