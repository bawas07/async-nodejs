function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


// function getDataThatNeedTime(timer, arg) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve(`this is response from => ${arg}`);
//         }, timer);
//     });
// }

function getDataThatNeedTime(timer, arg, callback) {
    setTimeout(function () {
        callback(`this is response from => ${arg}`);
    }, timer);
}

const asyncAwait = async () => {
    let timer = 0
    let arr = ['pertama', 'kedua', 'ketiga']

    timer = getRandomInt(3000)
    console.log(arr[0], 'need this much time to finish: ', timer)
    getDataThatNeedTime(timer, arr[0], (res) => {
        console.log(res)
        console.log('-------------------------------------')
        console.log(arr[1], 'need this much time to finish: ', timer)
        getDataThatNeedTime(timer, arr[1], (res) => {
            console.log(res)
            console.log('-------------------------------------')
            console.log(arr[2], 'need this much time to finish: ', timer)
            getDataThatNeedTime(timer, arr[2], (res) => {
                console.log(res)
            })
        })
    })

}

asyncAwait()