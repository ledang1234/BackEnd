const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    // return incomplete task (arrow func)
    getTasksToDo(){
        return this.tasks.filter((task)=> task.completed ===  false)   
    }
}

console.log(tasks.getTasksToDo())