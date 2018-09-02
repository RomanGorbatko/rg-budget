import Datastore from 'nedb'
import { remote } from 'electron'

const resolveFilename = (name) => `${remote.app.getPath('documents')}/.budget/${name}.db`

export const dbs = {
  categories: new Datastore({
    filename: resolveFilename('categories'),
    autoload: true,
    timestampData: true
  })
}
