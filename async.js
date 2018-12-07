function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


function getDataThatNeedTime(timer, arg) { 
    return new Promise(function (resolve, reject) { 
        setTimeout(function () { 
            resolve(`this is response from => ${arg}`);
        }, timer);
    });
}

const asyncAwait = async () => {
    let timer = 0
    let arr = ['pertama', 'kedua', 'ketiga']
    for (let i = 0; i < 3; i++) {
        timer = getRandomInt(3000)
        console.log(arr[i], 'need this much time to finish: ', timer)
        let res = await getDataThatNeedTime(timer, arr[i])
        console.log(res)
        console.log('-------------------------------------')
    }
}

asyncAwait()