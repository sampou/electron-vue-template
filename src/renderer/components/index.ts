import { App } from 'vue'
import Ant from './ant'

export function component(vue: App<Element>) {
    for (const key in Ant) {
        vue.use(Ant[key])
    }
}
