import pizzaData from "./data";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = {
  //   color: "red",
  //   fontSize: "48px",
  //   textTransform: "upperacase",
  // };

  return (
    <header className="header footer">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );

  // return <h1 style={style}>Fast React Pizza Co.</h1>;
  // if we want to write inline then write style = {{color: "red"}}
}

function Menu() {
  const pizzas = pizzaData;
  return (
    <>
      <main className="menu">
        <h2>Our Menu</h2>
        {/* <Pizza
          name="Pizza Spinaci"
          ingredient="Tomato, mozrella, spinach and ricotta cheese"
          photoName="pizzas/spinaci.jpg"
          price={1000}
          alt="Spinaci_image"
        />
        <Pizza
          name="Pizza Fungi"
          ingredient="Tomato, mushroom etc"
          photoName="pizzas/funghi.jpg"
          price={500}
          alt="Funghi_image"
        /> */}

        {/* {pizzas && (
          <ul className="pizzas">
            {pizzaData.map((obj) => {
              return <Pizza pizzaObj={obj} key={obj.name} />;
            })}
          </ul>
        )} */}

        {pizzas ? (
          <ul className="pizzas">
            {pizzaData.map((obj) => {
              return <Pizza pizzaObj={obj} key={obj.name} />;
            })}
          </ul>
        ) : (
          <h2>No pizzas available. Out of stock :(</h2>
        )}
      </main>
    </>
  );
}

function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null;

  return (
    <>
      {/* we can also use template literal here */}
      <li className={pizzaObj.soldOut ? "pizza sold-out" : "pizza"}>
        <img src={pizzaObj.photoName} alt={pizzaObj.name} />
        <div>
          <h3>{pizzaObj.name}</h3>
          <p>{pizzaObj.ingredients}</p>
          <span>{pizzaObj.soldOut ? "Sold Out" : "$ " + pizzaObj.price}</span>
        </div>
      </li>
    </>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHours = 12;
  const closeHour = 22;
  const isOpen = hour >= openHours && hour <= closeHour;

  // This is preferable when we have to render multiple components based on a condition, not preferable in simply returning JSX.
  // if (!isOpen) {
  //   return <p>We are closed, restraunt opens at {openHours}:00.</p>;
  // }

  return (
    <>
      <div className="footer">
        <div className="order">
          {/* {isOpen && <p>Open</p>} */}
          {isOpen ? (
            <Order closeHour={closeHour} />
          ) : (
            <p>We are closed, restraunt opens at {openHours}:00.</p>
          )}
        </div>
      </div>
    </>
  );
}

function Order(props) {
  return (
    <>
      <p>
        We are open until {props.closeHour}:00. Come visit us or order online.
      </p>
      <button className="btn">Order</button>
    </>
  );
}

export default App;
