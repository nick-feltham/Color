import React from 'react';

const colors = ['#563D7C', '#FF655F', '#A2A9F7','#3CCBB3', '#D5FFFB','#EBF2F2', '#F8FFFF']
const fontSize = ['14px' , '16px', '18px', '20px', '26px', ' 30px']
const fontColor = '#3CCBB3'

function App() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr', gridTemplateRows: '1fr', border: '1px solid black' }}>
      {
        colors.map(color => {
          console.log(color)
          return (
            <div key={color} style={{ backgroundColor: `${color}`, width: '100%', height: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto', border: 'none' }}>
              {
                fontSize.map(size => {
                  return (
                    <>
                    <div>
                    <p style={{color: `${fontColor}`, fontSize: `${size}`, fontWeight: '700'  }}>{color}</p>
                    </div>
                    <div>
                    <p style={{color: '#F8FFFF', fontSize: `${size}`, fontWeight: '700', textAlign: 'center'}}>{color}</p>
                    </div>
                    </>
                  )
                })              
              }
            </div>
          )
        })
      }
      </div>
  );
}

export default App;
