import React from 'react';
import Speech from 'react-text-to-speech';

 function TtsTest() {
    const startBtn = <button className='my-start-btn'>Start Speech</button>
    const pauseBtn = <button className='my-pause-btn'>Pause Speech</button>
    const stopBtn = <button className='my-stop-btn'>Stop Speech</button>

    return <Speech 
        text='김진서 백예은 신지수 파이팅! 점자점차 파이팅! 피카츄 라이츄파이팅'
        pitch={1}
        rate={1}
        volume={0.5}
        startBtn={startBtn}
        pauseBtn={pauseBtn}
        stopBtn={stopBtn}
        props={{ title: 'React Text-To-Speech Component' }}
        onError={() => console.error('Browser not supported!')}
    />
}export default TtsTest;