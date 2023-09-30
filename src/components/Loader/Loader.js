import css from './Loader.module.css';
import loader from '../Images/loader.jpg';

export const Loader = () => {
  return (
    <section>
      <div className={css.wrapper}>
        <img src={loader} alt="beautyful сow in сurlers" />
      </div>
      <div className={css.loader}>
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>

        <div className={css.covers}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
};
