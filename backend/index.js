const express = require('express'),
      bodyParser = require('body-parser'), 
      app = express(),
      PORT = 8080,
      cors = require('cors');
 
 
      app.use(cors());

      videoList = require('./data/videoList.json'),      
      videoDetail = require('./data/videoDetail');

const { v4: uuidv4, v4 } = require('uuid');
    
 
app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json())

app.get('/', (req,res) => {
    res.json('app root')
})

app.get('/videos', (req, res) => {
    res.json(videoList)
 })


app.get('/videos/:id', (req, res) => {
    const id = req.params.id;

    const foundVideo = videoDetail.find(video => video.id == id)
     res.json(foundVideo)
})


app.post('/video/add', (req, res)=>{
    videoList.push({...req.body, image: 'https://dev.opera.com/articles/html5-video-flash-fallback-custom-controls/html5-video-basic.jpg', id: uuidv4()})
})

app.delete('/delete', (req, res)=> {
    console.log(req.body)
    const commentId = req.body.id
    const videoId = req.body.videoId

   const foundVideo =  videoDetail.find( item => item.id == videoId )

   const index = foundVideo.comments.findIndex(item => item.id == commentId)

   foundVideo.comments.splice(index , 1)

   res.json(foundVideo.comments)
})

app.listen(PORT, ()=>{
    console.log(`App is running at port ${PORT}`)
})