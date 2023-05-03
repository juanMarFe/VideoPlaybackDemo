Page({
  data(){
    return {
      video:{
        src:"https://document-center.api-object.bluvalt.com:8082/quotation/bf56b39ab7fa4b70b55e0da8aaddd029/ailibaba_xftLeQ1C.mp4?AWSAccessKeyId=FJ4VUXM3GD1RZV6X82K3&Expires=3239399852&Signature=nctKRiN2i985%2B2HHCKN%2B7%2FCGf3A%3D",
        // showAllControls:false,
        // showPlayButton: false,
        // showCenterButton: true,
        // showFullScreenButton: true,
        // isLooping: false,
        // muteWhenPlaying: false,
        // initTime: 0,
        // objectFit: 'contain',
        // autoPlay: false,
        // directionWhenFullScreen: 90,
        // mobilenetHintType: 2,
      },
      video2:{
      }
    }
  },
  onPlay(e) {
    console.log('onPlay');
  },
  onPause(e) {
    console.log('onPause');
  },
  onEnded(e) {
    console.log('onEnded');
  },
  onPlayError(e) {
    console.log('onPlayError, e=' + JSON.stringify(e));
  },
  onTimeUpdate(e) {
    console.log('onTimeUpdate:', e.detail.currentTime);
  },
  onLoad(query) {
    // this.setData({getUserInfoDirectry})
    const a = new Date('2015-11-11').toString()
    console.log(a)
    this.setData({timeTest:a})
    console.log(my.getUserInfoDirectry);
    // Page load
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);
  },
  onReady() {
    // Page loading is complete
  },
  onShow() {
    // Page display
  },
  onHide() {
    // Page hidden
  },
  onUnload() {
    // Page is closed
  },
  onTitleClick() {
    // Title clicked
  },
  onPullDownRefresh() {
    // Page is pulled down
  },
  testClick(){
    // my.ap.openURL('https://render.alipay.com')
    console.log('test')
    my.navigateBackMiniProgram({
      appId: 'xxxx',
      extraData:{
        "data1":"test"
      },
      success: (res) => {
        console.log(JSON.stringify(res))
      },
      fail: (res) => {
        console.log(JSON.stringify(res))
      }
    })
  },
  onReachBottom() {
    // Page is pulled to the bottom
  },
  onShareAppMessage() {
    // Back to custom sharing information
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
  getVideo(){
    my.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 30,
      camera: 'back',
      compressed: false,
      success: res => {
        // 该路径可用来播放视频
        const videoPath = res.tempFilePath;
        this.setData({video2:{src:videoPath}})
        console.log(`videoPath = ${videoPath}`);
      },
    });
  }
});
