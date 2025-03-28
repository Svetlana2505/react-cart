import './_vars.scss';
import './_reset.scss';
import './_base.scss';
import './_section-cart.scss';
import { Title } from 'components/Title';
import { Cart } from 'components/Cart';

export const App = () => {
  return (
    <section className="section-cart">
      <div className="container">
        <header className="header">
          <Title />
        </header>
        <div className="content">
          <Cart />
        </div>
      </div>
    </section>
  );
};
