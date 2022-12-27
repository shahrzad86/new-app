import Card from "./Card.js";

function App(){
    return(   
    <>
        <header>header</header>
        <section>
          <div className="row">
           <Card />
           <Card />
           <Card />
          </div>
        </section>
        <footer>footer</footer>
    </>
    );
}

export default App