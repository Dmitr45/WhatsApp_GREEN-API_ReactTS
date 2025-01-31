import { Routes, Route, Link } from 'react-router-dom';
import { Home } from '@/pages/Home.tsx';
import styles from '@/services/errore404.module.scss';

export function RoutingService() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="*" element={<Page404 />}></Route>
    </Routes>
  );
}

function Page404() {
  //404
  return (
    <div className={styles.Page404}>
      <div className={styles.fof}>
        <h1>Error 404</h1>
        <br />
        <Link to="/">Go to home</Link>
      </div>
    </div>
  );
}
