// 1) insert user collection

db.users.insertMany([
    {
      userid: 1,
      name: "Sivanathan",
      email: "siva@gmail.com",
      age: 23,
      mentorid: 1,
    },
    {
      userid: 2,
      name: "Raja",
      email: "raja@gmail.com",
      age: 25,
      mentorid: 1,
    },
    {
      userid: 3,
      name: "Karthiga",
      email: "karthiga@gmail.com",
      age: 24,
      mentorid: 2,
    },
    {
      userid: 4,
      name: "Ram",
      email: "ram@gmail.com",
      age: 30,
      mentorid: 3,
    },
    {
      userid: 5,
      name: "Sara",
      email: "sara@gmail.com",
      age: 27,
      mentorid: 5,
    },
  ]);
  
  // 2) insert mentor collection
  
  db.mentors.insertMany([
    {
      mentorid: 1,
      name: "Gopi",
      email: "gopi@gmail.com",
    },
    {
      mentorid: 2,
      name: "Sai mohan",
      mentor_email: "sai@gmail.com",
    },
    {
      mentorid: 3,
      name: "Nagarajan",
      email: "nag@gmail.com",
    },
    {
      mentorid: 4,
      name: "Divya",
      email: "divya@gmail.com",
    },
  ]);
  
  // 3) insert topic collection
  
  db.topics.insertMany([
    {
      topicid: 1,
      topic: "HTML",
      topic_date: new ISODate("2020-10-04"),
    },
    {
      topicid: 2,
      topic: "CSS",
      topic_date: new ISODate("2020-10-10"),
    },
    {
      topicid: 3,
      topic: "JAVA SCRIPT",
      topic_date: new ISODate("2020-10-15"),
    },
    {
      topicid: 4,
      topic: "REACT JS",
      topic_date: new ISODate("2020-10-20"),
    },
    {
      topicid: 5,
      topic: "NODE JS",
      topic_date: new ISODate("2020-10-25"),
    },
  ]);
  
  // 4) insert tasks collection
  
  db.tasks.insertMany([
    {
      taskid: 1,
      topicid: 1,
      userid: 1,
      task: "HTML",
      due_date: new ISODate("2020-11-04"),
      submitted: true,
    },
    {
      taskid: 2,
      topicid: 2,
      userid: 2,
      task: "CSS",
      due_date: new ISODate("2020-11-10"),
      submitted: true,
    },
    {
      taskid: 3,
      topicid: 3,
      userid: 3,
      task: "JAVA SCRIPT",
      due_date: new ISODate("2020-11-15"),
      submitted: false,
    },
    {
      taskid: 4,
      topicid: 4,
      userid: 4,
      task: "REACT JS",
      due_date: new ISODate("2020-11-20"),
      submitted: false,
    },
    {
      taskid: 5,
      topicid: 5,
      userid: 5,
      task: "NODE JS",
      due_date: new ISODate("2020-11-25"),
      submitted: false,
    },
  ]);
  
  // 5) insert attendance collection
  
  db.attendance.insertMany([
    {
      userid: 1,
      topicid: 1,
      attended: true,
    },
    {
      userid: 2,
      topicid: 2,
      attended: true,
    },
    {
      userid: 3,
      topicid: 3,
      attended: false,
    },
    {
      userid: 4,
      topicid: 4,
      attended: false,
    },
    {
      userid: 5,
      topicid: 5,
      attended: false,
    },
  ]);
  
  // 6) insert codeKata collection
  
  db.codekata.insertMany([
    {
      userid: 1,
      problems: 100,
    },
    {
      userid: 2,
      problems: 40,
    },
    {
      userid: 3,
      problems: 80,
    },
    {
      userid: 4,
      problems: 50,
    },
    {
      userid: 5,
      problems: 150,
    },
  ]);
  
  // 7) insert companyDrives collection
  
  db.companydrives.insertMany([
    {
      userid: 1,
      drive_date: new ISODate("2020-10-10"),
      company: "Google",
    },
    {
      userid: 2,
      drive_date: new ISODate("2020-10-20"),
      company: "HCL",
    },
    {
      userid: 3,
      drive_date: new ISODate("2020-10-25"),
      company: "Mac App studio",
    },
    {
      userid: 4,
      drive_date: new ISODate("2020-10-27"),
      company: "MicroSoft",
    },
  ]);
  