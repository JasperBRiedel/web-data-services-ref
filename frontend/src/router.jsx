import { createBrowserRouter } from "react-router-dom"
import Animals from "./pages/Animals"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Register from "./pages/Register"
import SightingInfo from "./pages/SightingInfo"
import Sightings from "./pages/Sightings"
import Trails from "./pages/Trails"
import { RestrictedRoute } from "./components/RestrictedRoute"
import Users from "./pages/Users"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/dashboard",
        element: <Dashboard />
    },
    {
        path: "/animals",
        element: <RestrictedRoute allowedRoles={["admin", "moderator"]}>
            <Animals />
        </RestrictedRoute>
    },
    {
        path: "/trails",
        element: <RestrictedRoute allowedRoles={["admin", "moderator"]}>
            <Trails />
        </RestrictedRoute>
    },
    {
        path: "/sightings",
        element: <Sightings />
    },
    {
        path: "/sightings/:sightingID",
        element: <SightingInfo />
    },
    {
        path: "/users",
        element: <RestrictedRoute allowedRoles={["admin"]} >
            <Users />
        </RestrictedRoute >
    },
    {
        path: "/register",
        element: <Register />

    }
])

export default router