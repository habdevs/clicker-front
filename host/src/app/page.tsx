import styles from './page.module.scss';

export default function Home() {
  const one: any = 0;
  console.log(one, "ones")
  return (
    <main className={styles.main}>
      <div className={styles.hello}>HI TG apps</div>
    </main>
  );
}
