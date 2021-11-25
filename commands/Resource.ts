import { BaseCommand, args } from '@adonisjs/core/build/standalone'
import { join } from 'path'

export default class Resource extends BaseCommand {
  /**
   * Command name is used to run the command
   */
  public static commandName = 'make:resource'

  /**
   * Command description is displayed in the "help" output
   */
  public static description = 'Make a new Resource file'

  public static settings = {
    /**
     * Set the following value to true, if you want to load the application
     * before running the command
     */
    loadApp: false,

    /**
     * Set the following value to true, if you want this command to keep running until
     * you manually decide to exit the process
     */
    stayAlive: false,
  }

  @args.string({ description: 'Resource name', required: true })
  public name: string

  private nameFormatter = (name: string) => {
    return name.includes('Resource') ? name : `${name}Resource`
  }

  private modelFormatter = (model: string) => {
    return model.includes('Resource') ? model.replace('Resource', '') : model
  }

  public async run() {
    this.generator
      .addFile(this.name, {
        form: 'singular',
        extname: '.ts',
        pattern: 'pascalcase',
        suffix: 'Resource',
      })
      .appRoot(this.application.appRoot)
      .destinationDir('app/Resources')
      .useMustache()
      .stub(join(__dirname, './templates/resource.txt'))
      .apply({
        name: this.nameFormatter(this.name),
        model: this.modelFormatter(this.name),
      })

    await this.generator.run()
  }
}
