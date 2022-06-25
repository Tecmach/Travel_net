import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store';


Vue.use(VueRouter)

const routes = [{
        path: '/cotizador',
        name: 'Cotizador',
        component: () =>
            import ('../views/Cotizador.vue'),
        meta: {
            layout: 'DashboardLayout',
            /* isAuthenticated: true */
        }
    },
    {
        path: '/dash',
        name: 'Dash',
        component: () =>
            import ('../views/Dashboard.vue'),
        meta: {

            layout: 'DashboardLayout',
            /* isAuthenticated: true */
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../views/Login'),
        meta: {
            /* isLogout: true */
        }
    },
    {
        path: '/',
        name: 'Home',
        component: () =>
            import ('../views/Home.vue'),
        meta: {
            layout: 'DashboardLayout',
            /* isAuthenticated: true */
        }
    },
    {
        path: '/reservas',
        name: 'Reservaciones',
        component: () =>
            import ('../views/tables/Reservaciones.vue'),
        meta: {
            layout: 'DashboardLayout',
            /* isAuthenticated: true */
        }
    },
    {
        path: '/special',
        name: 'Special',
        component: () =>
            import ('../views/tables/ReservacionesEspeciales.vue'),
        meta: {
            layout: 'DashboardLayout',
            /* isAuthenticated: true */
        }
    },
    {
        path: '/detallespecial',
        name: 'detalleSpecial',
        component: () =>
            import ('../views/ReservacionEspecialDetalle.vue'),
        meta: {
            layout: 'DashboardLayout',
            /* isAuthenticated: true */
        }
    },
    {
        path: '/resultados/:busqueda',
        name: 'Resultados',
        component: () =>
            import ('../views/Resultados.vue'),
        meta: {
            layout: 'DashboardLayout',
            /* isAuthenticated: true */
        }
    },
    {
        path: '/formato',
        name: 'Formato',
        component: () =>
            import ('../views/forms/FormatosReservacion.vue'),
        meta: {
            layout: 'DashboardLayout',
            /* isAuthenticated: true */
        }
    },
    {
        path: '/detalle',
        name: 'Detalle',
        component: () =>
            import ('../views/Detalle_reservation.vue'),
        meta: {
            layout: 'DashboardLayout',
            /* isAuthenticated: true */
        }
    },
    {
        path: '/detalles',
        name: 'Detalles',
        component: () =>
            import ('../views/DetalleReservation.vue'),
        meta: {
            layout: 'DashboardLayout',
            /* isAuthenticated: true */
        }
    },
    {
        path: '/addAgencia',
        name: 'agregarAgencia',
        component: () =>
            import ('../views/forms/AddAgencia.vue'),
        meta: {
            layout: 'DashboardLayout',
            /* isAuthenticated: true */
        }
    },
    {
        path: '/addUsuario',
        name: 'agregarUsuario',
        component: () =>
            import ('../views/forms/AddUsuarioAgencia.vue'),
        meta: {
            layout: 'DashboardLayout',
            /* isAuthenticated: true */
        }
    },
    {
        path: '/contrato',
        name: 'Contrato',
        component: () =>
            import ('../views/forms/Contrato.vue'),
        meta: {
            layout: 'DashboardLayout',
            /* isAuthenticated: true */
        }
    },
    {
        path: '/agencias',
        name: 'Agencias',
        component: () =>
            import ('../views/tables/Agencias.vue'),
        meta: {
            layout: 'DashboardLayout',
            /* isAuthenticated: true */
        }
    },
    {
        path: '/agenciasUsuarios',
        name: 'AgenciasUsuarios',
        component: () =>
            import ('../views/tables/UsuariosDeAgencia.vue'),
        meta: {
            layout: 'DashboardLayout',
            /* isAuthenticated: true */
        }
    },
    {
        path: '/brokers',
        name: 'Brokers',
        component: () =>
            import ('../views/Brokers.vue'),
        meta: {
            layout: 'DashboardLayout',
            /* isAuthenticated: true */
        }
    },
    {
        path: '/design',
        name: 'Design',
        component: () =>
            import ('../views/Diseño.vue'),
        meta: {
            layout: 'DashboardLayout',
            /* isAuthenticated: true */
        }
    },
    {
        path: '/cambio',
        name: 'Cambio',
        component: () =>
            import ('../views/TipoDeCambio.vue'),
        meta: {
            layout: 'DashboardLayout',
            /* isAuthenticated: true */
        }
    },
    {
        path: '/cancelacion',
        name: 'Cancelacion',
        component: () =>
            import ('../views/PoliticaCancelacion.vue'),
        meta: {
            layout: 'DashboardLayout',
            /* isAuthenticated: true */
        }
    },
    {
        path: '/addtypeminor',
        name: 'agregarMenor',
        component: () =>
            import ('../views/forms/AddTipoMenor.vue'),
        meta: {
            layout: 'DashboardLayout',
            /* isAuthenticated: true */
        }
    },
    {
        path: '/addtarifa',
        name: 'addTarifa',
        component: () =>
            import ('../views/forms/AddTarifa.vue'),
        meta: {
            layout: 'DashboardLayout',
            /* isAuthenticated: true */
        }
    },
    {
        path: '/hoteles',
        name: 'Hoteles',
        component: () =>
            import ('../views/tables/Hoteles.vue'),
        meta: {
            layout: 'DashboardLayout',
            /* isAuthenticated: true */
        }
    },
    {
        path: '/addrooms',
        name: 'addHabitacion',
        component: () =>
            import ('../views/forms/AddHabitacion.vue'),
        meta: {
            layout: 'DashboardLayout',
            /* isAuthenticated: true */
        }
    },
    {
        path: '/adddestino',
        name: 'addDestino',
        component: () =>
            import ('../views/forms/AddDestino.vue'),
        meta: {
            layout: 'DashboardLayout',
            /* isAuthenticated: true */
        }
    },
    {
        path: '/addZona',
        name: 'addZona',
        component: () =>
            import ('../views/forms/AddZona.vue'),
        meta: {
            layout: 'DashboardLayout',
            /* isAuthenticated: true */
        }
    },
    {
        path: '/zonadestino',
        name: 'zonaDestino',
        component: () =>
            import ('../views/tables/Destinos.vue'),
        meta: {
            layout: 'DashboardLayout',
            /* isAuthenticated: true */
        }
    },
    {
        path: '/user',
        name: 'user',
        component: () =>
            import ('../views/tables/PermisosDeUsuario.vue'),
        meta: {
            layout: 'DashboardLayout',
            /* isAuthenticated: true */
        }
    },
    {
        path: '/addUser',
        name: 'addUser',
        component: () =>
            import ('../views/forms/AddUser.vue'),
        meta: {
            layout: 'DashboardLayout',
            /* isAuthenticated: true */
        }
    },
    {
        path: '/reportes',
        name: 'Reportes',
        component: () =>
            import ('../views/Reporte.vue'),
        meta: {
            layout: 'DashboardLayout',
            /* isAuthenticated: true */
        }
    },
    {
        path: '/addbanco',
        name: 'AddBanco',
        component: () =>
            import ('../views/forms/AddBancos.vue'),
        meta: {
            layout: 'DashboardLayout',
            /* isAuthenticated: true */
        }
    },
    {
        path: '/cuentapagar',
        name: 'CuentaPagar',
        component: () =>
            import ('../views/tables/CuentasPagar.vue'),
        meta: {
            layout: 'DashboardLayout',
            /* isAuthenticated: true */
        }
    },
    {
        path: '/cuentacobrar',
        name: 'CuentaCobrar',
        component: () =>
            import ('../views/tables/CuentasCobrar.vue'),
        meta: {
            layout: 'DashboardLayout',
            /* isAuthenticated: true */
        }
    },
    {
        path: '/bancos',
        name: 'Bancos',
        component: () =>
            import ('../views/tables/Bancos.vue'),
        meta: {
            layout: 'DashboardLayout',
            /* isAuthenticated: true */
        },
    },
    {
        path: '/detallehotel/',
        name: 'detalleHotel',
        component: () =>
            import ('../views/forms/AddHotel.vue'),
        meta: {
            layout: 'DashboardLayout'
                /* isAuthenticated: true */
        },
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});


router.beforeEach(async(to, from, next) => {

    if (to.meta.isAuthenticated) {

        await store.dispatch('auth/userme');
        if (!store.getters["auth/getUser"]) {
            next('/login')
        } else {
            next();
        }
    } else {
        next();
    }


    if (to.meta.isLogout) {
        if (store.getters["auth/getUser"]) {
            next('/');
        } else {
            next();
        }
    } else {
        next();
    }

})

export default router