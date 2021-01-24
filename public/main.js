let request = new XMLHttpRequest()
request.open("GET","http://qq.com:8881/qq.json")
request.onreadystatechange =()=>{
    if(request.readyState == 4){
        if(request.status>=200 && request.status <300){
            console.log("拿到数据啦:", request.response)
        }
    }
}
request.send()
