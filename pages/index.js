import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Welcome to My Next.js App</h1>
        <p>This is the homepage of your Next.js application.</p>
      </div>
    </Layout>
  );
}