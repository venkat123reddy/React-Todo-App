export default class ToTaskDTO {
    static list = [];

    static addTask(task) {
        console.log('helper......');
        console.log(task);
        this.list.push(task);
        console.log(this.list);
        
    }

    static removeTask(task) {
        this.list.remove(task);
    }
    static getTasks(tasks) {
        return this.list;
    }

    
    
} 