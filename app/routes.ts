import {type RouteConfig, index, layout, route} from "@react-router/dev/routes";

export default [
    layout("./layout/layout.tsx", [
        index("routes/home.tsx"),
        route("/map", 'routes/map.tsx'),
        route("/projects", 'routes/projects.tsx'),
        route("/about", 'routes/about.tsx'),
    ])
] satisfies RouteConfig;
