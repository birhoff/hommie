import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <!-- Yandex.Metrika counter -->
          <script type="text/javascript" >
              (function (d, w, c) {
              (w[c] = w[c] || []).push(function() {
                  try {
                      w.yaCounter50198683 = new Ya.Metrika2({
                          id:50198683,
                          clickmap:true,
                          trackLinks:true,
                          accurateTrackBounce:true
                      });
                  } catch(e) { }
              });

              var n = d.getElementsByTagName("script")[0],
              s = d.createElement("script"),
              f = function () { n.parentNode.insertBefore(s, n); };
              s.type = "text/javascript";
              s.async = true;
              s.src = "https://mc.yandex.ru/metrika/tag.js";

              if (w.opera == "[object Opera]") {
              d.addEventListener("DOMContentLoaded", f, false);
          } else { f(); }
          })(document, window, "yandex_metrika_callbacks2");
          </script>
          <noscript><div><img src="https://mc.yandex.ru/watch/50198683" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
          <!-- /Yandex.Metrika counter -->
      </div>
    );
  }
}

export default App;
