function myFunc(arg) {
    console.log(`arg was => ${arg}`);
  }
  

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const asyncExample = () => {
  let timer = 0
  let arr = ['pertama', 'kedua', 'ketiga']
  for(let i =0;i<3;i++){
      timer = getRandomInt(3000)
      console.log(arr[i],' need this much time to finish: ',timer)
      setTimeout(myFunc, timer, arr[i]);
  }
}

asyncExample()