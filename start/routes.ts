import Route from '@ioc:Adonis/Core/Route'

// Users

Route.post('/users', 'UsersController.store')
Route.put('/users/:id', 'UsersController.update')
Route.delete('/users/:id', 'UsersController.destroy')

// Auth
Route.post('/auth', 'AuthController.store')
Route.delete('/auth', 'AuthController.destroy')

// Projects
Route.resource('/projects', 'ProjectsController')
  .apiOnly()
  .middleware({
    index: ['auth'],
    store: ['auth'],
    update: ['auth'],
    destroy: ['auth']
  })

// Sprints
Route.resource('/sprints', 'SprintsController').apiOnly()

// Lists
Route.resource('/lists', 'ListsController').apiOnly()

// Todos
Route.post('/todos', 'TodosController.store')
Route.put('/todos/:id', 'TodosController.update')
Route.delete('/todos/:id', 'TodosController.destroy')
