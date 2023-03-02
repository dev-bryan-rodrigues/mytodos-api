import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Project from 'App/Models/Project'
import ProjectValidator from 'App/Validators/ProjectValidator'

export default class ProjectsController {
  public async index({}: HttpContextContract) {
    const projects = Project.all()
    return projects
  }

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(ProjectValidator)
    const project = await Project.create(data)
    return project
  }

  public async show({ params }: HttpContextContract) {
    const project = await Project.findOrFail(params.id)
    return project
  }

  public async update({ request, params }: HttpContextContract) {
    const project = await Project.findOrFail(params.id)

    const data = await request.validate(ProjectValidator)

    project.merge(data)

    await project.save()

    return project
  }

  public async destroy({ params }: HttpContextContract) {
    const project = await Project.findOrFail(params.id)
    await project.delete()
  }
}
