import styles from './kyrios-button.module.css';

/* eslint-disable-next-line */
export interface KyriosButtonProps {}

export function KyriosButton(props: KyriosButtonProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to KyriosButton!</h1>
    </div>
  );
}

export default KyriosButton;
