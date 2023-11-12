import { Router, Route, RootRoute } from '@tanstack/react-router';
import DefaultLayout from './components/templates/DefaultLayout';
import LandingPage from './pages/LandingPage';
import PricingPage from './pages/PricingPage';
import AboutUsPage from './pages/AboutUsPage';

const rootRoute = new RootRoute({ component: DefaultLayout });

export const indexRoute = new Route({ getParentRoute: () => rootRoute, path: '/beyond-brand-boosters' });
export const landingRoute = new Route({ getParentRoute: () => indexRoute, path: '/', component: LandingPage });
export const pricingRoute = new Route({ getParentRoute: () => indexRoute, path: '/pricing', component: PricingPage });
export const aboutUsRoute = new Route({ getParentRoute: () => indexRoute, path: '/about-us', component: AboutUsPage });

const routeTree = rootRoute.addChildren([indexRoute.addChildren([landingRoute, aboutUsRoute, pricingRoute])]);

export const router = new Router({ routeTree })

declare module '@tanstack/react-router' {
    interface Register {
        // This infers the type of our router and registers it across your entire project
        router: typeof router
    }
}