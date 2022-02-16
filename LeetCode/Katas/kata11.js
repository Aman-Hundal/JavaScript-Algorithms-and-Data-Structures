useEffect(() => {
  const allProjectsUrl = "http://localhost:3000/projects";
  const allTicketsUrl = "http://localhost:3000/tickets";
  const allUsersUrl = "http://localhost:3000/users";
  const allTasksUrl = "http://localhost:3000/tasks";
  const allCommentsUrl = "http://localhost:3000/comments";
  const allUserTicketsUrl = "http://localhost:3000/users_tickets";
  const allUserProjectsUrl = "http://localhost:3000/user_projects";

  const getAllProjects = axios.get(allProjectsUrl);
  const getAllTickets = axios.get(allTicketsUrl);
  const getAllUsers = axios.get(allUsersUrl);
  const getAllTasks = axios.get(allTasksUrl);
  const getAllComments = axios.get(allCommentsUrl);
  const getAllUserTickets = axios.get(allUserTicketsUrl);
  const getAllUserProjects = axios.get(allUserProjectsUrl);

  Promise.all([
    getAllProjects,
    getAllTickets,
    getAllUsers,
    getAllTasks,
    getAllComments,
    getAllUserTickets,
    getAllUserProjects,
  ])
    .then((response) => {
      setData((prev) => ({
        ...prev,
        projects: response[0].data.reverse(),
        tickets: response[1].data,
        users: response[2].data,
        tasks: response[3].data,
        comments: response[4].data,
        userTickets: response[5].data,
        userProjects: response[6].data,
        isLoading: false
      }));
    })
    .catch((error) => {
      console.error(error);
    });
}, []);