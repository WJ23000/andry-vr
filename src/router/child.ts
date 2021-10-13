const childRouter = [
  {
    path: "/car",
    name: "car",
    component: () => import("@/views/car/Index.vue"),
    meta: {
      auth: false,
      header: true
    },
  },
  {
    path: "/house",
    name: "house",
    component: () => import("@/views/house/Index.vue"),
    meta: {
      auth: false,
      header: true
    },
  }
];

export { childRouter };
