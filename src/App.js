import React from 'react';
import PageGrid from './components/PageGrid';
import MainGrid from './components/MainGrid';

function App() {
  return (
    <div className="App">
      <PageGrid>
        <header id="header">

        </header>
        <main id="main">
          <MainGrid>
            <div className="grid-square three_two date-time">
              <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <p className="day">FRIDAY</p>
                <p className="date">AUGUST 8TH</p>
                <p className="time">2:13 PM</p>
              </div>
            </div>
            <div className="grid-square two">2</div>
            <div className="grid-square three">3</div>
            <div className="grid-square four">4</div>
            <div className="grid-square five">5</div>
          </MainGrid>
        </main>

      </PageGrid>
    </div>
  );
}

export default App;
