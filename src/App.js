import './App.css';
import './style.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {


  return (
    <div className="App">
      <div className="topbar-container">
        <Header />
      </div>
      
      <div className="body">
        <img src="./perfil.jpg" className="imagen" alt='imagen-perfil'/>
        <div className="body-left">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel dui mollis mi sagittis pulvinar vitae vel turpis. Sed vel dui id sem bibendum convallis. Vestibulum tempus tortor mauris, sit amet efficitur mauris blandit vel. Nunc mattis eu nisl quis suscipit. Cras non gravida mauris, tincidunt eleifend augue. Integer interdum vulputate imperdiet. Nulla justo ligula, imperdiet a nibh euismod, sagittis laoreet urna. In quis est arcu. Vivamus at tortor vitae nulla blandit fringilla. Suspendisse ac mollis tellus. Sed et arcu orci. Mauris sodales libero eu massa porta commodo. Suspendisse luctus est vitae urna blandit pulvinar. Curabitur maximus commodo ornare. In magna erat, posuere sagittis nisl quis, ultricies ultrices mauris.</p>
          <p>Pellentesque eget ante nec elit blandit dapibus. Etiam ante nulla, molestie nec risus sed, commodo tempus nisi. Maecenas sed enim at lectus commodo iaculis a ac tellus. Proin mattis aliquet ligula a sollicitudin. Suspendisse potenti. Aliquam consectetur tristique turpis at vulputate. Morbi elit quam, interdum vitae iaculis a, finibus eget massa. Aliquam efficitur tortor at scelerisque faucibus. Integer pulvinar faucibus felis et cursus. Sed et venenatis lacus. Nulla consequat elit erat, in malesuada arcu vehicula et. Aenean tempor dignissim urna id maximus. Nunc a leo sit amet felis porttitor viverra. Nulla vel urna gravida, lacinia nisl id, lacinia magna. Proin dui mi, convallis a tincidunt id, rhoncus eu magna. Nunc maximus arcu sit amet risus bibendum vestibulum.</p>
          <p>In libero nisl, feugiat quis ultricies nec, semper eu ipsum. Nunc ipsum tortor, dignissim nec viverra sed, eleifend id dolor. Nullam nec cursus urna. Vivamus sed elit gravida, elementum tellus vel, mollis dui. Etiam pharetra leo et nisl porttitor, eu pellentesque ante convallis. Pellentesque varius viverra pellentesque. Nullam efficitur ac ex ac mattis. Phasellus a tortor ornare, accumsan lorem id, scelerisque nisi. Nulla aliquet, odio vitae tempus scelerisque, sem nibh iaculis dolor, ut hendrerit orci turpis vel ante.</p>
          <p>Aliquam blandit id nisl sed auctor. Sed vitae risus felis. Aliquam venenatis lacus nec malesuada imperdiet. Curabitur at suscipit est. Praesent fringilla finibus ex, et congue eros interdum et. Nunc tellus neque, laoreet eget sodales nec, hendrerit at nibh. Phasellus feugiat, ligula non lacinia hendrerit, tortor orci faucibus velit, id consequat arcu eros ut felis.</p>
          <p>Donec auctor libero eu velit pellentesque, et luctus lectus pellentesque. Maecenas tincidunt metus vitae velit maximus pellentesque. Fusce bibendum eleifend sem volutpat ultrices. Donec tempor auctor purus, ut finibus felis. Proin quis ex at elit pulvinar elementum. Aliquam non purus eu neque fringilla eleifend. Nulla quis elit ut odio viverra volutpat sit amet et mi. Aliquam ultrices sed sem sagittis dictum. Quisque hendrerit feugiat libero, at scelerisque lectus dignissim vel. Vestibulum tincidunt accumsan nisi ac placerat. Vestibulum sit amet massa erat. Morbi in gravida velit, ut facilisis tortor. Nulla egestas ullamcorper ipsum, et tempor nunc ornare sit amet. Nulla nunc justo, pellentesque consectetur sem eget, pellentesque vulputate sem. Aliquam sit amet quam eu orci ullamcorper varius.</p>
        </div>       
      </div>
      <Footer />
    </div>
  );
}

export default App;