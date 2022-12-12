// 1) Find all the topics and tasks which are thought in the month of October
db.topics.aggregate([
    {
      $lookup: {
        from: "tasks",
        localField: "topicid",
        foreignField: "topicid",
        as: "taskinfo",
      },
    },
    {
      $match: {
        $and: [
          {
            $or: [
              { topic_date: { $gt: new Date("30-sep-2020") } },
              { topic_date: { $lt: new Date("1-nov-2020") } },
            ],
          },
  
          {
            $or: [
              { "taskinfo.due_date": { $gt: new Date("30-sep-2020") } },
              { "taskinfo.due_date": { $lt: new Date("1-nov-2020") } },
            ],
          },
        ],
      },
    },
  ]).toArray();


// 2) Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

       db.companydrives.find({$and: [{ drive_date: { $gte: new ISODate("2020-10-15") } },{ drive_date: { $lte: new ISODate("2020-10-31") } }, ],  }).toArray();

// 3) Find all the company drives and students who are appeared for the placement.

db.companydrives.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "userid",
        foreignField: "userid",
        as: "userinfo",
      },
    },
    {
      $project: {
        _id: 0,
        "userinfo.name": 1,
        company: 1,
        drive_date: 1,
        "userinfo.email": 1,
        "userinfo.userid": 1,
      },
    },
  ]).toArray();


// 4) Find the number of problems solved by the user in codekata

db.codekata.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "userid",
        foreignField: "userid",
        as: "userinfo",
      },
    },
    {
      $project: {
        _id: 0,
        userid: 1,
        problems: 1,
        "userinfo.name": 1,
      },
    },
  ]).toArray();


// 5) Find all the mentors with who has the mentee's count more than 15

db.users.aggregate([
    {
      $lookup: {
        from: "mentors",
        localField: "mentorid",
        foreignField: "mentorid",
        as: "mentorInfo",
      },
    },
    {
      $group: {
        _id: {
          mentorid: "$mentorInfo.mentorid",
          mentorname: "$mentorInfo.mentorname",
        },
        mentee_count: { $sum: 1 },
      },
    },
    { $match: { mentee_count: { $gt: 15 } } },
  ]).toArray();


// 6) Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020       
    
db.tasks.aggregate([ {$lookup : {from: "attendance",localField:"userid",foreignField:"userid",as :"attendance"}},{$match:{ $and :[{ submitted :false },{"attendance.attended" :false}] }} ]).pretty();
