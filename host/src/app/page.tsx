import styles from './page.module.scss';

export default function Home() {
  const one: any = 10;
  console.log(one, "onesss")

  return (
    <main className={styles.main}>
      <div className={styles.hello}>HI TG apps</div>
    </main>
  );
}
