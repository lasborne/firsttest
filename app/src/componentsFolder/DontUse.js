
/*
function App() {

    const [showAddTask, setShowAddTask] = useState(false)
    const _tasks = []
    const [tasks, setTasks] = useState(_tasks)

    useEffect(() => {
        const getTasks = async() => {
            const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
        }
        getTasks()
    }, [])

    // Fetch Tasks
    
    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json()

        return data
    }

    // Fetch Task
    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks`)
        const data = await res.json()

        return data
    }
    // Add Task
    const addTask = async (task) => {
        //console.log(task)
        //const id = Math.floor(Math.random() * 10000) + 1
        //const newTask = { id, ...task }
        const res = await fetch(`http://localhost:5000/tasks`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })
        const data = await res.json()
        
        setTasks([...tasks, data])
        //console.log(tasks)
    }
    
    // Delete Task
    const deleteTask =  async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE'
        })

        setTasks(tasks.filter((task) => task.id !== id))
    }

    // Toggle Reminder
    const toggleReminder = async (id) => {
        const taskToToggle = await fetchTask(id)
        const updTask = { ...taskToToggle, 
        reminder: !taskToToggle.reminder }
        
        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method:'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updTask)
        })

        const data = await res.json()

        setTasks(tasks.map((task) => task.id === id
        ? {...task, reminder: data.reminder} : task))
    }
  return (
    <Router>
        <div className="container">
            <Header title={'STAKEDAO'} onAdd={() => setShowAddTask(
                !showAddTask
            )} showAdd={showAddTask}/>
            
            <Route path='/' exact render={(props) => (
                <>
                    {showAddTask && <AddTask onAdd={addTask}/>}
                    {tasks.length > 0 ? 
                    <Tasks tasks={tasks} onDelete={deleteTask} 
                    onToggle={toggleReminder}/> :
                    <p>You have no task to show, mate!</p>}
                    <h1>Welcome!</h1>
                </>
            )} />

            <Route path='/about' component={About} />
            <Footer />
        </div>
    </Router>
  );
}

export default App;
*/