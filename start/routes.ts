import Route from '@ioc:Adonis/Core/Route'

Route.resource('/projects', 'ProjectsController').apiOnly()

Route.resource('/sprints', 'SprintsController').apiOnly()

Route.resource('/lists', 'ListsController').apiOnly()

Route.post('/todos', 'TodosController.store')
Route.put('/todos/:id', 'TodosController.update')
Route.delete('/todos/:id', 'TodosController.destroy')
