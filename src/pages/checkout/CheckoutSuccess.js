import { Link } from "react-router-dom";
import styles from './CheckoutSuccess.module.scss';

const CheckoutSuccess = () => {
  return (
    <section className={styles.custom}>
      <div className="container">
        <h2>Checkout Successful</h2>
        <p>Thank you for your purchase</p>
        <br />

        <button className="--btn --btn-primary">
          <Link to="/order-history">View Order Status</Link>
        </button>
      </div>
    </section>
  );
};

export default CheckoutSuccess;
