export default class ToTaskDTO {
    static list = [];

    static addTask(task) {
        console.log('helper......');
        this.list.push(task);
        
    }
    static getTasks(tasks) {
        return this.list;
    }

    
    
} 