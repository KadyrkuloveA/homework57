const tasks = [

    {id: 234, title: 'Create user registration API', timeSpent: 4, category: 'Backend', type: 'task'},

    {id: 235, title: 'Create user registration UI', timeSpent: 8, category: 'Frontend', type: 'task'},

    {id: 237, title: 'User sign-in via Google UI', timeSpent: 3.5, category: 'Frontend', type: 'task'},

    {id: 238, title: 'User sign-in via Google API', timeSpent: 5, category: 'Backend', type: 'task'},

    {id: 241, title: 'Fix account linking', timeSpent: 5, category: 'Backend', type: 'bug'},

    {id: 250, title: 'Fix wrong time created on new record', timeSpent: 1, category: 'Backend', type: 'bug'},

    {id: 262, title: 'Fix sign-in failed messages', timeSpent: 2, category: 'Frontend', type: 'bug'},

];

    const frontendTime = tasks.filter(task => task.category === 'Frontend').map((task) => task.timeSpent).reduce((accum, currentValue) => accum + currentValue);
    console.log('Total amount of time spent working on tasks from the \'Frontend\' category: ' + frontendTime);

    const timeToFixBugs = tasks.filter(task => task.type === 'bug').map((task) => task.timeSpent).reduce((timeSpent, currentValue) => timeSpent + currentValue);
    console.log('The total amount of time spent for fixing bugs: ' + timeToFixBugs);

    const workWithUI = tasks.map((task) => task.title).filter(task => task.includes('UI')).length;
    console.log('How much work is done with the user interface: ' + workWithUI);

    const categoryWork = tasks.reduce((accum, current) => {
        if(current.category === "Frontend") {
            accum.Frontend++;
        } else if (current.category === "Backend") {
            accum.Backend ++;
        }
        return accum;
    }, {Frontend: 0, Backend: 0});
    console.log(categoryWork);

    const spentMoreTime = tasks.map((task) => {
       if (task.timeSpent >= 4) {
           return {title: task.title, category: task.category};
       }
    }).filter((task) => {
        if (task !== undefined) {
            return task;
        }
    });

    console.log(spentMoreTime);