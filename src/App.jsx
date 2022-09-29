import styles from "./style";
import {
  Billing,
  About,
  CardDeal,
  Clients,
  Contacts,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Test,
  Hero,
  Portfolio,
} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <Stats /> */}
        <About />
        {/* <Business /> */}
        {/* <Billing /> */}
        <Portfolio />
        {/* <CardDeal /> */}
        <Testimonials />
        {/* <Test className='md:hidden'/> */}
        <Clients />
        <Contacts />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
