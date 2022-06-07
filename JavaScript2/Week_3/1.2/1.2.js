const monday = [
    {
      name: 'Write a summary HTML/CSS',
      duration: 180
    },
    {
      name: 'Some web development',
      duration: 120
    },
    {
      name: 'Fix homework for class10',
      duration: 20
    },
    {
      name: 'Talk to a lot of people',
      duration: 1.0
    }
  ];
  
  const tuesday = [
    {
      name: 'Keep writing summary',
      duration: 1.0
    },
    {
      name: 'Some more web development',
      duration: 180
    },
    {
      name: 'Staring out the window',
      duration: 10
    },
    {
      name: 'Talk to a lot of people',
      duration: 1.0
    },
    {
      name: 'Look at application assignments new students',
      duration: 40
    }
  ];

//1
  const combinedDuration = monday.concat(tuesday);

  const newMap=combinedDuration
  .map(dur=>{
      return (dur.duration/60).toFixed(2); //Map the tasks to durations in hours.
  })
  .filter(filt => filt>=2) //Filter out everything that took less than two hours 
  .map(mult=>mult*20)//Multiply the each duration by a per-hour rate for billing (use €20/hour)

  const fin=newMap.reduce((total, subm) => { //sum it all up
      return total + subm; 
  },0);
  
  salary ='€ '+fin;//Output a formatted Euro amount

  console.log(salary);


