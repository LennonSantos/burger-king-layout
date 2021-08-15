
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('pages/Login.vue'),
        meta: {
          pageName: 'Login'
        }
      },
      {
        path: 'ganhadores',
        name: 'ganhadores',
        component: () => import('pages/Ganhadores.vue'),
        meta: {
          pageName: 'Ultimos Ganhadores'
        }
      },
      {
        path: 'apostas',
        name: 'apostas',
        component: () => import('pages/Apostas.vue'),
        meta: {
          pageName: 'Seus Jogos'
        }
      },
      {
        path: 'cadastro',
        name: 'cadastro',
        component: () => import('pages/Cadastro.vue'),
        meta: {
          pageName: 'Cadastre-se'
        }
      },
      {
        path: 'conta',
        name: 'conta',
        component: () => import('pages/Conta.vue'),
        meta: {
          pageName: 'Minha Conta'
        }
      },
      {
        path: 'apostar',
        name: 'apostar',
        component: () => import('pages/Apostar.vue'),
        meta: {
          pageName: 'Fazer Jogo'
        }
      },
      { path: '', name: 'index', component: () => import('pages/Index.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
