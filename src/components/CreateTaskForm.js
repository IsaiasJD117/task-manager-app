const createTaskForm = () => {

    
    return(
        <div className="container">
            <div className="row">
                <div className="text-center">
                    <h2>Add Task</h2>
                </div>
                <form className="col-12 p-2">

                    <label for="taskNameInput" className="my-2">Enter Task Name</label>
                    <input
                        type-="text"
                        id="taskNameInput"
                        placeholder="Enter Task Name"
                        name="taskNameInput"
                        value=""
                        className="w-100 my-1 p-2"
                    />
                    
                    <label for = "description">Description</label>
                    <input
                        type= "text"
                        id="description"
                        placeholder="Enter Task Description"
                    />

                    <label>Due Date</label>
                    <input/>

                </form>
            </div>
        </div>
    );
}
export default createTaskForm;