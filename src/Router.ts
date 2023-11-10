import { Router, Route, RootRoute } from '@tanstack/react-router';
import LandingPage from './pages/LandingPage';
import DefaultLayout from './components/templates/DefaultLayout';

const rootRoute = new RootRoute({ component: DefaultLayout });

const indexRoute = new Route({ getParentRoute: () => rootRoute, path: '/beyond-brand-boosters', component: LandingPage });

const routeTree = rootRoute.addChildren([indexRoute]);

export const router = new Router({ routeTree })

declare module '@tanstack/react-router' {
    interface Register {
        // This infers the type of our router and registers it across your entire project
        router: typeof router
    }
}