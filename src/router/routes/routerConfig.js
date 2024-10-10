import routerNames from "./routerNames";
import PageUsers from "../pages/PageUsers";
import PageNotFound from "../pages/PageNotFound";
import PageEditUsers from "../pages/PageEditUsers";


const routerConfig = () => {
    const pageComponents = [
        PageUsers,
        PageNotFound,
        PageEditUsers,
    ];
    const routeKeys = Object.keys(routerNames);

    if (pageComponents.length !== routeKeys.length) {
        console.error("The number of routes and components do not match.");
        return [];
    }

    return pageComponents.map((pageComponent, index) => {
        const keyName = routeKeys[index];
        return {
            path: routerNames[keyName],
            component: pageComponent,
            id: index,
        }
    });
}

export default routerConfig;