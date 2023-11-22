import styles from '../assets/scss/components/image-row.module.scss';

export default function BlockImageRow({ children }) {
  return (
    <>
      <div className={ styles.image_row }>
        { children }
      </div>
    </>
  );
}