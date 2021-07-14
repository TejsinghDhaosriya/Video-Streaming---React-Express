Video Streamming# Video-Streaming---React-Express


# video streaming service using Node & react.
# 1. It should stream video in chunks (1mb per request); it is configurable --implemented.
# 2. It should be fault tolerant, consider if the internet connection goes off --yes on when network resume , video will resume.
# 3. Consider we refresh the page; the video should resume from where we left off .
  ##   http://playerjs.io/resume.html , here it is implemented using local storage , but need to find better approch in future.
# 4. Feature to forward and backward the video, change volume using keyboard arrow keys. -- iimplemented
# 5. Feature to play, pause and resume.  --implemented