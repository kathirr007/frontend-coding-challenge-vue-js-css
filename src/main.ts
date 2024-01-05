import app from '@/app';
import router from './router';
import 'nprogress/nprogress.css';
import './styles.scss';

app.use(router);
app.mount('#app');
