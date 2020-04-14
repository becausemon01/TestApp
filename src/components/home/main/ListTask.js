import React, { Component} from 'react'
import Task from './Task'

class ListTask extends Component {

    

    render (){
        
        
        var {tasks} = this.props;
        var elmTask = tasks.map((task, index) => {
            return <Task 
                        
                        key = {task.id}
                        task = {task}
                        onUpdate = {this.props.onUpdate}
                        onDelete = {this.props.onDelete}
                        />
        });

        return (
            <div>
            {elmTask}
            </div>
        )
    }
}

export default ListTask;