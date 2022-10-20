import { ISISTask } from 'src/app/models/task';

export class TaskService {

    // i will use indexed DB

    static initTaskDB() {
        let tasks = localStorage.getItem("tasks");
        if (tasks == undefined) {
            let tasks: any = [];
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
    }

    static resetTaskDB(tasks: any) {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    static createTask(task: ISISTask) {
        let tasks: any = this.getTasks();
        tasks.push(task);
        this.resetTaskDB(tasks);
    }

    static getTasks() {
        let tasks: any = localStorage.getItem("tasks");
        tasks = JSON.parse(tasks);
        return tasks;
    }

    static deleteTask(index: number) {
        let tasks: any = this.getTasks();
        tasks.splice(index, 1);
        this.resetTaskDB(tasks);
    }
}