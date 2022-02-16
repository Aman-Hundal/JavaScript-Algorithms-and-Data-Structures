const sphereVolume = (radius)  => {
  return (4/3)*Math.PI*(radius**3);
}

const prismVolume = (height, depth, width) => {
  return (width*depth)*height;
}

const coneVolume = (radius, height) => {
  let base = Math.PI*(radius**2)
  return (1/3)*base*height;
}

const totalVolume = (attraction, target) => {
  let totalAttractionVolume = 0;

  for (let i = 0; i < attraction.length; i++) {
    let shape = attraction[i].type


    if (shape === 'sphere') {
      totalAttractionVolume += sphereVolume(attraction[i].radius)
    }

    if (shape === 'cone') {
      totalAttractionVolume += coneVolume(attraction[i].radius, attraction[i].height)
    }

    if (shape === 'prism') {
      totalAttractionVolume += prismVolume(attraction[i].height, attraction[i].depth, attraction[i].width)
    }

  }

  // console.log(totalAttractionVolume)

  // if (totalAttractionVolume > target) {
  //   return true;
  // } else {
  //   return false;
  // }

  return totalAttractionVolume;

}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

// console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);
// console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);
// console.log(prismVolume(3, 4, 5) === 60);
// console.log(totalVolume(duck, 272000))
// console.log(totalVolume(duck, 275000))
console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
// console.log(totalVolume(duck, 272000))



/* 
Step1:
- Create 4 functions - 1. totalVolume which will receive an array containing the different shapes that make up a single attraction. will use the previous three functions to calculate the total volume of the attractions. Shapes are spheres, cone and prism. 2. create a sphere function that will calculate the volume of a sphere given a radius. 3. create a cone function which wil calc the volume of a cone given a radius and height. 4. create a prims function which will calculate the volume of a prism given heigh , width and depth . These 3 functions will fit into final function to return the total volume of the attraction

- inputs = totalvolume = an array of shape objs, (function will use the other 3 functions) spherefunction = shere obj with radius poprerty (number), prismfunction = prism onject with height, widht and depth properties, and conefunction = cone object with radius and heigh properties
- outputs volume in number form 
- data types = numbers for volume outputs, objs for shapes, array of objectcs which reprsent the attraction

Step2: 
- sphereVolume(sphereobject) // return volume in number
- primstFunction(prismObj) // reutrn volume in number
- coneFunction(coneObj) // return volume in number
- totalFunction([sphereobj, coneObj]) // return volume in number

Step3
- For each of the object functions -> find the formual access the obj properties and perform calcs to return a number
- For the final function -> create a totalVlume value at top to 0, loop through the array, for each obj/elm check its type property, if type property is sphere perform sphere function, if cone perofrm cone function if prism perform prims function  += the totalVolume value
- finall compare the total valoume value to the required/target volume avail and return true if totalVoluem > target volume or false 

*/


/*
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

*/