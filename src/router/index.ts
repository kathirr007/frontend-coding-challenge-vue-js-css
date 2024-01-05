import { createRouter, createWebHistory } from 'vue-router';
import { setupLayouts } from 'virtual:generated-layouts';
import { useNProgress } from '@vueuse/integrations/useNProgress';
import generatedRoutes from '~pages';

const { start: startProgress, done: stopProgress } = useNProgress();
const routes = setupLayouts(generatedRoutes);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});


router.beforeEach(async (to, from, next) => {
  // Add page loading progress bar
  if (to.path) {
    startProgress();
  }
  next();
});


router.afterEach(() => {
  stopProgress();
});

export default router;

