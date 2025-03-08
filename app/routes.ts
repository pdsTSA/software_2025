import {type RouteConfig, index, layout} from "@react-router/dev/routes";

export default [
    layout("./layout/layout.tsx", [
        index("routes/home.tsx")
    ])
] satisfies RouteConfig;
