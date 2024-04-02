export type commonNavigationType = {
  Welcome?: {}
  SignIn?: {}
  SignUp?: {}
}

export type authNavigationType = {
  Home?: {}
  AddTask?: {}
  Tasks?: {}
}

export const routesTitle: Record<keyof authNavigationType, string> = {
  Home: 'Home',
  AddTask: 'Add task',
  Tasks: 'Tasks',
}
