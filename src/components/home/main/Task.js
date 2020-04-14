import React , {Component} from 'react';


class Task extends Component {
    

    onDelete = () => {
        this.props.onDelete(this.props.task.id)
        
    };

    onUpdate = () => {
        this.props.onUpdate(this.props.task.id);
       
    };
   
    

    render (){

        var {task} = this.props;
        
        return (
            
            <ul>
                <li className="task_item">
                <div className="undone task_item_detail">
                    <div className="checker">
                        <div className="checkbox" onClick = {this.onDelete}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                <path fill="currentColor" d="M11.23 13.7l-2.15-2a.55.55 0 0 0-.74-.01l.03-.03a.46.46 0 0 0 0 .68L11.24 15l5.4-5.01a.45.45 0 0 0 0-.68l.02.03a.55.55 0 0 0-.73 0l-4.7 4.35z" fillRule="evenodd">
                                </path>
                            </svg>
                        </div>
                    </div>
                    <div className ="content_task" onClick = {this.onUpdate}>
                        <div className="content_task_text" >
                        {task.name}
                        </div>
                    </div>
                </div>
                </li>
            </ul>
            
               
        )
    }
}

export default Task;