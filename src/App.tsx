import { useEffect, useRef } from 'react';
import './App.css';
import Bingo from "./assets/image/BINGO.jpg"

function App() {
  const inputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ShowNumberGenerated(5);
  }, []);

  const ShowNumberGenerated = (number: Number) => {
    const generateNumberId = document.getElementById(`teste-${number}`);

    if (generateNumberId) {
      generateNumberId.style.color = 'red';
    }

  }

  return (
    <div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 90, top: 350 }} id='teste-1'>
        1
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 90, top: 470 }} id='teste-2'>
        2
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 90, top: 600 }} id='teste-3'>
        3
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 90, top: 720 }} id='teste-4'>
        4
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 90, top: 850 }} id='teste-5'>
        5
      </div>

      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 220, top: 350 }} id='teste-6'>
        6
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 220, top: 470 }} id='teste-7'>
        7
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 220, top: 600 }} id='teste-8'>
        8
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 220, top: 720 }} id='teste-9'>
        9
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 205, top: 850 }} id='teste-10'>
        10
      </div>

      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 335, top: 350 }} id='teste-11'>
        11
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 335, top: 470 }} id='teste-12'>
        12
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 335, top: 600 }} id='teste-13'>
        13
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 335, top: 720 }} id='teste-14'>
        14
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 335, top: 850 }} id='teste-15'>
        15
      </div>

      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 480, top: 350 }} id='teste-16'>
        16
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 480, top: 470 }} id='teste-17'>
        17
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 480, top: 600 }} id='teste-18'>
        18
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 480, top: 720 }} id='teste-19'>
        19
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 480, top: 850 }} id='teste-20'>
        20
      </div>

      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 610, top: 350 }} id='teste-21'>
        21
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 610, top: 470 }} id='teste-22'>
        22
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 610, top: 600 }} id='teste-23'>
        23
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 610, top: 720 }} id='teste-24'>
        24
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 610, top: 850 }} id='teste-25'>
        25
      </div>

      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 740, top: 350 }} id='teste-26'>
        26
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 740, top: 470 }} id='teste-27'>
        27
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 740, top: 600 }} id='teste-28'>
        28
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 740, top: 720 }} id='teste-29'>
        29
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 740, top: 850 }} id='teste-30'>
        30
      </div>

      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 880, top: 350 }} id='teste-31'>
        31
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 880, top: 470 }} id='teste-32'>
        32
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 880, top: 600 }} id='teste-33'>
        33
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 880, top: 720 }} id='teste-34'>
        34
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 880, top: 850 }} id='teste-35'>
        35
      </div>

      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 1015, top: 350 }} id='teste-36'>
        36
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 1015, top: 470 }} id='teste-37'>
        37
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 1015, top: 600 }} id='teste-38'>
        38
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 1015, top: 720 }} id='teste-39'>
        39
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 1015, top: 850 }} id='teste-40'>
        40
      </div>

      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 1145, top: 350 }} id='teste-41'>
        41
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 1145, top: 470 }} id='teste-42'>
        42
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 1145, top: 600 }} id='teste-43'>
        43
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 1145, top: 720 }} id='teste-44'>
        44
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 1145, top: 850 }} id='teste-45'>
        45
      </div>

      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 1290, top: 350 }} id='teste-46'>
        46
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 1290, top: 470 }} id='teste-47'>
        47
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 1290, top: 600 }} id='teste-48'>
        48
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 1290, top: 720 }} id='teste-49'>
        49
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 1290, top: 850 }} id='teste-50'>
        50
      </div>

      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 1425, top: 350 }} id='teste-51'>
        51
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 1425, top: 470 }} id='teste-52'>
        52
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 1425, top: 600 }} id='teste-53'>
        53
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 1425, top: 720 }} id='teste-54'>
        54
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 1425, top: 850 }} id='teste-55'>
        55
      </div>

      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 1555, top: 350 }} id='teste-56'>
        56
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 1555, top: 470 }} id='teste-57'>
        57
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 1555, top: 600 }} id='teste-58'>
        58
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 1555, top: 720 }} id='teste-59'>
        59
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 1555, top: 850 }} id='teste-60'>
        60
      </div>

      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 1700, top: 350 }} id='teste-61'>
        61
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 1700, top: 470 }} id='teste-62'>
        62
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 1700, top: 600 }} id='teste-63'>
        63
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 1700, top: 720 }} id='teste-64'>
        64
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 1700, top: 850 }} id='teste-65'>
        65
      </div>

      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 1835, top: 350 }} id='teste-66'>
        66
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 1835, top: 470 }} id='teste-67'>
        67
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 1835, top: 600 }} id='teste-68'>
        68
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 1835, top: 720 }} id='teste-69'>
        69
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 1835, top: 850 }} id='teste-70'>
        70
      </div>

      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 1970, top: 350 }} id='teste-71'>
        71
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 1970, top: 470 }} id='teste-72'>
        72
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 1970, top: 600 }} id='teste-73'>
        73
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 1970, top: 720 }} id='teste-74'>
        74
      </div>
      <div ref={inputRef} className='teste' style={{ position: 'absolute', color: '#F2EBD8', left: 1970, top: 850 }} id='teste-75'>
        75
      </div>

      <img style={{ height: '100vh', width: '100%' }} src={Bingo} alt="Bingo" />
    </div>
  );
}

export default App;
